"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { HERO_CLIPS, HERO_POSTER } from "@/lib/videos";

/** How long one clip dissolves into the next. */
const CROSSFADE_MS = 1200;

type Slot = 0 | 1;

const nextClip = (index: number) => (index + 1) % HERO_CLIPS.length;

export default function HeroVideo() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [failed, setFailed] = useState(false);

  // Two stacked players: one on screen, one quietly buffering whatever comes
  // next, so the handover never has to wait on the network.
  const [slotClips, setSlotClips] = useState<[number, number]>([
    0,
    HERO_CLIPS.length > 1 ? 1 : 0,
  ]);
  const [activeSlot, setActiveSlot] = useState<Slot>(0);

  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const refFor = (slot: Slot) => (slot === 0 ? videoA : videoB);

  // Guards against the handover firing twice for one playthrough, since
  // timeupdate keeps arriving while the outgoing clip finishes.
  const handingOver = useRef(false);
  const queueTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => () => window.clearTimeout(queueTimer.current), []);

  const showVideo = HERO_CLIPS.length > 0 && !reducedMotion && !failed;

  // React does not reliably serialize `muted` into server-rendered markup, and
  // Chrome refuses to autoplay anything it does not already consider muted.
  // If playback is still refused the poster stays up, which is what the image
  // fallback would have shown anyway.
  useEffect(() => {
    if (!showVideo) return;
    const video = refFor(activeSlot).current;
    if (!video) return;
    video.muted = true;
    // Seeking before metadata exists throws InvalidStateError, and a clip that
    // has just been swapped in is already at zero, so only rewind when we can.
    try {
      if (video.readyState > 0 && video.currentTime > 0) video.currentTime = 0;
    } catch {
      // Not seekable yet — it will start from the beginning regardless.
    }
    video.play().catch(() => {});
    handingOver.current = false;
  }, [activeSlot, showVideo]);

  /**
   * Hands the screen to the other player. Called a beat before the current clip
   * ends so the two genuinely overlap — the outgoing clip keeps playing
   * underneath while the incoming one fades up over it.
   */
  const handOver = (from: Slot) => {
    if (from !== activeSlot || handingOver.current) return;
    handingOver.current = true;

    const to: Slot = from === 0 ? 1 : 0;
    setActiveSlot(to);

    // Only queue the following clip once the dissolve is done — swapping the
    // source any earlier would tear down the clip that is still fading out.
    queueTimer.current = window.setTimeout(() => {
      setSlotClips((current) => {
        const updated: [number, number] = [...current];
        updated[from] = nextClip(current[to]);
        return updated;
      });
    }, CROSSFADE_MS);
  };

  const handleTimeUpdate = (slot: Slot) => {
    const video = refFor(slot).current;
    if (!video || !video.duration || Number.isNaN(video.duration)) return;
    if (video.duration - video.currentTime > CROSSFADE_MS / 1000) return;
    handOver(slot);
  };

  return (
    <section className="relative isolate flex min-h-[32rem] w-full items-center justify-center overflow-hidden md:min-h-[38rem]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {showVideo ? (
          ([0, 1] as Slot[]).map((slot) => {
            const clip = HERO_CLIPS[slotClips[slot]];
            return (
              <video
                key={`${slot}-${clip.src}`}
                ref={refFor(slot)}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out ${
                  activeSlot === slot ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
                style={{ transitionDuration: `${CROSSFADE_MS}ms` }}
                poster={HERO_POSTER}
                autoPlay={activeSlot === slot}
                muted
                playsInline
                preload="auto"
                onTimeUpdate={() => handleTimeUpdate(slot)}
                onEnded={() => handOver(slot)}
                onError={() => setFailed(true)}
                aria-label={clip.label}
              >
                {clip.webm && <source src={clip.webm} type="video/webm" />}
                <source src={clip.src} type="video/mp4" />
              </video>
            );
          })
        ) : (
          <Image
            src={HERO_POSTER}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}

        {/* Scrim, so the copy stays legible over whatever is playing behind it. */}
        <div className="absolute inset-0 z-20 bg-black/55" aria-hidden="true" />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Move Better. Feel Stronger. Live With Confidence.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
          One-on-one treatment and small-group programs designed to help you
          recover from injury, manage persistent pain, build strength, and feel
          more confident in your body.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-primary-foreground hover:bg-accent/80 rounded-xl px-6 py-3 text-base"
          >
            <Link href="/appointment">Book an Appointment</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-xl border-white/70 bg-white/10 px-6 py-3 text-base text-white hover:bg-white hover:text-foreground"
          >
            <Link href="/consultation">
              Schedule a Free 15-Minute Consultation
            </Link>
          </Button>
        </div>
        <p className="mt-8 text-sm italic tracking-wide text-white/80">
          Restore • Rebuild • Renew
        </p>
      </div>
    </section>
  );
}

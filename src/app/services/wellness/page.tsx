import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Wellness & Personal Training",
  description:
    "One-on-one strength and movement coaching in Burlingame for people who no longer require skilled physical therapy but want professional guidance to stay active and strong.",
};

const BEST_FOR = [
  "Continuing after PT",
  "Building strength",
  "Improving mobility",
  "Becoming more comfortable in the gym",
  "Maintaining an active lifestyle",
  "Working toward individualized fitness goals",
];

const FOCUS_AREAS = [
  "Full-body strength",
  "Functional movement",
  "Balance",
  "Mobility",
  "Exercise technique",
  "Gym confidence",
  "Returning to recreational activity",
  "Maintaining progress after PT",
];

const CONTINUUM = [
  {
    title: "Physical Therapy",
    body: "Recover from pain or injury.",
    href: "/services/physical-therapy",
  },
  {
    title: "Wellness & Personal Training",
    body: "Continue building strength and confidence.",
    href: "/services/wellness",
  },
  {
    title: "Group Classes",
    body: "Maintain progress while exercising alongside a supportive community.",
    href: "/services/group-classes",
  },
];

export default function WellnessPage() {
  return (
    <>
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-center text-4xl font-bold">
            Wellness & Personal Training
          </h1>
          <p className="text-accent mt-3 text-center text-sm font-semibold uppercase tracking-wide">
            Build & Progress
          </p>

          <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-start">
            <div className="relative h-72 w-full shrink-0 overflow-hidden rounded-lg shadow-sm lg:h-80 lg:w-2/5">
              <Image
                src="/assets/gym-space.jpg"
                alt="Exercise space with a squat rack, bench, weights, and kettlebells"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-xl font-semibold">Move Beyond Rehabilitation</p>
              <p className="text-lg leading-relaxed">
                Wellness sessions are designed for individuals who want to work
                on their strength, mobility, balance, and fitness without
                requiring skilled physical therapy.
              </p>
              <p className="text-lg leading-relaxed">
                Sessions remain individualized and goal-focused.
              </p>
              <p className="pt-2 font-semibold">Best for:</p>
              <ul className="text-muted-foreground space-y-1">
                {BEST_FOR.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <p className="font-semibold">We may work on:</p>
            <ul className="text-muted-foreground mt-4 grid gap-2 sm:grid-cols-2">
              {FOCUS_AREAS.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold">
            From Rehab to Long-Term Wellness
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center">
            <p className="text-muted-foreground leading-relaxed">
              Physical therapy doesn&apos;t have to end the moment you&apos;re
              feeling better. For some people, finishing rehabilitation is just
              the beginning of becoming stronger and more active.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That&apos;s why Haidee Sui Physical Therapy offers a continuum of
              care:
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8 md:flex-row">
            {CONTINUUM.map((stage) => (
              <Link
                key={stage.title}
                href={stage.href}
                className="bg-background hover:ring-accent/40 flex w-full flex-col rounded-lg p-8 text-center shadow-sm transition hover:ring-2 md:w-1/3"
              >
                <h3 className="text-xl font-semibold">{stage.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {stage.body}
                </p>
              </Link>
            ))}
          </div>

          <p className="text-muted-foreground mt-10 text-center leading-relaxed">
            You can enter or exit this pathway wherever it makes sense for you.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Physical Therapy",
  description:
    "Individualized physical therapy in Burlingame for pain, injury, post-surgical recovery, and movement limitations — combining hands-on care, Fascial Counterstrain, movement, and education.",
};

const BEST_FOR = [
  "New or persistent pain",
  "Orthopedic injuries",
  "Post-surgical rehabilitation",
  "Chronic pain",
  "Return to sport or activity",
  "Mobility and movement limitations",
];

const WHO_I_WORK_WITH = [
  "Orthopedic injuries",
  "Chronic and persistent pain",
  "Back and neck pain",
  "Shoulder, hip, knee, and other joint concerns",
  "Post-surgical recovery",
  "Athletes returning to sport",
  "Active adults wanting to stay active",
  "Individuals rebuilding strength after injury",
  "Older adults working on strength, mobility, and balance",
  "People who have struggled to find lasting relief",
];

const CARE_STAGES = [
  {
    step: "1",
    title: "Restore",
    body: "Reduce symptoms and improve mobility through assessment and hands-on care.",
  },
  {
    step: "2",
    title: "Rebuild",
    body: "Develop strength, movement capacity, and confidence.",
  },
  {
    step: "3",
    title: "Thrive",
    body: "Transition toward independence, wellness, fitness, or group exercise.",
  },
];

export default function PhysicalTherapyPage() {
  return (
    <>
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-center text-4xl font-bold">Physical Therapy</h1>
          <p className="text-accent mt-3 text-center text-sm font-semibold uppercase tracking-wide">
            Recover & Restore
          </p>

          <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-start">
            <div className="relative h-72 w-full shrink-0 overflow-hidden rounded-lg shadow-sm lg:h-80 lg:w-2/5">
              <Image
                src="/assets/pt-stockphoto1.jpg"
                alt="Physical therapist providing personalized care to a patient"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-lg leading-relaxed">
                Individualized rehabilitation for pain, injury, surgery, and
                movement limitations.
              </p>
              <p className="text-lg leading-relaxed">
                Treatment may combine hands-on care, Fascial Counterstrain,
                movement, strengthening, and education.
              </p>
              <p className="pt-2 font-semibold">Best for:</p>
              <ul className="text-muted-foreground space-y-1">
                {BEST_FOR.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold">
            Your Care Experience
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center">
            <p className="text-xl font-semibold">One-on-One Attention</p>
            <p className="text-muted-foreground leading-relaxed">
              Physical therapy sessions are dedicated entirely to you. That
              means time to listen, assess, treat, exercise, answer questions,
              and adapt your plan based on how you&apos;re progressing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a private-pay practice, treatment isn&apos;t driven by
              insurance visit limitations or a high-volume clinic model.
              Instead, we can focus on your individual needs and goals.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8 md:flex-row">
            {CARE_STAGES.map((stage) => (
              <div
                key={stage.title}
                className="bg-background flex w-full flex-col items-center rounded-lg p-8 text-center shadow-sm md:w-1/3"
              >
                <span className="bg-accent text-primary-foreground flex size-12 items-center justify-center rounded-full text-lg font-bold">
                  {stage.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{stage.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {stage.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold">Who I Work With</h2>
          <p className="mt-6 text-center text-lg leading-relaxed">
            You don&apos;t have to be an athlete—or have a specific
            diagnosis—to benefit from physical therapy.
          </p>
          <p className="text-muted-foreground mt-6">
            I work with people across different stages of life and activity
            levels, including:
          </p>
          <ul className="text-muted-foreground mt-4 grid gap-2 sm:grid-cols-2">
            {WHO_I_WORK_WITH.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

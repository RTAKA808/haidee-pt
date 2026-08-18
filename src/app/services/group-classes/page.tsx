import type { Metadata } from "next";
import Image from "next/image";

import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Group Classes",
  description:
    "Small-group classes in Burlingame focused on strength, balance, mobility, and confidence with movement — professional guidance in a supportive, community-focused environment.",
};

// The short overview list from the services page of the copy doc.
const PROGRAM_SUMMARY = [
  "Strength & Movement",
  "Balance & Mobility",
  "Functional fitness",
  "Exercise education",
];

const PROGRAMS = [
  {
    title: "Strength & Movement",
    body: "Build practical strength for everyday life through progressively challenging exercises.",
    items: [
      "Lower-body strength",
      "Upper-body strength",
      "Core stability",
      "Functional movement",
      "Mobility",
      "Balance",
    ],
  },
  {
    title: "Balance & Mobility",
    body: "Build confidence with movement through exercises focused on balance, coordination, mobility, and lower-body strength. Ideal for individuals who want to stay active and maintain independence.",
    items: [],
  },
];

export default function GroupClassesPage() {
  return (
    <>
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-center text-4xl font-bold">Group Classes</h1>
          <p className="text-accent mt-3 text-center text-sm font-semibold uppercase tracking-wide">
            Strengthen & Connect
          </p>

          <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-start">
            <div className="relative h-72 w-full shrink-0 overflow-hidden rounded-lg shadow-sm lg:h-80 lg:w-2/5">
              <Image
                src="/assets/pt-stockphoto-3.jpg"
                alt="Small group exercise class"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-xl font-semibold">Movement With Community</p>
              <p className="text-lg leading-relaxed">
                Small-group classes provide professional guidance while creating
                a supportive environment to stay active and accountable.
              </p>
              <p className="text-lg leading-relaxed">
                Classes focus on strength, balance, mobility, and confidence
                with movement.
              </p>
              <p className="pt-2 font-semibold">Programs may include:</p>
              <ul className="text-muted-foreground space-y-1">
                {PROGRAM_SUMMARY.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold">Programs</h2>
          <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-8 md:flex-row">
            {PROGRAMS.map((program) => (
              <div
                key={program.title}
                className="bg-background w-full rounded-lg p-8 shadow-sm md:w-1/2"
              >
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {program.body}
                </p>
                {program.items.length > 0 && (
                  <>
                    <p className="mt-4 font-medium">Focus areas may include:</p>
                    <ul className="text-muted-foreground mt-2 space-y-1">
                      {program.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <h3 className="text-2xl font-semibold">Community Membership</h3>
            <p className="text-accent mt-3 font-semibold">
              Once Weekly • Small Groups • Monthly Membership
            </p>
            <p className="text-muted-foreground mt-4">
              Contact for current schedule and pricing.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

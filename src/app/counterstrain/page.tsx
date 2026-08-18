import type { Metadata } from "next";

import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Fascial Counterstrain",
  description:
    "Fascial Counterstrain is a gentle, whole-body manual therapy used to identify and address areas of tension and dysfunction — integrated into treatment at Haidee Sui Physical Therapy.",
};

export default function CounterstrainPage() {
  return (
    <>
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-center text-4xl font-bold">
            Fascial Counterstrain
          </h1>
          <p className="mt-4 text-center text-xl font-semibold">
            Gentle, Whole-Body Manual Therapy
          </p>

          <div className="mt-10 space-y-5 text-lg leading-relaxed">
            <p>
              Fascial Counterstrain is a gentle hands-on approach used to
              identify and address areas of tension and dysfunction throughout
              the body.
            </p>
            <p>
              I was drawn to Counterstrain because of its whole-body
              perspective.
            </p>
            <p>
              Growing up with exposure to Eastern approaches to health and later
              receiving my education in Western medicine, I found myself
              searching for a treatment approach that reflected elements of
              both.
            </p>
            <p>
              Counterstrain became one of the tools that helped bridge those
              perspectives in my practice.
            </p>
            <p>
              I continue to pursue advanced training through the Jones Institute
              and integrate Fascial Counterstrain into treatment when
              appropriate.
            </p>
            <p className="text-muted-foreground">
              For more information about the technique itself, visit{" "}
              <a
                href="https://counterstrain.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline transition-colors duration-200"
              >
                counterstrain.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

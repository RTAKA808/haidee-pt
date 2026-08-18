import type { Metadata } from "next";

import About from "@/components/about-content";
import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Meet Haidee",
  description:
    "Haidee Sui, PT, DPT — Doctor of Physical Therapy serving Burlingame. Her path into physical therapy, training, and the values behind the practice.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <CtaSection />
    </>
  );
}

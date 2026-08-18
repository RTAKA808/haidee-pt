import type { Metadata } from "next";
import Image from "next/image";

import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Fascial Counterstrain",
  description:
    "Fascial Counterstrain is a gentle, hands-on manual therapy technique used to identify and address areas of dysfunction throughout the body — integrated into treatment at Haidee Sui Physical Therapy.",
};

const READING = [
  {
    title:
      "Impaired Lymphatic Drainage and Interstitial Inflammatory Stasis in Chronic Musculoskeletal and Idiopathic Pain Syndromes: Exploring a Novel Mechanism",
    source: "Tuckey et al., Frontiers in Pain Research, 2021",
    href: "https://www.frontiersin.org/journals/pain-research/articles/10.3389/fpain.2021.691740/full",
  },
  {
    title:
      "Fascial Counterstrain: A methodological advancement in indirect osteopathic manipulation",
    source: "International Journal of Osteopathic Medicine, 2025",
    href: "https://www.journalofosteopathicmedicine.com/article/S1746-0689(25)00045-8/fulltext",
  },
];

export default function CounterstrainPage() {
  return (
    <>
      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-center text-4xl font-bold">
            Fascial Counterstrain
          </h1>
          <p className="mt-4 text-center text-xl font-semibold">
            A Gentle Whole-Body Approach
          </p>

          <div className="mt-12 flex flex-col items-start gap-10 lg:flex-row">
            <div className="relative h-96 w-full shrink-0 overflow-hidden rounded-lg shadow-sm lg:h-[30rem] lg:w-2/5">
              <Image
                src="/assets/haidee-treatment.jpg"
                alt="Haidee performing a gentle hands-on technique on a patient's neck"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex-1 space-y-5 text-lg leading-relaxed">
              <p>
                Fascial Counterstrain (FCS) is a gentle, hands-on manual therapy
                technique designed to identify and address areas of dysfunction
                throughout the body. The approach proposes that areas of
                interstitial inflammation and impaired tissue function may
                contribute to pain, restricted movement, and other symptoms.
              </p>
              <p>
                Through gentle, precise positioning and manual techniques, FCS
                aims to reduce irritation within the involved tissues and
                support improvements in pain, mobility, tissue health, muscle
                tone, and overall function.
              </p>
              <p>
                What drew me to Fascial Counterstrain is its whole-body
                perspective. Rather than focusing solely on where pain is felt,
                FCS encourages us to look more broadly at the body and consider
                how different tissues and systems may be contributing to a
                person&apos;s symptoms.
              </p>
              <p>
                I continue to pursue advanced training through the Jones
                Institute and integrate Fascial Counterstrain into
                individualized physical therapy treatment when appropriate,
                alongside movement, strengthening, education, and other manual
                therapy techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold">
            Research & Further Reading
          </h2>

          <ul className="mt-8 space-y-6">
            {READING.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 font-semibold underline-offset-4 transition-colors hover:underline"
                >
                  {item.title}
                </a>
                <p className="text-muted-foreground mt-1 text-sm">
                  {item.source}
                </p>
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground mt-10 text-center">
            For more information, visit{" "}
            <a
              href="https://counterstrain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-semibold underline transition-colors duration-200"
            >
              counterstrain.com
            </a>
            .
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

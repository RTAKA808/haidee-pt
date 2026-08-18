import type { Metadata } from "next";

import CtaSection from "@/components/cta-section";
import PaymentInfo from "@/components/payment-info";
import PriceList from "@/components/price-list";
import {
  CANCELLATION_POLICY,
  INQUIRE_PRICING,
  PHYSICAL_THERAPY_PRICING,
  TELEHEALTH_PRICING,
  WELLNESS_PRICING,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Physical therapy, wellness, group class, telehealth, and home visit rates for Haidee Sui Physical Therapy in Burlingame. A private-pay practice with superbills available.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-center text-4xl font-bold">Services & Pricing</h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-lg">
            Straightforward rates, with no insurance restrictions on your care.
          </p>

          <div className="bg-card mx-auto mt-10 max-w-2xl rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-bold">Physical Therapy</h2>
            <div className="mt-2">
              <PriceList rows={PHYSICAL_THERAPY_PRICING} />
            </div>

            <h2 className="mt-10 text-xl font-bold">Wellness</h2>
            <div className="mt-2">
              <PriceList rows={WELLNESS_PRICING} />
            </div>

            <h2 className="mt-10 text-xl font-bold">Telehealth</h2>
            <div className="mt-2">
              <PriceList rows={TELEHEALTH_PRICING} />
            </div>

            {INQUIRE_PRICING.map((service) => (
              <div key={service.name}>
                <h2 className="mt-10 text-xl font-bold">{service.name}</h2>
                <p className="text-muted-foreground mt-2">{service.body}</p>
                <p className="mt-2 font-semibold">{service.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-6">
          <PaymentInfo detailed />
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold">Cancellation Policy</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            {CANCELLATION_POLICY.notice}
          </p>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            {CANCELLATION_POLICY.fee}
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

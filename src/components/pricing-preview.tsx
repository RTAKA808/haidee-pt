import Link from "next/link";

import PriceList from "@/components/price-list";
import { Button } from "@/components/ui/button";
import { PHYSICAL_THERAPY_PRICING, WELLNESS_PRICING } from "@/lib/pricing";

export default function PricingPreview() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold">Pricing</h2>
        <p className="text-muted-foreground mt-4 text-center text-lg">
          Straightforward rates, with no insurance restrictions on your care.
        </p>

        <div className="bg-background mx-auto mt-10 max-w-2xl rounded-lg p-8 shadow-sm">
          <h3 className="text-lg font-semibold">Physical Therapy</h3>
          <div className="mt-2">
            <PriceList rows={PHYSICAL_THERAPY_PRICING} />
          </div>

          <h3 className="mt-8 text-lg font-semibold">Wellness</h3>
          <div className="mt-2">
            <PriceList rows={WELLNESS_PRICING} />
          </div>

          <p className="text-muted-foreground mt-8 text-center text-sm">
            Group classes, telehealth, and home visits are also available.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/80 text-primary-foreground rounded-xl px-8 text-base"
          >
            <Link href="/pricing">View All Services & Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

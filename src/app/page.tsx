import CtaSection from "@/components/cta-section";
import FaqSection from "@/components/faq-section";
import HeroVideo from "@/components/hero-video";
import MyApproach from "@/components/my-approach";
import PaymentInfo from "@/components/payment-info";
import PricingPreview from "@/components/pricing-preview";
import ServicesGrid from "@/components/services-grid";
import TheSpace from "@/components/the-space";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <ServicesGrid />
      <MyApproach />
      <TheSpace />
      <PricingPreview />
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          <PaymentInfo />
        </div>
      </section>
      <FaqSection />
      <CtaSection />
    </>
  );
}

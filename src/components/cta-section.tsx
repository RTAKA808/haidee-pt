import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Let&apos;s Get You Moving</h2>
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
          Whether you&apos;re recovering from an injury, navigating chronic
          pain, building strength, or looking for a supportive place to stay
          active, there&apos;s a path forward. Let&apos;s find the one that
          works for you.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/80 text-primary-foreground rounded-xl px-8 text-base"
          >
            <Link href="/appointment">Book Your Initial Evaluation</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-primary-foreground rounded-xl px-8 text-base"
          >
            <Link href="/contact">Schedule a Free 15-Minute Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

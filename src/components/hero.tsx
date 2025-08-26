import { Button } from "@/components/ui/button";
import Overview from "@/components/overview";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="bg-primary text-foreground py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
              <Image
                src="/assets/haidee-logo.png"
                alt="Haidee Sui Physical Therapy Logo"
                width={600}
                height={180}
                className="object-contain max-w-full h-auto"
              />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Restore. Rebuild. Renew.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Personalized physical therapy to help you heal, move, and thrive.
            Let us guide you on your journey to recovery with care, empathy, and
            expertise.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button className="bg-accent text-primary-foreground hover:bg-accent/50 px-6 py-3 text-base rounded-xl">
              <Link href="/appointment">
                Schedule a Session
              </Link>
            </Button>
            {/* <Button
              variant="outline"
              className="border-primary text-foreground hover:bg-accent hover:text-muted-foreground px-6 py-3 text-base rounded-xl"
            >
              <Link href="/philosophy">
                Learn More
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
      <div className="">
        <Overview />
      </div>
    </section>
  );
}

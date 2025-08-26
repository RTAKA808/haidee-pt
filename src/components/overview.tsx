import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Overview() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Services That We Offer
        </h2>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex w-full flex-col text-center md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              FASCIAL COUNTERSTRAIN (FCS)
            </h3>
            <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/assets/pt-stockphoto1.jpg"
                alt="Physical therapist providing personalized care to patient"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-muted-foreground">
              A gentle hands-on technique that treats dysfunction in the fascial
              system, nervous system, blood vessels, lymphatics, and more. Safe,
              effective, and non-invasive.
            </p>
          </div>
          <div className="flex w-full flex-col text-center md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              HOLISTIC ASSESSMENT
            </h3>
            <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/assets/pt-stockphoto-2.jpg"
                alt="Modern physical therapy treatment room"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-muted-foreground">
              We don’t just chase symptoms. I take the time to understand your
              full health picture—from past injuries and chronic pain to
              emotional stress and lifestyle patterns.
            </p>
          </div>
          <div className="flex w-full flex-col text-center md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              PATIENT EDUCATION & MOVEMENT COACHING
            </h3>
            <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/assets/pt-stockphoto-3.jpg"
                alt="Therapist providing hands-on treatment"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-muted-foreground">
              Understand your body. Learn how to move, breathe, and live in ways
              that support long-term healing and vitality.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center bg-background">
      <h2 className="text-4xl font-bold py-12 text-center">
        Philosophy of Care
      </h2>
      <div className="flex flex-col max-w-4xl mx-auto px-6 gap-8 items-center pb-12">
        <div className="flex-1 space-y-6">
          <p className="text-lg leading-relaxed mb-6">
            Healing is never one-size-fits-all. I believe in collaborative,
            patient-drive care—where your goals and experiences are central to
            the treatment process. Together, we&apos;ll create a space where you feel
            seen, supported, and empowered to take charge of your health. I also
            believe that treatment should educate as much as it heals.
            Understanding why something hurts is just as important as how we fix
            it. Through open communication, body awareness, and individualized
            strategies, I aim to help you not only recover—but thrive. My hope
            is that each patient walks away not only feeling better, but with a
            deeper understanding of their body and the tools to support their
            long-term health.
          </p>
        </div>
      </div>
    </div>
        <div className="flex justify-center mt-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold text-2xl">
                Service Pricing
              </AccordionTrigger>
              <AccordionContent className="w-sm">
                <ul className="space-y-3 text-lg leading-relaxed">
                  <li className="flex justify-between items-center">
                    <span>Initial evaluation (in-person):</span>
                    <span className="font-semibold text-accent">$200</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Initial evaluation (telehealth):</span>
                    <span className="font-semibold text-accent">$180</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Follow up (in-person):</span>
                    <span className="font-semibold text-accent">$180</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Follow up (telehealth):</span>
                    <span className="font-semibold text-accent">$150</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

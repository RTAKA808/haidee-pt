import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/faq";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-primary scroll-mt-32 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="bg-background mx-auto mt-10 max-w-3xl rounded-lg px-6 py-2 shadow-sm">
          <Accordion type="single" collapsible>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-base font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 text-base leading-relaxed">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

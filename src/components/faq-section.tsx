import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS, type FaqBlock } from "@/lib/faq";

function AnswerBlock({ block }: { block: FaqBlock }) {
  if (block.kind === "ul") {
    return (
      <ul className="space-y-1 pl-1">
        {block.items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    );
  }

  if (block.kind === "link") {
    return (
      <Link
        href={block.href}
        className="text-accent hover:text-accent/80 font-semibold underline-offset-4 transition-colors hover:underline"
      >
        {block.label}
      </Link>
    );
  }

  return <p>{block.text}</p>;
}

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
                  {item.answer.map((block, index) => (
                    <AnswerBlock key={index} block={block} />
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

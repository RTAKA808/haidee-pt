import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Overview() {
  return (
    <div className="py-12 bg-primary">
              <div className="flex flex-col w-full justify-center">
          <h2 className="text-4xl font-bold py-12 text-center">
            Philosophy of Care
          </h2>
          <div className="flex flex-col max-w-4xl mx-auto px-6 gap-8 items-center pb-12">
            <div className="flex-1 space-y-6">
              <p className="text-lg leading-relaxed mb-6">
                Healing is never one-size-fits-all. I believe in collaborative,
                patient-drive care—where your goals and experiences are central
                to the treatment process. Together, we&apos;ll create a space
                where you feel seen, supported, and empowered to take charge of
                your health. I also believe that treatment should educate as
                much as it heals. Understanding why something hurts is just as
                important as how we fix it. Through open communication, body
                awareness, and individualized strategies, I aim to help you not
                only recover—but thrive. My hope is that each patient walks away
                not only feeling better, but with a deeper understanding of
                their body and the tools to support their long-term health.
              </p>
            </div>
          </div>
        </div>
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Services That We Offer
        </h2>
        <div className="flex flex-col gap-8 md:flex-row">
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
              We don&apos;t just chase symptoms. I take the time to understand your
              full health picture—from past injuries and chronic pain to
              emotional stress and lifestyle patterns.
            </p>
          </div>
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
              A gentle manual therapy technique that is designed to alleviate
              areas of trapped interstitial inflammation. It is a multi-system
              approach with the goal of resolving chronic pain and idiopathic
              vascular/visceral dysfunction. The observable clinic effects
              include reduced pain, improved flexibility, improved tissue
              health, normalization of muscle tone and restoration of normal
              anatomical function. FCS can be used to treat a wide range of
              conditions. Please visit <a href="https://counterstrain.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline transition-colors duration-200">counterstrain.com</a> for more information.
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

        <div className="flex flex-col items-center justify-center mt-8">
          <h3 className="font-semibold text-2xl text-center">
            Service Pricing
          </h3>
          <div className="mt-4 md:mt-2 text-center">
            <ul className="space-y-3 text-lg leading-relaxed inline-block">
              <li className="grid grid-cols-2 gap-8 items-center">
                <span className="text-left">Initial evaluation (in-person):</span>
                <span className="font-semibold text-accent text-right">$200</span>
              </li>
              <li className="grid grid-cols-2 gap-8 items-center">
                <span className="text-left">Initial evaluation (telehealth):</span>
                <span className="font-semibold text-accent text-right">$180</span>
              </li>
              <li className="grid grid-cols-2 gap-8 items-center">
                <span className="text-left">Follow up (in-person):</span>
                <span className="font-semibold text-accent text-right">$180</span>
              </li>
              <li className="grid grid-cols-2 gap-8 items-center">
                <span className="text-left">Follow up (telehealth):</span>
                <span className="font-semibold text-accent text-right">$150</span>
              </li>
              <li className="grid grid-cols-2 gap-8 items-center">
                <span className="text-left">In-home service:</span>
                <span className="font-semibold text-accent text-right">Inquire for pricing</span>
              </li>
            </ul>
            <p className="text-center text-muted-foreground mt-4 text-sm">
              (All sessions are approximately one hour)
            </p>
            
            <div className="mt-8 p-6">
              <h4 className="font-semibold text-lg text-center mb-4">
                Payment & Insurance Information
              </h4>
              <p className="text-center text-muted-foreground leading-relaxed">
                I&apos;m a cash-based, fee-for-service provider. Payment is due at each visit, 
                and I can give you a superbill to submit for possible out-of-network reimbursement. 
                Please note that I am not contracted with insurance plans, and reimbursement is 
                dependent on your individual policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

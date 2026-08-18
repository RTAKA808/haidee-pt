import { BookOpen, Hand, Activity } from "lucide-react";
import Link from "next/link";

const ELEMENTS = [
  {
    icon: Hand,
    title: "Hands-On Treatment",
    body: (
      <>
        Manual therapy, including Fascial Counterstrain, may be used to address
        areas of tension, discomfort, and movement restriction.{" "}
        <Link
          href="/counterstrain"
          className="text-accent hover:text-accent/80 font-semibold underline-offset-4 transition-colors hover:underline"
        >
          Learn more →
        </Link>
      </>
    ),
  },
  {
    icon: Activity,
    title: "Movement & Strength",
    body: (
      <>
        We build on improvements from treatment with individualized exercises
        focused on mobility, strength, balance, and functional movement.
      </>
    ),
  },
  {
    icon: BookOpen,
    title: "Education & Awareness",
    body: (
      <>
        Understanding your body is an important part of recovery. You&apos;ll
        learn strategies to better manage symptoms and feel more confident
        outside the clinic.
      </>
    ),
  },
];

export default function MyApproach() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold">Philosophy of Care</h2>
        <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed">
          Healing is never one-size-fits-all. I believe in collaborative,
          patient-driven care—where your goals and experiences are central to
          the treatment process. Together, we&apos;ll create a space where you
          feel seen, supported, and empowered to take charge of your health. I
          also believe that treatment should educate as much as it heals.
          Understanding why something hurts is just as important as how we fix
          it. Through open communication, body awareness, and individualized
          strategies, I aim to help you not only recover—but thrive. My hope is
          that each patient walks away not only feeling better, but with a
          deeper understanding of their body and the tools to support their
          long-term health.
        </p>

        <h2 className="mt-20 text-center text-4xl font-bold">My Approach</h2>
        <p className="mt-4 text-center text-xl font-semibold">
          More Than Treating Where It Hurts
        </p>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed">
          Pain isn&apos;t always as simple as treating one muscle or joint. My
          approach looks at the bigger picture—your movement, history,
          lifestyle, strength, mobility, and goals.
        </p>

        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          {ELEMENTS.map((element) => (
            <div
              key={element.title}
              className="bg-background flex w-full flex-col items-center rounded-lg p-8 text-center shadow-sm md:w-1/3"
            >
              <span className="bg-accent/10 text-accent flex size-14 items-center justify-center rounded-full">
                <element.icon className="size-7" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{element.title}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                {element.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-lg font-semibold">
          The goal isn&apos;t simply to feel better after treatment. It&apos;s
          to help you build the tools to keep moving forward.
        </p>
      </div>
    </section>
  );
}

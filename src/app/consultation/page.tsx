import Contact from "@/components/contact";

const WHAT_TO_EXPECT = [
  {
    title: "No cost, no commitment",
    body: "A short call to see whether working together makes sense",
  },
  {
    title: "About 15 minutes",
    body: "Enough time to talk through what is going on",
  },
  {
    title: "Your questions",
    body: "How I work, what treatment involves, and what to expect",
  },
  {
    title: "A recommendation",
    body: "Whether physical therapy, wellness, or classes fit best",
  },
];

export default function ConsultationPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto w-full max-w-4xl px-6 pt-12">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Schedule a Free 15-Minute Consultation
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Not sure where to start? Tell me a little about what you&apos;re
            dealing with and I&apos;ll reach out within 1-3 business days to set
            up a free 15-minute call.
          </p>
        </div>

        <div className="bg-card mt-10 rounded-lg p-8">
          <h2 className="mb-6 text-center text-lg font-semibold">
            What to Expect
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {WHAT_TO_EXPECT.map((item) => (
              <div key={item.title}>
                <p className="text-accent font-semibold">{item.title}</p>
                <p className="text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Contact showHeading={false} formType="Free 15-Minute Consultation" />
    </div>
  );
}

export const metadata = {
  title: "Free 15-Minute Consultation",
  description:
    "Book a free 15-minute consultation with Haidee Sui, PT, DPT in Burlingame to talk through your goals and find the right starting point.",
};

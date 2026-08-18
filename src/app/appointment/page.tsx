import Contact from "@/components/contact";

const WHAT_TO_EXPECT = [
  {
    title: "Initial Consultation",
    body: "We'll discuss your goals and concerns",
  },
  {
    title: "Assessment",
    body: "Comprehensive evaluation of your condition",
  },
  {
    title: "Personalized Plan",
    body: "Treatment plan tailored to your needs",
  },
  {
    title: "Ongoing Support",
    body: "Regular check-ins and plan adjustments",
  },
];

export default function AppointmentPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto w-full max-w-4xl px-6 pt-12">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Book an Appointment</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Ready to start your healing journey? Fill out the form below and
            I&apos;ll contact you within 1-3 business days to schedule your
            personalized physical therapy session.
          </p>
        </div>

        <div className="bg-card mt-10 rounded-lg p-8">
          <h2 className="mb-6 text-center text-lg font-semibold">
            What to Expect
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {WHAT_TO_EXPECT.map((step) => (
              <div key={step.title}>
                <p className="text-accent font-semibold">{step.title}</p>
                <p className="text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Contact showHeading={false} />
    </div>
  );
}

export const metadata = {
  // The root layout appends "| Haidee Sui PT", so the brand is not repeated here.
  title: "Book an Appointment",
  description:
    "Schedule your personalized physical therapy session with Haidee Sui, PT, DPT in Burlingame. Get started on your healing journey today.",
};

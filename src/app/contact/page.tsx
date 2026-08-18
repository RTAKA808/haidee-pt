import Contact from "@/components/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Contact />
    </div>
  );
}

export const metadata = {
  // The root layout appends "| Haidee Sui PT", so the brand is not repeated here.
  title: "Contact",
  description:
    "Get in touch with Haidee Sui Physical Therapy in Burlingame. Send a message and you'll hear back within 1-3 business days.",
};

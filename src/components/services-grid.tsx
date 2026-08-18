import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    href: "/services/physical-therapy",
    title: "Physical Therapy",
    tagline: "Recover & Restore",
    image: "/assets/pt-stockphoto1.jpg",
    alt: "Physical therapist providing personalized care to a patient",
    body: "Individualized rehabilitation for pain, injury, surgery, and movement limitations. Treatment may combine hands-on care, Fascial Counterstrain, movement, strengthening, and education.",
  },
  {
    href: "/services/wellness",
    title: "Wellness & Personal Training",
    tagline: "Build & Progress",
    image: "/assets/pt-stockphoto-2.jpg",
    alt: "Strength and movement coaching session",
    body: "One-on-one strength and movement coaching for individuals who no longer require skilled physical therapy—or simply want professional guidance to stay active and strong.",
  },
  {
    href: "/services/group-classes",
    title: "Group Classes",
    tagline: "Strengthen & Connect",
    image: "/assets/pt-stockphoto-3.jpg",
    alt: "Small group exercise class",
    body: "Small-group classes focused on strength, balance, mobility, and confidence with movement, in a welcoming and community-focused environment.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold">
          Services That We Offer
        </h2>
        <p className="mt-4 text-center text-xl font-semibold">
          Care That Meets You Where You Are
        </p>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-lg">
          Whether you&apos;re recovering from an injury or looking to build on
          the progress you&apos;ve already made, there are different ways we can
          work together.
        </p>

        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          {SERVICES.map((service) => (
            <div
              key={service.href}
              className="bg-card flex w-full flex-col overflow-hidden rounded-lg shadow-sm md:w-1/3"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 text-center">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-accent mt-1 text-sm font-semibold uppercase tracking-wide">
                  {service.tagline}
                </p>
                <p className="text-muted-foreground mt-4 flex-1 leading-relaxed">
                  {service.body}
                </p>
                <Link
                  href={service.href}
                  className="text-accent hover:text-accent/80 mt-6 font-semibold underline-offset-4 transition-colors hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

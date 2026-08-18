import Image from "next/image";

const PHOTOS = [
  {
    src: "/assets/office.jpg",
    alt: "Private treatment room with a therapy table",
    caption: "Treatment Room",
  },
  {
    src: "/assets/gym-space.jpg",
    alt: "Exercise space with a squat rack, bench, weights, and kettlebells",
    caption: "Gym Space",
  },
  {
    src: "/assets/haidee-movement.jpg",
    alt: "Haidee guiding a patient through a balance exercise",
    caption: "Working Together",
  },
];

export default function TheSpace() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold">The Space</h2>
        <div className="mx-auto mt-6 max-w-3xl text-center">
          <p className="text-xl font-semibold">
            From Hands-On Treatment to Strength Training
          </p>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Your care takes place in a private treatment environment with access
            to a dedicated exercise and strengthening space. That allows
            sessions to transition naturally from hands-on treatment to
            movement, strength, balance, and functional training.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-8 md:flex-row">
          {PHOTOS.map((photo) => (
            <figure key={photo.src} className="w-full md:w-1/3">
              <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-muted-foreground mt-3 text-center text-sm font-medium uppercase tracking-wide">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

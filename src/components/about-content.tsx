import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-background">
      <h1 className="text-4xl font-bold py-12 text-center">About Me</h1>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 gap-8 lg:gap-12 items-center lg:items-start">
        <div className="flex-shrink-0">
          <Image
            src="/assets/haideeprofile.jpg"
            alt="Haidee Profile Picture"
            height={500}
            width={400}
            className="object-cover rounded-full shadow-lg"
          />
        </div>
        <div className="flex-1 space-y-6 pb-6">
          <p className="text-lg leading-relaxed mb-6">
            After years of working in the tech industry, I knew I was meant for
            something more—something that would challenge me, fulfill me, and
            make a tangible difference in people’s lives. Sports have always
            been a big part of my world, especially competitive basketball.
            Along with the love of the game came my fair share of injuries, and
            with them, countless hours of rehabilitation. Those experiences left
            a lasting impression—it wasn&apos;t just the relief of healing, but
            also the compassion, skill, and encouragement of the people who
            helped me recover.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            That blend of personal experience and my curiosity about the human
            body eventually led me to my passion: physical therapy. After
            earning my Doctor of Physical Therapy degree from the University of
            California, San Francisco and San Francisco State University, I
            pursued additional training through the Jones Institute in Fascial
            Counterstrain—a technique that aligns with my holistic philosophy of
            care.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            For the past three years, I&apos;ve worked in an outpatient hospital
            setting, treating patients from ages 9 to late 90&apos;s. My focus
            has been orthopedics and chronic pain care, and I&apos;ve helped
            individuals restore function, reduce pain, and reclaim their quality
            of life.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            When treating patients, I bring an empathetic, patient-centered
            approach to every session. My goal is to go beyond treating
            symptoms—to help you truly understand your body, build confidence in
            your movement, and feel empowered in your journey toward lasting
            wellness. I look forward to working with you.
          </p>
        </div>
      </div>
    </div>
  );
}

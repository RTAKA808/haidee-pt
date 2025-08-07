import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-primary">
      <h1 className="text-4xl font-bold py-12 text-center">About Me</h1>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 gap-8 lg:gap-12 items-center lg:items-start">
        <div className="flex-shrink-0">
          <Image
            src="/assets/haideeprofile.png"
            alt="Haidee Profile Picture"
            height={500}
            width={400}
            className="object-cover rounded-full shadow-lg"
          />
        </div>
        <div className="flex-1 space-y-6 pb-6">
            <p className="text-lg leading-relaxed mb-6">
              After years of working in the tech industry, I felt a strong pull
              toward more hands-on, human-centered work. Having grown up playing
              competitive basketball, I was no stranger to injuries and physical
              recovery.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Through my own rehabilitation experiences, I developed a
              deep appreciation for the healing process and the people who guided me
              through it. This personal history, coupled with my natural curiosity
              and empathy, inspired me to pursue a new path in physical therapy.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I bring a passionate, patient-centered approach to every session, rooted
              in collaboration, education, and empowerment. My goal is not just to
              treat symptoms, but to help you understand your body and feel
              confident in your journey toward wellness.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Influenced by my upbringing in Eastern medicine and my Western medical education, I&apos;ve always
              sought a bridge between the two. That search led me to Fascial
              Counterstrain—a powerful technique that aligns with my holistic
              philosophy. I continue to train and deepen my knowledge in this
              method, integrating it into care that supports the whole person.
            </p>
            <p className="text-lg leading-relaxed">
              For the past three years, I&apos;ve worked in an outpatient hospital setting,
              treating a wide range of patients—from youth as young as 9 to adults
              in their late 90s. My focus has been in orthopedics and chronic pain
              care, helping individuals restore function, reduce pain, and reclaim
              their quality of life.
            </p>
        </div>
      </div>
    </div>
  );
}

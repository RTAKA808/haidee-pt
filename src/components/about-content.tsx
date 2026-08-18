import Image from "next/image";

export default function About() {
  return (
    <div className="bg-background flex w-full flex-col items-center justify-center py-12">
      <h1 className="py-8 text-center text-4xl font-bold">Meet Haidee</h1>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 lg:flex-row lg:items-start lg:gap-12">
        <div className="shrink-0">
          <Image
            src="/assets/haideeprofile.jpg"
            alt="Haidee Sui, PT, DPT"
            height={500}
            width={400}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="flex-1 space-y-6 pb-6">
          <h2 className="text-2xl font-semibold">Haidee Sui, PT, DPT</h2>

          <p className="text-lg leading-relaxed">
            My path to becoming a physical therapist started with the feeling
            that something was missing.
          </p>
          <p className="text-lg leading-relaxed">
            After years working in the Human Resources technology industry, I
            wanted a career that allowed me to connect more deeply with people
            and make a meaningful difference in their lives.
          </p>
          <p className="text-lg leading-relaxed">
            Having grown up playing competitive basketball, I was already very
            familiar with injuries, rehabilitation, and the process of trying to
            get back to doing what you love.
          </p>
          <p className="text-lg leading-relaxed">
            Those experiences and my curiosity about the human body eventually
            led me to physical therapy.
          </p>
          <p className="text-lg leading-relaxed">
            I earned my degree in Psychology from{" "}
            <strong>UC Davis</strong> and my{" "}
            <strong>
              Doctor of Physical Therapy degree through UCSF and San Francisco
              State University
            </strong>
            .
          </p>
          <p className="text-lg leading-relaxed">
            My clinical experience includes several years in both outpatient and
            inpatient hospital environments working with individuals ranging
            from young athletes to adults in their 90s, with a particular focus
            on orthopedics and chronic pain.
          </p>
          <p className="text-lg leading-relaxed">
            I&apos;ve always had a passion for learning and a curiosity to
            understand the &ldquo;why&rdquo; behind what I see in the clinic.
            That curiosity continues to shape me as a physical therapist and
            motivates me to continually expand my knowledge, challenge my
            thinking, and grow as a clinician. I believe that learning is an
            ongoing process, and I&apos;m committed to evolving my approach so I
            can continue to provide thoughtful, individualized care for each
            person I work with.
          </p>
          <p className="text-lg leading-relaxed">
            Today, my practice is built around three values:
          </p>
          <p className="text-accent text-xl font-bold">
            Curiosity. Empathy. Collaboration.
          </p>
          <p className="text-lg leading-relaxed">
            My goal is to help you understand your body, feel confident in your
            movement, and become an active participant in your own health.
          </p>
          <p className="text-lg leading-relaxed">
            I look forward to working with you.
          </p>
        </div>
      </div>
    </div>
  );
}

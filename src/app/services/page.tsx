export default function Services() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-primary">
      <h1 className="text-4xl font-bold py-12 text-center">Services</h1>
      <div className="flex flex-col max-w-4xl mx-auto px-6 gap-8 items-center pb-12">
        <div className="flex-1 space-y-6">
          <p className="text-lg leading-relaxed mb-6">
            I provide one-on-one, personalized physical therapy that blends
            evidence-based manual therapy, tailored movement programs, and
            patient education. My approach is rooted in collaboration—we work
            together to uncover the root cause of your discomfort and create a
            plan that supports your goals and lifestyle.
          </p>

          <div className="bg-background/10 rounded-lg p-6 border border-primary/20">
            <h2 className="text-xl font-semibold mb-4">
              Treatment sessions may include:
            </h2>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Fascial Counterstrain techniques and other manual therapy
                  techniques
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Soft tissue mobilization and joint work</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Personalized therapeutic exercise programs focused on movement
                  and strength
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Patient education and lifestyle strategies to promote
                  awareness, self-care, and long-term relief
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-background/10 rounded-lg p-6 border border-primary/20">
            <h2 className="text-xl font-semibold mb-4">
              I treat a wide range of needs, including:
            </h2>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Orthopedic conditions (post-injury, post-surgery, joint and muscle dysfunction)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Chronic pain and long-standing musculoskeletal issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Athletic rehabilitation and return-to-sport</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Mobility and strength training for all ages</span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            Whether you&apos;re recovering from injury, managing chronic
            pain, or simply seeking a more connected relationship with your
            body, I provide care that respects your goals and supports your
            overall well-being.
          </p>

          <div className="bg-background/10 rounded-lg p-6 border border-primary/20 mt-8">
            <h2 className="text-xl font-semibold mb-4">Pricing</h2>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li className="flex justify-between items-center">
                <span>Initial evaluation (in-person):</span>
                <span className="font-semibold text-accent">$200</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Initial evaluation (telehealth):</span>
                <span className="font-semibold text-accent">$180</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Follow up (in-person):</span>
                <span className="font-semibold text-accent">$180</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Follow up (telehealth):</span>
                <span className="font-semibold text-accent">$150</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

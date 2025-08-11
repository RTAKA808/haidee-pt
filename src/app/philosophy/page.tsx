export default function Philosophy() {
  return (
    <div className="flex flex-col w-full h-screen justify-center bg-primary">
      <h1 className="text-4xl font-bold py-12 text-center">Philosophy of Care</h1>
      <div className="flex flex-col max-w-4xl mx-auto px-6 gap-8 items-center pb-12">
        <div className="flex-1 space-y-6">
          <p className="text-lg leading-relaxed mb-6">
            Healing is never one-size-fits-all. I believe in collaborative,
            patient-driven care—where your goals and experiences are central to the
            treatment process. Together, we&apos;ll create a space where you feel seen,
            supported, and empowered to take charge of your health.
          </p>
          
          <div className="bg-background/10 rounded-lg p-6 border border-primary/20">
            <h2 className="text-xl font-semibold mb-4">My Core Beliefs</h2>
            <p className="text-lg leading-relaxed">
              I believe that treatment should educate as much as it heals. Understanding why
              something hurts is just as important as how we fix it. Through open
              communication, body awareness, and individualized strategies, I aim to
              help you not only recover—but thrive. My hope is that each patient
              walks away not only feeling better, but with a deeper understanding of
              their body and the tools to support their long-term health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
  
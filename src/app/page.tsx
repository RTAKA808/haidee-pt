import Hero from "@/components/hero";
import About from "@/components/about-content"

export default function page() {
  return (
    <div>
      <div className="">
        <Hero />
      </div>
      <div className="flex h-full w-full">
        <About/>
      </div>
    </div>
  );
}

import About from "@/components/sections/about";
import { CommitteeSection } from "@/components/sections/comittee";
import Events from "@/components/sections/events";
import Gallery from "@/components/sections/gallery";
import Hero from "@/components/sections/hero";
import Merchandise from "@/components/sections/merchandise";
import News from "@/components/sections/news";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <CommitteeSection />
      {/* <Features /> */}
      <Events />
      <News />
      {/* <AlumniDirectory /> */}
      <Merchandise />
      <Gallery />
    </div>
  );
}

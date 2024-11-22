import About from "@/components/sections/about";
import Events from "@/components/sections/events";
import Hero from "@/components/sections/hero";
import Merchandise from "@/components/sections/merchandise";
import News from "@/components/sections/news";
import { CommitteeSection } from "./committee/page";

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
      {/* <Gallery /> */}
    </div>
  );
}

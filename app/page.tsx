import Hero from "./components/Hero";
import AboutUs from "./components/About";
import NewsAndUpdates from "./components/News";
import Fundraising from "./components/FundRaising";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4">
        <div className="w-full">
          <AboutUs />
          <NewsAndUpdates />
          <Fundraising />
        </div>
      </div>
    </>
  );
}

import { FAQ } from "../components/LandingPage/FAQ";
import { Header } from "../components/LandingPage/Header";
import { Hero } from "../components/LandingPage/Hero";
import { Pricing } from "../components/LandingPage/Pricing";
import { VideoExplanation } from "../components/LandingPage/VideoExplanation";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Header />
      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  );
}

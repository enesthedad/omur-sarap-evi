import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import { WhyWe } from "../components/WhyWe";
import { Header } from "../components/Header";

export const LandingPage = () => {
  return (
    <div>
      <div id="hero" className="hero-page ">
        <div className="w-full">
          <Header />
        </div>
        <Hero />
      </div>
      <WhyWe />
      <Testimonials />
    </div>
  );
};

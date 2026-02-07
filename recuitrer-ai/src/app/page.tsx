import Hero from "@/components/Hero";
import FlowchartSection from "@/components/Flowcharts";
import ImpactSection from "@/components/Impact";
import LogoSlider from "@/components/LogoSlider";
import { Testimonials, FAQ } from "@/components/SocialFaq";
import { FinalCTA, Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <LogoSlider />
      <FlowchartSection />
      <ImpactSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

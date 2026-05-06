import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-offwhite bg-[url('/Background%20website.png')] bg-cover bg-center overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
      </div>
      <Footer />
    </div>
  );
}

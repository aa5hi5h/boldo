import HeroSection from "../components/hero";
import ProjectSection from "../components/projects";
import StrategySection from "../components/strategy";
import AboutSection from "../components/about";
import ContactSection from "../components/contact";
import FAQ from "../components/faq";
import { gotham_font, spaceGrotesk } from "../config/font";
import Navbar from "../components/ui/navbar";
import FooterSection from "../components/footer";
import WhyOurAgency from "../components/why-dma";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <main
      className={`${gotham_font.variable} ${spaceGrotesk.variable} overflow-hidden bg-black`}
    >
      <Navbar />
      <HeroSection />
      <WhyOurAgency />
      <ProjectSection />
      <StrategySection />
      <AboutSection />
      <ContactSection />
      <FAQ />
      <CTASection />
      <FooterSection />
    </main>
  );
}
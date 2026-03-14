import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProofSection from "@/components/ProofSection";
import ProgramsSection from "@/components/ProgramsSection";
import AudienceSection from "@/components/AudienceSection";
import StatsSection from "@/components/StatsSection";
import BridgeSection from "@/components/BridgeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProofSection />
        <ProgramsSection />
        <AudienceSection />
        <StatsSection />
        <BridgeSection />
        <CTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

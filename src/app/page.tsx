import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProofSection from "@/components/ProofSection";
import ReferencesSection from "@/components/ReferencesSection";
import IndividualCasesSection from "@/components/IndividualCasesSection";
import ProgramsSection from "@/components/ProgramsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
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
        <ReferencesSection />
        <IndividualCasesSection />
        <ProgramsSection />
        <HowWeWorkSection />
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

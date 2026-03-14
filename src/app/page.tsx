import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ProofSection from "@/components/ProofSection";
import ReferencesSection from "@/components/ReferencesSection";
import IndividualCasesSection from "@/components/IndividualCasesSection";
import AudienceSection from "@/components/AudienceSection";
import StatsSection from "@/components/StatsSection";
import BridgeSection from "@/components/BridgeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. 후킹 */}
        <HeroSection />

        {/* 2. 무엇을 배우나 — 프로그램 */}
        <ProgramsSection />

        {/* 3. 어떻게 운영하나 — 방법론 */}
        <HowWeWorkSection />

        {/* 4. 왜 믿을 수 있나 — 직접 구현한 AI 스킬 */}
        <ProofSection />

        {/* 5. 어디서 검증됐나 — 기관 레퍼런스 */}
        <ReferencesSection />

        {/* 6. 숫자로 증명 */}
        <StatsSection />

        {/* 7. 실제 결과물 — 교육 사례 (Notion) */}
        <Suspense fallback={null}>
          <IndividualCasesSection />
        </Suspense>

        {/* 8. 나한테 맞나 — 대상별 */}
        <AudienceSection />

        {/* 9. 연결 */}
        <BridgeSection />

        {/* 10. 문의 */}
        <CTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

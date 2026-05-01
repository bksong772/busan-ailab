import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import AXConsultingSection from "@/components/AXConsultingSection";
import SaaSDevelopmentSection from "@/components/SaaSDevelopmentSection";
import CaseGallerySection from "@/components/CaseGallerySection";
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

        {/* 2. 교육 — 프로그램 */}
        <ProgramsSection />

        {/* 3. AX 컨설팅 — 소녀방앗간식 진단·자동화·인계 */}
        <AXConsultingSection />

        {/* 4. SaaS 개발 — academy-manager식 멀티테넌트 */}
        <SaaSDevelopmentSection />

        {/* 5. 케이스 갤러리 — 5개 자동화 사례 (직접 굴리는 + 외부 컨설팅) */}
        <CaseGallerySection />

        {/* 6. 어떻게 운영하나 — 방법론 */}
        <HowWeWorkSection />

        {/* 6. 왜 믿을 수 있나 — 직접 구현한 AI 스킬 */}
        <ProofSection />

        {/* 7. 어디서 검증됐나 — 기관 레퍼런스 */}
        <ReferencesSection />

        {/* 8. 숫자로 증명 */}
        <StatsSection />

        {/* 9. 실제 결과물 — 교육 사례 (Notion) */}
        <Suspense fallback={null}>
          <IndividualCasesSection />
        </Suspense>

        {/* 10. 나한테 맞나 — 대상별 */}
        <AudienceSection />

        {/* 11. 연결 */}
        <BridgeSection />

        {/* 12. 문의 */}
        <CTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

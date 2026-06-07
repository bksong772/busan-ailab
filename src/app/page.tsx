import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ServicesSection from "@/components/ServicesSection";
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

        {/* 1.5 스토리 — 고통→전환 */}
        <StorySection />

        {/* 2. 서비스 4개 — 각 상세 페이지로 분기하는 허브 */}
        <ServicesSection />

        {/* 3. 숫자로 신뢰 */}
        <StatsSection />

        {/* 4. 인사이트·블로그 연결 */}
        <BridgeSection />

        {/* 5. 문의 */}
        <CTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

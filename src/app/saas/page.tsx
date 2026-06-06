import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import SaaSDevelopmentSection from "@/components/SaaSDevelopmentSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "SaaS 개발·업무 시스템 구축 | AX그라운드",
  description:
    "AX로 검증된 자동화를 멀티테넌트 SaaS로 확장. 학원 통합관리(academy-manager)식 실제 운영 시스템을 직접 개발한 경험으로, PoC부터 구독형 서비스까지 구축합니다.",
  alternates: { canonical: "https://axground.vercel.app/saas" },
  openGraph: {
    title: "SaaS 개발·업무 시스템 구축 | AX그라운드",
    description: "AX로 검증된 자동화를 멀티테넌트 SaaS로 — PoC부터 구독형까지",
    url: "https://axground.vercel.app/saas",
    type: "website",
  },
};

export default function SaaSPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <SaaSDevelopmentSection />
        <CTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import AXConsultingSection from "@/components/AXConsultingSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AX 컨설팅·업무 자동화 도입 | 부산·울산·경남 — AX그라운드",
  description:
    "소상공인·중소기업·공공기관의 AX(AI 전환) 컨설팅. 진단 → 자동화 구축 → 인계까지 — 외부 컨설턴트가 떠나도 직원이 그대로 운영. 카카오 알림톡·견적서·정산·SNS 자동화 실전 적용.",
  alternates: { canonical: "https://axground.vercel.app/consulting" },
  openGraph: {
    title: "AX 컨설팅·업무 자동화 | AX그라운드",
    description: "진단→자동화→인계. 외부 컨설턴트 떠나도 직원이 운영 가능한 구조",
    url: "https://axground.vercel.app/consulting",
    type: "website",
  },
};

export default function ConsultingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AXConsultingSection />
        <HowWeWorkSection />
        <CTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

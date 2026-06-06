import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import ProgramsSection from "@/components/ProgramsSection";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AI 실무 교육 | 부산·울산·경남 기업·공공기관 출강 — AX그라운드",
  description:
    "부산·울산·경남 기업·공공기관 대상 AI 실무 교육. AI 콘텐츠 자동화·챗봇·홈페이지 제작 등 교육 당일 직원이 직접 만들고 바로 쓰는 결과물 완성. 누적 100+ 기관·2025년 310회 출강.",
  alternates: { canonical: "https://axground.vercel.app/education" },
  openGraph: {
    title: "AI 실무 교육 | AX그라운드",
    description: "부산·울산·경남 기업·공공기관 AI 실무 교육 — 교육 당일 결과물 완성",
    url: "https://axground.vercel.app/education",
    type: "website",
  },
};

export default function EducationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ProgramsSection />
        <AudienceSection />
        <CTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

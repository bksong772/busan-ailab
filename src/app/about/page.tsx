import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import FounderSection from "@/components/FounderSection";
import ProofSection from "@/components/ProofSection";
import ReferencesSection from "@/components/ReferencesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "회사·대표 소개 | 송병근 코치 — AX그라운드",
  description:
    "AX그라운드 대표 송병근 — 10년간 28개 공간을 직접 창업·운영하고 그 사업을 AI로 자동화한 실전 운영자. 누적 100+ 기관·310회 출강, 부산인재개발원·한국주택금융공사·부산대 등 검증.",
  alternates: { canonical: "https://axground.vercel.app/about" },
  openGraph: {
    title: "회사·대표 소개 | AX그라운드",
    description: "10년 28개 공간 운영 + AI 자동화 실전 운영자 송병근 코치",
    url: "https://axground.vercel.app/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <FounderSection />
        <ProofSection />
        <ReferencesSection />
        <CTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import CaseGallerySection from "@/components/CaseGallerySection";
import IndividualCasesSection from "@/components/IndividualCasesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AI 자동화 사례 | 직접 운영하는 사업 + 외부 컨설팅 — AX그라운드",
  description:
    "말로 설명하지 않고 보여드립니다. 소녀방앗간 케이터링(외부 컨설팅), 부산코딩스쿨 영업·견적, 고개서동 숙박, 수리공의온도 콘텐츠 — 직접 운영하며 다듬은 AI 자동화 풀 사이클 사례.",
  alternates: { canonical: "https://axground.vercel.app/cases" },
  openGraph: {
    title: "AI 자동화 사례 | AX그라운드",
    description: "직접 운영하는 사업 + 외부 컨설팅 — 자동화 풀 사이클 영상 사례",
    url: "https://axground.vercel.app/cases",
    type: "website",
  },
};

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <CaseGallerySection />
        <Suspense fallback={null}>
          <IndividualCasesSection />
        </Suspense>
        <CTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

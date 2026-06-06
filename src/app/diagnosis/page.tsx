import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiagnosisForm from "./DiagnosisForm";

export const metadata: Metadata = {
  title: "30초 AX 자가진단 — 24시간 안에 맞춤 진단 결과 받기 | AX그라운드",
  description:
    "직원 수·반복 업무·현재 도구 몇 가지만 답하면, 28개 공간을 직접 운영하며 자동화를 쌓아온 컨설턴트가 24시간 안에 맞춤 AX 진단 결과 PDF를 보내드립니다. 무료.",
  alternates: { canonical: "https://axfactory.vercel.app/diagnosis" },
  openGraph: {
    title: "30초 AX 자가진단 — 24시간 안에 맞춤 진단 결과",
    description: "직원 수·반복 업무·현재 도구 답변 → 24h 내 맞춤 PDF. 무료.",
    url: "https://axfactory.vercel.app/diagnosis",
    type: "website",
  },
};

export default function DiagnosisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "무료 AX 자가진단",
    provider: {
      "@type": "Organization",
      name: "AX그라운드",
      url: "https://axfactory.vercel.app",
    },
    description: "30초 자가진단 응답 후 24시간 안에 맞춤 AX 진단 결과 PDF 무료 제공",
    areaServed: ["부산", "울산", "경남"],
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0A0A0F] pt-24 pb-20">
        {/* Hero */}
        <section className="px-4 sm:px-6 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1.5 text-xs font-semibold text-[#3B82F6]">
            🎯 무료 · 30초 응답 · 24시간 내 맞춤 PDF
          </div>
          <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold text-[#F5F5F5] leading-tight tracking-tight break-keep">
            우리 회사,<br />
            <span className="text-[#3B82F6]">어디부터 자동화</span>해야 할까?
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#F5F5F5]/70 leading-8 break-keep">
            ChatGPT는 써봤는데 뭐부터 시작해야 할지 막막하다면.
            <br className="hidden sm:block" />
            30초 자가진단 응답하면, <strong className="text-[#F5F5F5]">공간·교육 사업을 직접 굴리는 운영자</strong>가
            우리 회사 맞춤 AX 진단 결과를 <strong className="text-[#F5F5F5]">24시간 안에</strong> 이메일로 보내드립니다.
          </p>
        </section>

        {/* Trust band */}
        <section className="mt-12 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-[#2A2A35] bg-[#13131B] p-5 text-center">
              <div className="text-2xl font-extrabold text-[#3B82F6]">100+</div>
              <div className="mt-1 text-xs text-[#F5F5F5]/60">부산·울산·경남 출강 기관</div>
            </div>
            <div className="rounded-2xl border border-[#2A2A35] bg-[#13131B] p-5 text-center">
              <div className="text-2xl font-extrabold text-[#3B82F6]">5개</div>
              <div className="mt-1 text-xs text-[#F5F5F5]/60">진단자가 직접 굴리는 사업</div>
            </div>
            <div className="rounded-2xl border border-[#2A2A35] bg-[#13131B] p-5 text-center">
              <div className="text-2xl font-extrabold text-[#3B82F6]">24h</div>
              <div className="mt-1 text-xs text-[#F5F5F5]/60">맞춤 진단 PDF 회신</div>
            </div>
          </div>
        </section>

        {/* 3단계 흐름 */}
        <section className="mt-12 px-4 sm:px-6 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#F5F5F5] text-center break-keep">
            진단은 3단계
          </h2>
          <ol className="mt-6 space-y-3">
            <li className="rounded-2xl border border-[#2A2A35] bg-[#13131B] p-5 flex gap-4 items-start">
              <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#3B82F6] text-white font-extrabold text-sm">1</span>
              <div>
                <div className="font-bold text-[#F5F5F5]">30초 자가진단 응답</div>
                <div className="text-sm text-[#F5F5F5]/60 mt-1 leading-6">아래 폼에 회사 규모·반복 업무·현재 도구 답변. 객관식 위주 30초.</div>
              </div>
            </li>
            <li className="rounded-2xl border border-[#2A2A35] bg-[#13131B] p-5 flex gap-4 items-start">
              <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#3B82F6] text-white font-extrabold text-sm">2</span>
              <div>
                <div className="font-bold text-[#F5F5F5]">24시간 내 맞춤 PDF</div>
                <div className="text-sm text-[#F5F5F5]/60 mt-1 leading-6">현장 운영자가 1:1로 분석 → &ldquo;어떤 업무부터·어떤 도구로·얼마 걸릴지&rdquo; 정리한 1~2장 PDF 이메일 발송.</div>
              </div>
            </li>
            <li className="rounded-2xl border border-[#2A2A35] bg-[#13131B] p-5 flex gap-4 items-start">
              <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#3B82F6] text-white font-extrabold text-sm">3</span>
              <div>
                <div className="font-bold text-[#F5F5F5]">원하시면 30분 무료 통화</div>
                <div className="text-sm text-[#F5F5F5]/60 mt-1 leading-6">진단 결과 본 후 더 깊은 대화 원하시면 30분 무료 통화 일정. 부담 없이.</div>
              </div>
            </li>
          </ol>
        </section>

        {/* Form */}
        <section className="mt-16 px-4 sm:px-6 max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#F5F5F5] text-center break-keep">
            30초 자가진단 시작
          </h2>
          <p className="text-center text-sm text-[#F5F5F5]/60 mt-2">필수 항목 ★ 만 답해도 진단 가능</p>
          <div className="mt-8">
            <DiagnosisForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 px-4 sm:px-6 max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#F5F5F5] text-center break-keep">
            자주 묻는 질문
          </h2>
          <div className="mt-6 space-y-3">
            <details className="rounded-2xl border border-[#2A2A35] bg-[#13131B] p-5 open:bg-[#1a1a26]">
              <summary className="cursor-pointer font-bold text-[#F5F5F5]">정말 무료인가요?</summary>
              <p className="mt-3 text-sm text-[#F5F5F5]/70 leading-7">네. 자가진단 응답 + 24시간 내 PDF + 원하시면 30분 통화까지 전부 무료입니다. 강매도 X.</p>
            </details>
            <details className="rounded-2xl border border-[#2A2A35] bg-[#13131B] p-5 open:bg-[#1a1a26]">
              <summary className="cursor-pointer font-bold text-[#F5F5F5]">부산 외 지역도 가능한가요?</summary>
              <p className="mt-3 text-sm text-[#F5F5F5]/70 leading-7">진단은 전국 어디든 가능합니다. 다만 후속 컨설팅·교육은 부산·울산·경남 우선 진행합니다.</p>
            </details>
            <details className="rounded-2xl border border-[#2A2A35] bg-[#13131B] p-5 open:bg-[#1a1a26]">
              <summary className="cursor-pointer font-bold text-[#F5F5F5]">진단 PDF에 어떤 내용이 들어가나요?</summary>
              <p className="mt-3 text-sm text-[#F5F5F5]/70 leading-7">① 우리 회사 AX 도입 단계 진단 ② 가장 먼저 자동화할 업무 1~2개 추천 ③ 추천 도구·예상 작업 시간·예상 절감 시간 ④ 다음 단계 제안.</p>
            </details>
            <details className="rounded-2xl border border-[#2A2A35] bg-[#13131B] p-5 open:bg-[#1a1a26]">
              <summary className="cursor-pointer font-bold text-[#F5F5F5]">개인정보는 어떻게 보호되나요?</summary>
              <p className="mt-3 text-sm text-[#F5F5F5]/70 leading-7">진단 목적 외 사용 X. 제3자 제공 X. 진단 후 6개월 내 폐기 또는 파기 요청 시 즉시 삭제.</p>
            </details>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

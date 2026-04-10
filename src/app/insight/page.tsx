import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "인사이트 | AX 전환·AI 실무 전문가 칼럼",
  description:
    "부산AI랩 전문가가 4년간 100+ 기관에 출강하며 확인한 AX(AI 전환) 현장 인사이트. AI 실무 교육, 업무 자동화, 챗봇 구축, 홈페이지 제작 등 실전 노하우를 공유합니다.",
  alternates: {
    canonical: "https://busan-ailab.vercel.app/insight",
  },
  openGraph: {
    title: "인사이트 | 부산AI랩",
    description:
      "부산·울산·경남 기업·공공기관을 위한 AX 전환 실전 인사이트",
    url: "https://busan-ailab.vercel.app/insight",
    type: "website",
  },
};

export default function InsightListPage() {
  const items = getAllInsights();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A0A0F] pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-4 py-1.5 text-xs font-bold text-[#3B82F6]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
            Insight
          </div>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] break-keep">
            AX 전환 현장에서
            <br />
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
              검증된 인사이트만
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-[#F5F5F5]/60 leading-7 break-keep">
            4년간 부산·울산·경남 100+ 기관에 직접 출강하며 확인한
            실제 현장 노하우를 공유합니다. AI 도구 사용법이 아니라,
            업무를 AI로 재설계하는 방법에 집중합니다.
          </p>
        </section>

        {/* List */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-14">
          {items.length === 0 ? (
            <div className="rounded-3xl border border-[#2A2A35] bg-[#13131B] p-12 text-center text-[#F5F5F5]/50">
              곧 첫 번째 인사이트가 공개됩니다.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              {items.map((it) => (
                <Link
                  key={it.slug}
                  href={`/insight/${it.slug}`}
                  className="group overflow-hidden rounded-3xl border border-[#2A2A35] bg-[#13131B] p-7 transition hover:border-[#3B82F6]/50 hover:-translate-y-0.5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {it.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#2A2A35] bg-[#0A0A0F] px-3 py-1 text-[11px] font-semibold text-[#F5F5F5]/60"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <h2 className="mt-4 text-lg sm:text-xl font-extrabold text-[#F5F5F5] leading-snug break-keep group-hover:text-[#93C5FD] transition-colors">
                    {it.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#F5F5F5]/60 line-clamp-3 break-keep">
                    {it.summary}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-xs text-[#F5F5F5]/40">
                    <time dateTime={it.publishedAt}>
                      {it.publishedAt.replace(/-/g, ".")}
                    </time>
                    <span>읽는 시간 {it.readingMinutes}분</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

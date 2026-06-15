import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "소녀방앗간 AX 컨설팅 — 자료 모음",
  description: "소녀방앗간 케이터링 AX 컨설팅 전체 자료 한 곳 모음 (비공개).",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://axground.vercel.app/sonyeo/links" },
};

type LinkItem = {
  title: string;
  desc: string;
  href: string;
  external?: boolean;
  star?: boolean;
};

const GROUPS: { heading: string; sub: string; items: LinkItem[] }[] = [
  {
    heading: "핵심 산출물",
    sub: "발표·운영의 중심 자료",
    items: [
      {
        title: "AX 컨설팅 최종 보고서",
        desc: "진단·분석·설계·실행·확장 5단계 · 5/27 성과공유회 발표본",
        href: "/sonyeo/report",
        star: true,
      },
      {
        title: "라이브 대시보드",
        desc: "현재 운영 중인 케이터링 견적·정산 자동화 솔루션",
        href: "https://sonyeo-dashboard.vercel.app",
        external: true,
        star: true,
      },
      {
        title: "대시보드 사용 가이드",
        desc: "대표님용 대시보드 사용법",
        href: "/sonyeo/guide.html",
      },
      {
        title: "자동견적 데모",
        desc: "신청 → 견적 자동화 풀사이클 시연",
        href: "/sonyeo/quote/",
      },
    ],
  },
  {
    heading: "인터뷰·워크샵 보고서",
    sub: "현장 진단 기록",
    items: [
      {
        title: "인터뷰 요약 v3 (대표 송부본)",
        desc: "대표님 송부 최종본 — 가장 정리된 버전",
        href: "/sonyeo/workshop3.html",
        star: true,
      },
      {
        title: "인터뷰 요약 v2 (확장본)",
        desc: "확장 정리본",
        href: "/sonyeo/workshop2.html",
      },
      {
        title: "워크샵 #1 인터뷰 요약 (v1)",
        desc: "초기 인터뷰 요약 보고서",
        href: "/sonyeo/workshop1.html",
      },
      {
        title: "워크샵 랜딩 (구버전)",
        desc: "초기 자료 랜딩 페이지",
        href: "/sonyeo/index.html",
      },
    ],
  },
  {
    heading: "PoC 코호트 기록",
    sub: "주차별 실증 기록",
    items: [
      {
        title: "코호트 #2 (5/13)",
        desc: "케이터링 AX PoC 2주차",
        href: "/sonyeo/cohort2.html",
      },
      {
        title: "코호트 #3 (5/20)",
        desc: "케이터링 AX PoC 3주차",
        href: "/sonyeo/cohort3.html",
      },
    ],
  },
];

function Card({ item }: { item: LinkItem }) {
  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className={[
        "group relative flex flex-col rounded-2xl border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md",
        item.star ? "border-[#C8A063]/50 shadow-sm" : "border-slate-200",
      ].join(" ")}
    >
      {item.star && (
        <span className="absolute right-4 top-4 text-[11px] font-bold tracking-wider text-[#C8A063]">
          ★ 핵심
        </span>
      )}
      <div className="text-base font-bold leading-snug text-slate-900">
        {item.title}
        {item.external && <span className="ml-1 text-slate-400">↗</span>}
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#C8A063] group-hover:gap-2 transition-all">
        열기
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  );
}

export default function SonyeoLinksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAF8] pt-24">
        {/* 헤더 */}
        <section className="border-b border-slate-200 bg-white px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C8A063]/40 bg-[#C8A063]/10 px-4 py-1.5 text-xs font-bold text-[#9A7842]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A063]" />
              AX 컨설팅 사례 · 비공개 자료
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              소녀방앗간 케이터링 — 자료 모음
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
              진단부터 운영 인계까지, 소녀방앗간 AX 컨설팅의 모든 산출물을 한 곳에 모았습니다.
              <br className="hidden sm:block" />
              검색에 노출되지 않는 비공개 페이지입니다.
            </p>
          </div>
        </section>

        {/* 그룹별 카드 */}
        <div className="mx-auto max-w-5xl px-4 pb-24">
          {GROUPS.map((g) => (
            <section key={g.heading} className="mt-12">
              <div className="flex items-baseline gap-3">
                <h2 className="text-lg font-bold tracking-tight text-slate-900">{g.heading}</h2>
                <span className="text-sm text-slate-400">{g.sub}</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((item) => (
                  <Card key={item.href} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

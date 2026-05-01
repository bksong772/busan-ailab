/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { openInquiry } from "@/lib/openInquiry";

const services = [
  {
    emoji: "🎓",
    label: "EDUCATION",
    title: "AI 실무 교육",
    sub: "콘텐츠·홈페이지·챗봇 · 직원이 당일 만들고 바로 쓰는 결과물",
    pricing: "반나절~하루 · 기관 맞춤",
    pricingNote: "워크숍 4종 + 패키지 1종",
    cta: "프로그램 보기",
    href: "#programs",
    accent: "#3B82F6",
    accentBg: "rgba(59,130,246,0.1)",
  },
  {
    emoji: "🎯",
    label: "AX CONSULTING",
    title: "AX 컨설팅",
    sub: "소녀방앗간식 진단 → 자동화 → 인계 · 외부 컨설턴트 떠나도 직원이 운영 가능",
    pricing: "₩99만 / ₩350만 / ₩800만+",
    pricingNote: "Lite · Standard · Premium",
    cta: "패키지 보기",
    href: "#ax-consulting",
    accent: "#FF6B35",
    accentBg: "rgba(255,107,53,0.1)",
    featured: true,
  },
  {
    emoji: "💻",
    label: "SAAS DEVELOPMENT",
    title: "SaaS 개발",
    sub: "AX로 검증된 자동화를 멀티테넌트 SaaS로 · academy-manager식",
    pricing: "₩500만~ / ₩1,500만~ / 월 ₩99K",
    pricingNote: "PoC · 멀티테넌트 · 구독",
    cta: "케이스 보기",
    href: "#saas-development",
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.1)",
  },
  {
    emoji: "📞",
    label: "FREE DIAGNOSIS",
    title: "무료 AX 진단",
    sub: "30분 1:1 · 현재 업무·반복 작업 진단 + 자동화 가능 영역 짚어드림",
    pricing: "₩0",
    pricingNote: "30분 무료 · 비대면·대면",
    cta: "진단 신청",
    onClick: true,
    accent: "#10B981",
    accentBg: "rgba(16,185,129,0.1)",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 relative overflow-hidden border-t border-[#1A1A22]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#FF6B35]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#13131A] border border-[#2A2A35] rounded-full px-4 py-1.5 text-sm text-[#FF6B35] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
            SERVICES · 제공 서비스
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
            정확히 무엇을
            <br />
            <span className="text-[#FF6B35]">살 수 있나요?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F5F5]/60 max-w-2xl mx-auto leading-relaxed">
            교육 → AX 컨설팅 → SaaS — 깔때기 구조로 단계별 진입.
            <br />
            처음이면 무료 진단 30분부터.
          </p>
        </motion.div>

        {/* 4개 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((s, i) => {
            const Wrapper = s.onClick ? "button" : "a";
            const wrapperProps = s.onClick
              ? { onClick: openInquiry, type: "button" as const }
              : { href: s.href };

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Wrapper
                  {...(wrapperProps as any)}
                  className={`group relative bg-[#13131A] border rounded-2xl p-6 transition-all overflow-hidden block w-full text-left ${
                    s.featured
                      ? "border-[#FF6B35]/40 shadow-[0_0_40px_rgba(255,107,53,0.08)]"
                      : "border-[#2A2A35] hover:border-[#3B82F6]/40"
                  }`}
                >
                  {/* Featured 배지 */}
                  {s.featured && (
                    <div className="absolute top-3 right-3 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FF6B35] text-white">
                      MAIN
                    </div>
                  )}

                  {/* 호버 그라디언트 */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${s.accentBg} 0%, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* 라벨 */}
                    <div
                      className="text-[10px] font-semibold tracking-wider mb-3"
                      style={{ color: s.accent }}
                    >
                      {s.label}
                    </div>

                    {/* 이모지 + 제목 */}
                    <div className="text-4xl mb-2">{s.emoji}</div>
                    <h3 className="text-lg font-bold text-[#F5F5F5] leading-tight mb-3">
                      {s.title}
                    </h3>

                    {/* 한 줄 설명 */}
                    <p className="text-xs text-[#F5F5F5]/60 leading-relaxed mb-5 min-h-[48px]">
                      {s.sub}
                    </p>

                    {/* 가격 */}
                    <div
                      className="rounded-xl p-3 mb-4 border"
                      style={{
                        background: s.accentBg,
                        borderColor: `${s.accent}33`,
                      }}
                    >
                      <div
                        className="text-[10px] font-semibold tracking-wider opacity-70 mb-0.5"
                        style={{ color: s.accent }}
                      >
                        PRICE
                      </div>
                      <div
                        className="text-base font-bold"
                        style={{ color: s.accent }}
                      >
                        {s.pricing}
                      </div>
                      <div className="text-[10px] text-[#F5F5F5]/50 mt-0.5">
                        {s.pricingNote}
                      </div>
                    </div>

                    {/* CTA */}
                    <div
                      className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{ color: s.accent }}
                    >
                      {s.cta}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* 하단 안내 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-[#F5F5F5]/50">
            처음이세요? <button onClick={openInquiry} className="text-[#10B981] hover:underline font-semibold">무료 진단 30분</button>부터 가볍게 — 어떤 자동화가 가능한지 짚어드립니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

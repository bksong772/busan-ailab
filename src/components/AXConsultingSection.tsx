"use client";

import { motion } from "framer-motion";
import { openInquiry } from "@/lib/openInquiry";
import FadeInSection from "./FadeInSection";

const beforeAfter = [
  { label: "응답 사이클", before: "24시간+", after: "즉시" },
  { label: "월 정리 시간", before: "10시간", after: "0시간" },
  { label: "견적서 작성", before: "30분 / 건", after: "1분 / 건 (AI 자동)" },
  { label: "누락 발생", before: "종종", after: "0건" },
];

const packages = [
  {
    name: "AX Lite",
    price: "맞춤 견적",
    priceNote: "1회 진단 + 자동화 1건",
    summary: "30분 무료 진단 → 자동화 1건 적용",
    target: "자영업자 · 소상공인 (블로그·SNS·고객 응대 자동화)",
    example: "예: 집수리 자영업자 블로그 자동 발행",
    features: [
      "30분 무료 진단 인터뷰",
      "반복 업무 1건 자동화 구축",
      "운영 매뉴얼 1부",
    ],
    color: "#3B82F6",
  },
  {
    name: "AX Standard",
    price: "맞춤 견적",
    priceNote: "진단 + 자동화 3~5건 + 1개월 인계",
    summary: "진단 + 자동화 3~5건 + 1개월 운영 인계",
    target: "중소기업 · 기관 (업무 프로세스 자동화)",
    example: "예: 소녀방앗간 케이터링 풀 사이클",
    features: [
      "현장 진단 + 자동화 설계",
      "자동화 3~5건 구축 (n8n · Claude API · SaaS)",
      "1개월 운영 인계 + 직원 교육",
    ],
    color: "#F59E0B",
    featured: true,
  },
  {
    name: "AX Premium",
    price: "맞춤 견적",
    priceNote: "풀 시스템 설계 + 3개월 사후 지원",
    summary: "풀 시스템 설계 + SaaS 연계 + 3개월 사후 지원",
    target: "공공기관 · 중견기업 (다부서·다채널 자동화)",
    example: "예: 다부서 워크플로우 + 외부 SaaS 통합",
    features: [
      "전사 업무 진단 + 시스템 아키텍처 설계",
      "다부서 자동화 + SaaS 연계 구축",
      "3개월 사후 지원 + 운영팀 인계",
    ],
    color: "#8B5CF6",
  },
];

const flow = [
  {
    step: "01",
    title: "30분 무료 진단",
    desc: "현재 업무·반복 작업을 인터뷰합니다.\n어디를 자동화하면 가장 큰 효과가 나올지 함께 정리합니다.",
    icon: "🔍",
    color: "#3B82F6",
  },
  {
    step: "02",
    title: "자동화 설계",
    desc: "n8n · Claude API · SaaS 조합으로 시안을 제안합니다.\n예산·일정·운영 부담을 함께 검토합니다.",
    icon: "🧩",
    color: "#8B5CF6",
  },
  {
    step: "03",
    title: "구축 · 검증",
    desc: "1~4주 단위로 PoC를 만들고 운영 환경에서 검증합니다.\n실제 업무 데이터로 돌려봅니다.",
    icon: "⚙️",
    color: "#10B981",
  },
  {
    step: "04",
    title: "인계",
    desc: "매뉴얼 · 운영자 교육 · 3개월 사후 지원.\n외부 컨설턴트 없이 직원이 그대로 돌릴 수 있게.",
    icon: "📦",
    color: "#F59E0B",
  },
];

export default function AXConsultingSection() {
  return (
    <section
      id="ax-consulting"
      className="py-24 px-4 sm:px-6 bg-[#0D0D14] relative overflow-hidden"
    >
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 헤더 */}
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs text-[#3B82F6] border border-[#3B82F6]/30 bg-[#3B82F6]/5 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              AX CONSULTING · 컨설팅 서비스
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-5">
              교육이 끝이 아닙니다.
              <br />
              <span className="text-[#3B82F6]">실제 업무를 자동화</span>해 드립니다.
            </h2>
            <p className="text-[#F5F5F5]/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              소녀방앗간식 진단 · 자동화 · 인계 —
              <br className="sm:hidden" />
              {" "}외부 컨설턴트가 떠나도 직원이 그대로 돌릴 수 있는 형태로.
            </p>
          </div>
        </FadeInSection>

        {/* 케이스 스터디: 영상 임베드 */}
        <FadeInSection delay={0.1}>
          <div className="mb-10">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 text-xs text-[#F5F5F5]/40 border border-[#2A2A35] rounded-full px-4 py-1.5 mb-3">
                CASE STUDY · 실전 사례
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-2">
                소녀방앗간 케이터링 자동화
              </h3>
              <p className="text-sm sm:text-base text-[#F5F5F5]/50">
                풀 사이클 17초 — 신청부터 카톡 발송까지 자동
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-[#2A2A35] bg-[#13131A] shadow-2xl"
            >
              <div className="aspect-video w-full">
                <iframe
                  src="https://gogaeseodong-sigma.vercel.app/sonyeo/quote?autoplay=1"
                  title="소녀방앗간 케이터링 자동화 풀 사이클"
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>

            <p className="mt-4 text-xs sm:text-sm text-[#F5F5F5]/50 text-center leading-relaxed">
              🎬 소녀방앗간 케이터링 자동화 — 신청 → 시트 → 알림 → 통화·STT →
              AI 자동작성 → 검토·승인 → 카톡 발송 → 채널톡 연결{" "}
              <span className="text-[#3B82F6]">(17초)</span>
            </p>
          </div>
        </FadeInSection>

        {/* Before / After 정량 비교 */}
        <FadeInSection delay={0.15}>
          <div className="mb-24">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-2">
                Before / After
              </h3>
              <p className="text-sm text-[#F5F5F5]/50">
                숫자로 보는 자동화 결과
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {beforeAfter.map((item, i) => (
                <FadeInSection key={item.label} delay={0.2 + i * 0.05}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-5 h-full flex flex-col"
                  >
                    <p className="text-xs font-semibold text-[#F5F5F5]/40 uppercase tracking-wider mb-3">
                      {item.label}
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#F5F5F5]/40 shrink-0 w-12">
                          Before
                        </span>
                        <span className="text-base sm:text-lg font-bold text-[#F5F5F5]/50 line-through">
                          {item.before}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#3B82F6] shrink-0 w-12">
                          After
                        </span>
                        <span className="text-xl sm:text-2xl font-bold text-[#3B82F6] tabular-nums">
                          {item.after}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* 컨설팅 패키지 3종 */}
        <FadeInSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs text-[#F5F5F5]/40 border border-[#2A2A35] rounded-full px-4 py-1.5 mb-3">
              PACKAGES · 컨설팅 패키지
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-2">
              규모에 맞춰 시작하세요
            </h3>
            <p className="text-sm sm:text-base text-[#F5F5F5]/50">
              자영업자부터 공공기관까지 — 3가지 패키지 중 선택
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-24">
            {packages.map((p, i) => (
              <FadeInSection key={p.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-[#13131A] border rounded-2xl p-7 h-full flex flex-col gap-5 ${
                    p.featured ? "border-[#F59E0B]/40" : "border-[#2A2A35]"
                  }`}
                >
                  {p.featured && (
                    <span className="self-start text-xs bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] rounded-full px-3 py-1">
                      가장 많이 선택
                    </span>
                  )}

                  <div>
                    <h4 className="text-xl font-bold text-[#F5F5F5] mb-2">
                      {p.name}
                    </h4>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span
                        className="text-2xl sm:text-3xl font-bold tabular-nums"
                        style={{ color: p.color }}
                      >
                        {p.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#F5F5F5]/40">{p.priceNote}</p>
                  </div>

                  <div className="space-y-2">
                    {p.features.map((f, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-2 text-sm text-[#F5F5F5]/70"
                      >
                        <span
                          style={{ color: p.color }}
                          className="mt-0.5 shrink-0"
                        >
                          ▸
                        </span>
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#2A2A35]">
                    <p className="text-xs text-[#F5F5F5]/50 leading-relaxed">
                      <span className="text-[#F5F5F5]/40">대상: </span>
                      {p.target}
                    </p>
                    <p className="text-xs text-[#F5F5F5]/40 leading-relaxed">
                      {p.example}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <button
                      onClick={() => openInquiry("AX 컨설팅·업무 자동화 의뢰")}
                      className="w-full inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-xl transition-all text-sm"
                      style={{
                        backgroundColor: p.featured ? p.color : `${p.color}15`,
                        border: p.featured
                          ? `1px solid ${p.color}`
                          : `1px solid ${p.color}40`,
                        color: p.featured ? "#FFFFFF" : p.color,
                      }}
                    >
                      💬 상담 신청
                    </button>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>

        {/* 작동 흐름 4단계 */}
        <FadeInSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs text-[#F5F5F5]/40 border border-[#2A2A35] rounded-full px-4 py-1.5 mb-3">
              METHOD · 작동 방식
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-2">
              이렇게 진행합니다
            </h3>
            <p className="text-sm sm:text-base text-[#F5F5F5]/50">
              진단부터 인계까지 4단계 — 직원이 그대로 돌릴 수 있는 형태로
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {flow.map((c, i) => (
              <FadeInSection key={c.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-6 flex flex-col gap-4 h-full"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-bold tabular-nums px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${c.color}15`,
                        border: `1px solid ${c.color}30`,
                        color: c.color,
                      }}
                    >
                      {c.step}
                    </span>
                    <span className="text-2xl">{c.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F5F5F5] mb-2">
                      {c.title}
                    </h4>
                    <p className="text-sm text-[#F5F5F5]/60 leading-relaxed whitespace-pre-line">
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#13131A] to-[#0A0A0F] border border-[#2A2A35] rounded-2xl p-8 sm:p-12 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">
              지금 자동화하면 한 달 안에 결과가 나옵니다
            </h3>
            <p className="text-sm sm:text-base text-[#F5F5F5]/60 mb-8 max-w-xl mx-auto leading-relaxed">
              30분 무료 진단으로 시작하세요. 어떤 업무를 자동화하면 가장 큰 효과가
              나올지 함께 찾습니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={() => openInquiry("AX 컨설팅·업무 자동화 의뢰")}
                className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
              >
                💬 30분 무료 진단 신청
              </button>
              <a
                href="tel:010-9825-8816"
                className="inline-flex items-center justify-center gap-2 border border-[#2A2A35] hover:border-[#3B82F6] text-[#F5F5F5]/80 hover:text-[#F5F5F5] font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
              >
                📞 전화 상담 — 김진완 010-9825-8816
              </a>
            </div>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { openInquiry } from "@/lib/openInquiry";
import FadeInSection from "./FadeInSection";

const fields = [
  {
    icon: "🎓",
    title: "교육·학원 관리",
    sub: "academy-manager 변형",
    desc: "학원·코딩스쿨·학습지·과외",
    points: ["학생/결제/일정/진도 통합", "지점별 운영 분리", "강사 정산 자동화"],
    color: "#3B82F6",
  },
  {
    icon: "🍱",
    title: "케이터링·F&B 운영",
    sub: "소녀방앗간 사례 확장",
    desc: "케이터링·도시락·반찬·베이커리",
    points: ["신청→시트→알림→견적 풀 사이클", "채널톡 자동 응대", "주문 단계 추적"],
    color: "#8B5CF6",
  },
  {
    icon: "📈",
    title: "자영업자 SEO·콘텐츠",
    sub: "집수리 자영업자 케이스",
    desc: "미용·집수리·식당·소상공인",
    points: ["블로그 노출 분석", "키워드 추천", "콘텐츠 자동 발행"],
    color: "#10B981",
  },
  {
    icon: "🏛",
    title: "기관·공공 운영 자동화",
    sub: "도서관·동주민센터·공공기관",
    desc: "행사·신청·보고서 자동화",
    points: ["신청 접수 자동화", "보고서 자동 생성", "데이터 통계 대시보드"],
    color: "#F59E0B",
  },
];

const funnel = [
  {
    step: "1단계",
    title: "AX Lite/Standard 컨설팅",
    desc: "한 곳에서 자동화 검증",
    color: "#3B82F6",
  },
  {
    step: "2단계",
    title: "PoC SaaS 1버전",
    desc: "같은 업종 2~3곳 적용 — 다중 검증",
    color: "#8B5CF6",
  },
  {
    step: "3단계",
    title: "멀티테넌트 SaaS 정식 출시",
    desc: "월 ₩99,000 구독 모델로 확장",
    color: "#10B981",
  },
];

const pricing = [
  {
    name: "PoC SaaS 개발",
    price: "₩5,000,000~",
    period: "1~3개월",
    desc: "검증된 자동화를 PoC SaaS로",
  },
  {
    name: "멀티테넌트 SaaS",
    price: "₩15,000,000~",
    period: "3~6개월",
    desc: "여러 기관·기업이 함께 쓰는 정식 SaaS",
    featured: true,
  },
  {
    name: "SaaS 구독",
    price: "월 ₩99,000~",
    period: "B2B · 개발 후",
    desc: "완성된 SaaS를 같은 업종 다른 곳도 사용",
  },
];

const differentiators = [
  {
    icon: "✅",
    title: "AX 검증 우선",
    desc: "무작정 SaaS 만들지 않습니다. 한 곳에서 자동화로 검증한 뒤 SaaS화합니다.",
  },
  {
    icon: "🛠",
    title: "현직 운영자가 만듦",
    desc: "5개 사업을 직접 굴리는 사람의 SaaS. academy-manager는 자체 운영 중입니다.",
  },
  {
    icon: "⚡",
    title: "claude code · n8n 기반",
    desc: "최신 AI 코딩 도구로 빠른 반복·확장. 개발 기간을 절반으로 줄입니다.",
  },
  {
    icon: "🔑",
    title: "인계 가능한 구조",
    desc: "클라이언트가 직접 운영 가능한 형태로 인계. 락인 없이 코드·데이터 전부 넘깁니다.",
  },
];

export default function SaaSDevelopmentSection() {
  return (
    <section id="saas-development" className="py-24 px-4 sm:px-6 bg-[#0A0A10]">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs text-[#F5F5F5]/40 border border-[#2A2A35] rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              SAAS DEVELOPMENT · SaaS 개발
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
              AX로 검증된 자동화,
              <br />
              <span className="text-[#3B82F6]">SaaS로 확장</span>합니다
            </h2>
            <p className="text-[#F5F5F5]/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              한 곳에서 검증한 솔루션을 멀티테넌트 SaaS로.
              <br />
              같은 업종의 다른 기관·기업도 그대로 쓸 수 있는 형태로.
            </p>
          </div>
        </FadeInSection>

        {/* 핵심 케이스 — academy-manager */}
        <FadeInSection delay={0.1}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-[#13131A] border border-[#3B82F6]/30 rounded-2xl p-6 sm:p-10 mb-20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/5 blur-3xl pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-xs bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] rounded-full px-3 py-1 mb-4">
                  CORE CASE · 자체 운영 중
                </span>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">🎓</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5]">
                    학원 관리 SaaS
                  </h3>
                </div>
                <p className="text-[#F5F5F5]/60 text-sm sm:text-base leading-relaxed mb-4">
                  <span className="text-[#3B82F6] font-semibold">academy-manager</span> — 부산AI코딩스쿨 자체 운영 학원 관리 SaaS
                </p>
                <ul className="space-y-2 text-sm text-[#F5F5F5]/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-0.5 shrink-0">▸</span>
                    Next.js + Supabase 멀티테넌트 구조
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-0.5 shrink-0">▸</span>
                    학생·강사·결제·일정·진도 통합 관리
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-0.5 shrink-0">▸</span>
                    부산코딩스쿨 3개 지점 (금정·사직·화명) 실제 운영
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "3", label: "운영 지점", unit: "개" },
                  { value: "100+", label: "관리 학생", unit: "" },
                  { value: "12", label: "자동화 워크플로우", unit: "개" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="bg-[#0A0A10] border border-[#2A2A35] rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-[#3B82F6] mb-1 tabular-nums">
                      {m.value}
                      {m.unit}
                    </div>
                    <p className="text-xs text-[#F5F5F5]/50 leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </FadeInSection>

        {/* SaaS 개발 가능 분야 */}
        <FadeInSection delay={0.1}>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              SaaS 개발 가능 분야
            </h3>
            <p className="text-[#F5F5F5]/50 text-sm sm:text-base">
              운영 경험이 있는 4개 영역에서 SaaS화 가능합니다
            </p>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-24">
          {fields.map((f, i) => (
            <FadeInSection key={f.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-6 h-full flex flex-col gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{f.icon}</span>
                    <h4 className="text-base sm:text-lg font-bold text-[#F5F5F5]">
                      {f.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#F5F5F5]/40">{f.sub}</p>
                </div>

                <p className="text-sm text-[#F5F5F5]/70">{f.desc}</p>

                <div className="space-y-2 mt-auto">
                  {f.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[#F5F5F5]/60"
                    >
                      <span style={{ color: f.color }} className="mt-0.5 shrink-0">
                        ▸
                      </span>
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* 운영 모델 — 3단 깔때기 */}
        <FadeInSection delay={0.1}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs text-[#F5F5F5]/40 border border-[#2A2A35] rounded-full px-4 py-1.5 mb-5">
              운영 모델 · 3단 깔때기
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              검증 → 확장 → 출시
            </h3>
            <p className="text-[#F5F5F5]/50 text-sm sm:text-base">
              실패 가능성을 단계별로 줄이는 운영 모델
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-4 mb-24 relative">
          {funnel.map((f, i) => (
            <FadeInSection key={f.step} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#13131A] border rounded-2xl p-6 h-full relative"
                style={{ borderColor: `${f.color}40` }}
              >
                <div
                  className="text-xs font-semibold mb-2"
                  style={{ color: f.color }}
                >
                  {f.step}
                </div>
                <h4 className="text-lg font-bold text-[#F5F5F5] mb-2">{f.title}</h4>
                <p className="text-sm text-[#F5F5F5]/60 leading-relaxed">{f.desc}</p>
                {i < funnel.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0A0A10] border border-[#2A2A35] items-center justify-center text-[#F5F5F5]/40 text-xs z-10">
                    ↓
                  </div>
                )}
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* 가격 안내 */}
        <FadeInSection delay={0.1}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs text-[#F5F5F5]/40 border border-[#2A2A35] rounded-full px-4 py-1.5 mb-5">
              가격 안내
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              단계별 명확한 가격
            </h3>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-4 mb-24">
          {pricing.map((p, i) => (
            <FadeInSection key={p.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`bg-[#13131A] border rounded-2xl p-6 h-full flex flex-col ${
                  p.featured
                    ? "border-[#3B82F6]/40"
                    : "border-[#2A2A35]"
                }`}
              >
                {p.featured && (
                  <span className="self-start text-xs bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] rounded-full px-3 py-1 mb-3">
                    추천
                  </span>
                )}
                <h4 className="text-lg font-bold text-[#F5F5F5] mb-2">{p.name}</h4>
                <div className="text-3xl font-bold text-[#3B82F6] mb-1 tabular-nums">
                  {p.price}
                </div>
                <p className="text-xs text-[#F5F5F5]/40 mb-4">{p.period}</p>
                <p className="text-sm text-[#F5F5F5]/60 leading-relaxed mt-auto">
                  {p.desc}
                </p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* 차별점 */}
        <FadeInSection delay={0.1}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs text-[#F5F5F5]/40 border border-[#2A2A35] rounded-full px-4 py-1.5 mb-5">
              AX그라운드 SaaS 개발의 4가지 차별점
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              왜 AX그라운드인가
            </h3>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-4 mb-20">
          {differentiators.map((d, i) => (
            <FadeInSection key={d.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-6 h-full flex gap-4"
              >
                <div className="text-3xl shrink-0">{d.icon}</div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#F5F5F5] mb-2">
                    {d.title}
                  </h4>
                  <p className="text-sm text-[#F5F5F5]/60 leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* CTA */}
        <FadeInSection delay={0.2}>
          <div className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              SaaS 개발, 함께 시작합시다
            </h3>
            <p className="text-[#F5F5F5]/50 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              먼저 한 곳에서 검증하고, 같은 업종의 다른 곳으로 확장합니다.
              <br />
              지금 바로 상담 신청하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={openInquiry}
                className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
              >
                💬 SaaS 개발 상담 신청
              </button>
              <a
                href="tel:010-9825-8816"
                className="inline-flex items-center justify-center gap-2 border border-[#2A2A35] hover:border-[#3B82F6] text-[#F5F5F5]/80 hover:text-[#F5F5F5] font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
              >
                📞 전화 상담 — 김진완 010-9825-8816
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

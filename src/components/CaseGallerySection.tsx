"use client";

import { motion } from "framer-motion";

type Case = {
  emoji: string;
  label: string;
  title: string;
  subtitle: string;
  effect: string;
  roi: string;
  url: string;
  duration: string;
  tag: string;
  accent: string;
  accentBg: string;
};

// 외부 고객 컨설팅 — 우리 사업이 아닌, 의뢰받아 구축한 케이스
const externalCases: Case[] = [
  {
    emoji: "🍱",
    label: "외부 고객 컨설팅",
    title: "소녀방앗간 케이터링",
    subtitle: "신청 → 시트 → 알림 → 통화·STT → AI → 카톡 → 채널톡",
    effect: "응답 24h+ → 즉시",
    roi: "월 ~10시간 응대 절감 · 견적 누락 0건",
    url: "/cases/sonyeo/quote?autoplay=1",
    duration: "17초",
    tag: "AX 컨설팅",
    accent: "#FF6B35",
    accentBg: "rgba(255,107,53,0.1)",
  },
];

// 우리가 직접 운영하며 다듬은 자동화
const internalCases: Case[] = [
  {
    emoji: "💻",
    label: "직접 운영 ⭐",
    title: "부산코딩스쿨 영업·견적",
    subtitle: "통화 STT → 노션 → 제안서·견적서 → 도장 → Vercel 배포",
    effect: "견적 30분 → 5분",
    roi: "건당 25분 · 월 ~15시간 절감",
    url: "/cases/proposal-auto?autoplay=1",
    duration: "17초",
    tag: "운영 자동화",
    accent: "#3B82F6",
    accentBg: "rgba(59,130,246,0.1)",
  },
  {
    emoji: "🏠",
    label: "직접 운영",
    title: "고개서동 새벽 자동",
    subtitle: "새벽 4시 자동 → 체크인 정리 → 텔레그램 → 손님 카톡",
    effect: "정리 1h → 0분",
    roi: "매일 1시간 · 월 ~30시간 절감",
    url: "/cases/checkin?autoplay=1",
    duration: "13초",
    tag: "숙박 자동화",
    accent: "#10B981",
    accentBg: "rgba(16,185,129,0.1)",
  },
  {
    emoji: "🛠️",
    label: "직접 운영",
    title: "수리공의온도 콘텐츠",
    subtitle: "시공 사진·메모 → AI 글 → 블로그·당근 동시 자동 발행",
    effect: "글쓰기 1h → 자동",
    roi: "글당 ~1시간 절감 · 발행 채널 2배",
    url: "/cases/surigong?autoplay=1",
    duration: "16초",
    tag: "콘텐츠 자동화",
    accent: "#F59E0B",
    accentBg: "rgba(245,158,11,0.1)",
  },
  {
    emoji: "💻",
    label: "직접 운영",
    title: "부산코딩스쿨 칼럼",
    subtitle: "강의 결과 → AI 칼럼 → 사이트·네이버 블로그 동시 자동",
    effect: "칼럼 30분 → 자동",
    roi: "건당 ~30분 절감 · 발행 누락 0건",
    url: "/cases/content-auto?autoplay=1",
    duration: "15초",
    tag: "콘텐츠 자동화",
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.1)",
  },
];

function CaseCard({ c, i }: { c: Case; i: number }) {
  return (
    <motion.a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative bg-[#F6F6F8] border border-[#E4E4E7] rounded-2xl p-6 hover:border-[#3B82F6]/40 transition-all overflow-hidden"
      style={{ display: "block" }}
    >
      {/* 호버 시 배경 그라디언트 */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(135deg, ${c.accentBg} 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        {/* 라벨 + 태그 */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-semibold tracking-wider"
            style={{ color: c.accent }}
          >
            {c.label}
          </span>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
            style={{ background: c.accentBg, color: c.accent }}
          >
            {c.tag}
          </span>
        </div>

        {/* 이모지 + 제목 */}
        <div className="flex items-start gap-3 mb-4">
          <span className="text-4xl flex-shrink-0">{c.emoji}</span>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-[#18181B] leading-tight">
              {c.title}
            </h3>
          </div>
        </div>

        {/* 흐름 */}
        <p className="text-sm text-[#18181B]/60 leading-relaxed mb-5 min-h-[60px]">
          {c.subtitle}
        </p>

        {/* 효과 + ROI 환산 */}
        <div
          className="rounded-xl p-3 mb-4 border"
          style={{
            background: c.accentBg,
            borderColor: `${c.accent}33`,
          }}
        >
          <div
            className="text-[10px] font-semibold tracking-wider opacity-70 mb-0.5"
            style={{ color: c.accent }}
          >
            EFFECT
          </div>
          <div className="text-base font-bold" style={{ color: c.accent }}>
            {c.effect}
          </div>
          <div className="text-[11px] text-[#18181B]/55 mt-1.5 pt-1.5 border-t border-[#E4E4E7]/60">
            💰 {c.roi}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#18181B]/50">
            🎬 자동 재생 · {c.duration}
          </span>
          <span
            className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
            style={{ color: c.accent }}
          >
            영상 보기
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
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function CaseGallerySection() {
  return (
    <section id="cases" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#3B82F6]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#F6F6F8] border border-[#E4E4E7] rounded-full px-4 py-1.5 text-sm text-[#3B82F6] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            CASE GALLERY · 자동화 사례
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-5">
            말로 설명하는 게 아니라,
            <br />
            <span className="text-[#3B82F6]">5개 자동화를</span> 보여드립니다
          </h2>
          <p className="text-base sm:text-lg text-[#18181B]/60 max-w-2xl mx-auto leading-relaxed">
            외부 고객 컨설팅 1건 + 우리가 직접 운영하는 4개 사업.
            <br />
            클릭하면 십수 초 안에 풀 사이클이 자동 재생됩니다.
          </p>
        </motion.div>

        {/* 그룹 1: 외부 고객 컨설팅 */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-wider text-[#FF6B35] uppercase">
              ① 외부 고객 컨설팅
            </span>
            <span className="text-xs text-[#18181B]/40">
              — 의뢰받아 구축하고 직원에게 넘겨드린 케이스
            </span>
            <div className="flex-1 h-px bg-[#E4E4E7]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {externalCases.map((c, i) => (
              <CaseCard key={c.url} c={c} i={i} />
            ))}
            {/* 외부 케이스 추가 예정 안내 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="border border-dashed border-[#E4E4E7] rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[280px]"
            >
              <span className="text-3xl mb-3 opacity-50">＋</span>
              <p className="text-sm text-[#18181B]/50 leading-relaxed">
                다음 컨설팅 사례는
                <br />
                당신의 회사일 수 있습니다
              </p>
              <a
                href="/diagnosis"
                className="mt-4 text-xs font-semibold text-[#FF6B35] hover:underline"
              >
                30초 무료 진단 →
              </a>
            </motion.div>
          </div>
        </div>

        {/* 그룹 2: 직접 운영 */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-wider text-[#3B82F6] uppercase">
              ② 우리가 직접 운영하며 다듬은 자동화
            </span>
            <span className="text-xs text-[#18181B]/40">
              — 4개 사업에서 매일 돌아가는 시스템
            </span>
            <div className="flex-1 h-px bg-[#E4E4E7]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {internalCases.map((c, i) => (
              <CaseCard key={c.url} c={c} i={i} />
            ))}
          </div>
        </div>

        {/* ROI 환산 안내 */}
        <p className="text-center text-[11px] text-[#18181B]/35 mt-6">
          * 절감 효과는 실제 운영 데이터 기반 환산이며 업무량에 따라 달라집니다.
        </p>

        {/* 마무리 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14 max-w-3xl mx-auto"
        >
          <div className="inline-block bg-[#F6F6F8] border border-[#E4E4E7] rounded-2xl px-7 py-5 text-left">
            <div className="text-sm text-[#18181B]/50 mb-2 tracking-wider">
              CONSULTANT&apos;S MOAT
            </div>
            <p className="text-base sm:text-lg text-[#18181B]/85 leading-relaxed">
              외부 컨설턴트가 절대 못 가지는 자산 —{" "}
              <span className="text-[#3B82F6] font-semibold">
                4개 사업을 직접 굴리며 다듬은 자동화
              </span>
              .
              <br />
              <span className="text-[#18181B]/60 text-sm">
                현장 언어 이해 · 도구 능숙 · 직원이 이어받는 구조 설계 — 한 사람이 이 셋을 갖추기는 쉽지 않습니다.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

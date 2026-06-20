"use client";

import { motion } from "framer-motion";
import { openInquiry } from "@/lib/openInquiry";

const badges = [
  { icon: "🏛️", text: "누적 100+ 기관 · 310회 출강" },
  { icon: "💰", text: "직접 운영 사업 누적매출 50억" },
  { icon: "📍", text: "부산·울산·경남 밀착" },
];

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-6 pt-28 sm:pt-32 pb-20 text-center relative overflow-hidden">
      {/* 은은한 배경 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#F6F6F8] border border-[#E4E4E7] rounded-full px-4 py-1.5 text-sm font-semibold text-[#3B82F6] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
          부산·울산·경남 · 업무 자동화 · AX 전환
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.2] tracking-tight mb-6"
        >
          반복 업무에 뺏기던 시간,
          <br />
          <span className="bg-[linear-gradient(180deg,transparent_58%,#BFDBFE_58%)] px-1">
            직원에게 돌려드립니다
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#18181B]/55 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          매주 반복되는 보고서·정산·문서 작업을 AI가 대신하게.
          <br className="hidden sm:block" />
          <strong className="font-semibold text-[#18181B]">직접 사업을 AI로 운영하는 팀</strong>이, 직원이 이어받아 굴리는 구조까지 만듭니다.
        </motion.p>

        {/* 뱃지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2.5 mb-10"
        >
          {badges.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 bg-[#F8F8FA] border border-[#ECECEF] rounded-full px-4 py-2 text-sm text-[#3F3F46] font-medium"
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="/diagnosis"
            className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-base shadow-[0_4px_14px_rgba(59,130,246,0.25)]"
          >
            30초 무료 진단 →
          </a>
          <button
            onClick={() => openInquiry()}
            className="inline-flex items-center justify-center gap-2 bg-white border border-[#E4E4E7] hover:border-[#3B82F6] text-[#27272A] font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
          >
            맞춤 상담
          </button>
        </motion.div>
      </div>

      {/* 워크샵 현장 — 진짜 사진 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 mt-16 w-full max-w-4xl mx-auto"
      >
        <img
          src="/ax-workshop.jpg"
          alt="AX 컨설팅 워크숍 현장 — 직접 운영하며 다듬은 자동화를 가르치는 모습"
          className="w-full rounded-2xl border border-[#E4E4E7] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)]"
        />
        <p className="mt-3 text-sm text-[#18181B]/45">
          AX 컨설턴트 양성과정 — 직접 운영하는 자동화를 현장에서 함께 설계합니다
        </p>
      </motion.div>
    </section>
  );
}

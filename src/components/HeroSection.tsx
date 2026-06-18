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
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-20 pb-16 text-center relative overflow-hidden">
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
    </section>
  );
}

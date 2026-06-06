"use client";

import { motion } from "framer-motion";
import { openInquiry } from "@/lib/openInquiry";

const badges = [
  { icon: "🏛️", text: "누적 100+ 기관 · 2025년 310회 출강" },
  { icon: "📦", text: "교육 당일 결과물 완성" },
  { icon: "🔨", text: "직접 사업을 AI로 운영하는 팀" },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-20 pb-16 text-center relative overflow-hidden">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#13131A] border border-[#2A2A35] rounded-full px-4 py-1.5 text-sm text-[#3B82F6] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
          부산·울산·경남 AI 실무교육 · AX 컨설팅 · SaaS 개발 전문
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
        >
          반복 업무에 쓰던 시간,
          <br />
          <span className="text-[#3B82F6]">AI한테 넘겼습니다</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#F5F5F5]/60 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          AI를 <span className="text-[#3B82F6]">가르치기만</span> 하지 않습니다.
          부산에서 직접 사업을 AI로 운영하는 팀이,
          그 시스템을 그대로 <span className="text-[#3B82F6]">교육</span>하고 <span className="text-[#3B82F6]">자동화</span>해 드립니다.<br />
          부산·울산·경남 기업·공공기관 대상 — 교육 당일, 직원이 만든 결과물을 다음 날부터 씁니다.
        </motion.p>

        {/* 뱃지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {badges.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 bg-[#13131A] border border-[#2A2A35] rounded-full px-4 py-2 text-sm text-[#F5F5F5]/80"
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </span>
          ))}
        </motion.div>

        {/* CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <button
            onClick={() => openInquiry()}
            className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
          >
            💬 교육·컨설팅 문의
          </button>
          <a
            href="/diagnosis"
            className="inline-flex items-center justify-center gap-2 border border-[#2A2A35] hover:border-[#3B82F6] text-[#F5F5F5]/80 hover:text-[#F5F5F5] font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
          >
            🔍 30초 무료 진단 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

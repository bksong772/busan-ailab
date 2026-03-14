"use client";

import { motion } from "framer-motion";

const badges = [
  { icon: "⏱", text: "반복 업무 시간 80% 절감" },
  { icon: "💰", text: "홈페이지 제작 비용 90% 절감" },
  { icon: "📝", text: "콘텐츠 제작 시간 85% 단축" },
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
          부산 기업·기관·소상공인 대상 AI 실무 교육
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
          블로그, 홈페이지, 고객응대, 제안서 —<br />
          저희가 실제 사업에 적용한 방법 그대로 드립니다.
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
          <a
            href="https://pf.kakao.com/_LKGRX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
          >
            💬 카카오로 문의하기
          </a>
          <a
            href="#programs"
            className="inline-flex items-center justify-center gap-2 border border-[#2A2A35] hover:border-[#3B82F6] text-[#F5F5F5]/80 hover:text-[#F5F5F5] font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
          >
            프로그램 보기 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

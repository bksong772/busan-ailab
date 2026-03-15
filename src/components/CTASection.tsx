"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { openInquiry } from "@/lib/openInquiry";

const inquiryTips = [
  { icon: "📋", text: "현재 상황 (업무/학습/프로젝트)" },
  { icon: "🎯", text: "원하는 결과 (자동화/서비스/업무 개선 등)" },
  { icon: "🗓️", text: "가능한 일정 (대략적 기간/횟수)" },
];

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <FadeInSection>
          <div className="bg-gradient-to-br from-[#13131A] to-[#1a1a2e] border border-[#3B82F6]/20 rounded-3xl p-10 sm:p-14 text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-sm text-[#3B82F6] border border-[#3B82F6]/30 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                지금 바로 시작하세요
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
              어떤 형태든 괜찮습니다.<br />
              먼저 물어봐 주세요.
            </h2>
            <p className="text-[#F5F5F5]/50 text-base sm:text-lg mb-8">
              규모·예산·일정 — 상황 맞는 운영안을 빠르게 정리해드립니다.
            </p>

            {/* 문의 팁 */}
            <div className="bg-[#0A0A0F]/60 border border-[#2A2A35] rounded-2xl p-5 mb-8 text-left">
              <p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-wider mb-4">
                💡 문의 시 이런 내용을 적어주시면 더 빨라요
              </p>
              <div className="space-y-3">
                {inquiryTips.map((t) => (
                  <div key={t.text} className="flex items-center gap-3 text-sm text-[#F5F5F5]/70">
                    <span className="text-base">{t.icon}</span>
                    <span>{t.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={openInquiry}
                className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-4 rounded-xl transition-all text-base"
              >
                💬 교육 문의하기
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="tel:010-9825-8816"
                className="inline-flex items-center justify-center gap-2 border border-[#2A2A35] hover:border-[#3B82F6] text-[#F5F5F5]/80 hover:text-[#F5F5F5] font-semibold px-8 py-4 rounded-xl transition-all text-base"
              >
                📞 010-9825-8816
              </motion.a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

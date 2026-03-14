"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

export default function BridgeSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0F0F1A]">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInSection>
          <div className="mb-6 inline-flex items-center gap-2 text-sm text-[#F5F5F5]/40 border border-[#2A2A35] rounded-full px-4 py-1.5">
            <span>🎓</span> 관련 브랜드
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
            부산AI랩은 부산AI코딩스쿨 운영팀이 만들었습니다
          </h2>
          <p className="text-[#F5F5F5]/50 text-base sm:text-lg mb-10 leading-relaxed">
            100개 이상 기관 교육,<br />
            부울경 최다 출강 AI 교육팀의 기업 전문 브랜드입니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              whileHover={{ y: -2 }}
              href="https://busanaicodingschool.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#13131A] border border-[#2A2A35] hover:border-[#3B82F6] text-[#F5F5F5]/80 hover:text-[#F5F5F5] font-medium px-6 py-3 rounded-xl transition-all text-sm"
            >
              🎓 부산AI코딩스쿨 →
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://blog.naver.com/rlaworlawo321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#13131A] border border-[#2A2A35] hover:border-[#3B82F6] text-[#F5F5F5]/80 hover:text-[#F5F5F5] font-medium px-6 py-3 rounded-xl transition-all text-sm"
            >
              📝 운영 블로그 →
            </motion.a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

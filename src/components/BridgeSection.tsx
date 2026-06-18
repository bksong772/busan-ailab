"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

export default function BridgeSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#F7F7FA]">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInSection>
          <div className="mb-6 inline-flex items-center gap-2 text-sm text-[#18181B]/40 border border-[#E4E4E7] rounded-full px-4 py-1.5">
            <span>🎓</span> 관련 브랜드
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
            AX그라운드는 부산AI코딩스쿨 운영팀이 만들었습니다
          </h2>
          <p className="text-[#18181B]/50 text-base sm:text-lg mb-10 leading-relaxed">
            100개 이상 기관 교육,<br />
            부울경 최다 출강 AI 교육팀의 기업 전문 브랜드입니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              whileHover={{ y: -2 }}
              href="https://busanaicodingschool.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F6F6F8] border border-[#E4E4E7] hover:border-[#3B82F6] text-[#18181B]/80 hover:text-[#18181B] font-medium px-6 py-3 rounded-xl transition-all text-sm"
            >
              🎓 부산AI코딩스쿨 →
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://blog.naver.com/rlaworlawo321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F6F6F8] border border-[#E4E4E7] hover:border-[#3B82F6] text-[#18181B]/80 hover:text-[#18181B] font-medium px-6 py-3 rounded-xl transition-all text-sm"
            >
              📝 운영 블로그 →
            </motion.a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

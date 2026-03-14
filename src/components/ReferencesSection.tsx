"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const badges = [
  { icon: "🏛️", text: "100+ 누적 출강 기관" },
  { icon: "📅", text: "310회+ 연간 출강 (2025)" },
  { icon: "🌏", text: "부울경 전역 공공기관·기업 출강" },
];

const refs = [
  {
    org: "부산인재개발원",
    program: "공무원 AI 로봇코딩 실습",
    type: "기관",
    icon: "🏛️",
    color: "#3B82F6",
  },
  {
    org: "한국주택금융공사",
    program: "신입직원 파이썬 금융데이터 분석",
    type: "기관",
    icon: "🏦",
    color: "#8B5CF6",
  },
  {
    org: "부산대학교 환경공학과",
    program: "대학원생 AI 온실가스 예측 모델",
    type: "대학",
    icon: "🎓",
    color: "#10B981",
  },
  {
    org: "경남테크노파크",
    program: "코딩강사 대상 블록코딩 교육방법론",
    type: "기관",
    icon: "🔬",
    color: "#F59E0B",
  },
];

export default function ReferencesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs text-[#F5F5F5]/40 border border-[#2A2A35] rounded-full px-4 py-1.5 mb-5">
              부산AI코딩스쿨 교육팀 기반
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">교육 경험이 다릅니다</h2>
            <p className="text-[#F5F5F5]/50 text-base sm:text-lg">
              부산AI랩은 부산AI코딩스쿨 운영팀이 만든 AI 실무 전문 브랜드입니다.<br />
              아래는 팀이 직접 출강한 기관들입니다.
            </p>
          </div>
        </FadeInSection>

        {/* 실적 뱃지 */}
        <FadeInSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {badges.map((b) => (
              <span
                key={b.text}
                className="inline-flex items-center gap-2 bg-[#13131A] border border-[#2A2A35] rounded-full px-4 py-2 text-sm text-[#F5F5F5]/70"
              >
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </span>
            ))}
          </div>
        </FadeInSection>

        {/* 레퍼런스 카드 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {refs.map((r, i) => (
            <FadeInSection key={r.org} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{r.icon}</span>
                  <span
                    className="text-xs rounded-full px-2.5 py-1 font-medium"
                    style={{
                      backgroundColor: `${r.color}15`,
                      border: `1px solid ${r.color}30`,
                      color: r.color,
                    }}
                  >
                    {r.type}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[#F5F5F5] mb-1">{r.org}</p>
                  <p className="text-sm text-[#F5F5F5]/55 leading-snug">{r.program}</p>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

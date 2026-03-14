"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const cards = [
  {
    step: "01",
    title: "목표 중심 설계",
    desc: "강의 목차부터 시작하지 않습니다.\n목표(결과물)와 제약(시간/인원/환경)을 먼저 정의하고 커리큘럼을 설계합니다.",
    icon: "🎯",
    color: "#3B82F6",
  },
  {
    step: "02",
    title: "현장 맞춤 조율",
    desc: "담당자 요구와 수강생 체감 난이도 사이를 조율하며,\n완주·성과가 남는 운영 형태로 정리합니다.",
    icon: "⚖️",
    color: "#8B5CF6",
  },
  {
    step: "03",
    title: "결과물로 증명",
    desc: "이해에서 끝내지 않습니다.\n배포 가능한 결과물 또는 현업 적용 가능한 산출물을 남깁니다.",
    icon: "📦",
    color: "#10B981",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">이렇게 운영합니다</h2>
            <p className="text-[#F5F5F5]/50 text-base sm:text-lg">
              AX자동화·AI업무자동화 교육, 방법론이 달라야 현장에서 씁니다.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <FadeInSection key={c.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-7 flex flex-col gap-5 h-full"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold tabular-nums px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${c.color}15`,
                      border: `1px solid ${c.color}30`,
                      color: c.color,
                    }}
                  >
                    {c.step}
                  </span>
                  <span className="text-2xl">{c.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F5] mb-3">{c.title}</h3>
                  <p className="text-sm text-[#F5F5F5]/60 leading-relaxed whitespace-pre-line">
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

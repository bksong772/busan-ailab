"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const cases = [
  {
    title: "바이브코딩으로 자동견적 프로그램 제작",
    desc: "바이브코딩으로 자동 견적프로그램 제작 후, PDF 파일 자동생성 및 노션 DB 구축",
    tags: ["#바이브코딩", "#자동화", "#노션연동"],
    icon: "🧾",
    color: "#3B82F6",
  },
  {
    title: "비전공자 웹 MVP 제작",
    desc: "아이디어 단계에 머물던 기획을 실제 동작하는 웹 MVP로 구현",
    tags: ["#웹개발", "#MVP", "#비전공자"],
    icon: "🚀",
    color: "#8B5CF6",
  },
  {
    title: "AI 챗봇 활용 업무 자동화",
    desc: "바이브코딩과 RAG 기반으로 실무자가 직접 AI Agent를 설계·구현",
    tags: ["#AI챗봇", "#RAG", "#AIAgent"],
    icon: "🤖",
    color: "#10B981",
  },
];

export default function IndividualCasesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">개인 실무자 사례</h2>
            <p className="text-[#F5F5F5]/50 text-base sm:text-lg">
              비전공자도 교육 후 실제로 만들었습니다
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <FadeInSection key={c.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-6 flex flex-col gap-4 h-full"
              >
                <span className="text-3xl">{c.icon}</span>
                <div>
                  <h3 className="text-base font-bold text-[#F5F5F5] mb-2 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#F5F5F5]/60 leading-relaxed">{c.desc}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-full px-2.5 py-1"
                      style={{
                        backgroundColor: `${c.color}15`,
                        border: `1px solid ${c.color}30`,
                        color: c.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

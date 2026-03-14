"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const cases = [
  {
    title: "바이브코딩으로 자동견적 프로그램 제작",
    desc: "바이브코딩으로 자동 견적 프로그램 제작 후, PDF 자동생성 및 노션 DB 연동까지 구현",
    tags: ["#바이브코딩", "#자동화", "#노션연동"],
    icon: "🧾",
    color: "#3B82F6",
    link: "https://surigong-temp.vercel.app/tool/estimate",
    linkLabel: "결과물 보기 →",
  },
  {
    title: "비전공자의 웹 서비스 MVP 제작",
    desc: "아이디어 단계에 머물던 기획을 실제 동작하는 웹 MVP로 구현. 코딩 경험 없이 완성.",
    tags: ["#웹개발", "#MVP", "#비전공자"],
    icon: "🚀",
    color: "#8B5CF6",
    link: null,
    linkLabel: null,
  },
  {
    title: "실무자가 직접 AI Agent 설계·구현",
    desc: "바이브코딩과 RAG 기반으로 실무자가 직접 AI Agent를 설계하고 업무에 바로 적용",
    tags: ["#AI챗봇", "#RAG", "#AIAgent"],
    icon: "🤖",
    color: "#10B981",
    link: null,
    linkLabel: null,
  },
];

export default function IndividualCasesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              교육 후 실제로 만들어낸 것들
            </h2>
            <p className="text-[#F5F5F5]/50 text-base sm:text-lg">
              이해에서 끝나지 않습니다. 결과물이 남습니다.
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
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#F5F5F5] mb-2 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#F5F5F5]/60 leading-relaxed">{c.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
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
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-xs text-[#3B82F6] border border-[#3B82F6]/30 hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 rounded-full px-3 py-1.5 transition-colors"
                  >
                    {c.linkLabel}
                  </a>
                )}
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

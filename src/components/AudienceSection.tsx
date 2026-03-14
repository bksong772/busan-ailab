"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const audiences = [
  {
    title: "관공서·공공기관",
    icon: "🏛️",
    pain: '"AI 교육 예산은 있는데 어디서 해야 할지 모르겠다"',
    solution:
      "제안서·서류 지원 가능. 부울경 공공기관 100곳 이상 교육 경험.",
    tags: ["#제안서지원", "#공공기관", "#부울경"],
    color: "#3B82F6",
  },
  {
    title: "부산 중소기업",
    icon: "🏢",
    pain: '"직원들 AI 교육 시키고 싶은데 실무에 맞는 곳을 못 찾겠다"',
    solution:
      "업종·직무별 맞춤 커리큘럼. 교육 후 바로 적용.",
    tags: ["#맞춤커리큘럼", "#재직자교육", "#실무적용"],
    color: "#8B5CF6",
  },
  {
    title: "소상공인·자영업자",
    icon: "🛍️",
    pain: '"SNS, 고객응대, 문서 작업이 너무 힘들다"',
    solution:
      "AI로 혼자 해도 되는 구조 만들어드립니다. 수리공의온도·고개서동이 그 증거.",
    tags: ["#1인운영", "#콘텐츠자동화", "#소상공인AI"],
    color: "#10B981",
  },
];

export default function AudienceSection() {
  return (
    <section id="audience" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              이런 상황이라면, 부산AI랩이 맞습니다
            </h2>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-5">
          {audiences.map((a, i) => (
            <FadeInSection key={a.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-6 h-full flex flex-col gap-5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{a.icon}</span>
                  <h3 className="text-lg font-bold text-[#F5F5F5]">{a.title}</h3>
                </div>

                <div className="bg-[#0A0A0F] border border-[#2A2A35] rounded-xl p-4">
                  <p className="text-sm text-[#F5F5F5]/60 italic leading-relaxed">{a.pain}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: a.color }}>
                    부산AI랩의 솔루션
                  </p>
                  <p className="text-sm text-[#F5F5F5]/80 leading-relaxed">{a.solution}</p>
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {a.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-full px-2.5 py-1"
                      style={{ backgroundColor: `${a.color}15`, border: `1px solid ${a.color}30`, color: a.color }}
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

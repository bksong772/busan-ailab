"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const skills = [
  {
    skill: "AI 콘텐츠 자동화",
    what: "Claude·ChatGPT로 블로그 글을 자동 작성하고, 당근·인스타·카카오 콘텐츠까지 한 번에 만드는 시스템을 직접 구축해 운영 중입니다.",
    result: "콘텐츠 제작 시간 85% 단축",
    icon: "✍️",
    color: "#3B82F6",
    cases: [{ name: "수리공의온도", link: "https://surigong-official.vercel.app/" }],
  },
  {
    skill: "Claude API 챗봇 직접 제작",
    what: "매장·공간 전용 AI 챗봇을 Claude API로 직접 설계·제작해 홈페이지에 임베드, 현재 24시간 운영 중입니다.",
    result: "고객 응대 시간 70% 절감",
    icon: "🤖",
    color: "#10B981",
    cases: [{ name: "고개서동", link: "https://gogaeseodong-sigma.vercel.app/" }],
  },
  {
    skill: "Claude Code로 홈페이지·소개서 제작",
    what: "코딩 없이 Claude Code만으로 실제 배포 가능한 홈페이지와 웹 소개서를 직접 제작했습니다.",
    result: "제작 비용 90% 절감",
    icon: "💻",
    color: "#8B5CF6",
    cases: [
      { name: "수리공의온도", link: "https://surigong-official.vercel.app/" },
      { name: "고개서동", link: "https://gogaeseodong-sigma.vercel.app/" },
    ],
  },
  {
    skill: "타겟별 웹 제안서 자동화",
    what: "도서관용·기업용·기관용 등 타겟에 맞는 웹 제안서를 AI로 빠르게 제작해 BtoG 계약을 연속 수주했습니다.",
    result: "제안서 제작 시간 75% 단축",
    icon: "📄",
    color: "#F59E0B",
    cases: [{ name: "부산AI코딩스쿨", link: "https://busanaicodingschool.vercel.app/" }],
  },
];

function SkillCard({ s, index }: { s: typeof skills[0]; index: number }) {
  return (
    <FadeInSection delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-6 flex flex-col gap-4 h-full"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{s.icon}</span>
          <h3 className="text-base font-bold text-[#F5F5F5] leading-snug">{s.skill}</h3>
        </div>

        <p className="text-sm text-[#F5F5F5]/60 leading-relaxed flex-1">{s.what}</p>

        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium self-start"
          style={{ backgroundColor: `${s.color}15`, border: `1px solid ${s.color}30`, color: s.color }}
        >
          ✓ {s.result}
        </div>

        <div className="pt-2 border-t border-[#2A2A35]">
          <p className="text-xs text-[#F5F5F5]/30 mb-2">적용 사례</p>
          <div className="flex flex-wrap gap-2">
            {s.cases.map((c) => (
              <a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#3B82F6] border border-[#3B82F6]/30 hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 rounded-full px-3 py-1 transition-colors"
              >
                {c.name} →
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </FadeInSection>
  );
}

export default function ProofSection() {
  return (
    <section id="proof" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              교육 내용, 저희가 먼저 직접 구현했습니다
            </h2>
            <p className="text-[#F5F5F5]/50 text-base sm:text-lg max-w-2xl mx-auto">
              수업에서 가르치는 모든 방법은<br />
              실제 운영 중인 서비스에서 검증된 것입니다.
            </p>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => (
            <SkillCard key={s.skill} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

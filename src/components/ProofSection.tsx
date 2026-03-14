"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const cases = [
  {
    name: "수리공의온도",
    desc: "집수리 매칭 플랫폼. 런칭 40일 만에 매출 발생.",
    before: "블로그·당근 콘텐츠 매번 수동 작성, 홈페이지 외주 의존",
    after: "AI로 블로그·당근 자동 생성, Claude Code로 직접 제작",
    result: "콘텐츠 제작 시간 85% 단축",
    tags: ["#블로그자동화", "#콘텐츠제작", "#홈페이지제작"],
    link: "https://surigong-official.vercel.app/",
    emoji: "🔧",
  },
  {
    name: "고개서동",
    desc: "부산 서동 공간 운영 (숙박·공유주방·영화감상실)",
    before: "고객 문의 직접 응대, 안내자료 수동 제작",
    after: "Claude API 챗봇으로 24시간 자동 응대 (현재 운영 중), 가이드북 AI로 제작, 홈페이지 Claude Code로 구축",
    result: "고객 응대 시간 70% 절감",
    tags: ["#챗봇구축", "#고객응대자동화", "#가이드북"],
    link: "https://gogaeseodong-sigma.vercel.app/",
    emoji: "🏡",
  },
  {
    name: "부산AI코딩스쿨",
    desc: "부울경 AI·코딩 교육 전문기관. 100개 이상 기관 출강.",
    before: "기관별 제안서 매번 처음부터 제작, 블로그 수동 운영",
    after: "타겟별 맞춤 웹 제안서 제작 (도서관용·기업용 등), 블로그 AI 자동화, 홈페이지 직접 구축",
    result: "제안서 제작 시간 75% 단축 → BtoG 계약 연속 수주",
    tags: ["#제안서자동화", "#블로그자동화", "#B2B영업"],
    link: "https://busanaicodingschool.vercel.app/",
    emoji: "🎓",
  },
];

function CaseCard({ c, index }: { c: typeof cases[0]; index: number }) {
  return (
    <FadeInSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-6 flex flex-col gap-4 h-full"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{c.emoji}</span>
              <h3 className="text-lg font-bold text-[#F5F5F5]">{c.name}</h3>
            </div>
            <p className="text-sm text-[#F5F5F5]/50">{c.desc}</p>
          </div>
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs text-[#3B82F6] border border-[#3B82F6]/30 hover:border-[#3B82F6] rounded-full px-3 py-1 transition-colors"
          >
            방문 →
          </a>
        </div>

        <div className="space-y-3">
          <div className="bg-[#0A0A0F] border border-[#2A2A35] rounded-xl p-4">
            <p className="text-xs text-[#F5F5F5]/40 font-medium mb-1 uppercase tracking-wider">Before</p>
            <p className="text-sm text-[#F5F5F5]/70">{c.before}</p>
          </div>
          <div className="bg-[#3B82F6]/5 border border-[#3B82F6]/20 rounded-xl p-4">
            <p className="text-xs text-[#3B82F6] font-medium mb-1 uppercase tracking-wider">After</p>
            <p className="text-sm text-[#F5F5F5]/80">{c.after}</p>
          </div>
        </div>

        <div className="mt-auto">
          <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full px-3 py-1.5 text-sm text-[#3B82F6] font-medium mb-3">
            ✓ {c.result}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {c.tags.map((tag) => (
              <span key={tag} className="text-xs text-[#F5F5F5]/40 bg-[#2A2A35]/50 rounded-full px-2.5 py-1">
                {tag}
              </span>
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
              말이 아닌, 우리 사업으로 증명합니다
            </h2>
            <p className="text-[#F5F5F5]/50 text-base sm:text-lg max-w-2xl mx-auto">
              부산AI랩은 AI 교육만 하는 곳이 아닙니다.<br />
              직접 여러 사업을 AI로 운영하면서 검증한 방법을 가르칩니다.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <CaseCard key={c.name} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

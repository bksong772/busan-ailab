"use client";

import { motion } from "framer-motion";
import { openInquiry } from "@/lib/openInquiry";

const stats = [
  { num: "28개", label: "직접 창업·운영한 공간 (10년)" },
  { num: "40억+", label: "누적 매출" },
  { num: "310회+", label: "2025년 기관 출강" },
  { num: "500+", label: "창업 코칭 팀 · 4년 연속" },
];

const blocks = [
  {
    title: "지금 직접 운영합니다",
    items: [
      "부산AI코딩스쿨 — 2개 지점 (초·중·고·기관 AI·코딩 교육)",
      "고개서동 — 6개 공간 로컬 공간사업 (숙소·공유주방·OTT룸)",
      "(전) 공유독서실 블루닷라운지 15개 · 쉐어하우스 송스빌 4개",
    ],
  },
  {
    title: "AX(AI 전환) 실적",
    items: [
      "소녀방앗간 업무 대시보드 구축 — 카카오 알림톡·견적서 자동발행",
      "학원 통합관리·재무·예약·정산·SNS 자동화 시스템 자체 개발",
      "Claude·OpenAI API·n8n으로 본인 사업 전반에 AI 자동화 직접 적용",
    ],
  },
  {
    title: "강의·심사 (선별)",
    items: [
      "언더독스(UD) 임팩트 파트너 코치 — 2022·2024·2025 우수파트너 선정",
      "하나 소셜벤처 최종 심사위원 · 하나유니버시티 창업강의 (부산대·동아대·대구가톨릭대)",
      "서울시 50플러스재단·대구문화재단·경상국립대·전남·울산창조경제혁신센터 등",
    ],
  },
];

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="py-20 px-4 sm:px-6 relative overflow-hidden border-t border-[#1A1A22]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[#3B82F6]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#13131A] border border-[#2A2A35] rounded-full px-4 py-1.5 text-sm text-[#3B82F6] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            FOUNDER · 대표 코치
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
            강의실 밖에서
            <br />
            <span className="text-[#3B82F6]">직접 합니다</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F5F5]/60 max-w-2xl mx-auto leading-relaxed">
            10년간 28개 공간을 창업·운영하고, 그 사업을 직접 AI로 자동화한
            <br className="hidden sm:block" />
            실전 운영자가 그대로 교육하고 컨설팅합니다.
          </p>
        </motion.div>

        {/* 프로필 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-6 sm:p-8 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            {/* 사진 */}
            <div className="shrink-0">
              <img
                src="/founder.jpg"
                alt="송병근 코치 — AX(AI 전환) 코치, 부산 AI 실무교육·자동화 컨설팅"
                className="w-32 h-40 sm:w-36 sm:h-44 object-cover rounded-xl border border-[#2A2A35] grayscale"
              />
            </div>
            {/* 이름·타이틀 */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-1">송병근 <span className="text-base font-medium text-[#F5F5F5]/60">코치</span></h3>
              <p className="text-[#3B82F6] font-semibold mb-2">AX(AI 전환) 코치 · 창업 코치</p>
              <p className="text-sm text-[#F5F5F5]/55 mb-5">현직 창업가 · 소상공인 · 공간 · 교육 전문</p>

              {/* 숫자 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="bg-[#0A0A0F] border border-[#2A2A35] rounded-xl px-3 py-3 text-center">
                    <div className="text-xl font-bold text-[#3B82F6]">{s.num}</div>
                    <div className="text-[11px] text-[#F5F5F5]/50 leading-tight mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 경력 블록 3개 */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-5"
            >
              <h4 className="text-sm font-bold text-[#F5F5F5] mb-3 pb-3 border-b border-[#2A2A35]">{b.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {b.items.map((it, j) => (
                  <li key={j} className="text-xs text-[#F5F5F5]/60 leading-relaxed flex gap-2">
                    <span className="text-[#3B82F6] shrink-0">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <button
            onClick={() => openInquiry()}
            className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
          >
            💬 강의·컨설팅 의뢰하기
          </button>
          <a
            href="/axground-company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#2A2A35] hover:border-[#3B82F6] text-[#F5F5F5]/80 hover:text-[#F5F5F5] font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
          >
            📄 회사소개서 (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}

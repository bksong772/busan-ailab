"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const programs = [
  {
    title: "AI 콘텐츠 자동화 워크숍",
    sub: "블로그·SNS·홍보물, AI로 혼자 다 만드는 법",
    time: "반나절 3시간",
    target: "소상공인, 관공서 홍보 담당자",
    curriculum: [
      "1교시: Claude·ChatGPT로 블로그 글 자동 작성",
      "2교시: 캔바 + AI로 홍보 이미지·카드뉴스 제작",
      "3교시: 당근·인스타·카카오 콘텐츠 한번에 만들기",
    ],
    result: "업종 맞춤 블로그 글 3개 + AI 프롬프트 템플릿",
    caseRef: "수리공의온도 블로그·당근 운영",
    icon: "✍️",
    color: "#3B82F6",
  },
  {
    title: "AI 홈페이지·소개서 제작 워크숍",
    sub: "코딩 몰라도 홈페이지 만드는 법",
    time: "하루 6시간",
    target: "기업 홍보팀, 관공서 담당자, 스타트업",
    curriculum: [
      "1교시: 바이브코딩 개념 + Claude Code 기초",
      "2교시: 랜딩페이지 직접 제작 실습",
      "3교시: 웹 소개서·제안서 페이지 제작",
      "4교시: Vercel 배포 + 완성",
    ],
    result: "실제 배포된 내 홈페이지 or 소개서 1개",
    caseRef: "수리공의온도, 고개서동 홈페이지",
    icon: "💻",
    color: "#8B5CF6",
  },
  {
    title: "AI 챗봇 구축 워크숍",
    sub: "우리 회사 전용 AI 챗봇 만들기",
    time: "하루 6시간",
    target: "기업 실무자, 관공서 민원 담당, 서비스업",
    curriculum: [
      "1교시: Claude API 이해 + 기초 설정",
      "2교시: 우리 회사 맞춤 챗봇 설계",
      "3교시: 챗봇 직접 제작 실습",
      "4교시: 홈페이지 임베드 + 실전 테스트",
    ],
    result: "실제 작동하는 챗봇 1개 + 임베드 코드",
    caseRef: "고개서동 AI 안내 챗봇 (현재 운영 중)",
    icon: "🤖",
    color: "#10B981",
    chatPreview: true,
  },
  {
    title: "AI 업무 자동화 패키지",
    sub: "반복 업무를 AI한테 완전히 넘기는 법",
    time: "3회 과정",
    target: "중소기업, 공공기관",
    curriculum: [
      "1회차: 현재 반복 업무 분석 + AI 적용 설계",
      "2회차: 직접 구축 (블로그 자동화·챗봇·홈페이지)",
      "3회차: 2주 후 점검 + 고도화 + 담당자 이관",
    ],
    result: "우리 회사 AI 자동화 시스템 완성",
    caseRef: "부산AI코딩스쿨 전체 운영 자동화",
    icon: "⚙️",
    color: "#F59E0B",
    featured: true,
  },
];

function ChatPreview() {
  return (
    <div className="mt-4 rounded-xl overflow-hidden border border-[#2A2A35]">
      <div className="bg-[#F5F0E8] p-3">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-[#8B7355] flex items-center justify-center text-xs text-white font-bold">고</div>
          <span className="text-[#3D2B1F] text-sm font-semibold">고개서동 안내 챗봇</span>
          <span className="ml-auto w-2 h-2 bg-green-400 rounded-full" />
        </div>
        <div className="bg-white rounded-xl p-3 shadow-sm mb-2">
          <p className="text-[#3D2B1F] text-xs leading-relaxed">안녕하세요, 고개서동입니다 🌿<br />무엇을 도와드릴까요?</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["어떤 방이 있나요?", "서동부엌 예약 방법은?", "위치가 어디인가요?"].map((q) => (
            <button key={q} className="text-[10px] bg-[#F0E8D8] border border-[#C9A87C] text-[#5C3D1E] rounded-full px-2.5 py-1">
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgramCard({ p, index }: { p: typeof programs[0]; index: number }) {
  return (
    <FadeInSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={`bg-[#13131A] border rounded-2xl p-6 h-full flex flex-col gap-4 ${
          p.featured ? "border-[#F59E0B]/40" : "border-[#2A2A35]"
        }`}
      >
        {p.featured && (
          <span className="self-start text-xs bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] rounded-full px-3 py-1">
            맞춤형 패키지
          </span>
        )}

        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{p.icon}</span>
            <h3 className="text-base sm:text-lg font-bold text-[#F5F5F5]">{p.title}</h3>
          </div>
          <p className="text-sm text-[#F5F5F5]/50">{p.sub}</p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <span className="text-xs bg-[#2A2A35] rounded-full px-3 py-1 text-[#F5F5F5]/60">⏱ {p.time}</span>
          <span className="text-xs bg-[#2A2A35] rounded-full px-3 py-1 text-[#F5F5F5]/60">👤 {p.target}</span>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-[#F5F5F5]/40 uppercase tracking-wider">커리큘럼</p>
          {p.curriculum.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-[#F5F5F5]/70">
              <span style={{ color: p.color }} className="mt-0.5 shrink-0">▸</span>
              {item}
            </div>
          ))}
        </div>

        {p.chatPreview && <ChatPreview />}

        <div className="mt-auto space-y-2">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium"
            style={{ backgroundColor: `${p.color}15`, border: `1px solid ${p.color}30`, color: p.color }}
          >
            📦 결과물: {p.result}
          </div>
          <p className="text-xs text-[#F5F5F5]/40">실제 사례: {p.caseRef}</p>
        </div>
      </motion.div>
    </FadeInSection>
  );
}

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24 px-4 sm:px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs text-[#F5F5F5]/40 border border-[#2A2A35] rounded-full px-4 py-1.5 mb-5">
              AI실무교육 · AX교육 · AI업무자동화 프로그램
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              수업이 끝나면 결과물이 남습니다
            </h2>
            <p className="text-[#F5F5F5]/50 text-base sm:text-lg">
              이론 말고 실무. 부산·울산·경남 기업·공공기관 대상 AI실무교육 — 교육 당일 완성한 것을 내일 바로 씁니다.
            </p>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <ProgramCard key={p.title} p={p} index={i} />
          ))}
        </div>

        <FadeInSection delay={0.4}>
          <div className="mt-10 text-center">
            <a
              href="https://pf.kakao.com/_LKGRX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
            >
              💬 프로그램 문의하기
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const ROUTES = [
  {
    icon: "🎓",
    q: "AI를 배우고 싶어요",
    desc: "직원·개인의 AI·코딩 실무 역량",
    to: "부산AI코딩스쿨",
    href: "https://busanaicodingschool.com",
    external: true,
  },
  {
    icon: "🚀",
    q: "AI로 창업하고 싶어요",
    desc: "1인 창업·솔로프리너 키우기",
    to: "런칠리",
    href: "https://launchly-kr.vercel.app",
    external: true,
  },
  {
    icon: "⚙️",
    q: "회사에 AI, 어디에 쓸지 모르겠어요",
    desc: "AI 경영진단 + 맞춤 솔루션·자동화 개발",
    to: "AX그라운드 무료 진단",
    href: "/diagnosis",
    external: false,
    accent: true,
  },
];

export default function RouterSection() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-[#FAFAF8] border-y border-[#E4E4E7]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181B] mb-3">
            AI, 어디부터 시작할지 모르겠다면
          </h2>
          <p className="text-base sm:text-lg text-[#18181B]/55">
            고민 한 줄만 고르세요 — 딱 맞는 곳으로 안내해 드립니다.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {ROUTES.map((r, i) => (
            <motion.a
              key={r.to}
              href={r.href}
              target={r.external ? "_blank" : undefined}
              rel={r.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={[
                "group flex flex-col rounded-2xl border bg-white p-6 transition hover:shadow-md",
                r.accent ? "border-[#3B82F6]/40 shadow-sm" : "border-[#E4E4E7]",
              ].join(" ")}
            >
              <span className="text-3xl mb-4">{r.icon}</span>
              <p className="text-lg font-bold text-[#18181B] leading-snug">
                &ldquo;{r.q}&rdquo;
              </p>
              <p className="mt-2 text-sm leading-6 text-[#18181B]/55 flex-1">{r.desc}</p>
              <span
                className={[
                  "mt-5 inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all",
                  r.accent ? "text-[#3B82F6]" : "text-[#18181B]/70",
                ].join(" ")}
              >
                {r.to}
                {r.external ? " ↗" : ""}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[#18181B]/45">
          세 곳 모두 — <span className="font-semibold text-[#18181B]/70">서울에서 검증한 AI 전환을, 부산·울산·경남 현장에서</span> 직접 운영하는 한 팀이 만듭니다.
        </p>
      </div>
    </section>
  );
}

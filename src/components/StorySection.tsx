"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const steps = [
  {
    no: "01",
    title: "반복 업무를 함께 찾고",
    desc: "매주 똑같이 반복되는 보고서·정산·문서 작업을 직접 들여다봅니다.",
  },
  {
    no: "02",
    title: "직원이 직접 자동화",
    desc: "외주처럼 대신 만들어 주는 게 아니라, 직원이 자기 업무를 직접 바꾸게 합니다.",
  },
  {
    no: "03",
    title: "떠나도 직원이 운영",
    desc: "저희가 빠져도 직원이 그대로 굴릴 수 있게 넘겨드립니다.",
  },
];

export default function StorySection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0F0F1A] border-t border-[#1A1A22]">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#13131A] border border-[#2A2A35] rounded-full px-4 py-1.5 text-sm text-[#3B82F6] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              왜 AX그라운드인가
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug tracking-tight mb-5">
              교육만 받고 끝,
              <br />
              <span className="text-[#F5F5F5]/50">업무는 그대로인 경우가 많습니다</span>
            </h2>
            <p className="text-base sm:text-lg text-[#F5F5F5]/60 max-w-2xl mx-auto leading-relaxed">
              진짜 문제는 &lsquo;AI를 아느냐&rsquo;가 아니라,
              <span className="text-[#F5F5F5]"> 우리 회사의 반복 업무가 실제로 줄었느냐</span>입니다.
              <br className="hidden sm:block" />
              그래서 저희는 도구 사용법을 알려주는 데서 멈추지 않습니다.
            </p>
          </div>
        </FadeInSection>

        {/* 3단계 흐름 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-[#13131A] border border-[#2A2A35] rounded-2xl p-6"
            >
              <div className="text-sm font-bold tracking-wider text-[#3B82F6] mb-3">
                {s.no}
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-2 leading-tight">
                {s.title}
              </h3>
              <p className="text-sm text-[#F5F5F5]/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 실제 사례 한 줄 (증거 다리) */}
        <FadeInSection>
          <div className="mt-8 flex items-center justify-center gap-3 text-center">
            <span className="text-sm text-[#F5F5F5]/50 leading-relaxed">
              실제로 <span className="text-[#FF6B35] font-semibold">소녀방앗간</span>은 주문·정산·SNS 글쓰기 작업을
              직원이 직접 자동화해, 매주 반복되던 시간을 줄였습니다.
            </span>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import FadeInSection from "./FadeInSection";

const stats = [
  { value: 80, label: "반복 업무 시간 절감", unit: "%" },
  { value: 90, label: "홈페이지 제작 비용 절감", unit: "%" },
  { value: 85, label: "콘텐츠 제작 시간 단축", unit: "%" },
  { value: 70, label: "고객 응대 시간 절감", unit: "%" },
];

function CountUp({ target, started }: { target: number; started: boolean }) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!started || hasRun.current) return;
    hasRun.current = true;

    const duration = 1500;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, target]);

  return <>{count}</>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              숫자로 보여드립니다
            </h2>
            <p className="text-[#F5F5F5]/50 text-base sm:text-lg">
              부산AI랩 운영팀이 실제 사업에서 측정한 수치입니다
            </p>
          </div>
        </FadeInSection>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <FadeInSection key={s.label} delay={i * 0.1}>
              <div className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-6 sm:p-8 text-center">
                <div className="text-5xl sm:text-6xl font-bold text-[#3B82F6] mb-3 tabular-nums">
                  <CountUp target={s.value} started={isInView} />
                  {s.unit}
                </div>
                <p className="text-sm text-[#F5F5F5]/60 leading-tight">{s.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.4}>
          <p className="text-center text-xs text-[#F5F5F5]/30 mt-8">
            * 수리공의온도, 고개서동, 부산AI코딩스쿨 실제 운영 데이터 기준
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}

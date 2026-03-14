"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

interface CaseItem {
  id: string;
  title: string;
  summary: string;
  link: string | null;
  image: string | null;
  target: "기관" | "개인" | string;
}

export default function CasesGrid({ cases }: { cases: CaseItem[] }) {
  const 기관Cases = cases.filter((c) => c.target === "기관");
  const 개인Cases = cases.filter((c) => c.target === "개인");

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              교육 현장에서 실제로 다뤘습니다
            </h2>
            <p className="text-[#F5F5F5]/50 text-base sm:text-lg">
              기관 출강부터 실무자 제작물까지, 검증된 교육 경험입니다.
            </p>
          </div>
        </FadeInSection>

        {/* 기관 사례 */}
        <FadeInSection delay={0.05}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl">🏛️</span>
            <h3 className="text-lg font-bold text-[#F5F5F5]">기관 출강 사례</h3>
            <span className="text-xs bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] rounded-full px-2.5 py-1">
              {기관Cases.length}건
            </span>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {기관Cases.map((c, i) => (
            <CaseCard key={c.id} item={c} index={i} color="#3B82F6" />
          ))}
        </div>

        {/* 개인 사례 */}
        <FadeInSection delay={0.05}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl">👤</span>
            <h3 className="text-lg font-bold text-[#F5F5F5]">수강생 제작 사례</h3>
            <span className="text-xs bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] rounded-full px-2.5 py-1">
              {개인Cases.length}건
            </span>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {개인Cases.map((c, i) => (
            <CaseCard key={c.id} item={c} index={i} color="#10B981" />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ item, index, color }: { item: CaseItem; index: number; color: string }) {
  return (
    <FadeInSection delay={index * 0.07}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-[#13131A] border border-[#2A2A35] rounded-2xl p-5 flex flex-col gap-3 h-full"
      >
        {item.image && (
          <div className="relative w-full h-36 rounded-xl overflow-hidden">
            <Image
              src={`/cases/${item.image}`}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-bold text-[#F5F5F5] leading-snug flex-1">
            {item.title}
          </h4>
          <span
            className="shrink-0 text-xs rounded-full px-2 py-0.5 font-medium"
            style={{
              backgroundColor: `${color}15`,
              border: `1px solid ${color}30`,
              color: color,
            }}
          >
            {item.target}
          </span>
        </div>

        {item.summary && (
          <p className="text-xs text-[#F5F5F5]/50 leading-relaxed flex-1">{item.summary}</p>
        )}

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start text-xs border rounded-full px-3 py-1 transition-colors mt-auto"
            style={{
              color: color,
              borderColor: `${color}40`,
            }}
          >
            포스팅 보기 →
          </a>
        )}
      </motion.div>
    </FadeInSection>
  );
}

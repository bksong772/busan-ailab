"use client";

import { motion } from "framer-motion";
import { openInquiry } from "@/lib/openInquiry";

export default function MobileStickyCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#0A0A0F]/95 backdrop-blur-sm border-t border-[#2A2A35] px-4 py-3"
    >
      <div className="flex gap-2">
        <button
          onClick={openInquiry}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#3B82F6] text-white font-semibold py-3 rounded-xl text-sm"
        >
          💬 맞춤 상담 신청
        </button>
        <button
          onClick={openInquiry}
          className="flex-1 flex items-center justify-center gap-1.5 border border-[#2A2A35] text-[#F5F5F5]/80 font-semibold py-3 rounded-xl text-sm"
        >
          📋 커리큘럼 받기
        </button>
      </div>
    </motion.div>
  );
}

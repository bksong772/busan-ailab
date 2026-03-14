"use client";

import { motion } from "framer-motion";

export default function MobileStickyCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#0A0A0F]/95 backdrop-blur-sm border-t border-[#2A2A35] px-4 py-3"
    >
      <div className="flex gap-2">
        <a
          href="https://pf.kakao.com/_LKGRX/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#3B82F6] text-white font-semibold py-3 rounded-xl text-sm"
        >
          💬 카카오 상담
        </a>
        <a
          href="tel:010-9825-8816"
          className="flex-1 flex items-center justify-center gap-1.5 border border-[#2A2A35] text-[#F5F5F5]/80 font-semibold py-3 rounded-xl text-sm"
        >
          📞 전화 문의
        </a>
      </div>
    </motion.div>
  );
}

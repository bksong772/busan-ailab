"use client";

import { motion } from "framer-motion";
import { openInquiry } from "@/lib/openInquiry";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A2A35] bg-[#0A0A0F]/90 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-bold text-xl text-[#F5F5F5] hover:opacity-80 transition-opacity">
          부산<span className="text-[#3B82F6]">AI랩</span>
        </a>
        <div className="hidden sm:flex items-center gap-7 text-sm font-medium text-[#F5F5F5]/70">
          <a href="#programs" className="hover:text-[#F5F5F5] transition-colors">프로그램</a>
          <a href="#proof" className="hover:text-[#F5F5F5] transition-colors">운영 사례</a>
          <a href="#audience" className="hover:text-[#F5F5F5] transition-colors">교육 대상</a>
        </div>
        <button
          onClick={openInquiry}
          className="text-sm bg-[#3B82F6] hover:bg-[#2563EB] text-white px-5 py-2 rounded-full transition-colors font-semibold"
        >
          문의하기
        </button>
      </div>
    </motion.nav>
  );
}

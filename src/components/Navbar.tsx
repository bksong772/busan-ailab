"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A2A35] bg-[#0A0A0F]/90 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <span className="font-bold text-base text-[#F5F5F5]">
          부산<span className="text-[#3B82F6]">AI랩</span>
        </span>
        <div className="hidden sm:flex items-center gap-6 text-sm text-[#F5F5F5]/70">
          <a href="#proof" className="hover:text-[#F5F5F5] transition-colors">사례</a>
          <a href="#programs" className="hover:text-[#F5F5F5] transition-colors">프로그램</a>
          <a href="#audience" className="hover:text-[#F5F5F5] transition-colors">대상</a>
        </div>
        <a
          href="https://pf.kakao.com/_LKGRX/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-1.5 rounded-full transition-colors font-medium"
        >
          문의하기
        </a>
      </div>
    </motion.nav>
  );
}

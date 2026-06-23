"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { openInquiry } from "@/lib/openInquiry";

const MENU = [
  { href: "/consulting", label: "AX컨설팅" },
  { href: "/cases", label: "사례" },
  { href: "/insight", label: "인사이트" },
  { href: "/about", label: "회사소개" },
  { href: "/diagnosis", label: "무료 진단", accent: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#E4E4E7] bg-[#FFFFFF]/90 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-bold text-xl text-[#18181B] hover:opacity-80 transition-opacity">
          AX<span className="text-[#3B82F6]">그라운드</span>
        </a>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-[#18181B]/70">
          {MENU.map((m) => (
            <a
              key={m.href}
              href={m.href}
              className={`transition-colors ${m.accent ? "hover:text-[#3B82F6] font-semibold" : "hover:text-[#18181B]"}`}
            >
              {m.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:010-9825-8816"
            className="hidden sm:inline-flex text-sm border border-[#E4E4E7] hover:border-[#3B82F6] text-[#18181B]/70 hover:text-[#18181B] px-4 py-2 rounded-full transition-colors font-semibold"
          >
            📞 전화 문의
          </a>
          <button
            onClick={() => openInquiry()}
            className="hidden sm:inline-flex text-sm bg-[#3B82F6] hover:bg-[#2563EB] text-white px-5 py-2 rounded-full transition-colors font-semibold"
          >
            맞춤 상담
          </button>
          {/* 모바일 햄버거 */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="메뉴 열기"
            className="md:hidden text-[#18181B] text-2xl leading-none w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#F6F6F8] transition-colors"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {open && (
        <div className="md:hidden border-t border-[#E4E4E7] bg-[#FFFFFF]/98 backdrop-blur-sm">
          <div className="px-4 py-3 flex flex-col">
            {MENU.map((m) => (
              <a
                key={m.href}
                href={m.href}
                onClick={() => setOpen(false)}
                className={`py-3 px-2 text-base font-medium border-b border-[#EEEEF1] last:border-0 transition-colors ${m.accent ? "text-[#3B82F6] font-semibold" : "text-[#18181B]/80 hover:text-[#18181B]"}`}
              >
                {m.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); openInquiry(); }}
              className="mt-3 w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-3 rounded-xl transition-colors"
            >
              💬 맞춤 상담
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

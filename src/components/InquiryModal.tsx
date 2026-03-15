"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TYPES = [
  "기관/공공기관 출강 교육",
  "기업 맞춤 AI 교육",
  "AI 콘텐츠 자동화 워크숍",
  "AI 챗봇 구축 워크숍",
  "AI 홈페이지·소개서 제작",
  "AI 업무 자동화 패키지",
  "기타 문의",
];

export default function InquiryModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    contact: "",
    org: "",
    type: TYPES[0],
    message: "",
  });

  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setStatus("idle");
    };
    document.addEventListener("openInquiry", handler);
    return () => document.removeEventListener("openInquiry", handler);
  }, []);

  const close = () => setOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://formsubmit.co/ajax/bksong77@naver.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          이름: form.name,
          연락처: form.contact,
          "기관·기업명": form.org || "(미입력)",
          문의유형: form.type,
          내용: form.message || "(미입력)",
          _subject: `[부산AI랩 문의] ${form.type} — ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 백드롭 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* 모달 */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 bottom-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 w-full sm:max-w-lg bg-[#13131A] border border-[#2A2A35] rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[92vh] overflow-y-auto"
          >
            {status !== "done" ? (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-5">
                {/* 헤더 */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#F5F5F5] mb-1">교육 문의</h2>
                    <p className="text-sm text-[#F5F5F5]/50">작성하신 내용을 바탕으로 빠르게 연락드립니다.</p>
                  </div>
                  <button type="button" onClick={close} className="text-[#F5F5F5]/40 hover:text-[#F5F5F5] transition-colors text-2xl leading-none mt-0.5">×</button>
                </div>

                {/* 필드 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#F5F5F5]/50 uppercase tracking-wider">이름 *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="홍길동"
                      className="bg-[#0A0A0F] border border-[#2A2A35] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#F5F5F5]/25 focus:outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#F5F5F5]/50 uppercase tracking-wider">연락처 *</label>
                    <input
                      required
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      placeholder="010-0000-0000"
                      className="bg-[#0A0A0F] border border-[#2A2A35] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#F5F5F5]/25 focus:outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#F5F5F5]/50 uppercase tracking-wider">기관/기업명 <span className="normal-case font-normal">(선택)</span></label>
                  <input
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    placeholder="부산시청 / OO주식회사"
                    className="bg-[#0A0A0F] border border-[#2A2A35] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#F5F5F5]/25 focus:outline-none focus:border-[#3B82F6] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#F5F5F5]/50 uppercase tracking-wider">문의 유형 *</label>
                  <select
                    required
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="bg-[#0A0A0F] border border-[#2A2A35] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#3B82F6] transition-colors"
                  >
                    {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#F5F5F5]/50 uppercase tracking-wider">문의 내용 <span className="normal-case font-normal">(선택)</span></label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="인원 수, 희망 일정, 원하는 결과물 등 자유롭게 적어주세요"
                    rows={3}
                    className="bg-[#0A0A0F] border border-[#2A2A35] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#F5F5F5]/25 focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400 text-center">전송 실패했습니다. 잠시 후 다시 시도해주세요.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
                >
                  {status === "loading" ? "전송 중..." : "문의 보내기"}
                </button>
              </form>
            ) : (
              /* 완료 화면 */
              <div className="p-6 sm:p-8 flex flex-col items-center gap-5 text-center">
                <button type="button" onClick={close} className="self-end text-[#F5F5F5]/40 hover:text-[#F5F5F5] transition-colors text-2xl leading-none -mt-1 -mr-1">×</button>
                <div className="text-5xl">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">문의가 접수됐습니다!</h3>
                  <p className="text-sm text-[#F5F5F5]/55 leading-relaxed">
                    빠른 시간 내에 연락드리겠습니다.<br />
                    급하신 경우 카카오 채널로 문의해주세요.
                  </p>
                </div>
                <a
                  href="https://pf.kakao.com/_LKGRX/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-[#2A2A35] hover:border-[#3B82F6] text-[#F5F5F5]/70 hover:text-[#F5F5F5] font-semibold py-3 rounded-xl transition-colors text-sm"
                >
                  💬 카카오 채널 바로가기
                </a>
                <button onClick={close} className="text-sm text-[#F5F5F5]/40 hover:text-[#F5F5F5] transition-colors">
                  닫기
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

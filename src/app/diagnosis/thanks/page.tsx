import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "자가진단 신청 완료 — AX그라운드",
  description: "AX 자가진단 신청이 완료되었습니다. 24시간 안에 맞춤 진단 결과 PDF를 이메일로 보내드립니다.",
  robots: { index: false, follow: false },
};

export default function DiagnosisThanksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFFFF] pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">📨</div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] leading-tight break-keep">
            자가진단 신청 완료
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#18181B]/70 leading-7 break-keep">
            응답해주신 내용을 바탕으로 <strong className="text-[#18181B]">24시간 안에</strong> 맞춤 AX 진단 결과 PDF를 이메일로 보내드립니다.
            <br />
            긴급한 경우 아래 번호로 연락주시면 더 빠르게 안내해드립니다.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-3 text-left">
            <div className="rounded-2xl border border-[#E4E4E7] bg-[#F6F6F8] p-5">
              <div className="text-xs text-[#3B82F6] font-semibold mb-2">STEP 1 — 지금</div>
              <div className="text-sm text-[#18181B]/80 leading-6">신청 접수 + 답변 검토</div>
            </div>
            <div className="rounded-2xl border border-[#E4E4E7] bg-[#F6F6F8] p-5">
              <div className="text-xs text-[#3B82F6] font-semibold mb-2">STEP 2 — 24시간 내</div>
              <div className="text-sm text-[#18181B]/80 leading-6">맞춤 진단 결과 PDF 이메일 발송</div>
            </div>
            <div className="rounded-2xl border border-[#E4E4E7] bg-[#F6F6F8] p-5">
              <div className="text-xs text-[#3B82F6] font-semibold mb-2">STEP 3 — 원하시면</div>
              <div className="text-sm text-[#18181B]/80 leading-6">30분 무료 통화 일정 안내</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href="tel:010-9825-8816"
              className="rounded-full border border-[#E4E4E7] hover:border-[#3B82F6] px-6 py-3 text-sm font-semibold text-[#18181B]/80 hover:text-[#18181B] transition"
            >
              📞 010-9825-8816
            </a>
            <Link
              href="/insight"
              className="rounded-full bg-[#3B82F6] hover:bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition"
            >
              인사이트 칼럼 보기 →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

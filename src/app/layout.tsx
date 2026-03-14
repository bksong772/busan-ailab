import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "부산AI랩 — 반복 업무에 쓰던 시간, AI한테 넘겼습니다",
  description:
    "부산 기업·기관·소상공인 대상 AI 실무 교육. 블로그, 홈페이지, 고객응대, 제안서 — 저희가 실제 사업에 적용한 방법 그대로 드립니다.",
  keywords: "AI교육, 부산AI, 챗봇, AI자동화, 부산기업교육, 부산AI랩",
  openGraph: {
    title: "부산AI랩 — 반복 업무에 쓰던 시간, AI한테 넘겼습니다",
    description:
      "부산 기업·기관·소상공인 대상 AI 실무 교육. 실제 사업에 적용한 방법 그대로 드립니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="bg-[#0A0A0F] text-[#F5F5F5] antialiased">
        {children}
      </body>
    </html>
  );
}

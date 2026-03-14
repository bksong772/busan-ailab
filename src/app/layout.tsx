import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://busan-ailab.vercel.app"),
  title: "부산AI랩 — 반복 업무에 쓰던 시간, AI한테 넘겼습니다",
  description:
    "부산 기업·기관·소상공인 대상 AI 실무 교육. 보고서·데이터 분석·업무 자동화 — 교육 당일, 직원이 직접 만들고 바로 씁니다.",
  keywords: "AI교육, 부산AI, 챗봇, AI자동화, 부산기업교육, 부산AI랩",
  openGraph: {
    title: "부산AI랩 — 반복 업무에 쓰던 시간, AI한테 넘겼습니다",
    description:
      "부산 기업·기관·소상공인 대상 AI 실무 교육. 교육 당일 결과물 완성, 100+ 기관 검증.",
    type: "website",
    url: "https://busan-ailab.vercel.app",
    siteName: "부산AI랩",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "부산AI랩 — 반복 업무에 쓰던 시간, AI한테 넘겼습니다",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
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

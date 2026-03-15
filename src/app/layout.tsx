import type { Metadata } from "next";
import "./globals.css";
import InquiryModal from "@/components/InquiryModal";

const BASE_URL = "https://busan-ailab.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "부산AI랩 | 부산·울산·경남 AI교육 AX교육 전문",
    template: "%s | 부산AI랩",
  },
  description:
    "부산·울산·경남(부울경) 기업·공공기관·소상공인 대상 AI 실무 교육 전문. AI 콘텐츠 자동화, AI 챗봇 구축, AI 홈페이지 제작, AX(AI 전환) 교육. 교육 당일 결과물 완성, 100+ 기관 출강 검증.",
  keywords: [
    // 핵심 서비스
    "AI교육", "AI실무교육", "AX교육", "AX실무교육",
    "AI전환교육", "AX전환", "AI자동화", "AX자동화",
    "AI업무자동화", "업무자동화교육",
    // 지역 타겟
    "부산AI교육", "부산AI실무교육", "부산AX교육", "부산AX자동화",
    "부산인공지능교육", "부산업무자동화",
    "울산AI교육", "울산AI실무교육", "울산AX교육",
    "경남AI교육", "경남AI실무교육", "경남AX교육",
    "부울경AI교육", "부울경AX교육",
    // 대상별
    "부산기업AI교육", "부산공공기관AI교육", "부산소상공인AI교육",
    "기업맞춤AI교육", "공공기관AI교육", "재직자AI교육", "직원AI교육",
    // 도구·기술
    "ChatGPT교육", "Claude교육", "AI챗봇구축", "AI콘텐츠자동화",
    "AI홈페이지제작", "바이브코딩교육",
    // 브랜드
    "부산AI랩", "부산AI코딩스쿨", "AI출강",
  ],
  authors: [{ name: "부산AI랩", url: BASE_URL }],
  creator: "부산AI랩",
  publisher: "부산AI랩",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "부산AI랩 | 부산·울산·경남 AI교육 AX교육 전문",
    description:
      "부산·울산·경남 기업·공공기관 대상 AI 실무 교육. AI 콘텐츠 자동화·챗봇·홈페이지 제작·AX 전환 — 교육 당일 결과물 완성.",
    type: "website",
    url: BASE_URL,
    siteName: "부산AI랩",
    locale: "ko_KR",
    images: [
      {
        url: `${BASE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: "부산AI랩 — 부산·울산·경남 AI교육 AX교육 전문",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "부산AI랩 | 부산·울산·경남 AI교육 AX교육 전문",
    description:
      "부산·울산·경남 기업·공공기관 대상 AI 실무 교육. 교육 당일 결과물 완성.",
    images: [`${BASE_URL}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "NCmSUlylxVZTnOxYsc97UieZ58KABUKTxMh_IPz8ztY",
    other: {
      "naver-site-verification": "1dcac641868a3720d5ebffaa9d541e042e928bf6",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${BASE_URL}/#organization`,
      name: "부산AI랩",
      alternateName: ["부산 AI랩", "BusanAILab"],
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og.png`,
      },
      description:
        "부산·울산·경남(부울경) 기업·공공기관·소상공인 대상 AI 실무 교육 전문. AI 콘텐츠 자동화, AI 챗봇 구축, AI 홈페이지 제작, AX 교육.",
      areaServed: [
        { "@type": "City", name: "부산" },
        { "@type": "City", name: "울산" },
        { "@type": "AdministrativeArea", name: "경상남도" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI 교육 프로그램",
        itemListElement: [
          {
            "@type": "Course",
            name: "AI 콘텐츠 자동화 워크숍",
            description:
              "Claude·ChatGPT로 블로그·SNS·홍보물을 자동으로 제작하는 AI 실무 교육",
            provider: { "@id": `${BASE_URL}/#organization` },
          },
          {
            "@type": "Course",
            name: "AI 홈페이지·소개서 제작 워크숍",
            description:
              "코딩 없이 Claude Code로 실제 배포 가능한 홈페이지와 웹 소개서를 제작하는 AI 교육",
            provider: { "@id": `${BASE_URL}/#organization` },
          },
          {
            "@type": "Course",
            name: "AI 챗봇 구축 워크숍",
            description:
              "Claude API로 기업·매장 전용 AI 챗봇을 직접 구축하는 AX 교육",
            provider: { "@id": `${BASE_URL}/#organization` },
          },
          {
            "@type": "Course",
            name: "AI 업무 자동화 패키지",
            description:
              "반복 업무를 AI로 자동화하는 기업 맞춤 AX 전환 교육",
            provider: { "@id": `${BASE_URL}/#organization` },
          },
        ],
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "교육 문의",
        url: "https://pf.kakao.com/_LKGRX/chat",
        availableLanguage: "Korean",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "부산AI랩",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "ko-KR",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "부산AI랩 | 부산·울산·경남 AI교육 AX교육 전문",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description:
        "부산·울산·경남(부울경) 기업·공공기관·소상공인 대상 AI 실무 교육. 교육 당일 결과물 완성, 100+ 기관 출강.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: BASE_URL,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "부산AI랩은 어디서 교육하나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "부산·울산·경남(부울경) 전역 기업·공공기관·학교에 직접 출강합니다.",
          },
        },
        {
          "@type": "Question",
          name: "AI 교육 당일 결과물을 만들 수 있나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "네. 부산AI랩의 모든 프로그램은 교육 당일 실제로 사용 가능한 결과물(블로그 글, 챗봇, 홈페이지 등)을 완성하는 것을 목표로 합니다.",
          },
        },
        {
          "@type": "Question",
          name: "기업·공공기관 출강 교육도 가능한가요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "가능합니다. 부산AI랩은 100+ 기관에 출강한 경험을 바탕으로 기업·공공기관 맞춤 AI 교육을 제공합니다. 카카오톡으로 문의해주세요.",
          },
        },
        {
          "@type": "Question",
          name: "AX 교육(AI 전환 교육)도 하나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "네. AI 업무 자동화 패키지를 통해 기업의 반복 업무를 AI로 전환하는 AX(AI Transformation) 교육을 진행합니다.",
          },
        },
      ],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0F] text-[#F5F5F5] antialiased">
        {children}
        <InquiryModal />
      </body>
    </html>
  );
}

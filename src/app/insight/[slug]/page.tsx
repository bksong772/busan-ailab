import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllInsights().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const item = getInsightBySlug(params.slug);
  if (!item) return { title: "인사이트를 찾을 수 없습니다" };

  const url = `https://busan-ailab.vercel.app/insight/${item.slug}`;
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: url },
    openGraph: {
      title: item.title,
      description: item.summary,
      url,
      type: "article",
      publishedTime: item.publishedAt,
      tags: item.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.summary,
    },
  };
}

export default function InsightDetailPage({ params }: { params: Params }) {
  const item = getInsightBySlug(params.slug);
  if (!item) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.summary,
    datePublished: item.publishedAt,
    author: { "@type": "Organization", name: "부산AI랩" },
    publisher: {
      "@type": "Organization",
      name: "부산AI랩",
      url: "https://busan-ailab.vercel.app",
    },
    mainEntityOfPage: `https://busan-ailab.vercel.app/insight/${item.slug}`,
    keywords: item.tags.join(", "),
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0A0A0F] pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-[#F5F5F5]/40">
            <Link href="/" className="hover:text-[#F5F5F5]/70">홈</Link>
            <span className="mx-2">/</span>
            <Link href="/insight" className="hover:text-[#F5F5F5]/70">인사이트</Link>
          </nav>

          {/* Header */}
          <header className="mt-6">
            <div className="flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-3 py-1 text-[11px] font-semibold text-[#3B82F6]"
                >
                  #{t}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] leading-tight break-keep">
              {item.title}
            </h1>
            <div className="mt-5 flex items-center gap-4 text-xs text-[#F5F5F5]/40">
              <time dateTime={item.publishedAt}>
                {item.publishedAt.replace(/-/g, ".")}
              </time>
              <span>·</span>
              <span>읽는 시간 {item.readingMinutes}분</span>
              <span>·</span>
              <span>부산AI랩</span>
            </div>
            <p className="mt-6 text-base sm:text-lg text-[#F5F5F5]/70 leading-7 break-keep">
              {item.summary}
            </p>
          </header>

          <div className="my-10 h-px bg-[#2A2A35]" />

          {/* Body */}
          <div className="insight-body prose prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-12 mb-5 text-2xl font-extrabold text-[#F5F5F5] break-keep">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-8 mb-4 text-xl font-bold text-[#F5F5F5] break-keep">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="my-5 text-[15px] leading-8 text-[#F5F5F5]/80 break-keep">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-[#F5F5F5]">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-[#F5F5F5]/70">{children}</em>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#60A5FA] underline decoration-[#3B82F6]/40 underline-offset-4 hover:decoration-[#3B82F6]"
                  >
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-7 border-l-2 border-[#3B82F6] bg-[#13131B] pl-5 pr-4 py-3 text-[15px] leading-7 text-[#F5F5F5]/70 rounded-r-lg">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="my-5 ml-5 list-disc text-[#F5F5F5]/80 space-y-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-5 ml-5 list-decimal text-[#F5F5F5]/80 space-y-2">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="leading-7 text-[15px]">{children}</li>
                ),
                hr: () => <hr className="my-10 border-[#2A2A35]" />,
                code: ({ children }) => (
                  <code className="rounded bg-[#13131B] border border-[#2A2A35] px-1.5 py-0.5 text-[13px] text-[#93C5FD] font-mono">
                    {children}
                  </code>
                ),
                table: ({ children }) => (
                  <div className="my-7 overflow-x-auto rounded-xl border border-[#2A2A35]">
                    <table className="min-w-full text-sm">{children}</table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-[#13131B]">{children}</thead>
                ),
                th: ({ children }) => (
                  <th className="px-4 py-3 text-left font-bold text-[#F5F5F5] border-b border-[#2A2A35]">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-4 py-3 text-[#F5F5F5]/75 border-b border-[#2A2A35]/50">
                    {children}
                  </td>
                ),
              }}
            >
              {item.body}
            </ReactMarkdown>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 rounded-3xl border border-[#3B82F6]/30 bg-gradient-to-br from-[#3B82F6]/10 to-[#13131B] p-8 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F5F5] break-keep">
              AX 전환, 어디서부터 시작해야 할지 고민되시나요?
            </h3>
            <p className="mt-3 text-sm text-[#F5F5F5]/60 break-keep">
              부산·울산·경남 기업·공공기관 무료 진단부터 시작합니다.
              카카오톡으로 편하게 문의주세요.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:010-9825-8816"
                className="rounded-full border border-[#2A2A35] px-6 py-3 text-sm font-semibold text-[#F5F5F5]/80 hover:border-[#3B82F6] hover:text-[#F5F5F5] transition"
              >
                📞 010-9825-8816
              </a>
              <Link
                href="/insight"
                className="rounded-full bg-[#3B82F6] hover:bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition"
              >
                ← 다른 인사이트 보기
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

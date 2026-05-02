/**
 * Notion 콘텐츠 허브 ↔ AX팩토리 insights 자동 동기화.
 *
 * 노션 콘텐츠 허브의 [Insight] 카테고리 row 들 중 "특이사항" 필드에
 * `slug: <slug-name>` 형식으로 매핑된 항목을 찾아, 게시 완료된 글의
 * naverBlogUrl 을 자동으로 가져온다.
 *
 * 사용:
 *   const map = await fetchNaverUrlsFromNotion();
 *   const url = map.get("2026-ax-wave-busan-workers-vibe-coding");
 *
 * Next.js App Router server component 에서 호출 — fetch 는 ISR 캐시 (1시간).
 */

const NOTION_TOKEN = process.env.NOTION_TOKEN || "";
const NOTION_DB_ID = "337b75184f68800990f4e78480855af6"; // 콘텐츠 허브
const NOTION_VERSION = "2022-06-28";

interface NotionPage {
  id: string;
  properties: Record<string, unknown>;
}

interface NaverLinkInfo {
  slug: string;
  naverBlogUrl: string;
  publishedAt?: string;
}

function extractText(richTextArray: unknown[] | undefined): string {
  if (!richTextArray) return "";
  return richTextArray
    .map((rt) => (rt as { plain_text?: string })?.plain_text || "")
    .join("");
}

function extractSlugFromNote(note: string): string | null {
  // "slug: <slug-name>" 라인 검색
  const match = note.match(/slug:\s*([a-z0-9-]+)/i);
  return match ? match[1].trim() : null;
}

export async function fetchNaverUrlsFromNotion(): Promise<
  Map<string, NaverLinkInfo>
> {
  const map = new Map<string, NaverLinkInfo>();

  if (!NOTION_TOKEN) {
    console.warn("[notion-sync] NOTION_TOKEN missing — returning empty map");
    return map;
  }

  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NOTION_TOKEN}`,
          "Notion-Version": NOTION_VERSION,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: {
            and: [
              { property: "카테고리", select: { equals: "[Insight] 교육 칼럼" } },
              { property: "플랫폼", select: { equals: "네이버블로그" } },
              { property: "상태", status: { equals: "게시 완료" } },
            ],
          },
          page_size: 50,
        }),
        next: { revalidate: 3600 }, // ISR — 1시간 캐시
      }
    );

    if (!res.ok) {
      console.warn(`[notion-sync] Notion query failed: ${res.status}`);
      return map;
    }

    const data = (await res.json()) as { results: NotionPage[] };

    for (const page of data.results) {
      const props = page.properties as Record<string, unknown> & {
        특이사항?: { rich_text?: unknown[] };
        URL?: { url?: string };
        게시일?: { date?: { start?: string } };
      };

      // 특이사항에서 slug 추출
      const note = extractText(props["특이사항"]?.rich_text);
      const slug = extractSlugFromNote(note);
      if (!slug) continue;

      // URL 추출 (노션 REST API 필드명은 "URL" — MCP의 "userDefined:URL"이 아님)
      const naverBlogUrl: string = props["URL"]?.url || "";
      if (!naverBlogUrl) continue;

      const publishedAt: string | undefined =
        props["게시일"]?.date?.start || undefined;

      map.set(slug, { slug, naverBlogUrl, publishedAt });
    }
  } catch (err) {
    console.warn(`[notion-sync] Error fetching Notion: ${err}`);
  }

  return map;
}

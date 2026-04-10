export interface CaseItem {
  id: string;
  title: string;
  summary: string;
  link: string | null;
  image: string | null;      // 정적 파일명 (staticCases용)
  imageUrl: string | null;   // 노션 커버 이미지 URL
  target: "기관" | "개인" | string;
  sortOrder: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NotionPage = { id: string; properties: Record<string, any>; cover?: any };

async function queryNotion(databaseId: string) {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: { property: "Lab 노출", checkbox: { equals: true } },
        sorts: [{ property: "Lab 정렬", direction: "ascending" }],
      }),
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) throw new Error(`Notion API error: ${res.status}`);
  return res.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getText(prop: any): string {
  return prop?.rich_text?.[0]?.plain_text ?? prop?.title?.[0]?.plain_text ?? "";
}

export async function getCases(): Promise<CaseItem[]> {
  const data = await queryNotion(process.env.NOTION_CASES_DB_ID!);

  const items: CaseItem[] = data.results.map((page: NotionPage) => {
    const p = page.properties;
    return {
      id: page.id,
      title: getText(p["제목"]),
      summary: getText(p["한줄 요약"]),
      link: p["링크"]?.url ?? null,
      image: null,
      imageUrl:
        page.cover?.type === "external"
          ? page.cover.external.url
          : page.cover?.type === "file"
          ? page.cover.file.url
          : null,
      target: p["Lab 대상"]?.select?.name ?? "",
      sortOrder: p["Lab 정렬"]?.number ?? 99,
    };
  });

  const 기관 = items
    .filter((i) => i.target === "기관")
    .sort((a, b) => a.sortOrder - b.sortOrder);
  const 개인 = items
    .filter((i) => i.target === "개인")
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return [...기관, ...개인];
}

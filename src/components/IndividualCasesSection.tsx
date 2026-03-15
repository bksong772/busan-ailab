import { getCases } from "@/lib/notion";
import { staticCases } from "@/lib/staticCases";
import CasesGrid from "./CasesGrid";

export default async function IndividualCasesSection() {
  let notionCases: typeof staticCases = [];

  try {
    const fetched = await getCases();
    notionCases = fetched.map((c) => ({ ...c, target: c.target as "기관" | "개인" }));
  } catch {
    // Notion 실패해도 정적 데이터로 표시
  }

  // 노션에 데이터 있으면 노션만, 없으면 정적 데이터 fallback
  const allCases = notionCases.length > 0 ? notionCases : staticCases;

  return <CasesGrid cases={allCases} />;
}

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

  // 노션 데이터가 있으면 앞에, 없으면 정적 데이터만
  const allCases = [...notionCases, ...staticCases];

  return <CasesGrid cases={allCases} />;
}

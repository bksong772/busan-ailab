import { getCases } from "@/lib/notion";
import CasesGrid from "./CasesGrid";

export default async function IndividualCasesSection() {
  try {
    const cases = await getCases();
    if (!cases.length) return null;
    return <CasesGrid cases={cases} />;
  } catch (e) {
    console.error("Notion fetch error:", e);
    return null;
  }
}

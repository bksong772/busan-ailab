import { getCases } from "@/lib/notion";
import CasesGrid from "./CasesGrid";

export default async function IndividualCasesSection() {
  const cases = await getCases();
  return <CasesGrid cases={cases} />;
}

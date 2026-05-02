"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const HEADCOUNTS = ["1~3명", "4~10명", "11~30명", "31~100명", "100명+"];
const INDUSTRIES = ["제조", "유통·물류", "F&B", "교육·학원", "의료·헬스", "전문서비스", "공공·기관", "기타"];
const STAGES = [
  "전혀 안 씀",
  "개인적으로만 사용 (대표 본인)",
  "팀 일부가 사용",
  "본격 도입 진행 중",
];
const TOOLS = ["ChatGPT", "Claude", "Gemini", "Cursor", "n8n", "기타", "없음"];
const ROLES = ["대표·임원", "실무 담당자", "기타"];

type Status = "idle" | "loading" | "done" | "error";

export default function DiagnosisForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const [form, setForm] = useState({
    company: "",
    role: ROLES[0],
    headcount: HEADCOUNTS[0],
    industry: INDUSTRIES[0],
    stage: STAGES[0],
    tools: [] as string[],
    painPoint: "",
    saveHours: "",
    name: "",
    contact: "",
    email: "",
  });

  const toggleTool = (t: string) => {
    setForm((f) => {
      const has = f.tools.includes(t);
      return { ...f, tools: has ? f.tools.filter((x) => x !== t) : [...f.tools, t] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrMsg("");

    try {
      // 1) 노션 저장 (서버)
      fetch("/api/diagnosis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).catch(() => {});

      // 2) 이메일 알림 (브라우저 → FormSubmit)
      const emailRes = await fetch("https://formsubmit.co/ajax/bksong77@naver.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          이름: form.name || "(이름 미입력)",
          연락처: form.contact,
          이메일: form.email,
          회사명: form.company,
          직책: form.role,
          직원수: form.headcount,
          업종: form.industry,
          도입단계: form.stage,
          현재도구: form.tools.length ? form.tools.join(", ") : "없음",
          반복업무: form.painPoint || "(미입력)",
          절감희망시간: form.saveHours || "(미입력)",
          _subject: `[AX 자가진단] ${form.company} — ${form.name || form.contact}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!emailRes.ok) throw new Error("email failed");

      setStatus("done");
      router.push("/diagnosis/thanks");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrMsg("제출 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const inputCls =
    "w-full rounded-xl bg-[#13131B] border border-[#2A2A35] focus:border-[#3B82F6] outline-none px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#F5F5F5]/30 transition";
  const labelCls = "block text-xs font-semibold text-[#F5F5F5]/70 mb-2 uppercase tracking-wide";
  const sectionCls = "rounded-3xl border border-[#2A2A35] bg-[#0F0F18] p-6 sm:p-8";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Section 1 — 회사 기본 */}
      <div className={sectionCls}>
        <h3 className="text-base font-extrabold text-[#F5F5F5] mb-5">
          1️⃣ 회사 기본 정보
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className={labelCls}>회사·가게명 ★</label>
            <input
              required
              className={inputCls}
              placeholder="예: 송부장 김밥집"
              value={form.company}
              onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
            />
          </div>
          <div>
            <label className={labelCls}>본인 직책</label>
            <select
              className={inputCls}
              value={form.role}
              onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>직원 수</label>
            <select
              className={inputCls}
              value={form.headcount}
              onChange={(e) => setForm((f) => ({ ...f, headcount: e.target.value }))}
            >
              {HEADCOUNTS.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>업종</label>
            <select
              className={inputCls}
              value={form.industry}
              onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
            >
              {INDUSTRIES.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Section 2 — 현재 상황 */}
      <div className={sectionCls}>
        <h3 className="text-base font-extrabold text-[#F5F5F5] mb-5">
          2️⃣ 현재 상황
        </h3>
        <div className="space-y-5">
          <div>
            <label className={labelCls}>AI 도입 단계</label>
            <div className="grid sm:grid-cols-2 gap-2">
              {STAGES.map((s) => {
                const active = form.stage === s;
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setForm((f) => ({ ...f, stage: s }))}
                    className={`text-left text-sm px-4 py-3 rounded-xl border transition ${
                      active
                        ? "border-[#3B82F6] bg-[#3B82F6]/10 text-[#F5F5F5]"
                        : "border-[#2A2A35] bg-[#13131B] text-[#F5F5F5]/70 hover:border-[#3B82F6]/50"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <label className={labelCls}>현재 사용 중인 도구 (복수 선택)</label>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((t) => {
                const active = form.tools.includes(t);
                return (
                  <button
                    type="button"
                    key={t}
                    onClick={() => toggleTool(t)}
                    className={`text-xs sm:text-sm px-4 py-2 rounded-full border transition ${
                      active
                        ? "border-[#3B82F6] bg-[#3B82F6]/10 text-[#F5F5F5]"
                        : "border-[#2A2A35] bg-[#13131B] text-[#F5F5F5]/70 hover:border-[#3B82F6]/50"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <label className={labelCls}>가장 시간 많이 드는 반복 업무 1가지 (선택)</label>
            <textarea
              rows={3}
              className={inputCls}
              placeholder="예: 매주 학부모 안내 카톡 30건 작성, 주간 매출 정리 2시간"
              value={form.painPoint}
              onChange={(e) => setForm((f) => ({ ...f, painPoint: e.target.value }))}
            />
          </div>
          <div>
            <label className={labelCls}>30일 후 절감하고 싶은 시간 (시간/주, 선택)</label>
            <input
              className={inputCls}
              placeholder="예: 5"
              inputMode="numeric"
              value={form.saveHours}
              onChange={(e) => setForm((f) => ({ ...f, saveHours: e.target.value }))}
            />
          </div>
        </div>
      </div>

      {/* Section 3 — 연락처 */}
      <div className={sectionCls}>
        <h3 className="text-base font-extrabold text-[#F5F5F5] mb-5">
          3️⃣ 진단 결과 받을 곳
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>이름</label>
            <input
              className={inputCls}
              placeholder="송병근"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div>
            <label className={labelCls}>연락처 ★</label>
            <input
              required
              className={inputCls}
              placeholder="010-0000-0000"
              inputMode="tel"
              value={form.contact}
              onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>이메일 ★ (진단 PDF 받을 주소)</label>
            <input
              required
              type="email"
              className={inputCls}
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </div>
        </div>
      </div>

      {errMsg && (
        <p className="text-center text-sm text-red-400">{errMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-2xl bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-60 disabled:cursor-not-allowed px-6 py-4 text-base font-extrabold text-white transition"
      >
        {status === "loading" ? "제출 중…" : "무료 자가진단 신청 — 24시간 내 PDF 회신"}
      </button>
      <p className="text-center text-xs text-[#F5F5F5]/40">
        제출 시 개인정보처리방침에 동의하는 것으로 간주됩니다. 진단 목적 외 사용 X.
      </p>
    </form>
  );
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    company,
    role,
    headcount,
    industry,
    businessDesc,
    painPoint,
    reduceWant,
    tools,
    stage,
    saveHours,
    name,
    contact,
    email,
  } = await req.json();

  if (!company || !contact || !email) {
    return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
  }

  const summary = [
    `회사명: ${company}`,
    `직책: ${role || "(미입력)"}`,
    `직원 수: ${headcount || "(미입력)"}`,
    `업종: ${industry || "(미입력)"}`,
    `사업 내용: ${businessDesc || "(미입력)"}`,
    `현재 AX 도입 단계: ${stage || "(미입력)"}`,
    `사용 중 AI 도구: ${
      Array.isArray(tools) && tools.length ? tools.join(", ") : "없음"
    }`,
    `시간 가장 많이 드는 업무: ${painPoint || "(미입력)"}`,
    `줄이고 싶은 업무: ${reduceWant || "(미입력)"}`,
    `절감 희망 시간(주): ${saveHours || "(미입력)"}`,
    `이메일: ${email}`,
  ].join("\n");

  try {
    await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: process.env.NOTION_INQUIRY_DB_ID },
        properties: {
          이름: {
            title: [{ text: { content: name || "(이름 미입력)" } }],
          },
          연락처: {
            rich_text: [{ text: { content: contact } }],
          },
          "기관·기업명": {
            rich_text: [{ text: { content: company } }],
          },
          문의유형: {
            select: { name: "AX 자가진단" },
          },
          내용: {
            rich_text: [{ text: { content: summary } }],
          },
        },
      }),
    });
  } catch (e) {
    console.error("Notion write error:", e);
  }

  return NextResponse.json({ ok: true });
}

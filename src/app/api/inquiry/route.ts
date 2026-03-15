import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, contact, org, type, message } = await req.json();

  if (!name || !contact || !type) {
    return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
  }

  // 1. 노션 DB에 저장
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
            title: [{ text: { content: name } }],
          },
          연락처: {
            rich_text: [{ text: { content: contact } }],
          },
          "기관·기업명": {
            rich_text: [{ text: { content: org || "" } }],
          },
          문의유형: {
            select: { name: type },
          },
          내용: {
            rich_text: [{ text: { content: message || "" } }],
          },
        },
      }),
    });
  } catch (e) {
    console.error("Notion write error:", e);
    // 노션 저장 실패해도 이메일은 계속 시도
  }

  // 2. 이메일 전송 (FormSubmit.co)
  try {
    await fetch("https://formsubmit.co/ajax/bksong77@naver.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        이름: name,
        연락처: contact,
        "기관·기업명": org || "(미입력)",
        문의유형: type,
        내용: message || "(미입력)",
        _subject: `[부산AI랩 문의] ${type} — ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    });
  } catch (e) {
    console.error("Email send error:", e);
  }

  return NextResponse.json({ ok: true });
}

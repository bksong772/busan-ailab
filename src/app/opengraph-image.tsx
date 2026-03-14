import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* 배경 글로우 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          }}
        />

        {/* 브랜드 */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "36px" }}>
          <div
            style={{
              background: "#13131A",
              border: "1px solid #2A2A35",
              borderRadius: "100px",
              padding: "8px 24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#3B82F6",
              }}
            />
            <span style={{ color: "#F5F5F5", fontSize: "18px", fontWeight: 600 }}>
              부산<span style={{ color: "#3B82F6" }}>AI랩</span>
            </span>
          </div>
        </div>

        {/* 메인 카피 */}
        <div
          style={{
            color: "#F5F5F5",
            fontSize: "62px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "24px",
            letterSpacing: "-1px",
          }}
        >
          반복 업무에 쓰던 시간,
          <br />
          <span style={{ color: "#3B82F6" }}>AI한테 넘겼습니다</span>
        </div>

        {/* 서브 */}
        <div
          style={{
            color: "rgba(245,245,245,0.5)",
            fontSize: "22px",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          부산 기업·기관·소상공인 대상 AI 실무 교육
        </div>

        {/* 뱃지 */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["100+ 출강 기관", "310회+ 연간 출강", "AI 콘텐츠·챗봇·홈페이지"].map((b) => (
            <div
              key={b}
              style={{
                background: "#13131A",
                border: "1px solid #2A2A35",
                borderRadius: "100px",
                padding: "10px 22px",
                color: "rgba(245,245,245,0.7)",
                fontSize: "16px",
              }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}

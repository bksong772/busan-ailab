import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
          border: "1.5px solid #2A2A35",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              color: "#3B82F6",
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "-0.5px",
            }}
          >
            AI
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

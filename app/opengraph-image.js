import { ImageResponse } from "next/og";

export const alt = "Morainet — Build. Share. Evolve.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(120% 90% at 50% -10%, #1c6a8e 0%, #0e2433 45%, #070a0f 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* glow accent */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 460,
            height: 460,
            borderRadius: "9999px",
            background: "rgba(72,230,212,0.18)",
            filter: "blur(40px)",
            display: "flex",
          }}
        />

        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
            <path d="M16 4 28 26H4L16 4Z" stroke="#48e6d4" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M9.5 17h13M7 21.5h18" stroke="#48e6d4" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
            <span style={{ color: "#ffffff" }}>Morai</span>
            <span style={{ color: "#74c0dd" }}>net</span>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 110,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1,
              background: "linear-gradient(120deg,#d4ecf5,#74c0dd 45%,#48e6d4)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Build. Share. Evolve.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a9b2c0", maxWidth: 920 }}>
            Building enduring technology through open collaboration.
          </div>
        </div>

        {/* footer tags */}
        <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#74c0dd" }}>
          <span style={{ display: "flex" }}>AI</span>
          <span style={{ display: "flex", color: "#3c4454" }}>/</span>
          <span style={{ display: "flex" }}>Mobile</span>
          <span style={{ display: "flex", color: "#3c4454" }}>/</span>
          <span style={{ display: "flex" }}>Open Source</span>
          <span style={{ display: "flex", color: "#3c4454" }}>/</span>
          <span style={{ display: "flex" }}>Infrastructure</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

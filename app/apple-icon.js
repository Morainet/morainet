import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(120% 120% at 30% 20%, #1c6a8e, #0e2433 70%, #070a0f)",
        }}
      >
        <svg width="118" height="118" viewBox="0 0 32 32" fill="none">
          <path d="M16 4 28 26H4L16 4Z" stroke="#48e6d4" strokeWidth="2" strokeLinejoin="round" />
          <path d="M9.5 17h13M7 21.5h18" stroke="#48e6d4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

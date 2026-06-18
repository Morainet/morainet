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
          background: "linear-gradient(150deg, #ffffff, #e3edf0)",
          borderRadius: 40,
        }}
      >
        <svg width="116" height="116" viewBox="0 0 32 32" fill="none">
          <path d="M16 4 28 26H4L16 4Z" stroke="#15627e" strokeWidth="2.1" strokeLinejoin="round" />
          <path d="M9.5 17h13M7 21.5h18" stroke="#15627e" strokeWidth="2.1" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

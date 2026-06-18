import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(150deg, #ffffff, #e6eef1)",
          borderRadius: 14,
        }}
      >
        <svg width="42" height="42" viewBox="0 0 32 32" fill="none">
          <path d="M16 4 28 26H4L16 4Z" stroke="#15627e" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M9.5 17h13M7 21.5h18" stroke="#15627e" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

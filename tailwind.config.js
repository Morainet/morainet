/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Glacier blues
        glacier: {
          50: "#eef7fb",
          100: "#d4ecf5",
          200: "#a9d9eb",
          300: "#74c0dd",
          400: "#3fa1c9",
          500: "#2384ad",
          600: "#1c6a8e",
          700: "#1b5573",
          800: "#1d475e",
          900: "#1d3c50",
          950: "#0e2433",
        },
        // Slate / rock greys
        slatey: {
          50: "#f5f6f8",
          100: "#e9ebef",
          200: "#cfd4dc",
          300: "#a9b2c0",
          400: "#7c889c",
          500: "#5d6a80",
          600: "#495367",
          700: "#3c4454",
          800: "#343b48",
          900: "#0d1117",
          950: "#070a0f",
        },
        // Neon accent
        neon: {
          DEFAULT: "#48e6d4",
          glow: "#7af5e8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        "drift-slow": "drift 28s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

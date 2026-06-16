// Minimal line icons for focus areas. Stroke inherits currentColor.

const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconAI(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 6V3M12 21v-3M6 12H3M21 12h-3M7.5 7.5 5.5 5.5M16.5 7.5l2-2M7.5 16.5l-2 2M16.5 16.5l2 2" />
    </svg>
  );
}

export function IconMobile(props) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M10.5 18h3" />
    </svg>
  );
}

export function IconOSS(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="7" r="2.5" />
      <circle cx="18" cy="7" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M6 9.5v3a2 2 0 0 0 2 2h1.5M18 9.5v3a2 2 0 0 1-2 2h-1.5" />
    </svg>
  );
}

export function IconInfra(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="5" rx="1.5" />
      <rect x="4" y="15" width="16" height="5" rx="1.5" />
      <path d="M7.5 6.5h.01M7.5 17.5h.01M12 9v6" />
    </svg>
  );
}

export const focusIcons = {
  ai: IconAI,
  mobile: IconMobile,
  oss: IconOSS,
  infra: IconInfra,
};

export function IconGitHub(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.85 9.73.5.1.68-.22.68-.48v-1.7c-2.79.62-3.38-1.22-3.38-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.48A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function IconArrow(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconMark(props) {
  // Morainet glyph: layered strata forming a peak.
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M16 4 28 26H4L16 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9.5 17h13M7 21.5h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

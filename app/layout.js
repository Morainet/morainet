import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE_URL } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Morainet — Build. Share. Evolve.",
    template: "%s · Morainet",
  },
  description:
    "Morainet is a technology collective focused on AI, mobile development, open source, and infrastructure. Building enduring technology through open collaboration.",
  applicationName: "Morainet",
  keywords: [
    "Morainet",
    "AI",
    "mobile development",
    "open source",
    "infrastructure",
    "technology collective",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Morainet — Build. Share. Evolve.",
    description: "Building enduring technology through open collaboration.",
    url: SITE_URL,
    siteName: "Morainet",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morainet — Build. Share. Evolve.",
    description: "Building enduring technology through open collaboration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#070a0f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

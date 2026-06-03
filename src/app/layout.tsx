import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danielcardenas.dev"),
  title: {
    default: "Daniel Cárdenas — AI Automation Engineer",
    template: "%s | Daniel Cárdenas",
  },
  description:
    "Daniel Cárdenas builds RAG systems, AI automation tools, Python APIs, and edge ML/firmware platforms.",
  keywords: [
    "Firmware",
    "Embedded",
    "Backend",
    "Python",
    "Go",
    "RAG",
    "AI",
    "Full Stack",
    "Next.js",
    "AI Automation",
    "Edge ML",
  ],
  authors: [{
    name: "Daniel Cárdenas",
    url: "https://danielcardenas.dev",
  }],
  creator: "Daniel Cárdenas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielcardenas.dev",
    siteName: "Daniel Cárdenas — AI Automation Engineer",
    title: "Daniel Cárdenas — AI Automation Engineer",
    description:
      "Portfolio and case studies across RAG, AI automation, Python APIs, edge ML, and firmware.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@carjes232",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://danielcardenas.dev",
  },
};

export const viewport: Viewport = {
  themeColor: "#06B6D4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} bg-hud-bg text-hud-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

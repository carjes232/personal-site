import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile, SITE_URL } from "@/lib/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danielcardenas.dev"),
  title: {
    default: "Daniel Cárdenas — Applied AI Engineer",
    template: "%s | Daniel Cárdenas",
  },
  description:
    profile.summary,
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
    siteName: "Daniel Cárdenas — Applied AI Engineer",
    title: "Daniel Cárdenas — Applied AI Engineer",
    description:
      profile.summary,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@carjes232",
  },
  manifest: "/site.webmanifest",
  icons: { icon: "/icon.svg" },
  alternates: { types: { "application/json": "/profile.json", "text/plain": "/llms.txt" } },
};

export const viewport: Viewport = {
  themeColor: "#121211",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": SITE_URL + "/#person",
          name: profile.name,
          url: SITE_URL,
          jobTitle: "AI Engineer",
          description: profile.summary,
          sameAs: [profile.links.github, profile.links.linkedin],
          knowsAbout: profile.skills,
        }).replace(/</g, "\\u003c") }} />
      </head>
      <body
        className={`${inter.variable} bg-hud-bg text-hud-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

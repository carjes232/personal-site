import type { ReactNode } from "react";
import { Source_Serif_4 } from "next/font/google";
import { HUDShell } from "@/components/HUDShell";

// Editorial serif for headings; body text keeps the root Inter variable.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className={sourceSerif.variable}>
      <HUDShell>{children}</HUDShell>
    </div>
  );
}

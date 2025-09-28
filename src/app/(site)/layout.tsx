import type { ReactNode } from "react";
import { HUDShell } from "@/components/HUDShell";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <HUDShell>{children}</HUDShell>;
}

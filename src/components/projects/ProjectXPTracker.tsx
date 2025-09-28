"use client";

import { useEffect } from "react";
import { awardXP } from "@/lib/xp";

export function ProjectXPTracker({ slug }: { slug: string }) {
  useEffect(() => {
    awardXP("project_read", slug);
  }, [slug]);

  return null;
}

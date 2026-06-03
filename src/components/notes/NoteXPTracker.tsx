"use client";

import { useEffect } from "react";
import { awardXP } from "@/lib/xp";

export function NoteXPTracker({ slug }: { slug: string }) {
  useEffect(() => {
    awardXP("note_read", slug);
  }, [slug]);

  return null;
}

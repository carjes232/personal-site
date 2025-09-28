"use client";

import { type AnchorHTMLAttributes } from "react";
import { awardXP, type XPAwardReason } from "@/lib/xp";

interface AwardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  reason: XPAwardReason;
  identifier: string;
}

export function AwardLink({ reason, identifier, onClick, ...props }: AwardLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          awardXP(reason, identifier);
        }
      }}
    />
  );
}

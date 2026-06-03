"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { readXP } from "@/lib/xp";
import { cn } from "@/lib/utils";

interface XPState {
  total: number;
  progress: number;
  level: number;
  nextLevelAt: number;
}

const LEVEL_SIZE = 150;

function computeState(total: number): XPState {
  const level = Math.floor(total / LEVEL_SIZE) + 1;
  const xpIntoLevel = total % LEVEL_SIZE;
  return {
    total,
    level,
    progress: xpIntoLevel / LEVEL_SIZE,
    nextLevelAt: level * LEVEL_SIZE,
  };
}

export function XPBar({ className }: { className?: string }) {
  const [xp, setXp] = useState<XPState>(computeState(0));

  useEffect(() => {
    const handle = (event: Event) => {
      const detail = (event as CustomEvent<{ total: number }>).detail;
      const total = detail?.total ?? readXP().total;
      setXp(computeState(total));
    };

    window.addEventListener("xp:update", handle as EventListener);
    setXp(computeState(readXP().total));

    return () => window.removeEventListener("xp:update", handle as EventListener);
  }, []);

  return (
    <div
      className={cn(
        "hud-panel relative flex w-full flex-col gap-3 rounded-2xl p-4 overflow-hidden",
        className,
      )}
      aria-live="polite"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-hud-accent/5 to-hud-accent-strong/5 opacity-50" />
      <div className="relative flex items-baseline justify-between text-xs uppercase tracking-[0.18em] text-hud-subtle">
        <span>XP</span>
        <span className="text-hud-accent font-semibold">Level {xp.level}</span>
      </div>
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-hud-border/60">
        <motion.div
          className="h-full bg-gradient-to-r from-hud-accent via-hud-accent to-hud-accent-strong shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: `${Math.round(xp.progress * 100)}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hud-accent/20 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-hud-accent/10 animate-pulse-glow" />
      </div>
      <div className="relative flex items-center justify-between text-xs text-hud-subtle">
        <span className="font-medium">{xp.total} XP</span>
        <span className="text-hud-accent/80">{xp.nextLevelAt - (xp.total % LEVEL_SIZE)} to level up</span>
      </div>
    </div>
  );
}

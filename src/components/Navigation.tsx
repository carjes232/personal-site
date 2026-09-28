"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

interface NavigationProps {
  items: NavItem[];
}

export function Navigation({ items }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="grid grid-cols-5 items-center gap-0.5 rounded-2xl border border-hud-border/40 bg-hud-surface/80 p-1 text-xs backdrop-blur-sm sm:flex sm:rounded-full sm:text-sm">
      {items.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href as Route}
            className={cn(
              "relative overflow-hidden rounded-xl px-1.5 py-2 text-center font-medium transition-colors duration-200 sm:rounded-full sm:px-4",
              active
                ? "bg-hud-accent/25 text-hud-text shadow-lg shadow-hud-accent/20"
                : "text-hud-subtle hover:bg-hud-border/50 hover:text-hud-text",
            )}
          >
            {active && (
              <div className="absolute inset-0 bg-gradient-to-r from-hud-accent/10 to-hud-accent-strong/10 rounded-full" />
            )}
            <span className="relative z-10">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

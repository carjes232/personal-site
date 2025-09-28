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
    <nav className="flex flex-col md:flex-row items-stretch md:items-center gap-1 rounded-2xl md:rounded-full bg-hud-surface/80 p-1.5 text-sm backdrop-blur-sm border border-hud-border/40">
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
              "rounded-xl md:rounded-full px-4 py-2 font-medium transition-all duration-300 relative overflow-hidden text-center",
              active
                ? "bg-hud-accent/25 text-hud-text shadow-lg shadow-hud-accent/20"
                : "text-hud-subtle hover:bg-hud-border/50 hover:text-hud-text hover:scale-105",
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

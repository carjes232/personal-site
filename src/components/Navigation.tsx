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
    <nav aria-label="Main navigation" className="-mx-1 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm">
      {items.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href as Route}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-md px-2 py-1.5 underline-offset-[6px] transition-colors duration-200",
              active
                ? "!text-hud-text underline decoration-hud-accent decoration-2"
                : "!text-hud-subtle hover:!text-hud-text",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

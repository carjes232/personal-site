"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import Fuse from "fuse.js";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ArrowUpRight,
  Command as CommandIcon,
  FileText,
  NotebookPen,
} from "lucide-react";
import type { Route } from "next";
import { usePathname, useRouter } from "next/navigation";
import { awardXP } from "@/lib/xp";

export type PaletteItemType = "route" | "project" | "note";

export interface PaletteItem {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  type: PaletteItemType;
  tags?: string[];
}

interface CmdPaletteProps {
  items: PaletteItem[];
  trigger?: React.ReactNode;
}

const icons: Record<PaletteItemType, React.ReactNode> = {
  route: <CommandIcon className="size-4 text-hud-accent" />,
  project: <FileText className="size-4 text-hud-accent" />,
  note: <NotebookPen className="size-4 text-hud-accent" />,
};

export function CmdPalette({ items, trigger }: CmdPaletteProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const fuse = useMemo(
    () =>
      new Fuse(items, {
        keys: ["title", "subtitle", "tags"],
        threshold: 0.3,
      }),
    [items],
  );

  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    if (!query.trim()) return items;
    return fuse.search(query).map((result) => result.item);
  }, [query, fuse, items]);

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    const isMac =
      typeof navigator !== "undefined" &&
      navigator.platform.toLowerCase().includes("mac");
    if (
      (isMac && event.metaKey && event.key.toLowerCase() === "k") ||
      (!isMac && event.ctrlKey && event.key.toLowerCase() === "k")
    ) {
      event.preventDefault();
      setOpen((value) => !value);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleSelect = useCallback(
    (item: PaletteItem) => {
      if (item.type === "project") {
        awardXP("project_read", item.id);
      }
      if (item.type === "note") {
        awardXP("note_read", item.id);
      }
      setOpen(false);
      router.push(item.href as Route);
    },
    [router],
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {trigger ? <Dialog.Trigger asChild>{trigger}</Dialog.Trigger> : null}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-x-0 top-[10%] z-50 mx-auto w-full max-w-2xl">
          <Command
            className="hud-panel overflow-hidden rounded-3xl bg-hud-surface/95 shadow-xl"
          >
            <div className="flex items-center gap-2 border-b border-hud-border/60 p-3 text-sm">
              <CommandIcon className="size-4 text-hud-accent" />
              <Command.Input
                placeholder="Search projects, notes, or routes..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-hud-subtle"
                value={query}
                onValueChange={setQuery}
                autoFocus
              />
              <span className="rounded bg-hud-border/80 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-hud-subtle">
                ⌘K
              </span>
            </div>
            <Command.List className="max-h-[420px] overflow-y-auto">
              {results.length === 0 ? (
                <Command.Empty className="p-6 text-sm text-hud-subtle">
                  No matches. Try a different keyword.
                </Command.Empty>
              ) : (
                <div className="space-y-1 p-2">
                  {results.map((item) => (
                    <Command.Item
                      key={item.id}
                      value={`${item.type}-${item.title}`}
                      className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm outline-none transition-colors hover:bg-hud-border/40 aria-selected:bg-hud-border/50"
                      onSelect={() => handleSelect(item)}
                    >
                      <div className="flex flex-1 items-center gap-3">
                        <span className="flex size-8 items-center justify-center rounded-lg bg-hud-border/40">
                          {icons[item.type]}
                        </span>
                        <span className="flex flex-col">
                          <span className="font-medium text-hud-text">
                            {item.title}
                          </span>
                          {item.subtitle ? (
                            <span className="text-xs text-hud-subtle">
                              {item.subtitle}
                            </span>
                          ) : null}
                        </span>
                      </div>
                      <ArrowUpRight className="size-4 text-hud-border transition group-hover:text-hud-accent" />
                    </Command.Item>
                  ))}
                </div>
              )}
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

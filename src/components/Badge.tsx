import { cn } from "@/lib/utils";

type BadgeKind = "success" | "info" | "warning" | "neutral";

interface BadgeProps {
  label: string;
  kind?: BadgeKind;
  className?: string;
}

const KIND_STYLES: Record<BadgeKind, string> = {
  success: "bg-hud-success/20 text-hud-success",
  info: "bg-hud-accent/20 text-hud-accent",
  warning: "bg-yellow-400/20 text-yellow-200",
  neutral: "bg-hud-border/40 text-hud-subtle",
};

export function Badge({ label, kind = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-hud-border/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em]",
        KIND_STYLES[kind],
        className,
      )}
    >
      {label}
    </span>
  );
}

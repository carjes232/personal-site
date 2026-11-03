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
  warning: "bg-hud-warning/15 text-hud-warning",
  neutral: "bg-hud-border/40 text-hud-subtle",
};

export function Badge({ label, kind = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-hud-border/60 px-2.5 py-1 text-[11px] font-medium ",
        KIND_STYLES[kind],
        className,
      )}
    >
      {label}
    </span>
  );
}

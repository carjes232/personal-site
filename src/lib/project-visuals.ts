import type { Project } from "@/lib/content";
import type { ProjectTrack } from "@/lib/content";

/** Covers that exist on disk but are not always set in MDX frontmatter. */
const DEFAULT_COVERS: Record<string, string> = {
  "solenium-nilm-edge-platform": "/images/projects/solenium-nilm-cover.webp",
};

export const TRACK_VISUALS: Record<
  ProjectTrack,
  { label: string; gradient: string; accent: string; pattern: string }
> = {
  "ai-backend": {
    label: "AI / Backend",
    gradient: "from-cyan-500/25 via-sky-900/40 to-hud-surface-alt",
    accent: "text-cyan-300",
    pattern: "radial-gradient(circle at 20% 20%, rgba(0,212,255,0.35), transparent 55%)",
  },
  firmware: {
    label: "Firmware / Embedded",
    gradient: "from-amber-500/20 via-orange-950/40 to-hud-surface-alt",
    accent: "text-amber-300",
    pattern: "radial-gradient(circle at 80% 30%, rgba(251,191,36,0.28), transparent 50%)",
  },
  "web-cloud": {
    label: "Web / Cloud",
    gradient: "from-violet-500/25 via-indigo-950/40 to-hud-surface-alt",
    accent: "text-violet-300",
    pattern: "radial-gradient(circle at 50% 80%, rgba(139,92,246,0.3), transparent 55%)",
  },
};

export function getProjectCover(project: Pick<Project, "slug" | "cover">): string | null {
  return project.cover ?? DEFAULT_COVERS[project.slug] ?? null;
}

export function getTrackVisual(track?: string | null) {
  if (track && track in TRACK_VISUALS) {
    return TRACK_VISUALS[track as ProjectTrack];
  }
  return TRACK_VISUALS["ai-backend"];
}

export function projectInitials(title: string): string {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

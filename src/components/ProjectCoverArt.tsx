"use client";

import Image from "next/image";
import type { Project } from "@/lib/content";
import {
  getProjectCover,
  getTrackVisual,
  projectInitials,
} from "@/lib/project-visuals";
import { cn } from "@/lib/utils";

interface ProjectCoverArtProps {
  project: Pick<Project, "slug" | "title" | "cover" | "track" | "tags">;
  className?: string;
  sizes?: string;
  priority?: boolean;
  variant?: "card" | "hero";
}

export function ProjectCoverArt({
  project,
  className,
  sizes = "(min-width: 768px) 400px, 100vw",
  priority = false,
  variant = "card",
}: ProjectCoverArtProps) {
  const cover = getProjectCover(project);
  const track = getTrackVisual(project.track);
  const primaryTag = project.tags?.[0];

  if (cover) {
    return (
      <div className={cn("relative overflow-hidden bg-hud-surface-alt", className)}>
        <Image
          src={cover}
          alt={`${project.title} visual summary`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes={sizes}
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-hud-bg/85 via-hud-bg/15 to-transparent" />
        {variant === "hero" ? (
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{ background: track.pattern }}
          />
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        track.gradient,
        className,
      )}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{ background: track.pattern }}
      />
      <div className="pointer-events-none absolute inset-0 hud-grid opacity-[0.12]" />
      <div className="absolute inset-0 bg-gradient-to-t from-hud-bg/90 via-transparent to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-hud-subtle">
            {track.label}
          </span>
          <span
            className={cn(
              "flex size-20 shrink-0 items-center justify-center rounded-full border border-white/15 bg-hud-bg/30 text-3xl font-semibold tracking-tight backdrop-blur-sm",
              track.accent,
            )}
          >
            {projectInitials(project.title)}
          </span>
        </div>

        <div className="max-w-[85%]">
          <p className="text-2xl font-semibold leading-tight text-hud-text sm:text-3xl">{project.title}</p>
          {primaryTag ? <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-hud-subtle">{primaryTag}</p> : null}
        </div>
      </div>
    </div>
  );
}

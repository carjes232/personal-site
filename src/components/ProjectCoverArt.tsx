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
  const architectureTags = [
    ...(project.tags ?? []),
    track.label,
    "Production",
  ].slice(0, 5);
  const nodes = architectureTags.slice(0, 3);

  if (cover) {
    return (
      <div className={cn("relative overflow-hidden bg-hud-surface-alt", className)}>
        <Image
          src={cover}
          alt={`${project.title} cover`}
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

      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span className="rounded-full border border-white/10 bg-hud-bg/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-hud-subtle backdrop-blur-sm">
              Architecture
            </span>
            {primaryTag ? (
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-hud-subtle">
                {primaryTag}
              </p>
            ) : null}
          </div>
          <span
            className={cn(
              "flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-hud-bg/45 text-xl font-semibold tracking-tight backdrop-blur-sm",
              track.accent,
            )}
          >
            {projectInitials(project.title)}
          </span>
        </div>

        <div className="grid gap-3">
          <div className="grid grid-cols-3 items-center gap-2">
            {nodes.map((node, index) => (
              <div key={`${node}-${index}`} className="relative">
                <div className="min-h-16 rounded-2xl border border-white/10 bg-hud-bg/45 p-3 shadow-lg backdrop-blur-sm">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-hud-subtle">
                    Layer {index + 1}
                  </p>
                  <p className="mt-2 text-xs font-semibold leading-tight text-hud-text">
                    {node}
                  </p>
                </div>
                {index < nodes.length - 1 ? (
                  <span className="absolute -right-2 top-1/2 z-10 h-px w-4 bg-white/30" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {architectureTags.slice(3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-hud-bg/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-hud-subtle backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import type { Project } from "@/lib/content";
import { Badge } from "@/components/Badge";
import { ProjectCoverArt } from "@/components/ProjectCoverArt";
import { getProjectCover, getTrackVisual } from "@/lib/project-visuals";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

export function ProjectCard({ project, className, priority = false }: ProjectCardProps) {
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const cover = getProjectCover(project);
  const track = getTrackVisual(project.track);
  const topResult = project.results?.[0];

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-hud-border/60 bg-hud-surface/90 transition-all duration-300 hover:-translate-y-1 hover:border-hud-accent/70 hover:shadow-2xl hover:shadow-hud-accent/15",
        className,
      )}
      aria-labelledby={`project-title-${project.slug}`}
    >
      <Dialog.Root open={isImageModalOpen} onOpenChange={setImageModalOpen}>
        <Dialog.Trigger asChild disabled={!cover}>
          <button
            type="button"
            className={cn(
              "relative mb-0 aspect-[16/10] w-full overflow-hidden border-b border-hud-border/40 text-left",
              !cover && "cursor-default",
            )}
            aria-label={cover ? `View ${project.title} cover` : undefined}
          >
            <ProjectCoverArt
              project={project}
              className="absolute inset-0"
              sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
              priority={priority}
            />
            {cover ? (
              <div className="absolute left-4 right-4 top-4 flex flex-wrap gap-2">
                {project.badges?.slice(0, 2).map((badge) => (
                  <Badge key={badge} label={badge} kind="info" />
                ))}
              </div>
            ) : null}
            <span className="absolute bottom-3 left-4 rounded-full border border-white/10 bg-hud-bg/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-hud-subtle backdrop-blur-sm">
              {track.label}
            </span>
          </button>
        </Dialog.Trigger>
        {cover ? (
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" />
            <Dialog.Content
              className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center p-4 md:p-8"
              onClick={() => setImageModalOpen(false)}
            >
              <Dialog.Title className="sr-only">{project.title}</Dialog.Title>
              <div className="relative h-full w-full max-h-[90vh] max-w-[90vw]">
                <Image
                  src={cover}
                  alt={`${project.title} cover`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </Dialog.Root>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-hud-subtle">
          <span>{new Date(project.date).getFullYear()}</span>
          <span aria-hidden>•</span>
          <span>{project.role}</span>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="group/title mt-3 block focus:outline-none"
        >
          <h3
            id={`project-title-${project.slug}`}
            className="flex items-start justify-between gap-2 text-xl font-semibold text-hud-text transition group-hover/title:text-hud-accent sm:text-2xl"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="mt-1 size-5 shrink-0 opacity-0 transition group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-hud-subtle">
          {project.summary}
        </p>

        {topResult ? (
          <p className="mt-4 rounded-xl border border-hud-success/30 bg-hud-success/10 px-3 py-2 text-xs text-hud-success">
            {topResult}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-hud-border/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-hud-subtle"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-hud-border/40 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-hud-accent transition hover:text-hud-accent-strong"
          >
            Read case study
          </Link>
          <div className="flex items-center gap-2">
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full border border-hud-border/70 text-hud-subtle transition hover:border-hud-accent/60 hover:text-hud-accent"
                aria-label={`${project.title} repository`}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="size-4" />
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full border border-hud-border/70 text-hud-subtle transition hover:border-hud-accent/60 hover:text-hud-accent"
                aria-label={`${project.title} demo`}
                onClick={(e) => e.stopPropagation()}
              >
                <Globe className="size-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

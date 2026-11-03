"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Globe, X } from "lucide-react";
import type { Project } from "@/lib/content";
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
        "group relative flex flex-col overflow-hidden rounded-lg border border-hud-border/80 bg-hud-surface transition-colors duration-200 hover:border-hud-subtle/60",
        className,
      )}
      aria-labelledby={`project-title-${project.slug}`}
    >
      {/* Cover-less projects stay text-only rather than showing a generated badge. */}
      {cover ? (
        <Dialog.Root open={isImageModalOpen} onOpenChange={setImageModalOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="relative mb-0 aspect-[16/9] w-full overflow-hidden border-b border-hud-border/60 text-left"
              aria-label={`View ${project.title} cover`}
            >
              <ProjectCoverArt
                project={project}
                className="absolute inset-0"
                sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                priority={priority}
              />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" />
            <Dialog.Content
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            >
              <Dialog.Title className="sr-only">{project.title}</Dialog.Title>
              <Dialog.Close className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-white/30 bg-hud-bg text-white transition hover:bg-hud-surface" aria-label="Close image">
                <X aria-hidden="true" className="size-5" />
              </Dialog.Close>
              <div className="relative h-full w-full max-h-[90vh] max-w-[90vw]">
                <Image
                  src={cover}
                  alt={`${project.title} project visual`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-hud-subtle">
          <span>{track.label}</span>
          <span aria-hidden="true"> · </span>
          <span>{new Date(project.date).getFullYear()}</span>
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className="group/title mt-2 block !text-hud-text"
        >
          <h3
            id={`project-title-${project.slug}`}
            className="flex items-start justify-between gap-2 text-xl font-semibold leading-snug text-hud-text transition group-hover/title:text-hud-accent-strong"
          >
            <span>{project.title}</span>
            <ArrowUpRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-hud-subtle transition group-hover/title:text-hud-accent-strong" />
          </h3>
        </Link>

        <p className="mt-2 text-xs leading-relaxed text-hud-subtle">{project.role}</p>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-hud-text/85">
          {project.summary}
        </p>

        {topResult ? (
          <p className="mt-4 border-l-2 border-hud-accent/60 pl-3 text-sm leading-relaxed text-hud-subtle">
            {topResult}
          </p>
        ) : null}

        {project.tags?.length ? (
          <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-hud-subtle">
            {project.tags.slice(0, 4).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}

        <div aria-hidden="true" className="min-h-6 flex-1" />
        <div className="flex items-center justify-between gap-3 border-t border-hud-border/60 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-medium text-hud-accent transition hover:text-hud-accent-strong"
            aria-label={`Read case study: ${project.title}`}
          >
            Read case study
          </Link>
          <div className="flex items-center gap-2">
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-md border border-hud-border/80 !text-hud-subtle transition hover:border-hud-subtle hover:!text-hud-text"
                aria-label={`${project.title} repository`}
                onClick={(e) => e.stopPropagation()}
              >
                <Github aria-hidden="true" className="size-4" />
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-md border border-hud-border/80 !text-hud-subtle transition hover:border-hud-subtle hover:!text-hud-text"
                aria-label={`${project.title} demo`}
                onClick={(e) => e.stopPropagation()}
              >
                <Globe aria-hidden="true" className="size-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

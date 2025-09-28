import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import type { Project } from "@/lib/content";
import { Badge } from "@/components/Badge";
import { cn } from "@/lib/utils";
import { AwardLink } from "@/components/AwardLink";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-hud-border/60 bg-hud-surface/90 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-hud-accent/80 hover:shadow-2xl hover:shadow-hud-accent/20 focus-within:border-hud-accent/60 focus-within:shadow-xl focus-within:shadow-hud-accent/10 focus:outline-none",
        className,
      )}
      role="article"
      aria-labelledby={`project-title-${project.slug}`}
    >
      <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-hud-border/40 bg-hud-surface-alt group-hover:border-hud-accent/40 transition-colors duration-500">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.title} cover`}
            fill
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            sizes="(min-width: 768px) 400px, 100vw"
          />
        ) : (
          <Image
            src="/images/placeholder-project.svg"
            alt={`${project.title} placeholder`}
            fill
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            sizes="(min-width: 768px) 400px, 100vw"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-hud-bg/90 via-hud-bg/20 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          {project.badges?.slice(0, 3).map((badge) => (
            <Badge key={badge} label={badge} kind="info" />
          ))}
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-hud-accent/10 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-hud-subtle">
          <span>{new Date(project.date).getFullYear()}</span>
          <span>•</span>
          <span>{project.role}</span>
        </div>
        <Link href={`/projects/${project.slug}`} className="focus:outline-none">
          <h3
            id={`project-title-${project.slug}`}
            className="mt-3 text-2xl font-semibold text-hud-text group-hover:text-hud-accent transition-colors"
          >
            {project.title}
          </h3>
        </Link>
        <p className="mt-3 text-sm text-hud-subtle">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-hud-border/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-hud-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-1 items-end justify-between">
          <div />
          <div className="flex items-center gap-2">
            {project.repo ? (
              <AwardLink
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full border border-hud-border/70 text-hud-subtle transition hover:border-hud-accent/60 hover:text-hud-accent"
                aria-label={`${project.title} repository`}
                reason="repo_click"
                identifier={project.slug}
              >
                <Github className="size-4" />
              </AwardLink>
            ) : null}
            {project.demo ? (
              <AwardLink
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full border border-hud-border/70 text-hud-subtle transition hover:border-hud-accent/60 hover:text-hud-accent"
                aria-label={`${project.title} demo`}
                reason="demo_click"
                identifier={project.slug}
              >
                <Globe className="size-4" />
              </AwardLink>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

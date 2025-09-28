import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FileBadge2,
} from "lucide-react";
import Link from "next/link";
import {
  getAllProjects,
  getProjectBySlug,
  getProjectNeighbours,
  type Project,
} from "@/lib/content";
import { Badge } from "@/components/Badge";
import { MDXRenderer } from "@/components/MDXRenderer";
import { ProjectXPTracker } from "@/components/projects/ProjectXPTracker";
import { AwardLink } from "@/components/AwardLink";

function minutesToRead(project: Project) {
  const minutes = Math.ceil(project.readingTime.minutes ?? 0);
  return Math.max(minutes, 2);
}

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const slug = params.slug;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: "Project not found",
    };
  }
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `https://danielcardenas.dev/projects/${project.slug}`,
      type: "article",
      tags: project.tags,
      images: [`https://danielcardenas.dev/og/${project.slug}`],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [`https://danielcardenas.dev/og/${project.slug}`],
    },
    alternates: {
      canonical: `https://danielcardenas.dev/projects/${project.slug}`,
    },
  };
}

function ConfidentialCallout({ context }: { context?: string }) {
  return (
    <div className="rounded-2xl border border-yellow-500/40 bg-yellow-500/10 p-4 text-sm text-yellow-100">
      <p className="font-semibold uppercase tracking-[0.2em]">Confidential Context</p>
      <p className="mt-2">
        This case study is sanitized. Client data and proprietary integrations are omitted.
        {context ? ` ${context}` : ""}
      </p>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const slug = params.slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const neighbours = getProjectNeighbours(project.slug);
  const readMinutes = minutesToRead(project);

  return (
    <article className="space-y-12">
      <ProjectXPTracker slug={project.slug} />
      <header className="space-y-6 rounded-3xl border border-hud-border/60 bg-hud-surface/70 p-8">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-hud-subtle">
          <span>
            {new Date(project.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
            })}
          </span>
          <span>•</span>
          <span>{project.role}</span>
          <span>•</span>
          <span>{readMinutes} min read</span>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-hud-text">{project.title}</h1>
            <p className="mt-4 max-w-2xl text-base text-hud-subtle">
              {project.summary}
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-hud-subtle">
            <div className="flex flex-wrap gap-2">
              {project.badges?.map((badge) => (
                <Badge key={badge} label={badge} kind="info" />
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-hud-border/50 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-hud-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {project.repo ? (
            <AwardLink
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hud-border/70 px-4 py-2 text-sm font-semibold text-hud-accent transition hover:border-hud-accent/60 hover:text-hud-accent-strong"
              reason="repo_click"
              identifier={project.slug}
            >
              <ExternalLink className="size-4" /> Repository
            </AwardLink>
          ) : null}
          {project.demo ? (
            <AwardLink
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hud-border/70 px-4 py-2 text-sm font-semibold text-hud-accent transition hover:border-hud-accent/60 hover:text-hud-accent-strong"
              reason="demo_click"
              identifier={project.slug}
            >
              <ExternalLink className="size-4" /> Demo
            </AwardLink>
          ) : null}
        </div>
        {project.confidential ? (
          <ConfidentialCallout context={project.context} />
        ) : null}
        {project.results?.length ? (
          <div className="mt-6 rounded-2xl border border-hud-border/60 bg-hud-surface-alt/80 p-4">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-hud-subtle">
              <FileBadge2 className="size-4 text-hud-accent" /> Outcomes
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-hud-text md:grid-cols-2">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="rounded-xl border border-hud-border/40 bg-hud-bg/30 px-3 py-2"
                >
                  {result}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>

      <section className="space-y-10 rounded-3xl border border-hud-border/60 bg-hud-surface/60 p-8">
        <MDXRenderer code={project.body.code} />
      </section>

      <nav className="flex flex-col gap-4 rounded-3xl border border-hud-border/60 bg-hud-surface/60 p-6 text-sm sm:flex-row sm:justify-between">
        <div>
          {neighbours.previous ? (
            <Link
              href={`/projects/${neighbours.previous.slug}`}
              className="group inline-flex items-center gap-2 text-hud-accent transition hover:text-hud-accent-strong"
            >
              <ArrowLeft className="size-4" />
              <span>
                Prev: <strong>{neighbours.previous.title}</strong>
              </span>
            </Link>
          ) : (
            <span className="text-hud-subtle">Start of the archive</span>
          )}
        </div>
        <div className="text-right">
          {neighbours.next ? (
            <Link
              href={`/projects/${neighbours.next.slug}`}
              className="group inline-flex items-center gap-2 text-hud-accent transition hover:text-hud-accent-strong"
            >
              <span>
                Next: <strong>{neighbours.next.title}</strong>
              </span>
              <ArrowRight className="size-4" />
            </Link>
          ) : (
            <span className="text-hud-subtle">Up to date</span>
          )}
        </div>
      </nav>
    </article>
  );
}

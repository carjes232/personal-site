import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllProjects, uniqueTags } from "@/lib/content";
import { ProjectsBrowser } from "@/components/projects/ProjectsBrowser";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies across firmware, backends, and AI systems delivered by Daniel Cárdenas.",
  openGraph: {
    title: "Projects | Daniel Cárdenas",
    description:
      "Case studies across firmware, backends, and AI systems delivered by Daniel Cárdenas.",
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const tags = uniqueTags();

  return (
    <section className="space-y-6">
      <header className="space-y-3 rounded-3xl border border-hud-border/60 bg-hud-surface/70 p-8">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-hud-accent">
          Case studies
        </p>
        <h1 className="text-4xl font-semibold text-hud-text">Projects</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-hud-subtle">
          {projects.length} write-ups across AI automation, firmware, and data
          products. Filter by stack or track to find work most relevant to your
          team.
        </p>
      </header>
      <Suspense fallback={<div className="text-sm text-hud-subtle">Loading filters...</div>}>
        <ProjectsBrowser projects={projects} tags={tags} />
      </Suspense>
   </section>
  );
}

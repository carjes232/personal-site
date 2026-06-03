import { Brain, CircuitBoard, Cloud, Sparkles } from "lucide-react";
import Link from "next/link";
import { getAllProjects, type Project } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";

const FEATURED_AI_SLUGS = [
  "multilingual-multihop-rag",
  "solenium-nilm-edge-platform",
  "magnus-llm-automation",
  "telegram-inventory-gemini-bot",
  "wyze-lab-monitor",
];

const TRACKS = [
  {
    title: "AI Automation",
    description:
      "RAG, voice/document workflows, evals, and Python services that can be tested and deployed.",
    icon: Brain,
    highlights: ["RAG", "LLM evals", "FastAPI"],
  },
  {
    title: "Edge ML / Firmware",
    description:
      "STM32, telemetry, OTA safety, and ML pipelines that connect real devices to cloud systems.",
    icon: CircuitBoard,
    highlights: ["STM32", "NILM", "MQTT"],
  },
  {
    title: "Data Products",
    description:
      "Operational dashboards, reconciliation tools, and cloud-backed automations for business users.",
    icon: Cloud,
    highlights: ["Postgres", "Docker", "Reports"],
  },
];

export default function HomePage() {
  const projects = getAllProjects();
  const featured = FEATURED_AI_SLUGS.map((slug) =>
    projects.find((project) => project.slug === slug),
  ).filter((project): project is Project => Boolean(project));

  return (
    <div className="space-y-20">
      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-hud-text">
              Featured AI Projects
            </h2>
            <p className="mt-2 text-sm text-hud-subtle max-w-2xl">
              Production-oriented case studies across RAG, LLM automation, OCR, field devices, and edge ML.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-hud-accent transition-all hover:text-hud-accent-strong hover:scale-105 self-start"
          >
            View all projects
            <span className="text-xs">→</span>
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-hud-border/60 bg-hud-surface/80 p-10 backdrop-blur-sm">
        <h2 className="text-lg font-semibold uppercase tracking-[0.28em] text-hud-subtle">
          Primary Tracks
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {TRACKS.map(({ title, description, icon: Icon, highlights }) => (
            <div
              key={title}
              className="hud-panel flex flex-col gap-4 rounded-2xl p-6 shadow-inner"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-hud-border/40">
                  <Icon className="size-5 text-hud-accent" />
                </span>
                <h3 className="text-xl font-semibold text-hud-text">{title}</h3>
              </div>
              <p className="text-sm text-hud-subtle">{description}</p>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-hud-subtle">
                {highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-hud-border/50 px-2.5 py-1"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-hud-border/60 bg-hud-surface/85 p-10 sm:p-12 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hud-accent/5 to-hud-accent-strong/5" />
        <div className="relative flex flex-col gap-6 text-center">
          <div className="mx-auto size-16 rounded-full bg-hud-accent/20 flex items-center justify-center">
            <Sparkles className="size-8 text-hud-accent" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-hud-text leading-tight">
            Need AI automation that survives production?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-hud-subtle leading-relaxed">
            I help teams turn messy documents, device telemetry, and business processes into maintainable AI systems with clear APIs, measurable quality, and deployable demos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-hud-accent px-8 py-3 text-sm font-semibold !text-hud-bg transition-all hover:bg-hud-accent-strong hover:!text-hud-bg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hud-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-hud-bg shadow-lg shadow-hud-accent/25"
            >
              Contact
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hud-border/70 bg-hud-surface/50 px-8 py-3 text-sm font-semibold text-hud-accent transition-all hover:border-hud-accent/80 hover:text-hud-accent-strong hover:bg-hud-accent/10 hover:scale-105 backdrop-blur-sm"
            >
              Review projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

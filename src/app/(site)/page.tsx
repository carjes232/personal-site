import { Brain, CircuitBoard, Cloud, Sparkles } from "lucide-react";
import Link from "next/link";
import { getAllProjects, getFeaturedProjects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { PortfolioHero } from "@/components/PortfolioHero";

const TRACKS = [
  {
    title: "AI Automation",
    description:
      "RAG, voice/document workflows, evals, and Python services that can be tested and deployed.",
    icon: Brain,
    highlights: ["RAG", "LLM evals", "FastAPI"],
    href: "/projects?track=ai-backend",
  },
  {
    title: "Edge ML / Firmware",
    description:
      "STM32, telemetry, OTA safety, and ML pipelines that connect real devices to cloud systems.",
    icon: CircuitBoard,
    highlights: ["STM32", "NILM", "MQTT"],
    href: "/projects?track=firmware",
  },
  {
    title: "Data Products",
    description:
      "Operational dashboards, reconciliation tools, and cloud-backed automations for business users.",
    icon: Cloud,
    highlights: ["Postgres", "Docker", "Reports"],
    href: "/projects?track=web-cloud",
  },
];

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-20">
      <PortfolioHero />

      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-hud-text sm:text-3xl">
              Featured work
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-hud-subtle">
              Production-oriented case studies across RAG, LLM automation, OCR,
              field devices, and edge ML — each with architecture notes and
              measurable outcomes where possible.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-hud-accent transition hover:text-hud-accent-strong"
          >
            View all {getAllProjects().length} projects
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index < 3}
            />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-hud-border/60 bg-hud-surface/80 p-8 sm:p-10 backdrop-blur-sm">
        <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-hud-subtle">
          Primary tracks
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TRACKS.map(({ title, description, icon: Icon, highlights, href }) => (
            <Link
              key={title}
              href={href}
              className="hud-panel group flex flex-col gap-4 rounded-2xl p-6 transition hover:border-hud-accent/50 hover:shadow-hud"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-hud-border/40 transition group-hover:bg-hud-accent/15">
                  <Icon className="size-5 text-hud-accent" />
                </span>
                <h3 className="text-lg font-semibold text-hud-text">{title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-hud-subtle">{description}</p>
              <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em] text-hud-subtle">
                {highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-hud-border/50 px-2.5 py-1"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <span className="mt-auto text-xs font-semibold text-hud-accent opacity-0 transition group-hover:opacity-100">
                Explore track →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-hud-border/60 bg-hud-surface/85 p-10 sm:p-12 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-hud-accent/5 to-hud-accent-strong/5" />
        <div className="relative flex flex-col gap-6 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-hud-accent/20">
            <Sparkles className="size-8 text-hud-accent" />
          </div>
          <h2 className="text-2xl font-semibold leading-tight text-hud-text sm:text-3xl">
            Need AI automation that survives production?
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-hud-subtle">
            I help teams turn messy documents, device telemetry, and business
            processes into maintainable AI systems with clear APIs, measurable
            quality, and deployable demos.
          </p>
          <div className="mt-2 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-hud-accent px-8 py-3 text-sm font-semibold !text-hud-bg shadow-lg shadow-hud-accent/25 transition hover:bg-hud-accent-strong hover:!text-hud-bg hover:scale-[1.02]"
            >
              Contact
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hud-border/70 bg-hud-surface/50 px-8 py-3 text-sm font-semibold text-hud-accent backdrop-blur-sm transition hover:border-hud-accent/80 hover:bg-hud-accent/10"
            >
              Review projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-hud-border/60 bg-hud-surface/80 p-6 sm:p-10 lg:p-12 backdrop-blur-sm">
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-hud-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-1/3 size-56 rounded-full bg-hud-accent-strong/10 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-hud-accent">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] text-hud-text sm:text-5xl lg:text-[3.25rem]">
            <span className="text-gradient">AI systems</span> that give teams
            time back.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-hud-subtle">
            I&apos;m Daniel Cárdenas. I turn process shadowing into reviewable SOPs
            and flowcharts, and build voice agents that help operations follow
            up on lateness and absence. My focus is useful outcomes, human
            review, and reliable delivery.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-hud-accent px-6 py-3 text-sm font-semibold !text-hud-bg shadow-lg shadow-hud-accent/20 transition hover:bg-hud-accent-strong hover:!text-hud-bg"
            >
              Browse case studies
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hud-border/70 px-6 py-3 text-sm font-semibold text-hud-text transition hover:border-hud-accent/60 hover:text-hud-accent"
            >
              Résumé
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-hud-subtle">
            <a
              href="https://github.com/carjes232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-hud-accent"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dancarjes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-hud-accent"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href="mailto:daniestebanc@hotmail.com"
              className="inline-flex items-center gap-2 transition hover:text-hud-accent"
            >
              <Mail className="size-4" /> Email
            </a>
          </div>
        </div>

        <div className="hidden border-l border-hud-border/70 pl-8 lg:block" aria-label="Selected work">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-hud-accent">Selected work</p>
          <div className="mt-6 space-y-6">
            <p className="border-b border-hud-border/50 pb-5 text-lg leading-snug text-hud-text">Shadowing → editable SOP + flowchart</p>
            <p className="border-b border-hud-border/50 pb-5 text-lg leading-snug text-hud-text">Employee follow-up → reviewable reasons</p>
            <p className="text-lg leading-snug text-hud-text">Source material → editable slides</p>
          </div>
        </div>
      </div>
    </section>
  );
}

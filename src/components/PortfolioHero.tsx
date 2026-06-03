import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { PortfolioStats } from "@/components/PortfolioStats";

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-hud-border/60 bg-hud-surface/80 p-8 sm:p-10 lg:p-12 backdrop-blur-sm">
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-hud-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-1/3 size-56 rounded-full bg-hud-accent-strong/10 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-hud-accent">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] text-hud-text sm:text-5xl lg:text-[3.25rem]">
            <span className="text-gradient">AI systems</span> that ship — from
            RAG pipelines to edge firmware.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-hud-subtle">
            I&apos;m Daniel Cárdenas, an AI automation engineer. This site is a
            curated set of production-oriented case studies: retrieval quality,
            document and voice automation, Python APIs, and the embedded
            telemetry that makes edge ML useful in the field.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-hud-accent px-6 py-3 text-sm font-semibold !text-hud-bg transition hover:bg-hud-accent-strong hover:!text-hud-bg hover:scale-[1.02] shadow-lg shadow-hud-accent/20"
            >
              Browse case studies
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hud-border/70 bg-hud-bg/20 px-6 py-3 text-sm font-semibold text-hud-accent transition hover:border-hud-accent/60 hover:bg-hud-accent/10"
            >
              Get in touch
            </Link>
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hud-border/50 px-6 py-3 text-sm font-semibold text-hud-subtle transition hover:border-hud-border hover:text-hud-text"
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

        <PortfolioStats />
      </div>
    </section>
  );
}

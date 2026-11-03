import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const FACTS = [
  {
    term: "Now",
    detail: "AI Engineer at Lean Tech, since February 2026",
  },
  {
    term: "Before",
    detail: "ML and firmware at Solenium; earlier full-time LLM/RAG work at Magnus (May 2023–July 2024)",
  },
  {
    term: "Trained in",
    detail: "Engineering Physics, Universidad Nacional de Colombia",
  },
  {
    term: "Based in",
    detail: "Brazil, working remotely · Spanish, English, some Portuguese",
  },
];

export function PortfolioHero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="grid gap-12 pb-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-16"
    >
      <div className="space-y-7">
        <h1
          id="hero-title"
          className="text-5xl leading-[1.05] text-hud-text sm:text-6xl"
        >
          Daniel Cardenas
        </h1>
        <p className="font-display text-2xl leading-snug text-hud-text/90 sm:text-[1.7rem]">
          Applied AI engineer, working across backend services and edge
          devices.
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-hud-subtle sm:text-lg">
          I build practical systems around models (agent and voice workflows,
          APIs, embedded hardware) and I try to be precise about what the
          evidence shows and what it doesn&apos;t.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-hud-text px-5 py-2.5 text-sm font-medium !text-hud-bg transition hover:bg-hud-accent-strong hover:!text-hud-bg"
          >
            Selected work
            <ArrowDown aria-hidden="true" className="size-4" />
          </Link>
          <a
            href="/resume.pdf"
            className="inline-flex items-center rounded-md border border-hud-border px-5 py-2.5 text-sm font-medium !text-hud-text transition hover:border-hud-subtle"
          >
            Résumé (PDF)
          </a>
        </div>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <li>
            <a
              href="https://github.com/carjes232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 !text-hud-subtle hover:!text-hud-text"
            >
              <Github aria-hidden="true" className="size-4" /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dancarjes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 !text-hud-subtle hover:!text-hud-text"
            >
              <Linkedin aria-hidden="true" className="size-4" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:daniestebanc@hotmail.com"
              className="inline-flex items-center gap-2 !text-hud-subtle hover:!text-hud-text"
            >
              <Mail aria-hidden="true" className="size-4" /> Email
            </a>
          </li>
        </ul>
      </div>

      <aside aria-label="Background at a glance" className="lg:border-l lg:border-hud-border/70 lg:pl-10">
        <dl className="divide-y divide-hud-border/60 border-y border-hud-border/60 lg:border-t-0">
          {FACTS.map(({ term, detail }) => (
            <div key={term} className="grid grid-cols-[6.5rem_1fr] gap-4 py-4 text-sm">
              <dt className="text-hud-subtle">{term}</dt>
              <dd className="leading-relaxed text-hud-text">{detail}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}

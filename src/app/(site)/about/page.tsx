import type { Metadata } from "next";
import { Globe, Layers, Map, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Player Card",
  description:
    "Meet Daniel Cárdenas: firmware roots, backend rigor, and AI systems that deliver measurable impact.",
  openGraph: {
    title: "About | Daniel Cárdenas",
    description:
      "Meet Daniel Cárdenas: firmware roots, backend rigor, and AI systems that deliver measurable impact.",
  },
};

const STACK = [
  {
    label: "Embedded",
    items: ["STM32", "FreeRTOS", "C/C++", "Zephyr"],
  },
  {
    label: "Backend",
    items: ["Go", "Python", "FastAPI", "Postgres", "Redis"],
  },
  {
    label: "AI",
    items: ["RAG", "LangChain", "pgvector", "LLM Eval"],
  },
  {
    label: "Web",
    items: ["Next.js", "Tailwind", "Supabase", "Vercel"],
  },
];

const LANGUAGES = [
  { label: "Spanish", level: "Native" },
  { label: "English", level: "Professional" },
  { label: "Portuguese", level: "Professional" },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-hud-border/60 bg-hud-surface/70 p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-hud-subtle">
              Player Card
            </p>
            <h1 className="text-4xl font-semibold text-hud-text">
              Firmware roots, AI-fueled delivery.
            </h1>
            <p className="text-base text-hud-subtle">
              I started by bringing STM32 devices online for energy and IoT companies in Colombia. That edge experience built my obsession for reliability and observability—principles I now carry into AI pipelines, realtime backends, and polished web experiences. Today I help teams connect device data, vector-aware services, and frontends that feel like command centers.
            </p>
            <p className="text-base text-hud-subtle">
              My toolkit spans embedded C, Go/Python services, Postgres/pgvector, and modern Next.js frontends. I enjoy translating ambiguous ideas into measurable outcomes: latency budgets, eval harnesses, KPI dashboards, and sanitized demos recruiters can ship internally.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-hud-accent px-5 py-2 text-sm font-semibold text-hud-bg transition hover:bg-hud-accent-strong"
              >
                Download résumé
              </a>
              <a
                href="mailto:hi@danielcardenas.dev"
                className="inline-flex items-center gap-2 rounded-full border border-hud-border/70 px-5 py-2 text-sm font-semibold text-hud-accent transition hover:border-hud-accent/60 hover:text-hud-accent-strong"
              >
                Say hi
              </a>
            </div>
          </div>
          <div className="grid w-full max-w-sm gap-4">
            <div className="rounded-2xl border border-hud-border/60 bg-hud-surface-alt/70 p-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-hud-subtle">
                <Rocket className="size-4 text-hud-accent" /> Currently
              </div>
              <p className="mt-3 text-sm text-hud-subtle">
                Consulting on AI-enabled data tooling, RAG pipelines, and edge monitoring stacks for growth-stage companies.
              </p>
            </div>
            <div className="rounded-2xl border border-hud-border/60 bg-hud-surface-alt/70 p-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-hud-subtle">
                <Layers className="size-4 text-hud-accent" /> Focus Areas
              </div>
              <ul className="mt-3 space-y-2 text-sm text-hud-subtle">
                <li>RAG + eval harnesses with latency budgets.</li>
                <li>Device telemetry pipelines with OTA safety.</li>
                <li>Next.js dashboards that surface the right KPIs.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-hud-border/60 bg-hud-surface-alt/70 p-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-hud-subtle">
                <Globe className="size-4 text-hud-accent" /> Languages
              </div>
              <ul className="mt-3 space-y-2 text-sm text-hud-subtle">
                {LANGUAGES.map(({ label, level }) => (
                  <li key={label} className="flex items-center justify-between">
                    <span>{label}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-hud-subtle">
                      {level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-hud-border/60 bg-hud-surface/70 p-8">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-hud-subtle">
          <Map className="size-4 text-hud-accent" /> Stack Overview
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {STACK.map(({ label, items }) => (
            <div
              key={label}
              className="rounded-2xl border border-hud-border/60 bg-hud-surface-alt/70 p-4"
            >
              <p className="text-sm font-semibold text-hud-text">{label}</p>
              <ul className="mt-3 space-y-2 text-sm text-hud-subtle">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

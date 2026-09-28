import type { Metadata } from "next";
import { Globe, Layers, Map, Rocket } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Daniel Cárdenas: applied AI engineer building systems that shorten process documentation, automate employee follow-up, and produce reviewable results.",
  openGraph: {
    title: "About | Daniel Cárdenas",
    description:
      "Meet Daniel Cárdenas: applied AI engineer building systems that shorten process documentation, automate employee follow-up, and produce reviewable results.",
  },
};

const STACK = [
  {
    label: "Embedded",
    items: ["STM32", "FreeRTOS", "C/C++", "OTA"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Flask", "Postgres / SQLite", "Docker"],
  },
  {
    label: "AI",
    items: ["RAG", "Gemini", "Azure OpenAI", "pgvector", "LLM Eval"],
  },
  {
    label: "Product & Cloud",
    items: ["React / TanStack", "Supabase / RLS", "Cloudflare Workers", "Dashboards"],
  },
];

const LANGUAGES = [
  { label: "Spanish", level: "Native" },
  { label: "English", level: "C1 Advanced" },
  { label: "Portuguese", level: "A2" },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-hud-border/60 bg-hud-surface/70 p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-hud-subtle">
              Professional Snapshot
            </p>
            <h1 className="text-4xl font-semibold text-hud-text">
              I build AI workflows that reduce repetitive work.
            </h1>
            <p className="text-base text-hud-subtle">
              I lead a <Link href="/projects/quiver-multimodal-agent-operations" className="text-hud-accent hover:text-hud-accent-strong">process-documentation workflow</Link> that turns shadowing conversations, source files, and revisions into an SOP and flowchart people can inspect and edit. I also built a <Link href="/projects/agentedge-slides-presentation-agent" className="text-hud-accent hover:text-hud-accent-strong">presentation agent</Link> that creates editable slides from source material and checks the rendered deck before delivery.
            </p>
            <p className="text-base text-hud-subtle">
              Staff previously had time to call mainly longer absence cases. I led a <Link href="/projects/sst-voice-agent-reliability" className="text-hud-accent hover:text-hud-accent-strong">voice-agent workflow</Link> that can follow up on more lateness and absence cases, record each person&apos;s reported reason, and give operations a case to review. A voicemail-detection improvement reduced observed cost per call by 69%; the $27.2K annual savings figure is a potential run rate, not realized savings.
            </p>
            <p className="text-base text-hud-subtle">
              I have also <Link href="/projects/openclaw-msteams-media-limit-fix" className="text-hud-accent hover:text-hud-accent-strong">fixed a Teams issue in OpenClaw</Link>, advised on <Link href="/projects/lean360-crm-whitespace-intelligence" className="text-hud-accent hover:text-hud-accent-strong">CRM integration reliability</Link>, and built RAG and edge ML systems. Across these projects, I focus on keeping AI output useful after it leaves the model: grounded evidence, clear state, human review, and reliable delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-hud-accent px-5 py-2 text-sm font-semibold !text-hud-bg transition hover:bg-hud-accent-strong hover:!text-hud-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hud-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-hud-bg"
              >
                Download résumé
              </a>
              <a
                href="mailto:daniestebanc@hotmail.com"
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
                Artificial Intelligence Engineer at Lean Tech; previously ML/Firmware Engineer at Solenium and Machine Learning Engineer at Magnus.
              </p>
            </div>
            <div className="rounded-2xl border border-hud-border/60 bg-hud-surface-alt/70 p-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-hud-subtle">
                <Layers className="size-4 text-hud-accent" /> Focus Areas
              </div>
              <ul className="mt-3 space-y-2 text-sm text-hud-subtle">
                <li>RAG, retrieval quality, and citation-aware LLM workflows.</li>
                <li>Voice agents, multimodal documents, editable presentations, and reliable delivery.</li>
                <li>Integration reviews, operational data products, and auditable finance workflows.</li>
                <li>Edge ML and smart-meter telemetry with OTA safety.</li>
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

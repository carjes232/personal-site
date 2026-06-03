import type { Metadata } from "next";
import { Globe, Layers, Map, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Player Card",
  description:
    "Meet Daniel Cárdenas: AI automation engineer with RAG, Python API, edge ML, and firmware experience.",
  openGraph: {
    title: "About | Daniel Cárdenas",
    description:
      "Meet Daniel Cárdenas: AI automation engineer with RAG, Python API, edge ML, and firmware experience.",
  },
};

const STACK = [
  {
    label: "Embedded",
    items: ["STM32", "FreeRTOS", "C/C++", "OTA"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Flask", "Postgres", "Docker"],
  },
  {
    label: "AI",
    items: ["RAG", "Gemini", "Azure OpenAI", "pgvector", "LLM Eval"],
  },
  {
    label: "Web",
    items: ["Next.js", "Vue", "PyQt6", "Dashboards"],
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
              AI automation with hardware-level instincts.
            </h1>
            <p className="text-base text-hud-subtle">
              I build production-oriented AI systems across documents, business workflows, and connected devices. My recent work includes RAG pipelines for clinical simulation workflows, a Gemini-powered Telegram inventory bot, and smart-meter NILM systems that connect STM32 acquisition, Python services, MQTT telemetry, and field devices.
            </p>
            <p className="text-base text-hud-subtle">
              I am strongest where software has to touch reality: noisy sensor data, private documents, legacy spreadsheets, uncertain prompts, and users who need the system to work without drama. My toolkit spans Python/FastAPI/Flask, Postgres/pgvector/FAISS, Gemini/Azure OpenAI, Docker, STM32/FreeRTOS, and practical dashboards.
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
                <li>Voice/document automation using Python APIs and LLMs.</li>
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

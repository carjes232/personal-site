import type { Metadata } from "next";
import Link from "next/link";

const DESCRIPTION =
  "Daniel Cárdenas is an applied AI engineer working across agent and voice workflows, backend services, and embedded edge systems.";

export const metadata: Metadata = {
  title: "About",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Daniel Cárdenas",
    description: DESCRIPTION,
    url: "/about",
  },
};

const STACK = [
  {
    label: "AI",
    items: ["RAG", "Gemini", "Azure OpenAI", "pgvector", "LLM evaluation"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Flask", "Postgres / SQLite", "Docker"],
  },
  {
    label: "Product and cloud",
    items: ["React / TanStack", "Supabase / RLS", "Cloudflare Workers", "Dashboards"],
  },
  {
    label: "Embedded",
    items: ["STM32", "FreeRTOS", "C/C++", "OTA"],
  },
];

const FACTS = [
  { term: "Currently", detail: "AI Engineer at Lean Tech, since February 2026" },
  { term: "Previously", detail: "ML Engineer / Firmware Developer at Solenium" },
  { term: "Education", detail: "B.Sc. Engineering Physics, Universidad Nacional de Colombia" },
  { term: "Based in", detail: "Brazil, working remotely" },
];

const LANGUAGES = [
  { label: "Spanish", level: "Native" },
  { label: "English", level: "C1" },
  { label: "Portuguese", level: "A2–B1 (self-assessed)" },
];

const FOCUS = [
  "RAG, retrieval quality, and citation-aware LLM workflows",
  "Voice agents, multimodal documents, editable presentations, and reliable delivery",
  "Integration reviews, operational data products, and auditable workflows",
  "Edge ML and smart-meter telemetry with OTA safety",
];

export default function AboutPage() {
  return (
    <div className="space-y-20 sm:space-y-24">
      <section
        aria-labelledby="about-title"
        className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-16"
      >
        <div className="max-w-2xl space-y-6">
          <h1 id="about-title" className="text-4xl leading-tight text-hud-text sm:text-5xl">
            About
          </h1>
          <p className="font-display text-2xl leading-snug text-hud-text/90">
            I build AI workflows that reduce repetitive work, and I care about
            what happens to the output after it leaves the model.
          </p>
          <div className="space-y-5 text-base leading-relaxed text-hud-subtle">
            <p>
              My professional LLM work began at Magnus, where I worked full-time as a
              Machine Learning Engineer from May 2023 to July 2024. I contributed
              Azure OpenAI integrations, prompt testing and RAG retrieval for
              clinical-training and survey-feedback applications.
            </p>
            <p>
              I work on architecture, qualification, and production ownership for a{" "}
              <Link href="/projects/quiver-multimodal-agent-operations">process-documentation workflow</Link>{" "}
              that turns shadowing conversations, source files, and revisions into an SOP and
              flowchart people can inspect and edit. I also contribute to a{" "}
              <Link href="/projects/agentedge-slides-presentation-agent">presentation agent</Link>{" "}
              that creates editable slides from source material and checks the rendered deck
              before delivery.
            </p>
            <p>
              Staff previously had time to call mainly longer absence cases. On an inherited,
              collaboratively built{" "}
              <Link href="/projects/sst-voice-agent-reliability">voice-agent platform</Link>, I own
              ongoing engineering, evaluation, and release acceptance: the agent can follow up on
              more lateness and absence cases, record each person&apos;s reported reason, and give
              operations a case to review. My reliability work includes diagnosing calls that
              looped on voicemail and keeping failed or partial calls from being recorded as
              successful outcomes.
            </p>
            <p>
              I have also{" "}
              <Link href="/projects/openclaw-msteams-media-limit-fix">fixed a Teams issue in OpenClaw</Link>,
              advised on{" "}
              <Link href="/projects/lean360-crm-whitespace-intelligence">CRM integration reliability</Link>,
              developed a{" "}
              <Link href="/projects/solenium-faceid-attendance-pwa">FaceID attendance PWA</Link> with
              on-device matching and an offline queue, contributed to{" "}
              <Link href="/projects/solenium-nilm-edge-platform">smart-meter edge ML</Link>, and built an{" "}
              <Link href="/projects/authenticated-cloud-share-service">authenticated file service</Link>{" "}
              with strict path and upload boundaries.
            </p>
            <p>
              Across these projects the work is mostly the same: grounded evidence, clear state,
              human review, and reliable delivery.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/resume.pdf"
              className="inline-flex items-center rounded-md bg-hud-text px-5 py-2.5 text-sm font-medium !text-hud-bg transition hover:bg-hud-accent-strong hover:!text-hud-bg"
            >
              Résumé (PDF)
            </a>
            <a
              href="mailto:daniestebanc@hotmail.com"
              className="inline-flex items-center rounded-md border border-hud-border px-5 py-2.5 text-sm font-medium !text-hud-text transition hover:border-hud-subtle"
            >
              Email me
            </a>
          </div>
        </div>

        <aside aria-label="Profile facts" className="space-y-10 lg:border-l lg:border-hud-border/70 lg:pl-10">
          <dl className="divide-y divide-hud-border/60 border-y border-hud-border/60 lg:border-t-0">
            {FACTS.map(({ term, detail }) => (
              <div key={term} className="grid grid-cols-[6.5rem_1fr] gap-4 py-4 text-sm">
                <dt className="text-hud-subtle">{term}</dt>
                <dd className="leading-relaxed text-hud-text">{detail}</dd>
              </div>
            ))}
          </dl>
          <div>
            <h2 className="text-xl text-hud-text">Languages</h2>
            <dl className="mt-3 space-y-2 text-sm">
              {LANGUAGES.map(({ label, level }) => (
                <div key={label} className="flex items-baseline justify-between gap-3">
                  <dt className="text-hud-text">{label}</dt>
                  <dd className="text-right text-hud-subtle">{level}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="text-xl text-hud-text">Focus areas</h2>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-hud-subtle">
              {FOCUS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section aria-labelledby="stack-title" className="space-y-8">
        <h2 id="stack-title" className="text-3xl text-hud-text">
          Tools I work with
        </h2>
        <div className="grid gap-8 border-t border-hud-border/70 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map(({ label, items }) => (
            <div key={label}>
              <h3 className="text-sm font-medium text-hud-text">{label}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-hud-subtle">
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

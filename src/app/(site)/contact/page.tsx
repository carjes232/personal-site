import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Daniel Cárdenas for AI automation, RAG, Python API, or edge ML projects.",
  openGraph: {
    title: "Contact | Daniel Cárdenas",
    description: "Get in touch with Daniel Cárdenas for AI automation, RAG, Python API, or edge ML projects.",
  },
};

export default function ContactPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-semibold text-hud-text">Contact</h1>
        <p className="text-sm text-hud-subtle">
          Email me with the workflow, data sources, target users, and any deployment constraints.
        </p>
      </header>

      <div className="rounded-3xl border border-hud-border/60 bg-hud-surface/70 p-6">
        <h2 className="text-lg font-semibold text-hud-text">Best fit</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-hud-subtle">
          RAG systems, LLM automation, Python APIs, data reconciliation, computer vision/OCR, IoT telemetry, and edge ML prototypes that need to work beyond a demo.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <a
            href="mailto:daniestebanc@hotmail.com"
            className="flex items-center gap-3 rounded-2xl border border-hud-border/60 bg-hud-surface-alt/60 p-4 text-sm font-semibold text-hud-accent transition hover:border-hud-accent/60 hover:text-hud-accent-strong"
          >
            <Mail className="size-4" />
            daniestebanc@hotmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/dancarjes/"
            className="flex items-center gap-3 rounded-2xl border border-hud-border/60 bg-hud-surface-alt/60 p-4 text-sm font-semibold text-hud-accent transition hover:border-hud-accent/60 hover:text-hud-accent-strong"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/carjes232"
            className="flex items-center gap-3 rounded-2xl border border-hud-border/60 bg-hud-surface-alt/60 p-4 text-sm font-semibold text-hud-accent transition hover:border-hud-accent/60 hover:text-hud-accent-strong"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="size-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

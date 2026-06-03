import type { Metadata } from "next";
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
        <h1 className="text-4xl font-semibold text-hud-text">Quest Turn-In</h1>
        <p className="text-sm text-hud-subtle">
          Email me with the workflow, data sources, target users, and any deployment constraints.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-hud-border/60 bg-hud-surface/70 p-6">
          <h2 className="text-lg font-semibold text-hud-text">Direct</h2>
          <p className="mt-3 text-sm text-hud-subtle">
            Best fit: RAG/chatbots, LLM automation, Python APIs, data reconciliation, IoT telemetry, and edge ML prototypes.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a
              href="mailto:daniestebanc@hotmail.com"
              className="text-hud-accent transition hover:text-hud-accent-strong"
            >
              daniestebanc@hotmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/dancarjes/"
              className="text-hud-accent transition hover:text-hud-accent-strong"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/carjes232"
              className="text-hud-accent transition hover:text-hud-accent-strong"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-dashed border-hud-border/50 bg-hud-surface/40 p-6">
          <h2 className="text-lg font-semibold text-hud-text">Contact Form (v1.1)</h2>
          <p className="mt-2 text-sm text-hud-subtle">
            This form will send emails via an edge function with basic rate limiting. For now, use the direct channels.
          </p>
          <form className="mt-4 opacity-60" aria-hidden="true">
            <fieldset className="space-y-4" disabled>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-hud-subtle">
                  Name
                </label>
                <input
                  className="mt-1 w-full rounded-lg border border-hud-border/60 bg-hud-surface-alt/50 px-3 py-2 text-sm text-hud-subtle"
                  placeholder="Coming soon"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-hud-subtle">
                  Email
                </label>
                <input
                  className="mt-1 w-full rounded-lg border border-hud-border/60 bg-hud-surface-alt/50 px-3 py-2 text-sm text-hud-subtle"
                  placeholder="Coming soon"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-hud-subtle">
                  Project Brief
                </label>
                <textarea
                  className="mt-1 h-24 w-full rounded-lg border border-hud-border/60 bg-hud-surface-alt/50 px-3 py-2 text-sm text-hud-subtle"
                  placeholder="Coming soon"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-hud-border/50 px-4 py-2 text-sm font-semibold text-hud-subtle"
              >
                Submit request
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}

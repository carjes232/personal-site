import { Sparkles } from "lucide-react";
import { getAllNotes, getAllProjects } from "@/lib/content";
import { Navigation } from "@/components/Navigation";
import { XPBar } from "@/components/XPBar";
import { CmdPalette, type PaletteItem } from "@/components/CmdPalette";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Notes", href: "/notes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function buildPaletteItems(): PaletteItem[] {
  const projects = getAllProjects();
  const notes = getAllNotes();

  const routeItems: PaletteItem[] = NAV_ITEMS.map((item) => ({
    id: `route-${item.href}`,
    title: item.label,
    href: item.href,
    type: "route",
    subtitle: "Navigate",
  }));

  const projectItems: PaletteItem[] = projects.map((project) => ({
    id: project.slug,
    title: project.title,
    subtitle: project.summary,
    href: `/projects/${project.slug}`,
    type: "project",
    tags: project.tags,
  }));

  const noteItems: PaletteItem[] = notes.map((note) => ({
    id: note.slug,
    title: note.title,
    subtitle: note.summary,
    href: `/notes/${note.slug}`,
    type: "note",
    tags: note.tags,
  }));

  return [...routeItems, ...projectItems, ...noteItems];
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 flex flex-col gap-3 border-t border-hud-border/60 pb-8 pt-6 text-sm text-hud-subtle sm:flex-row sm:items-center sm:justify-between">
      <span>
        © {year} Daniel Cárdenas. Firmware → AI systems.
      </span>
      <div className="flex flex-wrap items-center gap-4">
        <a href="https://github.com/carjes232" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/dancarjes/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:daniestebanc@hotmail.com">daniestebanc@hotmail.com</a>
      </div>
    </footer>
  );
}

export function HUDShell({ children }: { children: React.ReactNode }) {
  const paletteItems = buildPaletteItems();

  return (
    <div className="relative min-h-screen overflow-hidden gradient-bg">
        <div className="pointer-events-none absolute inset-0 hud-grid opacity-[0.08]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-12 px-4 pb-12 pt-8 sm:px-8 lg:px-12">
          <header className="flex flex-col gap-6 rounded-3xl border border-hud-border/50 bg-hud-surface/85 p-6 sm:p-8 backdrop-blur relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-hud-accent/5 to-transparent opacity-50" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-hud-subtle font-medium">
                    Daniel Cárdenas
                  </p>
                  <h1 className="mt-2 text-xl sm:text-2xl font-semibold text-hud-text leading-tight">
                    AI Automation Engineer: RAG · Edge ML · Firmware
                  </h1>
                </div>
                <p className="text-sm text-hud-subtle leading-relaxed max-w-2xl">
                  I build practical AI systems: RAG pipelines, voice and document automation, Python APIs, and the embedded telemetry that makes edge ML useful in the real world.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Navigation items={NAV_ITEMS} />
                <CmdPalette
                  items={paletteItems}
                  trigger={
                    <button className="flex items-center gap-2 rounded-full border border-hud-border/70 bg-hud-surface-alt/80 px-4 py-2 text-sm text-hud-subtle transition-all hover:border-hud-accent/60 hover:text-hud-text hover:scale-105 backdrop-blur-sm">
                      <Sparkles className="size-4 text-hud-accent" />
                      <span className="hidden sm:inline">Command Palette</span>
                      <span className="hidden sm:inline-block rounded bg-hud-border/80 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-hud-subtle">
                        ⌘K
                      </span>
                    </button>
                  }
                />
              </div>
            </div>
            <div className="relative">
              <XPBar />
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
    </div>
  );
}

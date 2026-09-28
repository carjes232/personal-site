import Link from "next/link";
import { getAllNotes, getAllProjects } from "@/lib/content";
import { Navigation } from "@/components/Navigation";
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
      <span>© {year} Daniel Cárdenas. Firmware → AI systems.</span>
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
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-4 pb-12 pt-4 sm:gap-10 sm:px-8 sm:pt-6 lg:px-12">
        <header className="sticky top-3 z-30 flex flex-col gap-3 rounded-2xl border border-hud-border/50 bg-hud-surface/95 p-3 backdrop-blur-xl sm:top-4 sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <Link href="/" className="group shrink-0 space-y-0.5">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-hud-subtle">
              Daniel Cárdenas
            </p>
            <p className="text-sm font-semibold text-hud-text transition group-hover:text-hud-accent">
              Applied AI · Automation · Edge ML
            </p>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Navigation items={NAV_ITEMS} />
            <CmdPalette items={paletteItems} />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <Footer />
      </div>
    </div>
  );
}

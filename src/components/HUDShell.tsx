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
    <footer className="mt-20 border-t border-hud-border/70 pb-10 pt-8 text-sm text-hud-subtle">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <p className="font-display text-base text-hud-text">Daniel Cárdenas</p>
          <p>Applied AI, backend and edge systems.</p>
        </div>
        <nav aria-label="Contact and profiles" className="flex flex-wrap gap-x-5 gap-y-2">
          <a href="mailto:daniestebanc@hotmail.com">Email</a>
          <a href="https://github.com/carjes232" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/dancarjes/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="/resume.pdf">Résumé</a>
        </nav>
      </div>
      <div className="mt-8 flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} Daniel Cárdenas</span>
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          <a href="/profile" className="!text-hud-subtle hover:!text-hud-text">
            Readable profile
          </a>
          <a href="/llms.txt" className="!text-hud-subtle hover:!text-hud-text">
            Text index
          </a>
        </span>
      </div>
    </footer>
  );
}

export function HUDShell({ children }: { children: React.ReactNode }) {
  const paletteItems = buildPaletteItems();

  return (
    <div className="min-h-screen bg-hud-bg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-hud-surface focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-8 lg:px-10">
        <header className="relative flex flex-col gap-4 border-b border-hud-border/70 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-6">
          <Link href="/" className="group shrink-0 !text-hud-text">
            <span className="block font-display text-lg leading-tight transition group-hover:text-hud-accent-strong">
              Daniel Cárdenas
            </span>
            <span className="block text-xs text-hud-subtle">
              Applied AI · Backend · Edge systems
            </span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <Navigation items={NAV_ITEMS} />
            <CmdPalette items={paletteItems} />
          </div>
        </header>

        <main id="main" className="flex-1 pt-10 sm:pt-14">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}

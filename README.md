# Daniel Cárdenas — Playable Portfolio

Next.js App Router site showcasing firmware, backend, and AI/RAG case studies with a HUD-inspired UI. Content lives in MDX, filtered via Contentlayer 2, and the XP system rewards interactions (project reads, repo/demo clicks, notes).

## Stack

- **Framework**: Next.js 15 (App Router, React 19)
- **Styling**: Tailwind CSS v4 with a dark HUD theme
- **Content**: Contentlayer2 loading MDX case studies and notes
- **Animations**: Framer Motion accents
- **Command Palette**: `cmdk` + Fuse.js search
- **Icons**: Lucide

## Local development

```bash
npm install
npm run dev
```

Contentlayer generates types on demand. If you add MDX files while the dev server is running, the loader will pick them up automatically.

## Authoring content

- Projects live in `src/content/projects/*.mdx`
- Notes live in `src/content/notes/*.mdx`
- Frontmatter is validated in `contentlayer.config.ts` and surfaces computed fields (slug, reading time, etc.)

Run a build to fail fast on invalid front‑matter:

```bash
npm run build
```

## XP system

XP is stored locally (`localStorage`) and updated via custom events. The progress bar listens to `xp:update` events dispatched by helpers in `src/lib/xp.ts`. New interactions can award XP by importing `awardXP` or reusing `AwardLink` for links.

## OG images

Dynamic images for projects are generated at `/og/[slug]` using `next/og`. Project metadata wires the image into Open Graph + Twitter cards.

## Project structure

```
src/
  app/
    (site)/
      page.tsx                 # Home
      projects/
        page.tsx               # Projects index with filters
        [slug]/page.tsx        # MDX-rendered case study
      notes/
        page.tsx               # Notes index
        [slug]/page.tsx        # Note detail
      about/page.tsx
      contact/page.tsx
    og/[slug]/route.tsx        # Dynamic OG images
  components/
    HUDShell.tsx               # Shared HUD chrome + command palette trigger
    ProjectCard.tsx
    NoteCard.tsx
    Badge.tsx
    XPBar.tsx
    CmdPalette.tsx
    AwardLink.tsx
    projects/
      ProjectsBrowser.tsx
      ProjectXPTracker.tsx
    notes/
      NoteXPTracker.tsx
  content/                      # MDX sources
  lib/
    content.ts                  # Content helpers (sorting, tracks, tags)
    xp.ts                       # XP storage helpers
    utils.ts                    # `cn` helper
```

## Pending enhancements (backlog)

Refer to the spec for v1.1+ items: Spanish i18n, contact API, sitemap, analytics dashboard, Solenium project writeups, and admin revalidation controls.

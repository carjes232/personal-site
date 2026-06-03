# Repository Guidelines

## Project Structure & Module Organization
- App Router pages live under `src/app/(site)` (home, projects, notes, about, contact) with shared chrome in `HUDShell`.
- UI components reside in `src/components`, grouped by feature (e.g., `projects/ProjectsBrowser.tsx`).
- MDX content is authored in `src/content/projects` and `src/content/notes`; Contentlayer 2 builds typed accessors in `.contentlayer`.
- Global config and styles: `tailwind.config.ts`, `src/app/globals.css`, `contentlayer.config.ts`.
- Public assets (covers, résumé placeholder) are stored in `public/`.

## Build, Test, and Development Commands
- `npm run dev` — Start the local Next.js dev server with Turbopack.
- `npm run lint` — Run ESLint against the entire project.
- `npm run build` — Create an optimized production build (SSG + dynamic OG routes).

## Coding Style & Naming Conventions
- TypeScript with strict mode; prefer `async`/`await` and explicit return types for helpers.
- Tailwind v4 for styling; use existing `hud-*` tokens and utility classes before adding new colors.
- Components use PascalCase filenames; hooks/utilities in `src/lib` follow camelCase exports.
- Formatting handled via ESLint + Prettier defaults (implicit through Next.js config).

## Testing Guidelines
- Linting (`npm run lint`) is the primary enforced check; add Vitest/Playwright suites in `__tests__` when needed.
- Future tests should mirror directory structure (e.g., `src/components/__tests__/ProjectCard.test.tsx`).
- Prefer descriptive test names ("renders badges", "filters by tag").

## Commit & Pull Request Guidelines
- Write imperative commit messages ("Add XP bar hover state"); group related changes together.
- Pull requests should summarize scope, list impacted routes/components, and include screenshots of UI changes when relevant.
- Link Jira/GitHub issues in the PR description and document follow-up tasks in checklist form.

## Resume Generation Guidelines
- When the user asks for a new or updated résumé/CV, default to a **one-page** layout (or as close as reasonably possible) while preserving hiring effectiveness.
- Prioritize concise, high-impact bullets that satisfy automated screening (ATS/keyword requirements) and remain attractive to human reviewers who skim quickly.
- Prefer fewer, stronger bullets and a small set of the most relevant projects over exhaustive lists; avoid wording that inflates length without adding clear hiring signal.

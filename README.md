# Daniel Cardenas — professional portfolio

A personal portfolio spanning applied AI, backend/data systems and embedded engineering. Case studies explain contribution, implementation, evidence and limitations; company source material and private operational records stay outside this repository.

## Stack and development

Next.js App Router, React, TypeScript, Tailwind CSS and Contentlayer 2.

    npm ci
    npm run dev

Validation:

    npm run lint
    npm run build

On a shared host, bound build workers and use the existing capacity/admission procedure rather than unrestricted parallel builds.

## Content and profile

- Public case studies: src/content/projects/*.mdx.
- Notes: src/content/notes/*.mdx.
- Schema: contentlayer.config.ts.
- Public profile facts: src/lib/profile.ts.
- Corrected English CV source: resume/resume_daniel_cardenas.md.
- Rebuild public/resume.pdf with: bash resume/build-public.sh (requires pandoc and xelatex).

Keep experience, attribution and languages aligned across these surfaces. Portuguese is A2–B1, self-assessed. Synthetic reductions, observational comparisons and hypothetical projections must retain their scope. Platform activity is not personal output; delivered artifacts are not automatically accepted customer outcomes.

## Readable formats and discovery

- /profile: server-rendered professional summary.
- /profile.json: versioned JSON profile and project index.
- /llms.txt: plain-text project discovery index.
- /projects/{slug}/source: text generated from the same public MDX body as each case study.
- /robots.txt and /sitemap.xml: public crawl discovery.
- /og/{slug}: project social previews.

The text index is a convenience convention, not a search-ranking or model-ingestion guarantee. These routes contain only public profile and case-study content. Do not add private evidence paths, client data, credentials or internal records to public assets or metadata.

Existing project URLs remain stable. UI changes should preserve server-rendered content, keyboard access and reduced-motion preferences.

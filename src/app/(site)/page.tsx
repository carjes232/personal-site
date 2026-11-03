import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  getAllProjects,
  getProjectBySlug,
  type Project,
  type ProjectTrack,
} from "@/lib/content";
import { getTrackVisual } from "@/lib/project-visuals";
import { PortfolioHero } from "@/components/PortfolioHero";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Curated for breadth: agent platform, voice reliability, on-device vision in
// the field, and a small backend service built around security boundaries.
const FEATURED_SLUGS = [
  "quiver-multimodal-agent-operations",
  "sst-voice-agent-reliability",
  "solenium-faceid-attendance-pwa",
  "authenticated-cloud-share-service",
];

const AREAS: { track: ProjectTrack; title: string; description: string }[] = [
  {
    track: "ai-backend",
    title: "AI workflows and backends",
    description:
      "Agents, voice and document workflows, retrieval, evaluation, and the APIs and state that keep them honest.",
  },
  {
    track: "firmware",
    title: "Embedded and edge ML",
    description:
      "STM32 and embedded Linux, telemetry, OTA safety, and models that have to run on the device.",
  },
  {
    track: "web-cloud",
    title: "Web, cloud and data tools",
    description:
      "Internal tools, reconciliation, workflow platforms, and small services with clear security boundaries.",
  },
];

function SelectedWorkItem({ project }: { project: Project }) {
  const track = getTrackVisual(project.track).label;
  const evidence = project.results?.[0];
  const titleId = `work-${project.slug}`;

  return (
    <li>
      <article
        aria-labelledby={titleId}
        className="group grid gap-3 border-t border-hud-border/70 py-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10"
      >
        <div className="space-y-2">
          <p className="text-xs text-hud-subtle">
            {track}
            <span aria-hidden="true"> · </span>
            {new Date(project.date).getFullYear()}
          </p>
          <h3 id={titleId} className="font-display text-2xl font-medium leading-snug">
            <Link
              href={`/projects/${project.slug}`}
              className="!text-hud-text hover:!text-hud-accent-strong"
            >
              {project.title}
            </Link>
          </h3>
          <p className="text-sm leading-relaxed text-hud-subtle">{project.role}</p>
        </div>
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-hud-text/90">{project.summary}</p>
          {evidence ? (
            <p className="border-l-2 border-hud-accent/60 pl-3 text-sm leading-relaxed text-hud-subtle">
              {evidence}
            </p>
          ) : null}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium"
            aria-label={`Read case study: ${project.title}`}
          >
            Read case study
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </article>
    </li>
  );
}

export default function HomePage() {
  const featured = FEATURED_SLUGS.map((slug) => getProjectBySlug(slug)).filter(
    (project): project is Project => Boolean(project),
  );
  const projectCount = getAllProjects().length;

  return (
    <div className="space-y-24 sm:space-y-32">
      <PortfolioHero />

      <section id="work" aria-labelledby="work-title" className="scroll-mt-8">
        <div className="flex flex-col gap-4 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 id="work-title" className="text-3xl text-hud-text sm:text-4xl">
              Selected work
            </h2>
            <p className="text-base leading-relaxed text-hud-subtle">
              Four projects that show the range: a document-agent platform,
              voice-agent reliability, on-device vision in the field, and a
              small service built around security boundaries. Each case study
              says what I did and what the evidence supports.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium"
          >
            All {projectCount} projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ol className="border-b border-hud-border/70">
          {featured.map((project) => (
            <SelectedWorkItem key={project.slug} project={project} />
          ))}
        </ol>
      </section>

      <section aria-labelledby="evidence-title" className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <h2 id="evidence-title" className="text-3xl text-hud-text sm:text-4xl">
            Evidence, with its limits
          </h2>
          <p className="text-base leading-relaxed text-hud-subtle">
            Numbers in my case studies come with their scope attached. One
            example, from the employee follow-up voice agent:
          </p>
        </div>

        <div className="grid gap-10 rounded-lg border border-hud-border/80 bg-hud-surface p-6 sm:p-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-14">
          <div>
            <p className="font-display text-6xl leading-none tabular-nums text-hud-text sm:text-7xl">
              <span aria-hidden="true">≈70%</span>
              <span className="sr-only">About 70 percent</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-hud-subtle">
              lower recorded mean cost among costed calls, comparing
              retrospective cohorts before and after a voicemail-detection fix
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <p className="text-base text-hud-text/90">
              In one export, 284 of 909 calls ran to the time limit while the
              agent kept answering a voicemail greeting. After the detection
              fix, mean recorded cost among calls with billing data fell about
              70.1%.
            </p>
            <dl className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <dt className="font-medium text-hud-text">What it shows</dt>
                <dd className="text-hud-subtle">
                  Lower recorded cost after the change, and in a later
                  seven-week window no recorded call lasted 590 seconds or
                  more; shorter maximum-duration endings still occurred.
                </dd>
              </div>
              <div className="space-y-1.5">
                <dt className="font-medium text-hud-text">What it doesn&apos;t</dt>
                <dd className="text-hud-subtle">
                  A causal or invoice-reconciled saving: some calls lack billing
                  records and the call mix changed. The separate 80.73% prompt
                  reduction comes from 12 synthetic test cases, not voice bills.
                </dd>
              </div>
            </dl>
            <Link
              href="/projects/sst-voice-agent-reliability"
              className="inline-flex items-center gap-1.5 font-medium"
            >
              Read the voice-agent case study
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="background-title" className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <div className="space-y-5">
          <h2 id="background-title" className="text-3xl text-hud-text sm:text-4xl">
            Background
          </h2>
          <p className="text-base leading-relaxed text-hud-text/90">
            I came to AI through physics and firmware: registers, timing, and
            sensors that behave differently in the field than on the bench.
            That habit of checking what a system is actually doing carries
            into model work, where the hard part is usually the state around
            the model: retries, partial records, human review, and delivery.
          </p>
          <p className="text-base leading-relaxed text-hud-subtle">
            Today that means agent and voice workflows at Lean Tech. Before
            that it meant smart-meter ML and on-device vision at Solenium.
            Earlier, I worked full-time on Azure OpenAI and RAG applications at Magnus (May 2023–July 2024). I like problems that cross those boundaries.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-sm font-medium">
            <Link href="/about">More about me</Link>
            <a href="mailto:daniestebanc@hotmail.com">daniestebanc@hotmail.com</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-hud-subtle">Areas of work</h3>
          <ul className="mt-4 divide-y divide-hud-border/60 border-y border-hud-border/60">
            {AREAS.map(({ track, title, description }) => (
              <li key={track}>
                <Link
                  href={`/projects?track=${track}`}
                  className="group block py-5 !text-hud-text"
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="font-medium group-hover:text-hud-accent-strong">{title}</span>
                    <span aria-hidden="true" className="text-hud-subtle group-hover:text-hud-accent-strong">→</span>
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-hud-subtle">
                    {description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

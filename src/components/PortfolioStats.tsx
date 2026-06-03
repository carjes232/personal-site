import { getAllProjects } from "@/lib/content";
import { TRACK_LABELS, type ProjectTrack } from "@/lib/content";

export function PortfolioStats() {
  const projects = getAllProjects();
  const withRepo = projects.filter((p) => p.repo).length;
  const tracks = Object.keys(TRACK_LABELS) as ProjectTrack[];
  const trackCounts = tracks.map((track) => ({
    track,
    label: TRACK_LABELS[track],
    count: projects.filter((p) => p.track === track).length,
  }));

  const stats = [
    { label: "Case studies", value: String(projects.length) },
    { label: "Open repos", value: String(withRepo) },
    { label: "Tracks", value: String(tracks.length) },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map(({ label, value }) => (
        <div
          key={label}
          className="rounded-2xl border border-hud-border/50 bg-hud-surface/60 px-5 py-4 backdrop-blur-sm"
        >
          <p className="text-3xl font-semibold tabular-nums text-hud-text">{value}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-hud-subtle">
            {label}
          </p>
        </div>
      ))}
      <div className="sm:col-span-3 rounded-2xl border border-hud-border/50 bg-hud-surface/40 px-5 py-4">
        <p className="text-xs uppercase tracking-[0.22em] text-hud-subtle">
          Work by track
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          {trackCounts.map(({ label, count }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-hud-border/60 bg-hud-bg/30 px-3 py-1.5 text-xs text-hud-subtle"
            >
              <span className="font-semibold tabular-nums text-hud-text">{count}</span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

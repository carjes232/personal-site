"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Filter, X } from "lucide-react";
import type { Project } from "@/lib/content";
import {
  projectMatchesFilterTag,
  TRACK_LABELS,
  type ProjectTrack,
} from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

interface ProjectsBrowserProps {
  projects: Project[];
  tags: string[];
}

function toggleTag(tags: string[], tag: string): string[] {
  return tags.includes(tag)
    ? tags.filter((current) => current !== tag)
    : [...tags, tag];
}

export function ProjectsBrowser({ projects, tags }: ProjectsBrowserProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedTrack = (searchParams.get("track") ?? "") as ProjectTrack | "";
  const selectedTags = useMemo(() => {
    const raw = searchParams.get("tags");
    return raw ? raw.split(",").filter(Boolean) : [];
  }, [searchParams]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTrack = selectedTrack
        ? project.track === selectedTrack
        : true;
      const matchesTags = selectedTags.length
        ? selectedTags.every((tag) => projectMatchesFilterTag(project, tag))
        : true;
      return matchesTrack && matchesTags;
    });
  }, [projects, selectedTrack, selectedTags]);

  const updateQuery = useCallback(
    (params: Record<string, string | null>) => {
      const next = new URLSearchParams(searchParams.toString());
      Object.entries(params).forEach(([key, value]) => {
        if (value && value.length > 0) {
          next.set(key, value);
        } else {
          next.delete(key);
        }
      });
      const queryString = next.toString();
      router.replace(queryString ? `${pathname}?${queryString}` : pathname);
    },
    [pathname, router, searchParams],
  );

  const handleTrack = useCallback(
    (track: ProjectTrack | "") => {
      updateQuery({ track: track || null });
    },
    [updateQuery],
  );

  const handleTag = useCallback(
    (tag: string) => {
      const nextTags = toggleTag(selectedTags, tag);
      updateQuery({ tags: nextTags.length ? nextTags.join(",") : null });
    },
    [selectedTags, updateQuery],
  );

  const clearFilters = useCallback(() => {
    router.replace(pathname);
  }, [pathname, router]);

  return (
    <div className="space-y-8">
      <p className="text-sm text-hud-subtle">
        Showing{" "}
        <span className="font-semibold tabular-nums text-hud-text">
          {filteredProjects.length}
        </span>{" "}
        of {projects.length} projects
        {(selectedTags.length > 0 || selectedTrack) ? " (filtered)" : ""}
      </p>

      <div className="rounded-3xl border border-hud-border/60 bg-hud-surface/70 p-6 lg:sticky lg:top-24 lg:z-20">
        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-hud-subtle">
          <Filter className="size-4 text-hud-accent" /> Filters
        </div>
        <div className="mt-4 flex flex-col gap-5">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-hud-subtle">
              Track
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <FilterChip
                label="All"
                active={!selectedTrack}
                onClick={() => handleTrack("")}
              />
              {Object.entries(TRACK_LABELS).map(([value, label]) => (
                <FilterChip
                  key={value}
                  label={label}
                  active={selectedTrack === value}
                  onClick={() => handleTrack(value as ProjectTrack)}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-hud-subtle">
              Tags
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <FilterChip
                  key={tag}
                  label={tag}
                  active={selectedTags.includes(tag)}
                  onClick={() => handleTag(tag)}
                />
              ))}
            </div>
          </div>
          {(selectedTags.length > 0 || selectedTrack) && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 rounded-full border border-hud-border/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-hud-subtle transition hover:border-hud-accent/60 hover:text-hud-accent"
            >
              <X className="size-3" /> Clear filters
            </button>
          )}
        </div>
      </div>

      {filteredProjects.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-hud-border/70 bg-hud-surface/60 p-12 text-center text-sm text-hud-subtle">
          No projects match this filter set. Try removing a tag or track.
        </div>
      )}
    </div>
  );
}

interface ChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterChip({ label, active, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition",
        active
          ? "border-hud-accent/70 bg-hud-accent/20 text-hud-text"
          : "border-hud-border/50 text-hud-subtle hover:border-hud-accent/50 hover:text-hud-text",
      )}
    >
      {label}
    </button>
  );
}

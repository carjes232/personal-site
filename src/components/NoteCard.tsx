import Link from "next/link";
import type { Note } from "@/lib/content";

export function NoteCard({ note }: { note: Note }) {
  return (
    <article className="rounded-3xl border border-hud-border/60 bg-hud-surface/70 p-6 transition hover:border-hud-accent/60">
      <div className="text-xs uppercase tracking-[0.28em] text-hud-subtle">
        {new Date(note.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })}
      </div>
      <h2 className="mt-3 text-2xl font-semibold text-hud-text">{note.title}</h2>
      {note.summary ? (
        <p className="mt-3 text-sm text-hud-subtle">{note.summary}</p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-hud-subtle">
        {note.tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-hud-border/50 px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/notes/${note.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-hud-accent transition hover:text-hud-accent-strong"
      >
        Read note
      </Link>
    </article>
  );
}

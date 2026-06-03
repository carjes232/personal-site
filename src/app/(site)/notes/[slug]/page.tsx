import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllNotes,
  getNoteBySlug,
} from "@/lib/content";
import { MDXRenderer } from "@/components/MDXRenderer";
import { NoteXPTracker } from "@/components/notes/NoteXPTracker";

interface NotePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const note = getNoteBySlug(params.slug);
  if (!note) {
    return { title: "Note not found" };
  }
  return {
    title: note.title,
    description: note.summary,
    openGraph: {
      title: note.title,
      description: note.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: note.title,
      description: note.summary,
    },
    alternates: {
      canonical: `https://danielcardenas.dev/notes/${note.slug}`,
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const note = getNoteBySlug(params.slug);
  if (!note) {
    notFound();
  }

  const published = new Date(note.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <article className="space-y-10">
      <NoteXPTracker slug={note.slug} />
      <header className="rounded-3xl border border-hud-border/60 bg-hud-surface/70 p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-hud-subtle">{published}</p>
        <h1 className="mt-3 text-4xl font-semibold text-hud-text">{note.title}</h1>
        {note.summary ? (
          <p className="mt-3 max-w-2xl text-base text-hud-subtle">{note.summary}</p>
        ) : null}
        {note.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-hud-subtle">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-hud-border/50 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <section className="rounded-3xl border border-hud-border/60 bg-hud-surface/60 p-8">
        <MDXRenderer code={note.body.code} />
      </section>

      <footer className="rounded-3xl border border-hud-border/60 bg-hud-surface/60 p-6 text-sm text-hud-subtle">
        <Link href="/notes" className="text-hud-accent transition hover:text-hud-accent-strong">
          ← Back to notes
        </Link>
      </footer>
    </article>
  );
}

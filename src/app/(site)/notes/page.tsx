import type { Metadata } from "next";
import { getAllNotes } from "@/lib/content";
import { NoteCard } from "@/components/NoteCard";

export const metadata: Metadata = {
  title: "Lab Notes",
  description: "Benchmarks, experiments, and quick notes from Daniel Cárdenas.",
  openGraph: {
    title: "Lab Notes | Daniel Cárdenas",
    description: "Benchmarks, experiments, and quick notes from Daniel Cárdenas.",
  },
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-semibold text-hud-text">Lab Notes</h1>
        <p className="text-sm text-hud-subtle">
          Short-form experiments, evaluation logs, and behind-the-scenes process.
        </p>
      </header>
      {notes.length ? (
        <div className="grid gap-6 md:grid-cols-2">
          {notes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-hud-subtle">Notes are coming soon.</p>
      )}
    </section>
  );
}

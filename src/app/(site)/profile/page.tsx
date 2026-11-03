import type { Metadata } from "next";
import Link from "next/link";
import { profile, SITE_URL } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Professional profile",
  description: profile.summary,
  alternates: { canonical: `${SITE_URL}/profile` },
};

export default function ProfilePage() {
  return (
    <article className="mx-auto max-w-3xl space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold">{profile.name}</h1>
        <p className="text-xl text-hud-accent">{profile.headline}</p>
        <p className="text-hud-subtle">{profile.location} · Reviewed {profile.reviewedOn}</p>
        <p className="leading-relaxed">{profile.summary}</p>
        <nav aria-label="Profile formats" className="flex flex-wrap gap-5 text-hud-accent underline">
          <a href="/resume.pdf">Résumé PDF</a>
          <a href="/profile.json">Profile JSON</a>
          <a href="/llms.txt">Plain-text project index</a>
        </nav>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ul className="space-y-4">
          {profile.experience.map((job) => (
            <li key={job.organization}>
              <p className="font-semibold">{job.role} · {job.organization}</p>
              <p className="text-hud-subtle">{job.start} – {job.end ?? "Present"}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Education and languages</h2>
        <p>{profile.education.degree} · {profile.education.institution} · {profile.education.year}</p>
        <ul className="space-y-2">
          {profile.languages.map((item) => (
            <li key={item.language}>{item.language}: {item.level} <span className="text-hud-subtle">({item.evidence})</span></li>
          ))}
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Technical focus</h2>
        <p className="leading-relaxed">{profile.skills.join(" · ")}</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">How to read the evidence</h2>
        <ul className="list-disc space-y-3 pl-5 text-hud-subtle">
          {profile.evidenceNotes.map((note) => <li key={note}>{note}</li>)}
        </ul>
        <p><Link className="text-hud-accent underline" href="/projects">Read the full case studies and their limitations</Link></p>
      </section>
      <footer className="flex flex-wrap gap-5 text-hud-accent underline">
        <a href={profile.links.github}>GitHub</a>
        <a href={profile.links.linkedin}>LinkedIn</a>
        <a href={profile.links.email}>Email</a>
      </footer>
    </article>
  );
}

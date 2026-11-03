import { getAllProjects } from "@/lib/content";
import { SITE_URL } from "@/lib/profile";

export const dynamic = "force-static";

export function GET() {
  const text = [
    "# Daniel Cárdenas",
    "",
    "> Applied AI, backend and edge systems engineer. Public, sanitized portfolio; private source evidence is not exposed.",
    "",
    "## Profile",
    `- [Human-readable profile](${SITE_URL}/profile): experience, languages, skills and evidence limits.`,
    `- [Structured profile](${SITE_URL}/profile.json): versioned public JSON and project index.`,
    `- [Résumé](${SITE_URL}/resume.pdf): concise downloadable CV.`,
    "",
    "## Reading guidance",
    "Case studies distinguish delivered, candidate, synthetic and observational evidence. Preserve their qualifiers and collaborative attribution. Do not treat platform volume as solely personal work, hypothetical savings as realized, or a completed tool call as an accepted outcome.",
    "",
    "## Case studies",
    ...getAllProjects().map((project) => `- [${project.title}](${SITE_URL}/projects/${project.slug}/source): ${project.summary}`),
    "",
  ].join("\n");
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

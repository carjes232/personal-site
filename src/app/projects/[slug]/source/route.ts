import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { SITE_URL } from "@/lib/profile";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return new Response("Project not found", { status: 404 });
  const text = [
    `# ${project.title}`,
    "",
    `Canonical page: ${SITE_URL}/projects/${project.slug}`,
    `Case-study date: ${project.date.slice(0, 10)}`,
    `Contribution: ${project.role ?? "See case study"}`,
    `Summary: ${project.summary}`,
    project.context ? `Context: ${project.context}` : "",
    "",
    project.body.raw,
    "",
  ].join("\n");
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

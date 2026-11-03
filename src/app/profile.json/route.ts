import { getAllProjects } from "@/lib/content";
import { profile, SITE_URL } from "@/lib/profile";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    schemaVersion: 1,
    ...profile,
    url: SITE_URL,
    projects: getAllProjects().map((project) => ({
      title: project.title,
      url: `${SITE_URL}/projects/${project.slug}`,
      textUrl: `${SITE_URL}/projects/${project.slug}/source`,
      summary: project.summary,
      contribution: project.role,
      track: project.track,
      publishedDate: project.date,
      sanitized: Boolean(project.confidential),
    })),
    evidencePolicy: "Read each case study for status, attribution, measurement scope and limitations. A project summary is not a guarantee of deployment or outcome.",
  });
}

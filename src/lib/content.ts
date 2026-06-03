import { compareDesc } from "date-fns";
import { allNotes, allProjects } from "contentlayer/generated";

export type Project = typeof allProjects[number];
export type Note = typeof allNotes[number];

export type ProjectTrack = "ai-backend" | "firmware" | "web-cloud";

export const TRACK_LABELS: Record<ProjectTrack, string> = {
  "ai-backend": "AI / Backend",
  firmware: "Firmware / Embedded",
  "web-cloud": "Web / Cloud",
};

const FEATURED_FILTER_TAGS = [
  "RAG",
  "LLM",
  "Python",
  "FastAPI",
  "Gemini",
  "Computer Vision",
  "Automation",
  "IoT",
  "Firmware",
  "STM32",
  "MQTT",
  "Data",
];

const TAG_ALIASES: Record<string, string[]> = {
  LLM: ["LLM", "Embeddings", "Azure", "Azure OpenAI", "Ollama"],
  Automation: ["Automation", "Excel", "PDF", "PyQt6", "Telegram", "WhatsApp", "Voice AI"],
  IoT: ["IoT", "ESP32", "Azure IoT Hub", "Modbus", "Geolocation", "Sensors"],
  Data: ["pandas", "PostgreSQL", "SQLite", "pgvector", "CockroachDB", "Fintech"],
};

export function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
}

export function getAllProjects(): Project[] {
  return sortProjects(allProjects);
}

export function getFeaturedProjects(): Project[] {
  const featured = allProjects.filter((project) => project.featured);
  return sortProjects(featured.length ? featured : allProjects.slice(0, 3));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getProjectNeighbours(slug: string): {
  previous?: Project;
  next?: Project;
} {
  const projects = getAllProjects();
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return {};
  return {
    previous: projects[index - 1],
    next: projects[index + 1],
  };
}

export function getAllNotes(): Note[] {
  return [...allNotes].sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
}

export function getNoteBySlug(slug: string): Note | undefined {
  return allNotes.find((note) => note.slug === slug);
}

export function uniqueTags(): string[] {
  const tagSet = new Set<string>();
  for (const project of allProjects) {
    project.tags?.forEach((tag) => tagSet.add(tag));
  }
  return FEATURED_FILTER_TAGS.filter((tag) => {
    const aliases = TAG_ALIASES[tag] ?? [tag];
    return aliases.some((alias) => tagSet.has(alias));
  });
}

export function projectMatchesFilterTag(project: Project, tag: string): boolean {
  const aliases = TAG_ALIASES[tag] ?? [tag];
  return aliases.some((alias) => project.tags?.includes(alias));
}

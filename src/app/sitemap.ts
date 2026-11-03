import type { MetadataRoute } from "next";
import { getAllNotes, getAllProjects } from "@/lib/content";
import { SITE_URL } from "@/lib/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["", "/about", "/contact", "/projects", "/notes", "/profile"].map((path) => ({ url: SITE_URL + path })),
    ...getAllProjects().map((project) => ({ url: `${SITE_URL}/projects/${project.slug}` })),
    ...getAllNotes().map((note) => ({ url: `${SITE_URL}/notes/${note.slug}` })),
  ];
}

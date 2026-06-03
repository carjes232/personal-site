import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    track: { type: "string", required: false },
    role: { type: "string", required: true },
    summary: { type: "string", required: true },
    repo: { type: "string", required: false },
    demo: { type: "string", required: false },
    cover: { type: "string", required: false },
    results: { type: "list", of: { type: "string" }, required: false },
    badges: { type: "list", of: { type: "string" }, required: false },
    xp: { type: "number", required: true, default: 50 },
    confidential: { type: "boolean", required: false, default: false },
    context: { type: "string", required: false },
    featured: { type: "boolean", required: false, default: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/projects/${doc.slug}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    year: {
      type: "string",
      resolve: (doc) => new Date(doc.date).getFullYear().toString(),
    },
  },
}));

const Note = defineDocumentType(() => ({
  name: "Note",
  filePathPattern: "notes/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, required: false },
    summary: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/notes/${doc.slug}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Project, Note],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
});

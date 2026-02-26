import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { BlogPostMeta } from "@/lib/types";

const blogDirectory = path.join(process.cwd(), "content/blog");

export const getAllPostSlugs = () =>
  fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

export const getPostBySlug = (slug: string) => {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      keywords: data.keywords || [],
      readingTime: data.readingTime || "5 min read"
    } as BlogPostMeta,
    content
  };
};

export const getAllPostsMeta = (): BlogPostMeta[] =>
  getAllPostSlugs()
    .map((slug) => getPostBySlug(slug).meta)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

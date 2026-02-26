import Link from "next/link";
import { BlogPostMeta } from "@/lib/types";

export const BlogCard = ({ post }: { post: BlogPostMeta }) => (
  <article className="card p-6">
    <p className="text-xs uppercase text-foreground/50">{post.date}</p>
    <h3 className="mt-3 text-xl font-semibold">{post.title}</h3>
    <p className="mt-3 text-sm text-foreground/70">{post.description}</p>
    <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-medium text-primary">
      Read article →
    </Link>
  </article>
);

import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "SEO-focused engineering articles on Next.js portfolio optimization, React performance, and developer branding.",
  alternates: { canonical: "/blog" }
};

export default function BlogPage() {
  const posts = getAllPostsMeta();
  return (
    <div className="container-page space-y-8 py-12">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold">Engineering Blog</h1>
        <p className="max-w-3xl text-foreground/70">Actionable guides on SEO, performance, and building a high-impact developer portfolio.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

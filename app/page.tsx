import Link from "next/link";
import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { ProjectCard } from "@/components/project-card";
import { getAllPostsMeta } from "@/lib/blog";
import { projects, skillGroups } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description: "Explore Chethana Lakthilina's software engineering projects, blog content, and professional journey.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  const latestPosts = getAllPostsMeta().slice(0, 3);
  const featuredProjects = projects.slice(0, 2);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    address: { "@type": "PostalAddress", addressCountry: "Sri Lanka" },
    sameAs: Object.values(siteConfig.social)
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description
  };

  return (
    <div className="container-page space-y-20 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Software Engineer</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">Chethana Lakthilina crafts fast, scalable products with modern web technologies.</h1>
        <p className="max-w-2xl text-lg text-foreground/70">
          I build user-focused applications with Next.js, TypeScript, and robust backend systems. My current focus is performance, developer experience, and SEO growth.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/projects" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white">
            View Projects
          </Link>
          <Link href="/contact" className="rounded-full border border-border px-6 py-3 text-sm font-semibold">
            Contact
          </Link>
        </div>
      </section>

      <section className="space-y-6" id="highlights">
        <h2 className="text-3xl font-semibold">Top skills & current focus</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skillGroups).map(([group, skills]) => (
            <article key={group} className="card p-5">
              <h3 className="text-lg font-semibold">{group}</h3>
              <p className="mt-2 text-sm text-foreground/70">{skills.join(", ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6" id="featured-projects">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Featured projects</h2>
          <Link href="/projects" className="text-sm font-semibold text-primary">
            See all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-6" id="latest-posts">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Latest blog posts</h2>
          <Link href="/blog" className="text-sm font-semibold text-primary">
            Browse blog
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}

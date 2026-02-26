import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug, getAllPostsMeta } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { renderSimpleMdx } from "@/lib/mdx";

export const generateStaticParams = async () => getAllPostSlugs().map((slug) => ({ slug }));

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const slugs = getAllPostSlugs();
  if (!slugs.includes(params.slug)) return {};
  const { meta } = getPostBySlug(params.slug);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: `/blog/${meta.slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description
    }
  };
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slugs = getAllPostSlugs();
  if (!slugs.includes(params.slug)) notFound();

  const { meta, content } = getPostBySlug(params.slug);
  const relatedProjects = getAllPostsMeta()
    .filter((post) => post.slug !== meta.slug)
    .slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    author: { "@type": "Person", name: siteConfig.name },
    publisher: { "@type": "Person", name: siteConfig.name },
    keywords: meta.keywords.join(",")
  };

  return (
    <article className="container-page prose prose-slate max-w-3xl py-12 dark:prose-invert">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm uppercase tracking-wide text-primary">{meta.date} · {meta.readingTime}</p>
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
      <div dangerouslySetInnerHTML={{ __html: renderSimpleMdx(content) }} />
      <section>
        <h2>Related articles</h2>
        <ul>
          {relatedProjects.map((post) => (
            <li key={post.slug}><Link href={`/blog/${post.slug}`}>{post.title}</Link></li>
          ))}
        </ul>
      </section>
    </article>
  );
}

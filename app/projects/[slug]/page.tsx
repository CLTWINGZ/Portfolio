import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { getAllPostsMeta } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const generateStaticParams = async () => projects.map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const project = projects.find((entry) => entry.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    keywords: project.tags,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.image]
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary
    }
  };
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((entry) => entry.slug === params.slug);
  if (!project) notFound();

  const relatedPosts = getAllPostsMeta().filter((post) => project.relatedPosts.includes(post.slug));
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    codeRepository: project.githubUrl,
    programmingLanguage: project.tags,
    author: { "@type": "Person", name: siteConfig.name }
  };

  return (
    <div className="container-page space-y-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="max-w-3xl text-foreground/70">{project.description}</p>
      </header>
      <Image src={project.image} alt={`${project.title} visual`} width={1200} height={630} className="card h-auto w-full object-cover" priority />
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Outcomes</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-foreground/75">
          {project.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Related blog content</h2>
        <div className="flex flex-col gap-2 text-primary">
          {relatedPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>{post.title}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}

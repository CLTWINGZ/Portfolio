import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Chethana Lakthilina's career path, values, and software engineering working style.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    worksFor: { "@type": "Organization", name: "CloudScale Labs" }
  };

  return (
    <div className="container-page space-y-10 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">About Chethana Lakthilina</h1>
        <p className="max-w-3xl text-foreground/70">I am a software engineer based in Sri Lanka, focused on building thoughtful digital products that balance technical excellence and business value.</p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Career path timeline</h2>
        <div className="space-y-4">
          {timeline.map((item) => (
            <article key={item.year} className="card p-5">
              <p className="text-sm text-primary">{item.year}</p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        <article className="card p-6"><h3 className="text-xl font-semibold">Values</h3><p className="mt-2 text-sm text-foreground/70">Ownership, clarity, and measurable outcomes.</p></article>
        <article className="card p-6"><h3 className="text-xl font-semibold">Working style</h3><p className="mt-2 text-sm text-foreground/70">Collaborative delivery, async-first communication, and strong documentation.</p></article>
        <article className="card p-6"><h3 className="text-xl font-semibold">Tooling</h3><p className="mt-2 text-sm text-foreground/70">Next.js, TypeScript, Node.js, PostgreSQL, Docker, and GitHub Actions.</p></article>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Explore software engineering experience, responsibilities, and achievement metrics for Chethana Lakthilina.",
  alternates: { canonical: "/experience" }
};

export default function ExperiencePage() {
  return (
    <div className="container-page space-y-8 py-12">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold">Professional Experience</h1>
        <p className="max-w-3xl text-foreground/70">Roles, responsibilities, and quantified outcomes delivered across product engineering teams.</p>
      </header>
      {experiences.map((item) => (
        <article key={item.role} className="card p-6">
          <h2 className="text-2xl font-semibold">{item.role}</h2>
          <p className="mt-1 text-sm text-foreground/60">{item.company} · {item.period} · {item.location}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-foreground/75">
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

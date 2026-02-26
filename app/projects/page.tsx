import type { Metadata } from "next";
import { ProjectFilter } from "@/components/project-filter";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse software engineering projects built by Chethana Lakthilina with technical stacks and measurable impact.",
  alternates: { canonical: "/projects" }
};

export default function ProjectsPage() {
  return (
    <div className="container-page space-y-8 py-12">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="max-w-3xl text-foreground/70">A curated portfolio of products spanning analytics, developer tooling, and API platforms.</p>
      </header>
      <ProjectFilter projects={projects} />
    </div>
  );
}

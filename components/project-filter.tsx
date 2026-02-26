"use client";

import { useMemo, useState } from "react";
import { Project } from "@/lib/types";
import { ProjectCard } from "@/components/project-card";

export const ProjectFilter = ({ projects }: { projects: Project[] }) => {
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((project) => project.tags)))],
    [projects]
  );
  const [activeTag, setActiveTag] = useState("All");
  const visible = activeTag === "All" ? projects : projects.filter((project) => project.tags.includes(activeTag));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full border px-4 py-2 text-sm ${activeTag === tag ? "border-primary text-primary" : "border-border"}`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

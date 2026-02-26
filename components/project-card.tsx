import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/types";

export const ProjectCard = ({ project }: { project: Project }) => (
  <article className="card overflow-hidden">
    <Image
      src={project.image}
      alt={`${project.title} screenshot`}
      width={1200}
      height={630}
      className="h-48 w-full object-cover"
    />
    <div className="space-y-4 p-6">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-foreground/70">{project.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-sm font-medium">
        <Link href={`/projects/${project.slug}`}>Details</Link>
        <Link href={project.githubUrl}>GitHub</Link>
        <Link href={project.liveUrl}>Live Demo</Link>
      </div>
    </div>
  </article>
);

import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { StatusBadge } from "./StatusBadge";
import { ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-xs shadow-2xs">
      {/* Header with status and date */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <StatusBadge status={project.status} />
        {project.date && (
          <span className="text-xs font-mono text-slate-500">
            {project.date}
          </span>
        )}
      </div>

      {/* Project Title */}
      <h3 className="text-lg sm:text-[19px] font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">
        <Link href={`/projects/${project.slug}`} className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          {project.title}
        </Link>
      </h3>

      {/* Project Short Description */}
      <p className="mt-2 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-4 flex flex-wrap gap-1.5 relative z-10">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer link / details */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
        <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-cyan-700 group-hover:underline">
          <span>Read case study</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>

        <div className="flex items-center gap-2 text-slate-500">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:text-slate-900 transition-colors"
              title="View Demo"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {project.sourceCodeUrl && (
            <a
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:text-slate-900 transition-colors"
              title="View Source Code"
            >
              <GithubIcon className="h-3.5 w-3.5" />
            </a>
          )}
          {project.relatedBlogUrl && (
            <a
              href={project.relatedBlogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:text-amber-800 transition-colors"
              title="Read Related Blog Article"
            >
              <BookOpen className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

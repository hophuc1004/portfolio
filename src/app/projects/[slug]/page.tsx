import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Layers,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  if (projects.length === 0) {
    return [{ slug: "_placeholder" }];
  }
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-8 sm:py-12">
      {/* Back button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-700 transition-colors mb-6"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back to all projects</span>
      </Link>

      <article className="max-w-4xl">
        {/* Header */}
        <header className="border-b border-slate-200 pb-7 mb-7">
          <div className="flex flex-wrap items-center gap-3 mb-3.5">
            <StatusBadge status={project.status} size="md" />
            {project.date && (
              <span className="text-xs font-mono text-slate-500">
                {project.date}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            {project.title}
          </h1>

          <p className="mt-3.5 text-[17px] sm:text-[18px] text-slate-600 leading-[1.7]">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action links */}
          <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-cyan-600 hover:bg-cyan-700 text-white transition-colors shadow-xs"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}

            {project.sourceCodeUrl && (
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition-colors shadow-2xs"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>Source Code</span>
              </a>
            )}

            {project.relatedBlogUrl && (
              <a
                href={project.relatedBlogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 transition-colors shadow-2xs"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Read Blog Article</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </header>

        {/* Content sections */}
        <div className="space-y-7 text-slate-700 text-[16px] sm:text-[17px] leading-[1.7]">
          {/* Problem */}
          {project.problem && (
            <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 text-slate-900 font-semibold text-lg mb-2.5">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <h2>The Problem</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{project.problem}</p>
            </section>
          )}

          {/* Approach */}
          {project.approach && (
            <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 text-slate-900 font-semibold text-lg mb-2.5">
                <Lightbulb className="h-5 w-5 text-cyan-600" />
                <h2>The Approach &amp; Solution</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{project.approach}</p>
            </section>
          )}

          {/* Architecture */}
          {project.architecture && (
            <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 text-slate-900 font-semibold text-lg mb-2.5">
                <Layers className="h-5 w-5 text-indigo-600" />
                <h2>Architecture &amp; Data Flow</h2>
              </div>
              <p className="text-slate-600 whitespace-pre-line leading-relaxed">
                {project.architecture}
              </p>
            </section>
          )}

          {/* Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-semibold text-slate-900 mb-3.5">
                Screenshots &amp; Interface
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((s, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.url}
                      alt={s.caption}
                      className="w-full h-auto object-cover"
                    />
                    {s.caption && (
                      <p className="p-2 text-xs font-mono text-slate-600 bg-slate-100">
                        {s.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Lessons Learned */}
          {project.lessonsLearned && project.lessonsLearned.length > 0 && (
            <section className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 text-slate-900 font-semibold text-lg mb-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                <h2>Lessons Learned</h2>
              </div>
              <ul className="space-y-2 text-[15px] text-slate-700">
                {project.lessonsLearned.map((lesson, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-mono mt-0.5">&bull;</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </Container>
  );
}

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { CurrentlyLearning } from "@/components/home/CurrentlyLearning";
import { ExternalBlogCallout } from "@/components/home/ExternalBlogCallout";
import { EmptyProjects } from "@/components/ui/EmptyProjects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { projects } from "@/data/projects";
import { learningMilestones } from "@/data/journey";
import { ArrowRight, Compass } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const displayProjects =
    featuredProjects.length > 0 ? featuredProjects : projects;
  const recentMilestones = learningMilestones.slice(0, 3);

  return (
    <Container className="py-4 sm:py-6">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Focus Areas / What I'm Learning Right Now */}
      <CurrentlyLearning />

      {/* 3. Projects Section */}
      {/* <section className="py-8 sm:py-10 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              Projects & Labs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Hands-On Projects
            </h2>
            <p className="text-[16px] sm:text-[17px] text-slate-600 mt-1 max-w-xl leading-relaxed">
              Authentic applications, automations, and experiments documenting my
              learning journey.
            </p>
          </div>

          {projects.length > 0 && (
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 transition-colors"
            >
              <span>View all projects</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>

        {displayProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <EmptyProjects showJourneyLink={true} />
        )}
      </section> */}

      {/* 4. Recent Learning Milestones */}
      <section className="py-8 sm:py-10 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Progress Log
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Recent Learning Milestones
            </h2>
            <p className="text-[16px] sm:text-[17px] text-slate-600 mt-1 max-w-xl leading-relaxed">
              Tracking core concepts and architectural patterns explored step by
              step.
            </p>
          </div>

          <Link
            href="/journey"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 transition-colors"
          >
            <Compass className="h-3.5 w-3.5" />
            <span>View full journey & roadmap</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="max-w-3xl">
          {recentMilestones.map((milestone, idx) => (
            <TimelineItem
              key={milestone.id}
              milestone={milestone}
              isLast={idx === recentMilestones.length - 1}
            />
          ))}
        </div>
      </section>

      {/* 5. External Blog Callout */}
      <ExternalBlogCallout />
    </Container>
  );
}

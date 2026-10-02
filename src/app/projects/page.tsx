"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { EmptyProjects } from "@/components/ui/EmptyProjects";
import { projects } from "@/data/projects";
import { ProjectStatus } from "@/types";

const ALL_STATUSES: ("All" | ProjectStatus)[] = [
  "All",
  "Learning",
  "In Progress",
  "Completed",
  "Experiment",
  "Personal Project",
];

export default function ProjectsPage() {
  const [selectedStatus, setSelectedStatus] = useState<"All" | ProjectStatus>("All");

  const filteredProjects =
    selectedStatus === "All"
      ? projects
      : projects.filter((p) => p.status === selectedStatus);

  return (
    <Container className="py-8 sm:py-12">
      <SectionHeader
        badge="Portfolio & Labs"
        title="Projects & Experiments"
        description="Hands-on applications, automated cloud flows, and integrations built as I explore Microsoft Power Platform, APIs, and AI."
      />

      {/* When projects exist, show filter tabs */}
      {projects.length > 0 ? (
        <>
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs font-mono text-slate-500 mr-2">Filter:</span>
            {ALL_STATUSES.map((status) => {
              const count =
                status === "All"
                  ? projects.length
                  : projects.filter((p) => p.status === status).length;

              if (count === 0 && status !== "All") return null;

              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => setSelectedStatus(status)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                    selectedStatus === status
                      ? "bg-cyan-50 text-cyan-800 border-cyan-300 font-semibold shadow-2xs"
                      : "bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  {status} ({count})
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </>
      ) : (
        <EmptyProjects showJourneyLink={true} />
      )}
    </Container>
  );
}

import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { learningMilestones } from "@/data/journey";
import { siteConfig, getBlogUrl } from "@/data/siteConfig";
import { ExternalLink, BookOpen, Compass } from "lucide-react";

export const metadata = {
  title: `Career & Learning Journey | ${siteConfig.name}`,
  description:
    "A chronological view of my transition from engineering into software development, full-stack work, and my current direction toward Dynamics AX, Power Platform, and business applications.",
};

export default function JourneyPage() {
  return (
    <Container className="py-8 sm:py-12">
      <SectionHeader
        badge="Career & Learning Log"
        title="Career & Learning Journey"
        description="A chronological view of my transition from engineering into software development, full-stack work, and my current direction toward Dynamics AX, Power Platform, and business applications."
      />

      {/* Main Timeline */}
      <div className="max-w-3xl mx-auto">
        {learningMilestones.map((milestone, idx) => (
          <TimelineItem
            key={milestone.id}
            milestone={milestone}
            isLast={idx === learningMilestones.length - 1}
          />
        ))}
      </div>

      {/* Next Up / Roadmap */}
      <div className="mt-8 sm:mt-10 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 max-w-3xl mx-auto shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <Compass className="h-5 w-5 text-amber-600" />
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">Next Steps on My Roadmap</h3>
        </div>
        <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-4">
          Key focus areas as I establish a long-term development career in Denmark:
        </p>
        <ul className="space-y-2.5 text-[14px] sm:text-[15px] text-slate-600">
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 font-mono mt-0.5">&bull;</span>
            <span>
              <strong className="text-slate-900">ERP &amp; Dynamics AX Integrations:</strong> Expanding data flow pipelines, service endpoints, and connecting external business solutions.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 font-mono mt-0.5">&bull;</span>
            <span>
              <strong className="text-slate-900">Power Platform &amp; Custom Connectors:</strong> Connecting enterprise REST APIs directly to Power Apps and Power Automate workflows.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 font-mono mt-0.5">&bull;</span>
            <span>
              <strong className="text-slate-900">Application Lifecycle Management (ALM):</strong> Solution packing, environment strategies, and version control for business applications.
            </span>
          </li>
        </ul>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs sm:text-sm text-slate-500">
            Technical reflections and deep dives are published on my blog
          </span>
          <a
            href={getBlogUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-900 hover:text-amber-800 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            <span>Read External Blog</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </Container>
  );
}

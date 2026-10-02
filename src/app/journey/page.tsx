import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { learningMilestones } from "@/data/journey";
import { siteConfig, getBlogUrl } from "@/data/siteConfig";
import { ExternalLink, BookOpen, Compass, Lightbulb } from "lucide-react";

export const metadata = {
  title: `Career Journey & Learning Log | ${siteConfig.name}`,
  description:
    "A transparent chronological log of my development path: from agricultural engineering to 4+ years full-stack, career transition in Denmark, and expanding into Dynamics AX & Power Platform.",
};

export default function JourneyPage() {
  return (
    <Container className="py-8 sm:py-12">
      <SectionHeader
        badge="Career & Learning Log"
        title="Journey & Technical Roadmap"
        description="A chronological record documenting my natural career path: foundational self-taught development, production systems at FileString, blockchain engineering, career transition in Denmark, and ongoing integration work with Dynamics AX and Power Platform."
      />

      {/* Intro banner */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50/70 p-5 sm:p-6 mb-8 sm:mb-10 flex flex-col sm:flex-row items-start gap-4">
        <div className="p-2 rounded-lg bg-cyan-100 text-cyan-700 shrink-0">
          <Lightbulb className="h-5 w-5" />
        </div>
        <div className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed space-y-1">
          <p className="font-semibold text-slate-900">
            Career Story &amp; Growth Mindset:
          </p>
          <p>
            My transition from an engineering degree into full-stack development and subsequently into enterprise business systems reflects a continuous commitment to learning.
            By recording milestones, architectures, and lessons learned, I keep my progression transparent and grounded in real-world application.
          </p>
        </div>
      </div>

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
              <strong className="text-slate-900">Deepen Dynamics AX &amp; D365 Integrations:</strong> Expanding data flow pipelines, custom service endpoints, and connecting external business solutions.
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
              <strong className="text-slate-900">Application Lifecycle Management (ALM):</strong> Exploring automated solution packing, version control, and CI/CD for low-code and ERP extensions.
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

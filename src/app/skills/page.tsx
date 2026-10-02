import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/skills";
import { siteConfig } from "@/data/siteConfig";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: `Skills & Focus Areas | ${siteConfig.name}`,
  description:
    "Prioritized overview of my 4+ years of full-stack engineering background alongside my active expansion into Dynamics AX, Power Platform, and business automation.",
};

export default function SkillsPage() {
  return (
    <Container className="py-8 sm:py-12">
      <SectionHeader
        badge="Technical Competencies"
        title="Skills & Prioritized Breakdown"
        description="A clear, realistic hierarchy separating my proven full-stack development experience from supporting infrastructure, past domain work, and my current learning direction in enterprise systems."
      />

      {/* Honest Positioning & Level Transparency */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50/70 p-5 sm:p-6 mb-8 sm:mb-10 flex items-start gap-4">
        <div className="p-2 rounded-lg bg-cyan-100 text-cyan-700 shrink-0">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed space-y-1">
          <p className="font-semibold text-slate-900">
            Honest Skill Level Distinction:
          </p>
          <p>
            My strongest, commercially proven background is in <strong>full-stack web development</strong> (JavaScript, Node.js, React, PostgreSQL, REST APIs, Redis, gRPC).
            I do not claim to be a senior architect or veteran Dynamics AX expert.
            My work with Dynamics AX, Power BI, and Power Platform represents an active, deliberate career transition—applying proven engineering practices to business systems and enterprise ERP integrations.
          </p>
        </div>
      </div>

      {/* Skill Categories */}
      <div className="space-y-8 sm:space-y-10">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 pb-4 mb-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-800 font-semibold">
                  {category.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {category.title}
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">
                {category.skills.length} skills listed
              </span>
            </div>

            <p className="text-[15px] sm:text-[16px] text-slate-600 mb-6 max-w-2xl leading-relaxed">
              {category.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill, sIdx) => {
                const isPrimary = skill.level === "Primary (Professional)";
                const isLearning = skill.level === "Learning / Current Direction";
                const isPrevious = skill.level === "Previous / Additional";

                return (
                  <div
                    key={sIdx}
                    className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 hover:border-slate-300 hover:bg-white transition-all shadow-2xs"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h4 className="text-[16px] font-semibold text-slate-900">
                        {skill.name}
                      </h4>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${
                          isPrimary
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : isLearning
                            ? "bg-cyan-50 text-cyan-800 border-cyan-200"
                            : isPrevious
                            ? "bg-slate-100 text-slate-600 border-slate-200"
                            : "bg-blue-50 text-blue-800 border-blue-200"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {skill.notes && (
                      <p className="text-[14px] text-slate-600 leading-relaxed">
                        {skill.notes}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

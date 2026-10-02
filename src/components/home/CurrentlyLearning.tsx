import React from "react";
import Link from "next/link";
import {
  Layers,
  Cpu,
  Database,
  BarChart3,
  PlugZap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { skillCategories } from "@/data/skills";

function getSkillIcon(name: string) {
  if (name.includes("Apps")) return <Layers className="h-5 w-5 text-cyan-600" />;
  if (name.includes("Automate")) return <Cpu className="h-5 w-5 text-emerald-600" />;
  if (name.includes("BI")) return <BarChart3 className="h-5 w-5 text-amber-600" />;
  if (name.includes("Dataverse")) return <Database className="h-5 w-5 text-indigo-600" />;
  if (name.includes("AX") || name.includes("D365")) return <PlugZap className="h-5 w-5 text-blue-600" />;
  if (name.includes("Pages")) return <Layers className="h-5 w-5 text-cyan-600" />;
  return <Sparkles className="h-5 w-5 text-purple-600" />;
}

function getSkillTag(name: string) {
  if (name.includes("AX") || name.includes("BI")) return "Part-time Work";
  if (name.includes("AI")) return "Exploring";
  return "Active";
}

export function CurrentlyLearning() {
  const learningCategory = skillCategories.find(
    (category) => category.title === "Learning & Current Direction"
  );
  const skills = learningCategory?.skills || [];

  return (
    <section className="py-8 sm:py-10 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200">
            Current Focus & Learning
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            Expanding into Dynamics AX & Business Applications
          </h2>
          <p className="text-[16px] sm:text-[17px] text-slate-600 mt-1 max-w-xl leading-relaxed">
            Combining 4+ years of proven full-stack software development with
            Microsoft Power Platform, Dynamics AX, and enterprise automation.
          </p>
        </div>

        <Link
          href="/skills"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 transition-colors self-start sm:self-auto"
        >
          <span>See prioritized skills breakdown</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                {getSkillIcon(skill.name)}
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                {getSkillTag(skill.name)}
              </span>
            </div>
            <h3 className="text-[17px] font-semibold text-slate-900">
              {skill.name}
            </h3>
            {skill.notes && (
              <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mt-2">
                {skill.notes}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

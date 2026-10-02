import React from "react";
import { LearningMilestone } from "@/types";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";

interface TimelineItemProps {
  milestone: LearningMilestone;
  isLast?: boolean;
}

export function TimelineItem({ milestone, isLast = false }: TimelineItemProps) {
  const getStatusIcon = () => {
    switch (milestone.status) {
      case "Completed":
        return <CheckCircle2 className="h-4 w-4 text-emerald-600" />;
      case "In Progress":
        return <Clock className="h-4 w-4 text-cyan-600 animate-pulse" />;
      case "Up Next":
        return <Sparkles className="h-4 w-4 text-amber-600" />;
    }
  };

  const getStatusBadge = () => {
    switch (milestone.status) {
      case "Completed":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "In Progress":
        return "bg-cyan-50 text-cyan-800 border-cyan-200";
      case "Up Next":
        return "bg-amber-50 text-amber-800 border-amber-200";
    }
  };

  return (
    <div className="relative pl-8 sm:pl-10 group">
      {/* Vertical line connecting milestones */}
      {!isLast && (
        <div
          className="absolute left-3.5 sm:left-4.5 top-6 bottom-0 w-px bg-slate-200 group-hover:bg-slate-300 transition-colors"
          aria-hidden="true"
        />
      )}

      {/* Node bullet */}
      <div className="absolute left-1.5 sm:left-2.5 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white border border-slate-300 shadow-2xs">
        {getStatusIcon()}
      </div>

      {/* Content card */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 transition-all hover:border-slate-300 hover:shadow-xs mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500 font-medium">
              {milestone.date}
            </span>
            <span
              className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${getStatusBadge()}`}
            >
              {milestone.status}
            </span>
          </div>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            {milestone.category}
          </span>
        </div>

        <h3 className="text-lg sm:text-[19px] font-semibold text-slate-900 leading-snug">
          {milestone.title}
        </h3>

        <p className="mt-2 text-[15px] sm:text-[16px] text-slate-600 leading-[1.7]">
          {milestone.description}
        </p>

        {/* Topics list */}
        {milestone.topicsCovered && milestone.topicsCovered.length > 0 && (
          <div className="mt-3.5 pt-3 border-t border-slate-100">
            <div className="text-xs font-mono text-slate-500 mb-1.5 font-medium">
              Key topics & practices:
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[14px] text-slate-600">
              {milestone.topicsCovered.map((topic, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-cyan-600 font-mono mt-0.5">&bull;</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Takeaway / Honest reflection */}
        {milestone.keyTakeaway && (
          <div className="mt-3.5 rounded-lg bg-slate-50 border border-slate-200 p-3 text-[14px] text-slate-700 leading-relaxed">
            <span className="font-mono text-cyan-800 font-semibold mr-1.5">
              Takeaway:
            </span>
            <span>{milestone.keyTakeaway}</span>
          </div>
        )}
      </div>
    </div>
  );
}

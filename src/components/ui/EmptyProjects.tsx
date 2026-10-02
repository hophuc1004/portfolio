import React from "react";
import Link from "next/link";
import { Hammer, ArrowRight, BookOpen } from "lucide-react";
import { getBlogUrl } from "@/data/siteConfig";

interface EmptyProjectsProps {
  showJourneyLink?: boolean;
}

export function EmptyProjects({ showJourneyLink = true }: EmptyProjectsProps) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xs">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-amber-700 mb-4">
        <Hammer className="h-6 w-6" />
      </div>

      <h3 className="text-lg sm:text-[19px] font-semibold text-slate-900">
        Learning in Public
      </h3>

      <p className="mt-2 text-[16px] font-medium text-amber-900 font-mono">
        &ldquo;Projects will be added as I build and learn.&rdquo;
      </p>

      <p className="mt-3 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-lg mx-auto">
        I am currently in active learning mode with Microsoft Power Platform,
        automation, and AI. Instead of posting hypothetical or fictional
        projects, real hands-on solutions, flows, and architectures will be
        published here as I build them.
      </p>

      {showJourneyLink && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/journey"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 transition-all shadow-2xs"
          >
            <BookOpen className="h-4 w-4" />
            <span>View Current Learning Journey</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={getBlogUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-all shadow-2xs"
          >
            <span>Read External Blog</span>
          </a>
        </div>
      )}
    </div>
  );
}

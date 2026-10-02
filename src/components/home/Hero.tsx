import React from "react";
import Link from "next/link";
import { siteConfig, getBlogUrl } from "@/data/siteConfig";
import { ArrowRight, BookOpen, Compass, ExternalLink, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="py-8 sm:py-12 lg:py-14">
      <div className="max-w-3xl">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-50 text-cyan-800 border border-cyan-200 mb-5">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{siteConfig.statusBadge}</span>
        </div>

        {/* Positioning Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900 leading-[1.2]">
          {siteConfig.positioning}
        </h1>

        {/* Introduction / Lead text */}
        <p className="mt-5 text-[18px] sm:text-[19px] text-slate-700 leading-[1.7] font-normal">
          {siteConfig.heroIntro}
        </p>

        {/* Location & Career Focus */}
        <div className="mt-4 flex items-center gap-2 text-xs sm:text-[13px] font-mono text-slate-500">
          <MapPin className="h-3.5 w-3.5 text-rose-500 shrink-0" />
          <span>Based in Denmark • Seeking longer-term software development & business application opportunities</span>
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-cyan-600 hover:bg-cyan-700 text-white transition-colors shadow-xs"
          >
            <span>Read Career Background</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition-colors shadow-2xs"
          >
            <span>Skills Breakdown</span>
          </Link>

          <Link
            href="/journey"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition-colors shadow-2xs"
          >
            <Compass className="h-4 w-4" />
            <span>Learning Journey</span>
          </Link>

          <a
            href={getBlogUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors shadow-2xs"
          >
            <BookOpen className="h-4 w-4" />
            <span>External Blog</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

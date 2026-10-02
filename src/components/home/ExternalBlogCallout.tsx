import { getBlogUrl } from "@/data/siteConfig";
import { ExternalLink, BookOpen, Sparkles } from "lucide-react";

export function ExternalBlogCallout() {
  return (
    <section className="py-8 sm:py-10 border-t border-slate-200">
      <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>External Writing</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            Looking for articles and detailed writeups?
          </h3>
          <p className="mt-2 text-[16px] sm:text-[17px] text-slate-600 leading-relaxed">
            I write and document technical insights, thought processes, and deeper
            reflections on my separate public blog.
          </p>
        </div>

        <a
          href={getBlogUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 transition-colors shadow-2xs shrink-0"
        >
          <BookOpen className="h-4 w-4" />
          <span>Read My Public Blog</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}

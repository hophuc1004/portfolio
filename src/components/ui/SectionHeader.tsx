import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  className = "",
  align = "left",
}: SectionHeaderProps) {
  const alignmentClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignmentClass} ${className} mb-6 sm:mb-8`}>
      {badge && (
        <span className="inline-block text-xs font-mono uppercase tracking-wider text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200 mb-2.5">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 text-[17px] sm:text-[18px] text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

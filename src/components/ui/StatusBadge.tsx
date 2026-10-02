import React from "react";
import { ProjectStatus } from "@/types";

interface StatusBadgeProps {
  status: ProjectStatus;
  size?: "sm" | "md";
}

export function StatusBadge({ status, size = "sm" }: StatusBadgeProps) {
  const getBadgeStyle = (s: ProjectStatus) => {
    switch (s) {
      case "Learning":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "In Progress":
        return "bg-cyan-50 text-cyan-800 border-cyan-200";
      case "Completed":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "Experiment":
        return "bg-purple-50 text-purple-800 border-purple-200";
      case "Personal Project":
        return "bg-indigo-50 text-indigo-800 border-indigo-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const sizeClasses =
    size === "sm"
      ? "text-xs px-2.5 py-0.5 rounded-full"
      : "text-sm px-3 py-1 rounded-full font-medium";

  return (
    <span
      className={`inline-flex items-center gap-1.5 border font-mono tracking-wide ${sizeClasses} ${getBadgeStyle(
        status
      )}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {status}
    </span>
  );
}

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, getBlogUrl } from "@/data/siteConfig";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import {
  Code,
  BookOpen,
  ArrowRight,
  Terminal,
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: `About & Career Background | ${siteConfig.name}`,
  description: siteConfig.positioning,
};

export default function AboutPage() {
  return (
    <Container className="py-8 sm:py-12">
      <SectionHeader
        badge="Career Profile"
        title="Background & Career Story"
        description="A transparent summary of my 4+ years of full-stack software development experience, ongoing work with Dynamics AX and Power Platform, and my career direction in Denmark."
      />

      {/* Main Grid: Content (2 cols) & Sidebar (1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
        <div className="lg:col-span-2 space-y-8 text-slate-700 text-[17px] leading-[1.7]">
          {/* 1. Introduction & Overview */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-3.5 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700">
                <Code className="h-5 w-5" />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Summary</h3>
            </div>
            <p className="text-[17px] sm:text-[18px] text-slate-700 leading-[1.75]">
              {siteConfig.intro}
            </p>
          </section>

          {/* 2. Professional Experience Timeline */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700">
                <Briefcase className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Professional Experience</h3>
                <p className="text-xs font-mono text-slate-500 mt-0.5">
                  Chronological development history and project delivery
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 space-y-4 hover:border-slate-300 hover:shadow-xs transition-colors"
                >
                  {/* Job Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg sm:text-[20px] font-bold text-slate-900">{exp.title}</h4>
                        {exp.employmentType && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
                            {exp.employmentType}
                          </span>
                        )}
                      </div>
                      {exp.company && (
                        <div className="text-[15px] sm:text-[16px] font-semibold text-cyan-700 mt-0.5">
                          {exp.company}
                        </div>
                      )}
                    </div>
                    <div className="text-xs sm:text-[13px] font-mono text-slate-500 sm:text-right space-y-0.5 shrink-0">
                      <div className="flex items-center sm:justify-end gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center sm:justify-end gap-1.5 text-slate-500">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Standard Bullet List */}
                  {exp.description && (
                    <ul className="space-y-2 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-600 font-mono mt-0.5">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Sub-projects (for FileString) */}
                  {exp.projects && (
                    <div className="space-y-3.5 pt-1">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        Project & Domain Areas:
                      </div>
                      <div className="space-y-3">
                        {exp.projects.map((proj, pIdx) => (
                          <div
                            key={pIdx}
                            className="rounded-lg bg-slate-50/80 border border-slate-200 p-4 space-y-2"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="text-[15px] sm:text-[16px] font-semibold text-slate-900">
                                {proj.name}
                              </span>
                              <span className="text-[11px] font-mono text-slate-500">
                                Role: {proj.role}
                              </span>
                            </div>
                            <ul className="space-y-1 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
                              {proj.content.map((c, cIdx) => (
                                <li key={cIdx} className="flex items-start gap-1.5">
                                  <span className="text-emerald-600 font-mono">&bull;</span>
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {proj.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-[11px] font-mono text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded shadow-2xs"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Development Practices */}
                  {exp.practices && (
                    <div className="rounded-lg bg-slate-50/80 border border-slate-200 p-3.5 space-y-1.5 text-[14px] sm:text-[15px] text-slate-600">
                      <div className="font-mono text-slate-700 font-semibold text-xs uppercase tracking-wider">
                        Development Practices:
                      </div>
                      <ul className="space-y-1 text-slate-600">
                        {exp.practices.map((pr, prIdx) => (
                          <li key={prIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pr}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technology Badges */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[12px] font-mono text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 3. Education */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Education</h3>
                <p className="text-xs font-mono text-slate-500">
                  Academic foundation and transition path
                </p>
              </div>
            </div>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-lg bg-slate-50/80 border border-slate-200 p-5 space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">{edu.degree}</h4>
                  <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-cyan-700 font-mono">
                  {edu.institution}
                </div>
                {edu.description && (
                  <p className="text-[15px] sm:text-[16px] text-slate-600 pt-1 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        </div>

        {/* Sidebar Summary (1 col) */}
        <div className="space-y-6">
          {/* Quick Snapshot Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Profile Snapshot
            </h4>
            <ul className="space-y-3 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <Terminal className="h-4 w-4 text-cyan-600 shrink-0 mt-1" />
                <span>
                  <strong className="text-slate-900">Proven Background:</strong> 4+ Years Full-Stack Web Development
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Terminal className="h-4 w-4 text-cyan-600 shrink-0 mt-1" />
                <span>
                  <strong className="text-slate-900">Primary Stack:</strong> JavaScript, Node.js, React.js, PostgreSQL, Redis, REST APIs, gRPC
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Terminal className="h-4 w-4 text-cyan-600 shrink-0 mt-1" />
                <span>
                  <strong className="text-slate-900">Current Direction:</strong> Dynamics AX / D365, Power Platform, Power BI
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Terminal className="h-4 w-4 text-cyan-600 shrink-0 mt-1" />
                <span>
                  <strong className="text-slate-900">Active Role:</strong> AX &amp; Power Platform Developer (Part-time, EVsoft)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Terminal className="h-4 w-4 text-cyan-600 shrink-0 mt-1" />
                <span>
                  <strong className="text-slate-900">Location:</strong> Denmark
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Terminal className="h-4 w-4 text-cyan-600 shrink-0 mt-1" />
                <span>
                  <strong className="text-slate-900">Education:</strong> Agricultural Engineering (Hue University)
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-3 shadow-xs">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-2">
              Explore More
            </h4>
            <Link
              href="/skills"
              className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-700 hover:text-cyan-700 border border-slate-200 transition-colors"
            >
              <span>View Prioritized Skills</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/journey"
              className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-700 hover:text-cyan-700 border border-slate-200 transition-colors"
            >
              <span>View Learning Journey Log</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-700 hover:text-cyan-700 border border-slate-200 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={getBlogUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-xs font-medium text-amber-900 transition-colors border border-amber-200"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                <span>External Public Blog</span>
              </span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

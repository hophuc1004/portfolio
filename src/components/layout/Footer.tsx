import React from "react";
import Link from "next/link";
import { siteConfig, getBlogUrl } from "@/data/siteConfig";
import { ExternalLink, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white text-slate-600 text-xs">
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Identity & Positioning */}
          <div className="space-y-2.5">
            <div className="font-mono font-semibold text-slate-900 text-sm">
              {siteConfig.name}
            </div>
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              {siteConfig.positioning}
            </p>
            <p className="text-slate-500 text-[11px]">
              Practical development • Continuous learning • Honest progression
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-900 font-semibold">
              Navigation
            </div>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-700 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-700 transition-colors"
                >
                  About & Career Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/journey"
                  className="hover:text-cyan-700 transition-colors"
                >
                  Learning Journey & Roadmap
                </Link>
              </li>
              {/* <li>
                <Link href="/projects" className="hover:text-cyan-700 transition-colors">
                  Projects & Labs
                </Link>
              </li> */}
              <li>
                <Link
                  href="/skills"
                  className="hover:text-cyan-700 transition-colors"
                >
                  Skills & Focus Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-700 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & External Blog */}
          <div className="space-y-2.5">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-900 font-semibold">
              Connect & External Blog
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href={getBlogUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-800 hover:text-amber-900 font-medium transition-colors"
              >
                <span>Read My Public Blog</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors border border-slate-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors border border-slate-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors border border-slate-200"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built with
            Next.js, React & Tailwind CSS.
          </div>
          <div>Practical engineering &bull; Transparent, hands-on learning</div>
        </div>
      </Container>
    </footer>
  );
}

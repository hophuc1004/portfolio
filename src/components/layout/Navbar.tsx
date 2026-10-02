"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, getBlogUrl } from "@/data/siteConfig";
import { ExternalLink, Menu, X, Terminal } from "lucide-react";
import { Container } from "./Container";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Learning Journey", href: "/journey" },
    // { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-mono text-sm tracking-tight text-slate-900 hover:text-cyan-700 transition-colors"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700">
              <Terminal className="h-4 w-4" />
            </span>
            <span className="font-semibold text-slate-900">
              {siteConfig.name}
            </span>
            <span className="hidden sm:inline text-xs text-slate-500 border-l border-slate-200 pl-2">
              dev portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-[14px] font-medium transition-all ${
                  isActive(link.href)
                    ? "text-cyan-800 bg-cyan-50 border border-cyan-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* External Blog Nav Item (Yellow highlight used sparingly) */}
            <a
              href={getBlogUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[14px] font-medium text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-all ml-1.5"
              title="Visit external blog"
            >
              <span>Blog</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={getBlogUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200"
            >
              <span>Blog</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-3 border-t border-slate-200 space-y-1 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(link.href)
                    ? "text-cyan-800 bg-cyan-50 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}

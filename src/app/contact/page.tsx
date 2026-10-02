import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, getBlogUrl } from "@/data/siteConfig";
import { Mail, BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const metadata = {
  title: `Contact | ${siteConfig.name}`,
  description:
    "Get in touch with me via Email, GitHub, LinkedIn, or explore my external blog.",
};

export default function ContactPage() {
  const contactLinks = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      description: "Direct inquiries, opportunities, and technical discussions.",
      icon: <Mail className="h-5 w-5 text-cyan-700" />,
      actionLabel: "Send Email",
      isExternal: false,
      badge: "Preferred",
    },
    {
      label: "GitHub",
      value: siteConfig.githubUrl.replace("https://", ""),
      href: siteConfig.githubUrl,
      description: "Source code, personal repositories, and code samples.",
      icon: <GithubIcon className="h-5 w-5 text-slate-700" />,
      actionLabel: "View GitHub Profile",
      isExternal: true,
    },
    {
      label: "LinkedIn",
      value: siteConfig.linkedinUrl.replace("https://", ""),
      href: siteConfig.linkedinUrl,
      description: "Professional profile and career background.",
      icon: <LinkedinIcon className="h-5 w-5 text-blue-700" />,
      actionLabel: "Connect on LinkedIn",
      isExternal: true,
    },
    {
      label: "External Blog",
      value: siteConfig.blogUrl,
      href: getBlogUrl(),
      description: "Technical notes, architecture articles, and learnings.",
      icon: <BookOpen className="h-5 w-5 text-amber-700" />,
      actionLabel: "Visit Public Blog",
      isExternal: true,
      badge: "Writing",
    },
  ];

  return (
    <Container className="py-8 sm:py-12">
      <SectionHeader
        badge="Connect"
        title="Get in Touch"
        description="Whether you would like to discuss full-stack development, Dynamics AX and Power Platform integrations, or opportunities in Denmark, feel free to reach out."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl">
        {contactLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  {item.icon}
                </div>
                {item.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                {item.label}
              </h3>

              <div className="text-[13px] font-mono text-slate-500 mt-1 truncate">
                {item.value}
              </div>

              <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mt-2.5">
                {item.description}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-[13px] font-semibold text-cyan-700 group-hover:text-cyan-800">
              <span>{item.actionLabel}</span>
              {item.isExternal ? (
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              ) : (
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Note about open topics */}
      <div className="mt-8 sm:mt-10 rounded-xl border border-slate-200 bg-white p-5 sm:p-6 max-w-4xl text-[14px] sm:text-[15px] text-slate-600 leading-relaxed shadow-2xs">
        <span className="font-semibold text-slate-900">Open to: </span>
        Software development opportunities in Denmark, discussing business system integrations, exchanging full-stack insights, and collaborating on automation and enterprise applications.
      </div>
    </Container>
  );
}

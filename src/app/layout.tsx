import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role} & Learning Journey`,
  description: siteConfig.intro,
  keywords: [
    "Software Developer",
    "Full-Stack Developer",
    "JavaScript",
    "Node.js",
    "React",
    "PostgreSQL",
    "Dynamics AX",
    "Power Platform",
    "Power Apps",
    "Power Automate",
    "Dataverse",
    "Power BI",
    "Denmark",
    "APIs",
    "Business Process Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500/20 selection:text-cyan-900">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

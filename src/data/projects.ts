import { Project } from "@/types";

/**
 * Projects list:
 * Initially empty. No fictional or hypothetical projects are created.
 * Real projects will be added here as they are built.
 *
 * Example structure for when you're ready to add a real project:
 *
 * {
 *   slug: "my-real-project",
 *   title: "Project Title",
 *   description: "Brief summary of what this project accomplishes.",
 *   status: "Learning", // "Learning" | "In Progress" | "Completed" | "Experiment" | "Personal Project"
 *   technologies: ["Power Apps", "Dataverse", "Power Automate"],
 *   problem: "What problem does this solve?",
 *   approach: "How did you design and implement the solution?",
 *   architecture: "Overview of components, tables, flows, and integrations.",
 *   screenshots: [
 *     { url: "/images/projects/example.png", caption: "Main dashboard" }
 *   ],
 *   demoUrl: "https://example.com/demo",
 *   sourceCodeUrl: "https://github.com/example/repo",
 *   relatedBlogUrl: "https://yourblog.com/post",
 *   lessonsLearned: [
 *     "Key takeaway 1",
 *     "Key takeaway 2"
 *   ],
 *   featured: true,
 *   date: "2026-09"
 * }
 */
export const projects: Project[] = [];

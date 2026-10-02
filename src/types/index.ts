export type ProjectStatus =
  | "Learning"
  | "In Progress"
  | "Completed"
  | "Experiment"
  | "Personal Project";

export interface ProjectScreenshot {
  url: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  problem: string;
  approach: string;
  architecture?: string;
  screenshots?: ProjectScreenshot[];
  demoUrl?: string;
  sourceCodeUrl?: string;
  relatedBlogUrl?: string;
  lessonsLearned: string[];
  featured?: boolean;
  date?: string;
}

export type SkillLevel =
  | "Primary (Professional)"
  | "Secondary / Supporting"
  | "Previous / Additional"
  | "Learning / Current Direction";

export interface SkillItem {
  name: string;
  level: SkillLevel;
  notes?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  description: string;
  skills: SkillItem[];
}

export type MilestoneCategory =
  | "Power Platform"
  | "Dynamics AX / ERP"
  | "Automation"
  | "Full-Stack & APIs"
  | "AI"
  | "Career Transition";

export type MilestoneStatus = "Completed" | "In Progress" | "Up Next";

export interface LearningMilestone {
  id: string;
  date: string;
  title: string;
  category: MilestoneCategory;
  status: MilestoneStatus;
  description: string;
  topicsCovered: string[];
  keyTakeaway?: string;
}

export interface ExperienceProject {
  name: string;
  role: string;
  content: string[];
  tech: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company?: string;
  employmentType?: string;
  period: string;
  location: string;
  description?: string[];
  projects?: ExperienceProject[];
  practices?: string[];
  technologies?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

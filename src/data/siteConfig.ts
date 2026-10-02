// Central site configuration
// Easy to customize personal details and external links

export const siteConfig = {
  name: "Phuc Ho",
  role: "Software Developer",
  positioning:
    "Software Developer with 4+ years of full-stack development experience, currently expanding into Dynamics AX, Microsoft Power Platform, automation and business applications.",
  heroIntro:
    "Software Developer with 4+ years of full-stack web development experience, currently expanding into Dynamics AX, Microsoft Power Platform, and business process automation in Denmark.",
  intro:
    "Software Developer with 4+ years of experience in full-stack web development, working mainly with JavaScript, Node.js, React, PostgreSQL and related backend technologies. I am currently expanding my experience into Dynamics AX, Power Platform, automation and business applications, with an interest in combining software development skills with practical business processes and enterprise systems. My background is mainly in hands-on development, working on HR, LMS, machine management and blockchain-related projects. I am now focusing on building a longer-term career in Denmark while continuing to strengthen my technical and business-system knowledge.",
  location: "Denmark",
  email: "contact@example.com", // Placeholder
  githubUrl: "https://github.com/example", // Placeholder
  linkedinUrl: "https://linkedin.com/in/example", // Placeholder

  // External blog URL configured in one place
  blogUrl: "PASTE_MY_BLOG_URL_HERE",

  // Active status tag shown in the navigation bar & hero
  statusBadge: "Full-Stack Dev • Expanding into Dynamics AX & Power Platform • Denmark",
};

/**
 * Returns formatted absolute URL for external blog
 */
export function getBlogUrl(): string {
  const url = siteConfig.blogUrl.trim();
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
}

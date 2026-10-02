import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Primary (Proven Background)",
    subtitle: "Core Full-Stack Web Development (4+ Years)",
    description:
      "Core technologies used extensively across commercial software projects, production systems, and microservices.",
    skills: [
      {
        name: "JavaScript",
        level: "Primary (Professional)",
        notes: "ES6+, async/await, modular application logic",
      },
      {
        name: "React.js",
        level: "Primary (Professional)",
        notes: "Component architecture, hooks, state management, performance optimization",
      },
      {
        name: "Node.js",
        level: "Primary (Professional)",
        notes: "Backend REST services, async workers, system integrations",
      },
      {
        name: "PostgreSQL",
        level: "Primary (Professional)",
        notes: "Relational modeling, indexing, queries across HRM/LMS/MMS",
      },
      {
        name: "REST APIs",
        level: "Primary (Professional)",
        notes: "API design, endpoint integration, and authentication",
      },
      {
        name: "Redis",
        level: "Primary (Professional)",
        notes: "Caching, session management, and pub/sub messaging",
      },
      {
        name: "gRPC",
        level: "Primary (Professional)",
        notes: "Service-to-service communication with Protocol Buffers",
      },
    ],
  },
  {
    title: "Secondary & Supporting Skills",
    subtitle: "Infrastructure, Protocols & Development Practices",
    description:
      "Supporting technologies, messaging brokers, cloud tooling, and team delivery practices.",
    skills: [
      {
        name: "RabbitMQ",
        level: "Secondary / Supporting",
        notes: "Message queuing and async event decoupling in LMS",
      },
      {
        name: "Socket (WebSockets)",
        level: "Secondary / Supporting",
        notes: "Real-time bidirectional machine and patient data monitoring in MMS",
      },
      {
        name: "SQL & Relational Databases",
        level: "Secondary / Supporting",
        notes: "Complex queries, data extraction, and schema design",
      },
      {
        name: "AWS",
        level: "Secondary / Supporting",
        notes: "Cloud infrastructure fundamentals and service deployment",
      },
      {
        name: "Git & GitHub",
        level: "Secondary / Supporting",
        notes: "Branching workflows, pull requests, and collaborative code reviews",
      },
      {
        name: "Agile / Scrum Practices",
        level: "Secondary / Supporting",
        notes: "Sprint planning, task estimation, and bi-weekly sprint cycles",
      },
    ],
  },
  {
    title: "Learning & Current Direction",
    subtitle: "Dynamics AX, Power Platform & Automation",
    description:
      "Actively expanding my software development foundations into enterprise ERP and low-code business applications, supplemented by hands-on part-time client integration work at EVsoft.",
    skills: [
      {
        name: "Dynamics AX / D365",
        level: "Learning / Current Direction",
        notes: "ERP workflow support, data flows, and external integrations (Acubiz, Corepay, GLS, EDI)",
      },
      {
        name: "Power BI",
        level: "Learning / Current Direction",
        notes: "Data extraction, transformation, and automated reporting from Dynamics AX",
      },
      {
        name: "Power Automate",
        level: "Learning / Current Direction",
        notes: "Cloud flows, approval workflows, and ERP-triggered automation",
      },
      {
        name: "Power Apps",
        level: "Learning / Current Direction",
        notes: "Canvas and Model-Driven apps connected to Dataverse and ERP workflows",
      },
      {
        name: "Microsoft Dataverse",
        level: "Learning / Current Direction",
        notes: "Relational tables, business rules, and security roles",
      },
      {
        name: "Power Pages",
        level: "Learning / Current Direction",
        notes: "External web portals and secure form interactions",
      },
      {
        name: "AI-Assisted Development & Automation",
        level: "Learning / Current Direction",
        notes: "Coding assistance, debugging, and workflow augmentation",
      },
    ],
  },
  {
    title: "Previous / Additional Technologies",
    subtitle: "Web3 & Blockchain Domain Experience",
    description:
      "Domain experience from earlier projects; one part of my engineering background.",
    skills: [
      {
        name: "Solidity",
        level: "Previous / Additional",
        notes: "Smart contract development and deployment",
      },
      {
        name: "Web3",
        level: "Previous / Additional",
        notes: "Wallet integration and contract interaction",
      },
      {
        name: "Blockchain Networks & Explorer Tools",
        level: "Previous / Additional",
        notes: "Transaction tracking and contract verification on BscScan/Polygon",
      },
    ],
  },
];

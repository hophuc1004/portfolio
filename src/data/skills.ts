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
        notes: "ES6+, asynchronous programming, functional patterns, core runtime logic",
      },
      {
        name: "React.js",
        level: "Primary (Professional)",
        notes: "Reusable component design, state management, UI architecture, performance tuning",
      },
      {
        name: "Node.js",
        level: "Primary (Professional)",
        notes: "Backend services, REST APIs, asynchronous workers, system integrations",
      },
      {
        name: "PostgreSQL",
        level: "Primary (Professional)",
        notes: "Relational schema design, querying, indexing, data modeling across HRM/LMS/MMS",
      },
      {
        name: "REST APIs",
        level: "Primary (Professional)",
        notes: "API design, contract definition, third-party integrations, authentication",
      },
      {
        name: "Redis",
        level: "Primary (Professional)",
        notes: "In-memory caching, session storage, pub/sub communication",
      },
      {
        name: "gRPC",
        level: "Primary (Professional)",
        notes: "High-performance inter-service communication and protocol buffers",
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
        notes: "Asynchronous task queuing, message routing, event decoupling in LMS",
      },
      {
        name: "Socket (WebSockets)",
        level: "Secondary / Supporting",
        notes: "Real-time bidirectional machine and patient data monitoring in MMS",
      },
      {
        name: "SQL & Relational Databases",
        level: "Secondary / Supporting",
        notes: "Data normalization, transactional queries, data extraction",
      },
      {
        name: "AWS",
        level: "Secondary / Supporting",
        notes: "Cloud infrastructure fundamentals, hosting, cloud deployments",
      },
      {
        name: "Git & GitHub",
        level: "Secondary / Supporting",
        notes: "Version control, feature branching, pull requests, collaborative reviews",
      },
      {
        name: "Agile / Scrum Practices",
        level: "Secondary / Supporting",
        notes: "1-week & 2-week sprints, backlog refinement, task estimation, team collaboration",
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
        notes: "ERP workflow support, data extraction, external system integrations (Acubiz, Corepay, GLS, EDI)",
      },
      {
        name: "Power BI",
        level: "Learning / Current Direction",
        notes: "Data extraction, transformation, reporting, automated AX data flows",
      },
      {
        name: "Power Automate",
        level: "Learning / Current Direction",
        notes: "Cloud flows, approval processes, event-triggered business process automation with AX",
      },
      {
        name: "Power Apps",
        level: "Learning / Current Direction",
        notes: "Canvas & Model-Driven apps connected to Dataverse and AX enterprise workflows",
      },
      {
        name: "Microsoft Dataverse",
        level: "Learning / Current Direction",
        notes: "Enterprise relational modeling, tables, relationships, business rules",
      },
      {
        name: "Power Pages",
        level: "Learning / Current Direction",
        notes: "External portals, secure form submissions, role permissions",
      },
      {
        name: "AI-Assisted Development & Automation",
        level: "Learning / Current Direction",
        notes: "Using AI tools for coding, debugging, and practical enterprise workflow augmentation",
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
        notes: "Smart contract development and deployment for game platform features",
      },
      {
        name: "Web3",
        level: "Previous / Additional",
        notes: "Blockchain wallet interaction and dApp contract integration",
      },
      {
        name: "Blockchain Networks & Explorer Tools",
        level: "Previous / Additional",
        notes: "Transaction verification and contracts tracking on BscScan and Polygon",
      },
    ],
  },
];

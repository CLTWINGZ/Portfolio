import { ExperienceItem, Project, TimelineItem } from "@/lib/types";

export const skillGroups = {
  Frontend: ["React", "Next.js", "TypeScript"],
  Backend: ["Node.js", "Express"],
  Database: ["PostgreSQL", "MongoDB"],
  Tools: ["Git", "GitHub", "Docker"]
};

export const projects: Project[] = [
  {
    slug: "ecommerce-insights-dashboard",
    title: "E-commerce Insights Dashboard",
    summary:
      "A real-time analytics suite that helps product teams monitor conversion trends and campaign impact.",
    description:
      "Built a scalable dashboard that ingests sales events, visualizes KPIs, and provides actionable funnels. The app reduced manual reporting overhead and improved campaign response speed.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/chethana/ecommerce-insights",
    liveUrl: "https://demo.example.com/ecommerce-insights",
    image: "/projects/project-1.svg",
    outcomes: [
      "Cut reporting time by 60% through automated metrics pipelines.",
      "Improved retention by 18% with cohort visibility.",
      "Handled 500k+ monthly events with stable performance."
    ],
    relatedPosts: ["nextjs-portfolio-seo", "react-performance-tips"]
  },
  {
    slug: "dev-hiring-platform",
    title: "Developer Hiring Platform",
    summary:
      "A hiring workflow tool with structured interviews, candidate scorecards, and hiring analytics.",
    description:
      "Designed role-based modules for recruiters and engineers to collaborate on technical hiring. Focused on UX consistency, accessibility, and maintainable service integrations.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/chethana/dev-hiring-platform",
    liveUrl: "https://demo.example.com/dev-hiring",
    image: "/projects/project-2.svg",
    outcomes: [
      "Reduced time-to-hire by 25% with centralized feedback loops.",
      "Achieved 95+ accessibility score on Lighthouse.",
      "Integrated secure auth and audit logs for enterprise compliance."
    ],
    relatedPosts: ["how-to-build-a-developer-portfolio"]
  },
  {
    slug: "smart-inventory-api",
    title: "Smart Inventory API",
    summary:
      "An API-first inventory service with forecasting hints and low-stock automation.",
    description:
      "Built an Express API with robust validation, role-based permissions, and observability hooks. Shipped Dockerized deployments and CI workflows for predictable releases.",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/chethana/smart-inventory-api",
    liveUrl: "https://demo.example.com/inventory-api",
    image: "/projects/project-3.svg",
    outcomes: [
      "Prevented 30% of stockouts using alert-driven reordering.",
      "Maintained sub-250ms median response time.",
      "Lowered deployment rollback rate by 40%."
    ],
    relatedPosts: ["react-performance-tips"]
  },
  {
    slug: "portfolio-cms-kit",
    title: "Portfolio CMS Kit",
    summary:
      "A starter kit for developer portfolios with CMS editing, SEO defaults, and analytics hooks.",
    description:
      "Created a reusable Next.js template optimized for static generation and editorial workflows. Included structured data defaults, Open Graph image support, and content modeling.",
    tags: ["Next.js", "TypeScript", "MongoDB", "GitHub"],
    githubUrl: "https://github.com/chethana/portfolio-cms-kit",
    liveUrl: "https://demo.example.com/portfolio-cms",
    image: "/projects/project-4.svg",
    outcomes: [
      "Improved organic clicks by 32% for early adopters.",
      "Enabled non-technical editing with simple markdown workflows.",
      "Reached under 1.8s Largest Contentful Paint on mobile."
    ],
    relatedPosts: ["nextjs-portfolio-seo", "how-to-build-a-developer-portfolio"]
  }
];

export const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "CloudScale Labs",
    period: "2022 - Present",
    location: "Remote",
    achievements: [
      "Delivered full-stack features across a multi-tenant SaaS platform used by 15k+ users.",
      "Refactored rendering bottlenecks to improve page speed by 35%.",
      "Mentored junior developers and standardized component patterns."
    ]
  },
  {
    role: "Associate Software Engineer",
    company: "Nexa Digital",
    period: "2020 - 2022",
    location: "Colombo, Sri Lanka",
    achievements: [
      "Implemented reusable React and TypeScript modules, reducing bugs by 20%.",
      "Collaborated with designers to ship accessible interfaces across product lines.",
      "Built CI/CD checks that shortened release cycles from weekly to daily."
    ]
  }
];

export const timeline: TimelineItem[] = [
  {
    year: "2017",
    title: "Started BSc in Computer Science",
    description: "Built foundations in software architecture, algorithms, and databases."
  },
  {
    year: "2019",
    title: "First internship",
    description: "Shipped production front-end features and learned agile collaboration."
  },
  {
    year: "2020",
    title: "Joined Nexa Digital",
    description: "Worked across API integrations and modern React architecture."
  },
  {
    year: "2022",
    title: "Promoted to Software Engineer at CloudScale Labs",
    description: "Led end-to-end features with measurable business outcomes."
  }
];

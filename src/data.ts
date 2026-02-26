export type EducationItem = {
  institute: string;
  program: string;
  period: string;
  notes?: string[];
};

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
  techStack?: string[];
};

export type Project = {
  title: string;
  status?: string;
  description: string;
  stack: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
};

export type Reference = {
  name: string;
  title: string;
  org: string;
  email: string;
};

export type PortfolioData = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;

  profile: string;
  highlights: string[];

  education: EducationItem[];
  experience: ExperienceItem[];
  projects: Project[];
  certifications: Certificate[];

  skills: {
    programming: string[];
    databases: string[];
    webMobile: string[];
    backendTools: string[];
    platformsCMS: string[];
    devopsTools: string[];
    networkingSystems: string[];
    cloudAI: string[];
    developerTools: string[];
  };

  reference: Reference;

  // Put your PDF into /public and set this path:
  cvDownloadPath: string;
};

const data: PortfolioData = {
  name: "Chethana Lakthilina Jathunarachchi",
  role: "Software Engineering (Fresh Graduate) | Full-Stack Developer",
  location: "Sri Lanka",
  email: "chethanalakthilina3@gmail.com",
  phone: "+94 783 076 220",
  github: "https://github.com/CLTWINGZ",
  linkedin: "https://linkedin.com/in/chethana-jathunarachchi-2ba45b281",

  profile:
    "Software Engineering fresh graduate with hands-on experience in full-stack web development using React, Node.js, Express, PHP, MySQL, and MongoDB. Completed an internship at the Civil Aviation Authority of Sri Lanka, contributing to internal systems and inventory management applications, plus an aviation-themed AI-integrated hotel room management system. Seeking a Full Stack Software Engineer Intern or Associate Software Engineer role.",
  highlights: [
    "Full-stack: React + Node/Express + PHP + MySQL/MongoDB",
    "Internship: Civil Aviation Authority of Sri Lanka (CAASL)",
    "Built inventory & hotel management systems (AI-integrated)",
    "DevOps foundations: CI/CD, Docker, Kubernetes, Jenkins",
  ],

  education: [
    {
      institute: "NSBM Green University, Sri Lanka",
      program: "BSc (Hons) in Software Engineering",
      period: "2021 – Dec 2025",
      notes: [
        "Coursework: Programming, Web/Mobile Dev, Databases, Networks, Cloud, IoT, AI",
        "Practical experience via projects + CAASL internship",
      ],
    },
    {
      institute: "Ruhunu Vijayaba College, Sri Lanka",
      program: "G.C.E. Advanced Level (Physical Science Stream)",
      period: "2016 – 2019",
      notes: ["Combined Mathematics, Physics, Chemistry"],
    },
  ],

  experience: [
    {
      company: "Civil Aviation Authority of Sri Lanka (CAASL)",
      location: "Katunayake, Sri Lanka",
      role: "Software Engineer Intern – Air Transport Regulations & IT Unit",
      period: "Apr 2024 – Oct 2024",
      bullets: [
        "Developed and maintained internal web apps to streamline IT & regulatory workflows (PHP, JS, AJAX, MySQL).",
        "Designed and implemented an Inventory Management System for IT asset tracking, monitoring, and reporting.",
        "Contributed to an AI-powered aviation-themed hotel & bungalow management system (auth, chatbot, invoices, email notifications).",
        "Supported network & systems operations: devices, servers, firewalls (LAN/WAN).",
        "Performed infrastructure security/maintenance: patching, VPN, directory services, monitoring.",
        "Troubleshot hardware/software/network issues and optimized system performance.",
      ],
      techStack: ["PHP", "MySQL", "JavaScript", "AJAX", "HTML", "CSS", "Bootstrap", "Linux", "Networking"],
    },
  ],

  projects: [
    {
      title: "Aviation-Themed Hotel Management System (AI-Integrated)",
      description:
        "Full-stack hotel management system with automated room management, secure authentication, AI chatbot support, automated invoicing & email notifications.",
      stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "AJAX", "PHP", "MySQL", "Google API"],
    },
    {
      title: "Inventory Management System (CAASL IT Unit)",
      description:
        "Asset registration, monitoring, and automated reporting dashboards for IT inventory management.",
      stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "AJAX", "PHP", "MySQL"],
    },
    {
      title: "Small Business Inventory Management System",
      description:
        "Full-stack inventory web app with JWT auth, CRUD, real-time stock updates, responsive UI and dashboards.",
      stack: ["React", "Recharts", "Node.js", "Express.js", "MongoDB", "Axios", "REST APIs", "JWT"],
    },
    {
      title: "Weather Analytics Application",
      description:
        "Real-time weather data processing with Comfort Index scoring, server-side caching, responsive UI, Auth0 auth.",
      stack: ["React", "Node.js", "Express.js", "REST APIs", "Auth0"],
    },
    {
      title: "AI-Based Web Application (IBM Watson)",
      description:
        "AI-driven web app using IBM Watson libraries with Flask REST APIs and server-side processing.",
      stack: ["Flask", "IBM Watson", "REST APIs"],
    },
    {
      title: "Online Prison Rehabilitation Management System",
      status: "In Progress",
      description:
        "Backend system to manage rehabilitation activities with monitoring and reporting.",
      stack: ["C (Visual Studio)", "SQL"],
    },
  ],

  certifications: [
    { title: "Introduction to Generative AI, Data Analytics on Google Cloud", issuer: "Google Cloud Skills Boost", date: "Jan 2024" },
    { title: "Web Design for Beginners, Python for Beginners, Front-End Web Development", issuer: "University of Moratuwa", date: "Jan 2024" },
    { title: "Practical Cisco Networking Labs in Cisco Packet Tracer", issuer: "Udemy", date: "Dec 2024" },
    { title: "Web Development with Java Spring Framework", issuer: "Peter the Great St. Petersburg Polytechnic University", date: "Nov 2025" },
    { title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI", date: "Nov 2025" },
    { title: "Hands-On Introduction to Linux Commands and Shell Scripting", issuer: "IBM", date: "Nov–Dec 2025" },
    { title: "Introduction to Cloud Computing", issuer: "IBM", date: "Jan 2026" },
    { title: "DevOps Prerequisite Course", issuer: "KodeKloud", date: "Jan 2026" },
    { title: "Jenkins for Beginners", issuer: "KodeKloud", date: "Jan 2026" },
    { title: "Docker Basics for DevOps", issuer: "KodeKloud", date: "Jan 2026" },
    { title: "Kubernetes Basics for DevOps", issuer: "KodeKloud", date: "Jan 2026" },
  ],

  skills: {
    programming: ["Java", "C#", "C", "C++", "Python", "PHP", "Dart", "JavaScript", "TypeScript", "Scala"],
    databases: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Firebase"],
    webMobile: ["HTML", "CSS", "JavaScript", "TypeScript", "jQuery", "React.js", "Bootstrap", "Material UI", "Tailwind CSS", "Flutter", "Dart", "Spring Boot"],
    backendTools: ["Node.js", "Express.js", "PHP", "AJAX", "Flask", "Postman", "Maven", "Jupyter Notebook", "NumPy", "Pandas"],
    platformsCMS: ["Joomla", "SharePoint", "WordPress"],
    devopsTools: ["Git", "GitHub", "CI/CD", "Linux", "Jenkins", "Docker", "Kubernetes", "Cloud Fundamentals"],
    networkingSystems: ["LAN/WAN", "Firewalls", "Servers", "Cisco Packet Tracer", "Active Directory"],
    cloudAI: ["AI Integration", "Google Cloud"],
    developerTools: ["VS Code", "IntelliJ IDEA", "REST APIs"],
  },

  reference: {
    name: "Mr. Dr. Rasika Ranaweera",
    title: "The Dean, Faculty of Computing",
    org: "NSBM Green University",
    email: "ranaweera.r@nsbm.lk",
  },

  cvDownloadPath: "/Chethana_Lakthilina_Jathunarachchi_CV.pdf",
};

export default data;
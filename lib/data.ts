export const personal = {
  name: "Kabilan",
  tagline:
    "Full-stack developer building scalable SaaS products, dev tools, and robotics systems — with a focus on performance, developer productivity, and real-world problem solving.",
  email: "kabilan.mee@gmail.com",
  github: "https://github.com/kabi175/",
  linkedin: "https://www.linkedin.com/in/kabilan-muthusamy/",
};

export const skills = [
  {
    category: "Languages",
    items: ["Go", "Java", "TypeScript", "JavaScript", "C++", "Kotlin"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React Native", "Expo", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Node.js", "GORM", "REST APIs"],
  },
  {
    category: "Tools & Infra",
    items: ["PostgreSQL", "MySQL", "Redis", "Kafka", "Docker", "GraalVM", "Git"],
  },
  {
    category: "Craft",
    items: ["System Design", "CLI Tooling", "Performance Optimization"],
  },
];

export const projects = [
  {
    name: "Nested Money",
    label: "MVP · 1K MAU",
    description:
      "Built a fintech platform for SIP and portfolio management (1K MAU) with personalized mutual fund recommendations. Automated KYC and banking workflows and implemented resilient transaction systems to improve reliability and reduce manual effort.",
    tech: ["React Native", "Expo", "Java", "Spring Boot", "PostgreSQL", "Redis"],
    link: "https://play.google.com/store/apps/details?id=com.nexted.app",
    linkLabel: "Play Store"
  },
    {
    name: "AlphaSqr",
    label: "Mutual fund analysis platform",
    description:
      "Developed a mutual fund analytics platform with rich visualizations, enabling smarter investment decisions. Automated SEBI data validation, significantly improving accuracy and compliance.",
    tech: ["Go", "Next.js", "Tailwind ", "PostgreSQL"],
    link: "https://play.google.com/store/apps/details?id=com.nexted.app",
    linkLabel: "Web"
  },
];

export const interests = [
  { emoji: "📈", label: "Scalable SaaS", sub: "Products that last" },
  { emoji: "🛠️", label: "Dev Tooling", sub: "Making devs faster" },
  { emoji: "🤖", label: "Robotics", sub: "SLAM & autonomous systems" }
];

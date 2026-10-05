// Update social links and email here. Leave a value blank until you have the real URL/address.
export const siteConfig = {
  email: "antoundany4@gmail.com",
  github: "",
  linkedin: "https://www.linkedin.com/in/dany-antoun-6631b9253/",
};

export const skillGroups = [
  { title: "Frontend", icon: "◫", skills: ["HTML", "CSS", "JavaScript", "React", "Flutter"] },
  { title: "Backend", icon: "⌘", skills: ["Java", "Spring Boot", "REST APIs", "SOAP APIs", "Python"] },
  { title: "Databases", icon: "▤", skills: ["Oracle", "MySQL", "Firebase"] },
  { title: "Enterprise", icon: "⬡", skills: ["Oracle SOA", "Oracle OSB", "Oracle ADF", "Oracle Application Server"] },
  { title: "Tools", icon: "⌁", skills: ["Git", "GitHub", "Azure DevOps", "Docker"] },
];

export const experience = [
  {
    role: "Associate Engineer (SOA & ADF Developer)",
    organization: "eMcREY",
    period: "2025 — Present",
    type: "Current role",
    description: "Working with Oracle enterprise technologies and service integrations.",
    technologies: ["Oracle SOA", "Oracle OSB", "Oracle ADF", "Oracle Application Server", "SOAP", "REST"],
  },
  {
    role: "Software / Game Development Project",
    organization: "Upscale-Hub",
    period: "Project experience",
    type: "Development project",
    description: "Hands-on Unity development covering UI and menus, game functionality, testing, and bug fixing.",
    technologies: ["Unity", "C#", "Unity Version Control", "Azure DevOps"],
  },
  {
    role: "Intern",
    organization: "BML Istisharat",
    period: "2024",
    type: "Internship",
    description: "Exposure to Oracle database and Java web application technologies.",
    technologies: ["Oracle RDBMS", "PL/SQL", "SQL*Plus", "Java J2EE", "MVC", "JSP", "Unity"],
  },
];

// Project technologies below are editable placeholders pending confirmation from each project's source files.
export const projects = [
  {
    title: "Honey Online",
    category: "E-Commerce / Web Development",
    description: "An online honey store website designed to showcase honey products and provide customers with a simple and intuitive shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/honey.png",
    liveUrl: "https://danyantounn.github.io/honey-website/",
    githubUrl: "",
    featured: true,
    status: "Project",
    imageAlt: "Screenshot of the Honey Online online store",
  },
  {
    title: "Online Library Catalog",
    category: "Web Application",
    description: "An online library catalog that allows users to browse available books, filter the catalog by category, and contact the library through WhatsApp to reserve an available book.",
    technologies: [],
    image: "/images/library.png",
    liveUrl: "https://onlinelibrary-c33f9.web.app/",
    githubUrl: "",
    featured: true,
    status: "Project",
    imageAlt: "Screenshot of the Online Library Catalog book browsing page",
    features: ["Book catalog", "Category filtering", "Availability status", "WhatsApp reservation", "Admin panel", "Book management", "Excel import/export"],
  },
];

export const certifications = [
  { title: "Oracle SOA Suite 12c Certified Implementation Specialist", issuer: "Oracle", icon: "✳" },
  { title: "Oracle Java Certified Developer", issuer: "Oracle", icon: "⌘" },
];

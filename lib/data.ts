import type {
  Project,
  SkillCategory,
  Experience,
  Education,
  Certification,
  SiteConfig,
  NavLink,
} from "./types";

// ─── Site-wide config ────────────────────────────────────────────────────────
// ⚠️  UPDATE THESE before deploying:
//   - url: your actual Vercel URL after first deploy
//   - links.github: your real GitHub profile URL
//   - links.linkedin: your real LinkedIn profile URL
export const siteConfig: SiteConfig = {
  name: "Atri Patel",
  title: "Atri Patel — Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer with expertise in MERN stack and modern web technologies. Building scalable, user-centric applications from Valsad, Gujarat.",
  url: "https://aena-portfolio.vercel.app", // ← update after first Vercel deploy
  ogImage: "/og-image.png",
  links: {
    github: "hhttps://github.com/Atri1731",     // ← update with your real GitHub URL
    linkedin: "https://www.linkedin.com/in/atri-patel-36a5b8343/", // ← update with your real LinkedIn URL
    twitter: "",
    email: "atripatel11004@gmail.com",
    phone: "+91 82380 04260",
  },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const hero = {
  terminalText: "~ npx atri-patel ~",
  headline: "Atri Patel",
  subtitle: "Full-Stack Web Developer",
  tagline:
    "Building scalable, secure, and user-centric MERN applications — from pixel-perfect UIs to robust backend APIs.",
  availabilityText: "Open to full-time roles",
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

// ─── Projects ────────────────────────────────────────────────────────────────
// To add a new project, copy one of the objects below and fill in the fields.
// Set featured: true to show it on the home page (max 4 shown).
// Add liveUrl and repoUrl when you deploy/push to GitHub.
export const projects: Project[] = [
  {
    id: "oujat-mern",
    name: "Oujat MERN Stack Web Application",
    description:
      "A full-stack MERN web application with authentication, API integration, and database connectivity. Features responsive UI components and complete CRUD operations with secure backend functionality.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    featured: true,
    // liveUrl: "https://your-deployed-url.vercel.app",
    // repoUrl: "hhttps://github.com/Atri1731/oujat-mern",
  },
  {
    id: "gym-management",
    name: "Gym Management Website",
    description:
      "A dynamic and responsive website for a gym to showcase services, class schedules, trainer profiles, and membership plans. PHP handles form submissions for contact inquiries and member sign-ups.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    featured: true,
    // repoUrl: "hhttps://github.com/Atri1731/gym-management",
  },
  {
    id: "food-order",
    name: "Food Order Website",
    description:
      "A responsive web application for booking restaurant tables online. Features a user-friendly interface for browsing available time slots, submitting reservations, and receiving confirmation.",
    tech: ["HTML", "CSS", "PHP"],
    featured: true,
    // repoUrl: "hhttps://github.com/Atri1731/food-order",
  },
  {
    id: "crop-chatbot",
    name: "Crop Cultivation Chatbot",
    description:
      "An intelligent chatbot that helps farmers select optimal crops, fertilizers, and pest control methods based on soil types, weather conditions, and geographical location using NLP and ML.",
    tech: ["Python", "NLP", "Machine Learning", "Weather APIs"],
    featured: true,
    // repoUrl: "hhttps://github.com/Atri1731/crop-chatbot",
  },
];

export const featuredProjects = projects.slice(0, 4);

// ─── Skills ──────────────────────────────────────────────────────────────────
// To add a new skill, add an object to the correct category's skills array.
// icon: use the react-icons/si key (e.g. "SiReact") or "none" for a text fallback.
// color: the brand hex color shown on the icon.
export const skills: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS", icon: "SiCss", color: "#1572B6" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "React.js", icon: "SiReact", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
      { name: "Express.js", icon: "SiExpress", color: "#cccccc" },
      { name: "PHP", icon: "SiPhp", color: "#777BB4" },
      { name: "SQL / MySQL", icon: "SiMysql", color: "#4479A1" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
    ],
  },
  {
    label: "Languages",
    skills: [
      { name: "Python", icon: "SiPython", color: "#3776AB" },
      { name: "Java", icon: "FaJava", color: "#ED8B00" },
      { name: "C", icon: "none", color: "#A8B9CC" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: "SiGit", color: "#F05032" },
      // BUG FIX: was "SiVisualstudiocode" — the correct react-icons v5 key is "SiVscode"
      { name: "VS Code", icon: "SiVscode", color: "#007ACC" },
      { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
      { name: "XAMPP", icon: "SiXampp", color: "#FB7A24" },
    ],
  },
];

// ─── Work Experience ─────────────────────────────────────────────────────────
// To add a new job, add a new object at the TOP of this array (most recent first).
export const experience: Experience[] = [
  {
    company: "TechReale",
    role: "Web Development Intern",
    startDate: "Jan 2026",
    endDate: "Apr 2026",
    location: "Remote",
    description:
      "Developed a responsive full-stack MERN web application with authentication, API integration, and database connectivity. Built modern UI components using React.js and Tailwind CSS, and implemented backend APIs, CRUD operations, and secure data management using Node.js, Express.js, and MongoDB.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    // companyUrl: "https://techreale.com",
  },
  {
    company: "Inngenius Property Management Pvt. Ltd.",
    role: "Web Development Intern",
    startDate: "Jul 2025",
    endDate: "Jul 2025",
    location: "Valsad, GJ",
    description:
      "Designed and developed a full-featured property management website from scratch, handling both frontend and backend. Created responsive pages using HTML, CSS and JavaScript; built backend features including user forms, data storage, and admin functionality using PHP and MySQL.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

// ─── Education ───────────────────────────────────────────────────────────────
export const education: Education[] = [
  {
    institution: "GIDC Degree Engineering College",
    degree: "Bachelor of Computer Engineering",
    startDate: "Sep 2022",
    endDate: "May 2026",
    gpa: "CGPA: 8.49",
  },
  {
    institution: "Lok Vidhyalaya Untdi",
    degree: "Higher Secondary Certificate (HSC)",
    startDate: "May 2020",
    endDate: "Mar 2022",
    gpa: "72%",
  },
];

// ─── Certifications ──────────────────────────────────────────────────────────
// To add a new certificate, add a new object at the top of this array.
export const certifications: Certification[] = [
  {
    issuer: "NPTEL",
    title: "Programming in Java",
  },
  {
    issuer: "Code Unnati — SAP Advance",
    title: "ML, IoT, Deep Learning & ABAP on BTP",
  },
  {
    issuer: "Code Unnati — SAP",
    title: "Python Programming, Data Analysis & AI Conversational Chatbot",
  },
  {
    issuer: "Shronit L & Gargi RL",
    title: "SQL & Database Assessment",
  },
  {
    issuer: "CSR BOX",
    title: "Summer GTU Internship — Artificial Intelligence",
  },
];

// ─── About stats ─────────────────────────────────────────────────────────────
export const aboutStats = [
  { label: "Years Learning", value: "3+" },
  { label: "Internships", value: "2" },
  { label: "Projects Built", value: "4+" },
  { label: "Certifications", value: "5" },
];

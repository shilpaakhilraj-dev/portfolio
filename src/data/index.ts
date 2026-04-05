// ─── data/index.ts ────────────────────────────────────────────────────────────
import type { Project, ExperienceItem, SkillGroup } from "../types/types";

export const PROJECTS: Project[] = [
  {
    tag: "Angular · State Mgmt",
    title: "CRUD with Angular Signals",
    desc: "Modern Angular CRUD app leveraging the new Signals API for fine-grained reactivity. Features standalone components, promise-based async workflows, and a reusable UI component library.",
    stack: ["Angular 17+", "Signals", "TypeScript", "RxJS"],
    github: "https://github.com/shilpaakhilraj-dev",
    demo: "https://crud-signals.vercel.app",
    color: "#7c6fff",
  },
  {
    tag: "Angular · Forms",
    title: "Dynamic Form Builder",
    desc: "Configuration-driven form system built with Angular Reactive Forms and Signals. Supports nested fields, conditional visibility, custom validators, and real-time preview — all from a JSON schema.",
    stack: ["Angular", "Signals", "Reactive Forms", "Control Value Accessor"],
    github: "https://github.com/shilpaakhilraj-dev",
    demo: "https://signals-formbuilder.vercel.app",
    color: "#ff6b9d",
  },
  // {
  //   tag: "Data Viz · D3.js",
  //   title: "Analytics Dashboard",
  //   desc: "Interactive data visualization dashboard combining D3.js charts with Angular's OnPush change detection. Features real-time updates, responsive layouts, and advanced filtering with RxJS debouncing.",
  //   stack: ["D3.js", "Angular", "RxJS", "OnPush"],
  //   github: "https://github.com/shilpaakhilraj-dev",
  //   color: "#4dffd2",
  // },
  // {
  //   tag: "React · Hooks",
  //   title: "Component Library",
  //   desc: "Accessible, reusable React components built with Tailwind CSS. Includes virtual scrolling, drag-and-drop, compound components, and full TypeScript generics — documented with Storybook.",
  //   stack: ["React", "TypeScript", "Tailwind", "Storybook"],
  //   github: "https://github.com/shilpaakhilraj-dev",
  //   color: "#ffc46b",
  // },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    date: "Mar'2023 — Present",
    role: "Senior Angular Developer",
    company: "Catalyst IT",
    desc: "Developed enterprise Angular v18 apps using Nx monorepo and microfrontends, reducing deployment time by 35% and accelerating delivery by 40%. Built reusable dynamic forms and implemented Akita-based state isolation to improve scalability and performance. Increased test coverage to 90% with Jest and integrated secure REST APIs with enforced architectural boundaries.",
  },
  {
    date: "Jul'2023 — Oct'2024",
    role: "Senior Angular Developer",
    company: "Beinex Consulting Pvt Ltd",
    desc: "Built data-intensive dashboards using D3.js + Angular (v13-v16). Implemented real-time updates with RxJS and optimized rendering with OnPush change detection, improving performance by 30%. Developed a custom component library to standardize UI across projects and integrated Storybook for documentation.",
  },
  {
    date: "Mar'2022 — Jul'2022",
    role: "Angular Developer",
    company: "Alchemus (IGSRS)",
    desc: "Developed Angular v11 microfrontend applications using Custom Elements, improving scalability by 30%. Implemented WebSockets for real-time updates and unified multiple REST APIs into a single enterprise system. Optimized RxJS and rendering performance to reduce page load time by 40%, while delivering responsive, cross-device UI experiences.",
  },
  {
    date: "May'2021 — Oct'2021",
    role: "Angular Developer",
    company: "Yorosis Technologies",
    desc: "Developed Angular v9 applications with reusable UI components and Angular Material CDK (drag-and-drop). Improved performance via lazy loading, reduced bundle size, and optimized change detection.",
  },
  {
    date: "Aug'2019 — Oct'2020",
    role: "Angular Developer",
    company: "Forcesight.ai",
    desc: "Developed and maintained Angular v7 applications using component-based architecture and best practices, integrating third-party REST APIs with RxJS for efficient async handling. Built responsive UIs with Angular Material and Highcharts, while optimizing performance through lazy loading, reduced bundle size, and improved change detection.",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Frameworks",
    accent: "#7c6fff",
    chips: ["Angular v7–v19", "React", "RxJS", "Signals"],
  },
  {
    label: "Languages",
    accent: "#4dffd2",
    chips: ["TypeScript", "JavaScript (ES2024)", "HTML5", "CSS3"],
  },
  {
    label: "Visualizations",
    accent: "#4de4ff",
    chips: ["D3.js", "Chart.js", "Highcharts"],
  },
  {
    label: "Styling",
    accent: "#ff6b9d",
    chips: ["Tailwind CSS", "Bootstrap", "SCSS/SASS", "CSS Animations"],
  },
  {
    label: "Testing",
    accent: "#fd6bff",
    chips: ["Jest", "Angular TestBed"],
  },
  {
    label: "Tools",
    accent: "#ffc46b",
    chips: ["Git & GitHub","Jenkins", "CI/CD", "Webpack", "Vite"],
  },
  {
    label: "Methodologies & Practices",
    accent: "#ff846b",
    chips: ["Agile/Scrum", "Performance Optimization","WCAG standards", "Clean Code"],
  },
];

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const HERO_TITLES = [
  "Frontend Engineer",
  "Angular Specialist",
  "UI Craftsperson",
  "Microfrontend Architect (Nx)", 
  "Reactive Programming Enthusiast",
  "React Learner",
];

export const STATS = [
  { num: "5+", label: "Years experience" },
  { num: "7+", label: "Angular versions" },
  { num: "5+", label: "Projects shipped" },
  { num: "∞", label: "Curiosity" },
];

export const CONTACT_LINKS = [
  {
    icon: "✉",
    label: "Email",
    value: "shilpakrishnan19@gmail.com",
    href: "mailto:shilpakrishnan19@gmail.com",
    color: "#ff6b9d",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "shilpa-k-848056247",
    href: "https://www.linkedin.com/in/shilpa-k-848056247/",
    color: "#4da3ff",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "shilpaakhilraj-dev",
    href: "https://github.com/shilpaakhilraj-dev",
    color: "var(--text)",
  },
  {
    icon: "☎",
    label: "Phone",
    value: "+91 6382403094",
    href: "tel:+916382403094",
    color: "#4dffd2",
  },
];
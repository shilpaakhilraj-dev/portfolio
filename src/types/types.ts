// ─── types.ts ─────────────────────────────────────────────────────────────────

export interface Project {
  tag: string;
  title: string;
  desc: string;
  stack: string[];
  github: string;
  demo?: string;
  color: string;
}

export interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  desc: string;
}

export interface SkillGroup {
  label: string;
  accent: string;
  chips: string[];
}
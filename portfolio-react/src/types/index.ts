export interface Project {
  key: string;
  icon: string;
  title: string;
  category: string;
  description: string;
  shortDesc: string;
  bg: string;
  features: ProjectFeature[];
  tech: string[];
  tags: string[];
  year: string;
}

export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
}

export interface SkillCategory {
  category: string;
  title: string;
  iconPath: string;
  skills: Skill[];
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  location: string;
  points: string[];
  stack: string[];
}

export interface NavLink {
  href: string;
  label: string;
  num: string;
  section: string;
}

export interface Stat {
  target: number;
  suffix: string;
  label: string;
}

export interface ToastState {
  show: boolean;
  message: string;
}

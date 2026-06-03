export interface ProjectLinks {
  website?: string;
  playStore?: string;
  appStore?: string;
}

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
  role?: string;
  links?: ProjectLinks;
}

export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface FreelanceProject {
  key: string;
  icon: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  bg: string;
  url: string;
  client?: string;
  year: string;
}

export interface Testimonial {
  key: string;
  name: string;
  role: string;
  project: string;
  quote: string;
  initials: string;
  rating: number;
  accent: string;
}

export interface Skill {
  name: string;
  level?: 'Expert' | 'Advanced' | 'Intermediate';
  logo?: string;
  color?: string;
}

export interface SkillCategory {
  category: string;
  title: string;
  iconPath?: string;
  iconKey?: string;
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

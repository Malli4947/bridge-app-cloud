// src/types/index.ts

export type Skill = {
  name: string;
  logo: string;
  color: string;
};

export type SkillCategoryIconKey =
  | 'code'
  | 'globe'
  | 'database'
  | 'smartphone'
  | 'terminal'
  | 'cloud'
  | 'cpu'
  | 'settings';

export type SkillCategory = {
  category: string;
  title: string;
  iconKey: SkillCategoryIconKey;
  skills: Skill[];
};

export type ProjectFeature = {
  title: string;
  desc: string;
};

export type ProjectLinks = {
  website?: string;
  playStore?: string;
  appStore?: string;
};

export type Project = {
  key: string;
  icon: string;
  title: string;
  category: string;
  year: string;
  bg: string;
  shortDesc: string;
  description: string;
  features: ProjectFeature[];
  tags: string[];
  tech: string[];
  role: string;
  links: ProjectLinks;
};

export type Experience = {
  date: string;
  title: string;
  company: string;
  location: string;
  points: string[];
  stack: string[];
};

export type NavLink = {
  href: string;
  label: string;
  num: string;
  section: string;
};

export type Stat = {
  target: number;
  suffix: string;
  label: string;
};
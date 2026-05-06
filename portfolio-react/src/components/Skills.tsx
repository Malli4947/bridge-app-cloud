import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Globe, Database, Smartphone, Terminal, Cloud, Settings } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { skillCategories, devPractices, techMarquee } from '@/data/portfolio';
import type { Skill, SkillCategory } from '@/types';

const categoryIcons: Record<SkillCategory['iconKey'], React.ElementType> = {
  code: Code2,
  globe: Globe,
  database: Database,
  smartphone: Smartphone,
  terminal: Terminal,
  cloud: Cloud,
  cpu: Code2,
  settings: Settings,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad container-custom relative z-[2]">
      <SectionHeader num="03" title="Tech" accent="stack" />

      <p className="text-muted text-base lg:text-lg max-w-2xl mb-12 -mt-8">
        A comprehensive toolkit for building modern mobile applications, scalable backend services,
        and production-ready experiences.
      </p>

      {/* Main grid — 3 columns on desktop, mimics the screenshot layout */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {skillCategories.map((cat, i) => (
          <SkillCategoryCard key={cat.category} category={cat} delay={i * 0.08} />
        ))}
      </div>

      {/* Development Practices — full width row */}
      <DevPracticesCard />

      {/* Marquee */}
      <Marquee />
    </section>
  );
}

/* ========================================================================
   CATEGORY CARD
   ======================================================================== */
function SkillCategoryCard({ category, delay }: { category: SkillCategory; delay: number }) {
  const Icon = categoryIcons[category.iconKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-6 lg:p-8 bg-bg-card border border-white/10 rounded-3xl overflow-hidden transition-all duration-400 hover:border-accent-cyan/40 hover:shadow-[0_20px_50px_rgba(6,212,212,0.08)]"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {/* Header — icon + title with separator line, like screenshot */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_rgba(168,85,247,0.3)]">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-display text-lg lg:text-xl font-bold text-[#f4f4f8]">{category.title}</h3>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Skills grid — 4 columns of brand logos */}
      <div className="grid grid-cols-4 gap-3">
        {category.skills.map((skill, i) => (
          <SkillIconTile key={skill.name + i} skill={skill} delay={delay + i * 0.04} />
        ))}
      </div>
    </motion.div>
  );
}

/* ========================================================================
   SKILL ICON TILE — Brand logo + name
   ======================================================================== */
function SkillIconTile({ skill, delay }: { skill: Skill; delay: number }) {
  const [imgError, setImgError] = useState(false);

  // Use jsDelivr CDN for Simple Icons (real brand logos)
  const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${skill.logo}.svg`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="group/icon flex flex-col items-center gap-2 p-2 rounded-xl cursor-default"
    >
      {/* Logo — Simple Icons SVG colored via CSS mask */}
      <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-white/[0.03] group-hover/icon:bg-white/[0.06] transition-all duration-300 shadow-inner">
        {!imgError ? (
          <span
            aria-hidden
            className="block w-6 h-6 transition-transform duration-300 group-hover/icon:scale-110"
            style={{
              backgroundColor: skill.color,
              WebkitMask: `url(${iconUrl}) center/contain no-repeat`,
              mask: `url(${iconUrl}) center/contain no-repeat`,
            }}
          >
            {/* Hidden img to detect load failure */}
            <img
              src={iconUrl}
              alt=""
              className="opacity-0 w-px h-px"
              onError={() => setImgError(true)}
            />
          </span>
        ) : (
          // Fallback: first letter of skill name in brand color
          <span
            className="font-display font-bold text-base"
            style={{ color: skill.color }}
          >
            {skill.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Name */}
      <span className="text-[0.7rem] text-muted text-center leading-tight font-medium group-hover/icon:text-[#f4f4f8] transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

/* ========================================================================
   DEV PRACTICES — Wide full-width card at the bottom
   ======================================================================== */
function DevPracticesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-6 lg:p-8 bg-bg-card border border-white/10 rounded-3xl overflow-hidden transition-all duration-400 hover:border-accent-purple/40 hover:shadow-[0_20px_50px_rgba(168,85,247,0.08)]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="flex items-center gap-3 mb-8">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_rgba(168,85,247,0.3)]">
          <Settings className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-display text-lg lg:text-xl font-bold text-[#f4f4f8]">Development Practices</h3>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {devPractices.map((practice, i) => (
          <SkillIconTile
            key={practice.name + i}
            skill={practice}
            delay={0.4 + i * 0.04}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ========================================================================
   MARQUEE
   ======================================================================== */
function Marquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="overflow-hidden relative py-8 border-t border-b border-white/10 mt-12">
      <div className="absolute top-0 bottom-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-bg to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-bg to-transparent" />
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-display font-semibold text-muted hover:text-accent-cyan transition-colors"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            {item} ·
          </span>
        ))}
      </div>
    </div>
  );
}
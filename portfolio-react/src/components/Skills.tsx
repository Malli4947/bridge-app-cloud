import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Globe, Database, Smartphone, Terminal, Cloud, Settings } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { skillCategories, devPractices, techMarquee } from '@/data/portfolio';
import type { Skill, SkillCategory } from '@/types';

const categoryIcons: Record<string, React.ElementType> = {
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

      <p className="text-muted text-sm sm:text-base lg:text-lg max-w-2xl mb-8 -mt-6 sm:-mt-8">
        A full-stack toolkit for shipping production-grade mobile apps, web platforms, and REST APIs —
        from architecture to App Store deployment.
      </p>

      {/* Primary stack highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap gap-2 mb-8 sm:mb-10 p-4 sm:p-5 rounded-2xl bg-bg-card border border-white/10"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-dim self-center mr-2 flex-shrink-0">Primary Stack:</span>
        {['React Native', 'React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs'].map((tech) => (
          <span key={tech} className="px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-mono rounded-full">
            {tech}
          </span>
        ))}
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
        {skillCategories.map((cat, i) => (
          <SkillCategoryCard key={cat.category} category={cat} delay={i * 0.08} />
        ))}
      </div>

      <DevPracticesCard />
      <Marquee />
    </section>
  );
}

function SkillCategoryCard({ category, delay }: { category: SkillCategory; delay: number }) {
  const Icon = categoryIcons[category.iconKey ?? ''] ?? Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-5 sm:p-6 lg:p-8 bg-bg-card border border-white/10 rounded-3xl overflow-hidden transition-all duration-400 hover:border-accent-cyan/40 hover:shadow-[0_20px_50px_rgba(6,212,212,0.08)]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_rgba(168,85,247,0.3)]">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-display text-lg lg:text-xl font-bold text-[#f4f4f8]">{category.title}</h3>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid grid-cols-3 xs:grid-cols-4 gap-2 sm:gap-3">
        {category.skills.map((skill, i) => (
          <SkillIconTile key={skill.name + i} skill={skill} delay={delay + i * 0.04} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillIconTile({ skill, delay }: { skill: Skill; delay: number }) {
  const [imgError, setImgError] = useState(false);

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
            <img
              src={iconUrl}
              alt=""
              className="opacity-0 w-px h-px"
              onError={() => setImgError(true)}
            />
          </span>
        ) : (
          <span
            className="font-display font-bold text-base"
            style={{ color: skill.color }}
          >
            {skill.name.charAt(0)}
          </span>
        )}
      </div>

      <span className="text-[0.7rem] text-muted text-center leading-tight font-medium group-hover/icon:text-[#f4f4f8] transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

function DevPracticesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-5 sm:p-6 lg:p-8 bg-bg-card border border-white/10 rounded-3xl overflow-hidden transition-all duration-400 hover:border-accent-purple/40 hover:shadow-[0_20px_50px_rgba(168,85,247,0.08)]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="flex items-center gap-3 mb-8">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_rgba(168,85,247,0.3)]">
          <Settings className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-display text-lg lg:text-xl font-bold text-[#f4f4f8]">Development Practices</h3>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-4">
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
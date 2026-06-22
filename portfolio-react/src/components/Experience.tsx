import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { experiences } from '@/data/portfolio';
import type { Experience as ExpType } from '@/types';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad container-custom relative z-[2]"
    >
      <SectionHeader num="04" title="Work" accent="history" />

      <div className="relative pl-8 sm:pl-12">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-2 sm:left-3 top-0 bottom-0 w-0.5 origin-top"
          style={{
            background: 'linear-gradient(180deg, #06d4d4, #a855f7, transparent)',
          }}
        />

        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({ exp, delay }: { exp: ExpType; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative mb-12 last:mb-0"
    >
      <div className="absolute -left-8 sm:-left-12 top-2 w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] bg-bg border-2 border-accent-cyan rounded-full flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-gradient-1 rounded-full" style={{ animation: 'pulse-ring 2s infinite' }} />
      </div>

      <div className="font-mono text-sm text-accent-cyan mb-3 tracking-[0.05em]">{exp.date}</div>

      <div className="p-5 sm:p-8 bg-bg-card border border-white/10 rounded-2xl transition-all duration-400 hover:border-accent-cyan sm:hover:translate-x-2 hover:shadow-[-8px_8px_30px_rgba(6,212,212,0.1)]">
        <h3 className="font-display text-xl sm:text-2xl mb-2 font-semibold">{exp.title}</h3>
        <span className="block text-accent-amber font-medium mb-1">{exp.company}</span>
        <span className="block text-sm text-dim font-mono">{exp.location}</span>

        <ul className="list-none flex flex-col gap-3 my-5">
          {exp.points.map((point, j) => (
            <li
              key={j}
              className="relative pl-6 text-muted text-[0.95rem] leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-accent-cyan"
              dangerouslySetInnerHTML={{ __html: point }}
            />
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
          {exp.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-xs px-2.5 py-1 bg-accent-cyan/10 text-accent-cyan rounded"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

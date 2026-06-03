import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { freelanceProjects } from '@/data/portfolio';
import type { FreelanceProject } from '@/types';

export default function FreelanceProjects() {
  return (
    <section id="freelance" className="section-pad container-custom relative z-[2]">
      <SectionHeader num="06" title="Freelance" accent="projects" />

      <p className="text-muted text-base lg:text-lg max-w-2xl mb-12 -mt-8">
        Independent client work and self-initiated product builds —{' '}
        <strong className="text-[#f4f4f8]">my own design and my own code</strong>, owned end to end
        from the first wireframe to a production-ready deployment. Every site below is live.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
        {freelanceProjects.map((project, i) => (
          <FreelanceCard key={project.key} project={project} delay={(i % 3) * 0.1} />
        ))}
      </div>
    </section>
  );
}

function FreelanceCard({ project, delay }: { project: FreelanceProject; delay: number }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group block no-underline bg-bg-card border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent-cyan/30 hover:shadow-[0_30px_60px_rgba(6,212,212,0.1)] flex flex-col h-full"
    >
      <div
        className="relative h-28 flex items-center px-6 overflow-hidden"
        style={{ background: project.bg }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.18) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.25) 0%, transparent 60%)',
          }}
        />

        <span className="absolute top-3 right-3 z-[2] font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/70 bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
          {project.year}
        </span>

        <div className="relative z-[2] flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl flex-shrink-0 shadow-lg">
            {project.icon}
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-xl font-bold text-white leading-tight truncate">
              {project.title}
            </h3>
            <p className="text-white/85 text-[0.65rem] font-mono uppercase tracking-[0.1em] mt-1 truncate">
              {project.category}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-accent-amber text-sm font-semibold mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-accent-amber rounded-full" />
          {project.client ? `Client · ${project.client}` : 'Personal Build · Self-initiated'}
        </p>

        <p className="text-[#f4f4f8]/90 text-sm font-medium italic mb-3">“{project.tagline}”</p>

        <p className="text-muted text-[0.9rem] leading-[1.65] mb-5">{project.description}</p>

        <div className="mb-5 flex-1">
          <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-dim mb-2.5">
            Highlights
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-[0.85rem] leading-snug">
                <span className="w-1.5 h-1.5 bg-accent-amber rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                <span className="text-muted">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.7rem] px-2.5 py-1 bg-white/[0.04] text-muted rounded-full border border-white/10 group-hover:border-accent-cyan/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim">
            Live Website
          </span>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-accent-cyan group-hover:gap-2.5 transition-all">
            Visit Site
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

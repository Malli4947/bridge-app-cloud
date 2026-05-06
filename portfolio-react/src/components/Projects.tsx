import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { projects } from '@/data/portfolio';
import type { Project } from '@/types';

export default function Projects() {
  return (
    <section id="projects" className="section-pad container-custom relative z-[2]">
      <SectionHeader num="05" title="Featured" accent="work" />

      <p className="text-muted text-base lg:text-lg max-w-2xl mb-12 -mt-8">
        End-to-end engineered mobile and backend systems serving real users — optimized for
        scalability, reliability, and business impact.
      </p>

      {/* 2 columns on desktop, 1 on mobile, all cards stretch to equal height */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.key} project={project} delay={(i % 2) * 0.1} />
        ))}
      </div>
    </section>
  );
}

interface CardProps {
  project: Project;
  delay: number;
}

function ProjectCard({ project, delay }: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group bg-bg-card border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent-cyan/30 hover:shadow-[0_30px_60px_rgba(6,212,212,0.1)] flex flex-col h-full"
    >
      {/* Gradient banner header — gives each card a distinctive identity */}
      <div
        className="relative h-32 flex items-center px-7 lg:px-8 overflow-hidden"
        style={{ background: project.bg }}
      >
        {/* Decorative glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.18) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.25) 0%, transparent 60%)',
          }}
        />

        {/* Year + category badges — top-right */}
        {/* <div className="absolute top-4 right-4 flex gap-2 z-[2]">
          <span className="font-mono text-[0.7rem] px-2.5 py-1 bg-black/40 backdrop-blur-md text-white rounded-full border border-white/20">
            {project.year}
          </span>
        </div> */}

        {/* Emoji icon + title */}
        <div className="relative z-[2] flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-4xl flex-shrink-0 shadow-lg">
            {project.icon}
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-2xl lg:text-[1.65rem] font-bold text-white leading-tight truncate">
              {project.title}
            </h3>
            <p className="text-white/85 text-xs font-mono uppercase tracking-[0.1em] mt-1 truncate">
              {project.category}
            </p>
          </div>
        </div>
      </div>

      {/* Content area — flex-col so footer pins to bottom */}
      <div className="p-7 lg:p-8 flex flex-col flex-1">
        {/* Role */}
        <p className="text-accent-amber text-sm font-semibold mb-4 flex items-center gap-2">
          <span className="w-1 h-4 bg-accent-amber rounded-full" />
          {project.role}
        </p>

        {/* Description */}
        <p className="text-muted text-[0.95rem] leading-[1.7] mb-6">{project.description}</p>

        {/* Highlights */}
        <div className="mb-6 flex-1">
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim mb-3">
            Key Highlights
          </h4>
          <ul className="space-y-2.5">
            {project.features.map((feature, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="w-2 h-2 bg-accent-amber rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                <span className="text-muted">
                  <strong className="text-[#f4f4f8] font-semibold">{feature.title}:</strong>{' '}
                  {feature.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 bg-white/[0.04] text-muted rounded-full border border-white/10 hover:bg-accent-cyan/10 hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Brand-color circular link icons — pinned to bottom */}
        <div className="flex gap-3 pt-5 border-t border-white/5 mt-auto">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-dim self-center mr-1">
            Live:
          </span>
          {project.links.website && (
            <BrandIcon href={project.links.website} type="chrome" label="Website" />
          )}
          {project.links.playStore && (
            <BrandIcon href={project.links.playStore} type="playstore" label="Google Play Store" />
          )}
          {project.links.appStore && (
            <BrandIcon href={project.links.appStore} type="appstore" label="Apple App Store" />
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ============================================================
   BRAND ICON — White circle with real multi-color brand logo
   ============================================================ */
interface BrandIconProps {
  href: string;
  type: 'chrome' | 'playstore' | 'appstore';
  label: string;
}

function BrandIcon({ href, type, label }: BrandIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      whileHover={{ scale: 1.15, y: -4 }}
      whileTap={{ scale: 0.92 }}
      className="w-12 h-12 rounded-full bg-white border border-white/20 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)] transition-shadow"
    >
      {type === 'chrome' && <ChromeLogo />}
      {type === 'playstore' && <PlayStoreLogo />}
      {type === 'appstore' && <AppStoreLogo />}
    </motion.a>
  );
}

/* ============================================================
   REAL BRAND LOGOS — Inline SVG (no external dependencies)
   ============================================================ */

// Google Chrome logo
function ChromeLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 4C16.3 4 9.6 8.4 6.4 14.7L13.5 26.9C13.1 25.7 13 24.4 13 23C13 17 17.9 12 24 12L24 4Z"
      />
      <path
        fill="#FBBC05"
        d="M41.6 14.7C38.4 8.4 31.7 4 24 4L24 12C29.4 12 33.9 16 34.8 21H43.5C42.9 18.7 41.9 16.6 41.6 14.7Z"
      />
      <path
        fill="#34A853"
        d="M43.5 21H34.8C34.9 21.7 35 22.3 35 23C35 28.7 30.7 33.4 25.2 33.9L20.7 41.7C21.8 41.9 22.9 42 24 42C34 42 42 34 42 24C42 22.9 41.8 21.9 41.5 21Z"
      />
      <circle fill="#4285F4" cx="24" cy="23" r="8" />
      <circle fill="#FFFFFF" cx="24" cy="23" r="6" />
      <path
        fill="#EA4335"
        d="M13.5 26.9L6.4 14.7C4.9 17.5 4 20.7 4 24C4 33 10.9 40.5 19.7 41.8L25.2 33.9C19.6 33.4 15 30 13.5 26.9Z"
      />
    </svg>
  );
}

// Google Play Store logo
function PlayStoreLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="play-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C3FF" />
          <stop offset="100%" stopColor="#1A73E8" />
        </linearGradient>
        <linearGradient id="play-red" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFBD00" />
          <stop offset="100%" stopColor="#FF3D00" />
        </linearGradient>
        <linearGradient id="play-yellow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE000" />
          <stop offset="100%" stopColor="#FFBD00" />
        </linearGradient>
        <linearGradient id="play-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F076" />
          <stop offset="100%" stopColor="#00A050" />
        </linearGradient>
      </defs>
      <path
        fill="url(#play-blue)"
        d="M7.5 4.5C6.6 4.9 6 5.8 6 7v34c0 1.2 0.6 2.1 1.5 2.5l19.5-19.5L7.5 4.5z"
      />
      <path
        fill="url(#play-yellow)"
        d="M33.6 17.6L27 24l6.6 6.4 7.7-4.3c2.2-1.2 2.2-4.4 0-5.6l-7.7-2.9z"
      />
      <path
        fill="url(#play-green)"
        d="M27 24L7.5 4.5c0.3-0.1 0.7-0.2 1-0.2 0.5 0 1 0.1 1.5 0.4L33.6 17.6 27 24z"
      />
      <path
        fill="url(#play-red)"
        d="M27 24L10 43.3c-0.5 0.3-1 0.4-1.5 0.4-0.4 0-0.7-0.1-1-0.2L27 24l6.6 6.4L10 43.3z"
      />
    </svg>
  );
}

// Apple App Store logo
function AppStoreLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="apple-blue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1AC8FF" />
          <stop offset="100%" stopColor="#1A74E8" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="11" fill="url(#apple-blue)" />
      <g fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 33 L21 19" />
        <path d="M28 19 L35 33" />
        <circle cx="24.5" cy="16.6" r="1.4" fill="#FFFFFF" stroke="none" />
        <path d="M16.6 30 L31.4 30" />
      </g>
    </svg>
  );
}
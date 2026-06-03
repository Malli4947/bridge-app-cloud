import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, FileText, Download } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const itemFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const lineReveal = {
  hidden: { y: '110%', opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const handleScrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-16 grid lg:grid-cols-[1fr_360px] gap-12 items-center container-custom z-[2]"
      style={{ paddingLeft: 'clamp(1rem, 4vw, 3rem)', paddingRight: 'clamp(1rem, 4vw, 3rem)' }}
    >
      <motion.div
        className="absolute font-display font-extrabold text-white/[0.08] tracking-[-0.05em] leading-[0.85] -bottom-8 -right-12 -z-[1] pointer-events-none select-none"
        style={{ fontSize: 'clamp(8rem, 25vw, 18rem)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        ENGINEER
      </motion.div>
      <div>
        <motion.div
          variants={itemFade}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-sm font-mono text-accent-cyan mb-8"
        >
          <span
            className="relative w-2 h-2 bg-emerald-500 rounded-full"
            style={{ animation: 'pulse-ring 2s infinite' }}
          />
          Available for Full-Time &amp; Freelance
        </motion.div>
        <h1
          className="font-display font-bold tracking-[-0.04em] mb-8"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 1.05 }}
        >
          <span className="block overflow-hidden">
            <motion.span
              variants={lineReveal}
              custom={0.4}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              Engineering
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              variants={lineReveal}
              custom={0.55}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              <span className="italic-accent">production-ready</span>
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              variants={lineReveal}
              custom={0.7}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              apps that <span className="gradient-text">scale.</span>
            </motion.span>
          </span>
        </h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemFade}
          custom={0.85}
          initial="hidden"
          animate="visible"
          className="text-muted text-base lg:text-lg max-w-xl leading-relaxed mb-8"
        >
          Senior Software Engineer with{' '}
          <strong className="text-[#f4f4f8] font-semibold">3+ years</strong> turning ideas into{' '}
          <strong className="text-[#f4f4f8] font-semibold">production-ready websites, admin dashboards &amp; mobile apps</strong> —
          designed, built &amp; shipped end-to-end.{' '}
          <span className="gradient-text font-semibold">You bring the vision. I engineer it, ship it, and bring it to life.</span>
        </motion.p>

        {/* Meta strip */}
        <motion.div
          variants={itemFade}
          custom={0.95}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-x-8 gap-y-4 mb-10 py-6 border-t border-b border-white/10"
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-dim">Name</span>
            <span className="text-[0.95rem]">{personalInfo.name}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-dim">Role</span>
            <span className="text-[0.95rem]">{personalInfo.role}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-dim">
              Based in
            </span>
            <span className="text-[0.95rem]">Hyderabad, India · IST</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemFade}
          custom={1.1}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 mb-6"
        >
          <button onClick={() => handleScrollTo('#projects')} className="btn btn-primary group">
            <span className="relative z-10">View My Work</span>
            <ArrowRight
              size={18}
              className="relative z-10 transition-transform group-hover:translate-x-1"
            />
            <span className="absolute inset-0 bg-gradient-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </button>
          <button onClick={() => handleScrollTo('#contact')} className="btn btn-ghost">
            Get in Touch
          </button>
        </motion.div>

        {/* Resume Buttons */}
        <motion.div
          variants={itemFade}
          custom={1.2}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3 mb-10"
        >
          <a
            href="/My_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent-cyan/40 text-accent-cyan text-sm font-display font-semibold hover:bg-accent-cyan/10 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(6,212,212,0.2)] transition-all duration-300 no-underline"
          >
            <FileText size={15} />
            View Resume
          </a>
          <a
            href="/My_Resume.pdf"
            download="Mallikarjuna_Rao_Lattupalli_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent-purple/40 text-accent-purple text-sm font-display font-semibold hover:bg-accent-purple/10 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(168,85,247,0.2)] transition-all duration-300 no-underline"
          >
            <Download size={15} />
            Download PDF
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={itemFade}
          custom={1.3}
          initial="hidden"
          animate="visible"
          className="flex gap-3"
        >
          <SocialLink href={personalInfo.github} label="GitHub" hoverColor="cyan">
            <Github size={20} />
          </SocialLink>
          <SocialLink href={personalInfo.linkedin} label="LinkedIn" hoverColor="purple">
            <Linkedin size={20} />
          </SocialLink>
          <SocialLink href={`mailto:${personalInfo.email}`} label="Email" hoverColor="amber">
            <Mail size={20} />
          </SocialLink>
          
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex flex-col gap-8 items-center"
      >
        <RotatingBadge />
        <CodeSnippet />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] text-dim"
      >
        <div className="w-[22px] h-9 border-2 border-dim rounded-xl flex justify-center pt-1.5">
          <div className="w-[3px] h-2 bg-accent-cyan rounded animate-scroll-wheel" />
        </div>
        <span>SCROLL</span>
      </motion.div>
    </section>
  );
}

type HoverColor = 'cyan' | 'purple' | 'amber' | 'pink' | 'emerald';

function SocialLink({
  href,
  label,
  children,
  hoverColor = 'cyan',
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  hoverColor?: HoverColor;
}) {
  const colorMap: Record<HoverColor, string> = {
    cyan: 'hover:text-accent-cyan hover:border-accent-cyan hover:shadow-[0_10px_20px_rgba(6,212,212,0.2)]',
    purple:
      'hover:text-accent-purple hover:border-accent-purple hover:shadow-[0_10px_20px_rgba(168,85,247,0.2)]',
    amber:
      'hover:text-accent-amber hover:border-accent-amber hover:shadow-[0_10px_20px_rgba(251,191,36,0.2)]',
    pink: 'hover:text-accent-pink hover:border-accent-pink hover:shadow-[0_10px_20px_rgba(236,72,153,0.2)]',
    emerald:
      'hover:text-emerald-400 hover:border-emerald-400 hover:shadow-[0_10px_20px_rgba(16,185,129,0.2)]',
  };

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      title={label}
      className={`w-11 h-11 flex items-center justify-center border border-white/20 rounded-full text-muted transition-all hover:-translate-y-1 ${colorMap[hoverColor]}`}
      style={{ transitionProperty: 'color, border-color, transform, box-shadow' }}
    >
      {children}
    </a>
  );
}

function RotatingBadge() {
  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      {/* Full portrait photo — aspect ratio matches the image so nothing is cropped */}
      <div className="relative rounded-3xl p-[3px] bg-gradient-1 shadow-[0_20px_55px_rgba(6,212,212,0.3)]">
        <div className="relative rounded-[1.35rem] overflow-hidden bg-bg-card">
          <img
            src="/MyImage.jpeg"
            alt="Mallikarjuna Rao Lattupalli"
            className="w-full aspect-[991/1280] object-cover object-center"
          />

          {/* Availability badge */}
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bg/85 backdrop-blur-md border border-emerald-500/40 text-[0.65rem] font-mono text-emerald-300 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available
          </span>
        </div>
      </div>
    </div>
  );
}

function CodeSnippet() {
  return (
    <div className="w-full bg-bg-card border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:-rotate-1 transition-transform duration-300">
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-surface border-b border-white/10">
        <span className="w-3 h-3 bg-[#ff5f57] rounded-full" />
        <span className="w-3 h-3 bg-[#febc2e] rounded-full" />
        <span className="w-3 h-3 bg-[#28c840] rounded-full" />
        <span className="ml-auto font-mono text-xs text-dim">engineer.ts</span>
      </div>
      <pre className="p-4 font-mono text-[0.8rem] leading-[1.7] overflow-x-auto">
        <code>
          <span className="text-accent-purple">const</span>{' '}
          <span className="text-accent-cyan">engineer</span> = {'{'}
          {'\n  '}
          <span className="text-accent-amber">name</span>:{' '}
          <span className="text-emerald-300">'Mallikarjuna'</span>,{'\n  '}
          <span className="text-accent-amber">role</span>:{' '}
          <span className="text-emerald-300">'Senior SWE'</span>,{'\n  '}
          <span className="text-accent-amber">stack</span>: [
          <span className="text-emerald-300">'React'</span>,{' '}
          <span className="text-emerald-300">'RN'</span>,{' '}
          <span className="text-emerald-300">'Node'</span>],{'\n  '}
          <span className="text-accent-amber">apps</span>:{' '}
          <span className="text-accent-pink">9</span>+,{'\n  '}
          <span className="text-accent-amber">years</span>:{' '}
          <span className="text-accent-pink">3</span>+,{'\n  '}
          <span className="text-accent-amber">coffee</span>:{' '}
          <span className="text-accent-purple">Infinity</span>
          {'\n}'};
        </code>
      </pre>
    </div>
  );
}
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowRight, MessageCircle } from 'lucide-react';
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
      {/* Background giant text */}
      <motion.div
        className="absolute font-display font-extrabold text-white/[0.08] tracking-[-0.05em] leading-[0.85] -bottom-8 -right-12 -z-[1] pointer-events-none select-none"
        style={{ fontSize: 'clamp(8rem, 25vw, 18rem)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        ENGINEER
      </motion.div>

      {/* Left column */}
      <div>
        {/* Status pill */}
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
          Senior Software Engineer · Open to Opportunities
        </motion.div>

        {/* Big headline */}
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
          <strong className="text-[#f4f4f8] font-semibold">3+ years</strong> shipping React Native &amp;
          full-stack apps. <strong className="text-[#f4f4f8] font-semibold">9+ production apps</strong>{' '}
          live on Google Play and Apple App Store.
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
          className="flex flex-wrap gap-4 mb-10"
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

      {/* Right column */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex flex-col gap-8 items-center"
      >
        <RotatingBadge />
        <CodeSnippet />
      </motion.div>

      {/* Scroll indicator */}
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

/* =============================================================
   SocialLink — now supports themed hover colors per network
   ============================================================= */
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

/* =============================================================
   ROTATING BADGE
   ============================================================= */
function RotatingBadge() {
  return (
    <div className="relative w-[200px] h-[200px] flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-full h-full text-accent-cyan animate-spin-slow">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fontFamily="Bricolage Grotesque" fontSize="14" fill="currentColor" letterSpacing="3">
          <textPath href="#circlePath">
            SENIOR ENGINEER · REACT NATIVE · FULL STACK · REACT NATIVE ·{' '}
          </textPath>
        </text>
      </svg>
      <div className="absolute w-[70px] h-[70px] bg-gradient-1 rounded-full flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(6,212,212,0.5)] animate-float">
        ⚡
      </div>
    </div>
  );
}

/* =============================================================
   CODE SNIPPET — Updated with current numbers
   ============================================================= */
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
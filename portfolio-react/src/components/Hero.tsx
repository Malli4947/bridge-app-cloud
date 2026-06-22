import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, FileText, Download, MessageCircle } from 'lucide-react';
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
      className="relative min-h-screen pt-28 sm:pt-32 pb-16 grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-center container-custom z-[2]"
      style={{ paddingLeft: 'clamp(1rem, 4vw, 3rem)', paddingRight: 'clamp(1rem, 4vw, 3rem)' }}
    >
      {/* Watermark */}
      <motion.div
        className="absolute font-display font-extrabold text-white/[0.04] tracking-[-0.05em] leading-[0.85] -bottom-8 -right-12 -z-[1] pointer-events-none select-none hidden md:block"
        style={{ fontSize: 'clamp(6rem, 20vw, 18rem)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        ENGINEER
      </motion.div>

      <div>
        {/* Mobile profile image */}
        <motion.div
          className="lg:hidden flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-36 sm:w-44 rounded-2xl p-[3px] bg-gradient-1 shadow-[0_12px_40px_rgba(6,212,212,0.25)]">
            <div className="relative rounded-[calc(1rem-3px)] overflow-hidden bg-bg-card">
              <img
                src="/MyImage.jpeg"
                alt="Mallikarjuna Rao Lattupalli — Senior React Native & Full-Stack Engineer"
                className="w-full aspect-[991/1280] object-cover object-center"
              />
              <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-bg/85 backdrop-blur-md border border-emerald-500/40 text-[0.6rem] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
            </div>
          </div>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          variants={itemFade}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs sm:text-sm font-mono text-emerald-300 mb-3"
        >
          <span className="relative w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" style={{ animation: 'pulse-ring 2s infinite' }} />
          Open to Full-Time &amp; Freelance Roles
        </motion.div>

        {/* Role chips */}
        <motion.div
          variants={itemFade}
          custom={0.3}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 mb-6"
        >
          {['React Native', 'React.js', 'Node.js', 'MERN Stack', 'Full-Stack'].map((chip) => (
            <span
              key={chip}
              className="px-2.5 py-1 text-[0.7rem] font-mono bg-accent-cyan/8 border border-accent-cyan/25 text-accent-cyan rounded-md"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Main headline */}
        <h1
          className="font-display font-bold tracking-[-0.04em] mb-6 sm:mb-8"
          style={{ fontSize: 'clamp(2.2rem, 7vw, 6rem)', lineHeight: 1.05 }}
        >
          <span className="block overflow-hidden">
            <motion.span variants={lineReveal} custom={0.4} initial="hidden" animate="visible" className="inline-block">
              Engineering apps
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={lineReveal} custom={0.55} initial="hidden" animate="visible" className="inline-block">
              from <span className="italic-accent">API to</span>
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={lineReveal} custom={0.7} initial="hidden" animate="visible" className="inline-block">
              <span className="gradient-text">App Store.</span>
            </motion.span>
          </span>
        </h1>

        {/* Subtitle — keyword-rich, specific, scannable */}
        <motion.p
          variants={itemFade}
          custom={0.85}
          initial="hidden"
          animate="visible"
          className="text-muted text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed mb-6 sm:mb-8"
        >
          Senior Software Engineer with <strong className="text-[#f4f4f8] font-semibold">3+ years</strong> specialising in{' '}
          <strong className="text-accent-cyan font-semibold">React Native</strong> &amp;{' '}
          <strong className="text-accent-cyan font-semibold">MERN Stack</strong> —{' '}
          <strong className="text-[#f4f4f8] font-semibold">9 production apps</strong> live on the{' '}
          <em className="font-serif text-accent-amber not-italic">App Store &amp; Google Play</em>.
          {' '}I architect, build, and ship complete products end-to-end:{' '}
          <span className="text-[#f4f4f8] font-medium">React.js, Node.js, MongoDB, Firebase</span>, and REST APIs — from the first commit to live deployment.
        </motion.p>

        {/* Proof strip */}
        <motion.div
          variants={itemFade}
          custom={0.95}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-3 mb-8 sm:mb-10 py-4 sm:py-5 border-t border-b border-white/10"
        >
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-dim">Role</span>
            <span className="text-[0.88rem] text-[#f4f4f8] font-medium">Senior Software Engineer</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-dim">Speciality</span>
            <span className="text-[0.88rem] text-accent-cyan font-medium">React Native · Full-Stack</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-dim">Apps Live</span>
            <span className="text-[0.88rem] text-accent-amber font-medium">9+ · App Store &amp; Play Store</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-dim">Based in</span>
            <span className="text-[0.88rem]">Hyderabad, India · Remote Ready</span>
          </div>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          variants={itemFade}
          custom={1.1}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3 sm:gap-4 mb-5 sm:mb-6"
        >
          <button onClick={() => handleScrollTo('#projects')} className="btn btn-primary group">
            <span className="relative z-10">View My Work</span>
            <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </button>
          <button onClick={() => handleScrollTo('#contact')} className="btn btn-ghost">
            Get in Touch
          </button>
        </motion.div>

        {/* Resume actions */}
        <motion.div
          variants={itemFade}
          custom={1.2}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10"
        >
          <a
            href="/My_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-accent-cyan/40 text-accent-cyan text-sm font-display font-semibold hover:bg-accent-cyan/10 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(6,212,212,0.2)] transition-all duration-300 no-underline"
          >
            <FileText size={14} />
            View Resume
          </a>
          <a
            href="/My_Resume.pdf"
            download="Mallikarjuna_Rao_Lattupalli_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-accent-purple/40 text-accent-purple text-sm font-display font-semibold hover:bg-accent-purple/10 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(168,85,247,0.2)] transition-all duration-300 no-underline"
          >
            <Download size={14} />
            Download PDF
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemFade}
          custom={1.3}
          initial="hidden"
          animate="visible"
          className="flex gap-3"
        >
          <SocialLink href={personalInfo.github} label="GitHub" hoverColor="cyan">
            <Github size={18} />
          </SocialLink>
          <SocialLink href={personalInfo.linkedin} label="LinkedIn" hoverColor="purple">
            <Linkedin size={18} />
          </SocialLink>
          <SocialLink href={`mailto:${personalInfo.email}`} label="Email" hoverColor="amber">
            <Mail size={18} />
          </SocialLink>
          <SocialLink href={personalInfo.whatsapp} label="WhatsApp" hoverColor="emerald">
            <MessageCircle size={18} />
          </SocialLink>
        </motion.div>
      </div>

      {/* Desktop right column */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex flex-col gap-6 items-center"
      >
        <RotatingBadge />
        <CodeSnippet />
        <StoreProofBadge />
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
    purple: 'hover:text-accent-purple hover:border-accent-purple hover:shadow-[0_10px_20px_rgba(168,85,247,0.2)]',
    amber: 'hover:text-accent-amber hover:border-accent-amber hover:shadow-[0_10px_20px_rgba(251,191,36,0.2)]',
    pink: 'hover:text-accent-pink hover:border-accent-pink hover:shadow-[0_10px_20px_rgba(236,72,153,0.2)]',
    emerald: 'hover:text-emerald-400 hover:border-emerald-400 hover:shadow-[0_10px_20px_rgba(16,185,129,0.2)]',
  };

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      title={label}
      className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-white/20 rounded-full text-muted transition-all hover:-translate-y-1 ${colorMap[hoverColor]}`}
    >
      {children}
    </a>
  );
}

function RotatingBadge() {
  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      <div className="relative rounded-3xl p-[3px] bg-gradient-1 shadow-[0_20px_55px_rgba(6,212,212,0.3)]">
        <div className="relative rounded-[1.35rem] overflow-hidden bg-bg-card">
          <img
            src="/MyImage.jpeg"
            alt="Mallikarjuna Rao Lattupalli — Senior React Native & Full-Stack Engineer"
            className="w-full aspect-[991/1280] object-cover object-center"
          />
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bg/85 backdrop-blur-md border border-emerald-500/40 text-[0.65rem] font-mono text-emerald-300 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to Work
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
      <pre className="p-4 font-mono text-[0.78rem] leading-[1.7] overflow-x-auto">
        <code>
          <span className="text-accent-purple">const</span>{' '}
          <span className="text-accent-cyan">engineer</span> = {'{'}
          {'\n  '}
          <span className="text-accent-amber">stack</span>: [
          <span className="text-emerald-300">'React Native'</span>,{' '}
          <span className="text-emerald-300">'Node.js'</span>,{' '}
          <span className="text-emerald-300">'MongoDB'</span>],{'\n  '}
          <span className="text-accent-amber">experience</span>:{' '}
          <span className="text-emerald-300">'3+ years'</span>,{'\n  '}
          <span className="text-accent-amber">appsLive</span>:{' '}
          <span className="text-accent-pink">9</span>+,{'\n  '}
          <span className="text-accent-amber">platforms</span>: [
          <span className="text-emerald-300">'iOS'</span>,{' '}
          <span className="text-emerald-300">'Android'</span>],{'\n  '}
          <span className="text-accent-amber">ships</span>:{' '}
          <span className="text-accent-purple">true</span>,{'\n  '}
          <span className="text-accent-amber">coffee</span>:{' '}
          <span className="text-accent-purple">Infinity</span>
          {'\n}'};
        </code>
      </pre>
    </div>
  );
}

function StoreProofBadge() {
  return (
    <div className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10">
      <div className="flex items-center gap-2">
        <span className="text-lg">🍎</span>
        <div>
          <p className="font-mono text-[0.6rem] text-dim uppercase tracking-wider">App Store</p>
          <p className="text-xs text-[#f4f4f8] font-semibold">Live &amp; Published</p>
        </div>
      </div>
      <div className="w-px h-8 bg-white/15" />
      <div className="flex items-center gap-2">
        <span className="text-lg">🤖</span>
        <div>
          <p className="font-mono text-[0.6rem] text-dim uppercase tracking-wider">Google Play</p>
          <p className="text-xs text-[#f4f4f8] font-semibold">Live &amp; Published</p>
        </div>
      </div>
    </div>
  );
}

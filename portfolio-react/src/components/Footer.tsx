import { motion } from 'framer-motion';
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
} from 'lucide-react';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    link: 'https://github.com/Malli4947',
    hoverColor: 'hover:bg-accent-cyan hover:text-bg hover:border-accent-cyan',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/mallikarjuna-rao-lattupalli',
    hoverColor: 'hover:bg-accent-purple hover:text-bg hover:border-accent-purple',
  },
  {
    icon: Mail,
    label: 'Email',
    link: 'mailto:mrao.developer@gmail.com',
    hoverColor: 'hover:bg-accent-amber hover:text-bg hover:border-accent-amber',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative pt-24 pb-8 border-t border-white/10 mt-16 overflow-hidden"
      style={{ paddingLeft: 'clamp(1rem, 4vw, 3rem)', paddingRight: 'clamp(1rem, 4vw, 3rem)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-1" />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(6,212,212,0.15), transparent 70%)',
        }}
      />
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-14 h-14 rounded-full bg-gradient-1
                   flex items-center justify-center cursor-none
                   shadow-[0_10px_40px_rgba(6,212,212,0.5)] z-[3]
                   hover:shadow-[0_15px_50px_rgba(6,212,212,0.7)] transition-shadow"
      >
        <ArrowUp className="w-6 h-6 text-bg" />
      </motion.button>

      <div className="container-custom relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-accent-cyan/10 via-bg-card to-accent-purple/10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-[2] text-center md:text-left">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2 leading-tight">
              Got a project in mind?
              <br />
              <span className="gradient-text">Let's build something great.</span>
            </h3>
            <p className="text-muted text-sm lg:text-base">
              Open to full-time roles, freelance projects, and interesting collaborations.
            </p>
          </div>

          <motion.button
            onClick={() => handleScrollTo('#contact')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-[2] inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-1 text-bg font-display font-semibold rounded-full cursor-none shadow-[0_10px_30px_rgba(6,212,212,0.3)] hover:shadow-[0_15px_40px_rgba(6,212,212,0.5)] transition-shadow flex-shrink-0"
          >
            <Send className="w-4 h-4" />
            Get in Touch
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center md:text-left mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-display text-2xl font-bold mb-3 flex items-center gap-2 justify-center md:justify-start">
              <span className="inline-block animate-spin">⚡</span>
              <span>
                Mallikarjuna Rao
                <span className="gradient-text">.dev</span>
              </span>
            </div>
            <p className="text-muted text-[0.95rem] leading-relaxed mb-4">
              Senior Software Engineer building scalable, production-ready web and mobile
              applications. 9+ apps shipped on Play Store &amp; App Store.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-mono text-emerald-400">
              <span
                className="relative w-2 h-2 bg-emerald-500 rounded-full"
                style={{ animation: 'pulse-ring 2s infinite' }}
              />
              Available for new opportunities
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:pl-4"
          >
            <h4 className="font-display font-semibold mb-5 text-[#f4f4f8] flex items-center gap-2 justify-center md:justify-start">
              <span className="w-1 h-4 bg-gradient-1 rounded-full" />
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-muted max-w-[260px] mx-auto md:mx-0">
              {quickLinks.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => handleScrollTo(link.href)}
                  className="group flex items-center gap-2 hover:text-accent-cyan transition-colors w-fit cursor-none mx-auto md:mx-0"
                >
                  <span className="font-mono text-[0.7rem] text-dim group-hover:text-accent-cyan transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold mb-5 text-[#f4f4f8] flex items-center gap-2 justify-center md:justify-start">
              <span className="w-1 h-4 bg-gradient-1 rounded-full" />
              Connect
            </h4>

            <div className="flex justify-center md:justify-start gap-3 flex-wrap mb-5">
              {socials.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={item.label}
                  title={item.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10
                              flex items-center justify-center text-muted
                              transition-all duration-300 cursor-none ${item.hoverColor}`}
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="space-y-2.5 text-sm text-muted">
              <a
                href="mailto:mrao.developer@gmail.com"
                className="group flex items-center gap-2.5 justify-center md:justify-start hover:text-accent-cyan transition-colors cursor-none"
              >
                <span className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-accent-cyan group-hover:bg-accent-cyan/10 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                mrao.developer@gmail.com
              </a>
              <a
                className="group flex items-center gap-2.5 justify-center md:justify-start hover:text-accent-cyan transition-colors cursor-none"
              >
                <span className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-accent-cyan group-hover:bg-accent-cyan/10 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                +91 63044 34947
              </a>
              <div className="flex items-center gap-2.5 justify-center md:justify-start text-dim">
                <span className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                Hyderabad, Telangana, India
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted"
        >
          <p>© {year} Mallikarjuna Rao Lattupalli. All rights reserved.</p>
          <p className="font-mono text-xs text-dim">
            Crafted with <span className="text-accent-cyan">React</span> ·{' '}
            <span className="text-accent-amber">TypeScript</span> ·{' '}
            <span className="text-accent-purple">Tailwind</span>
          </p>
        </motion.div>
      </div>

      <div
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 font-display font-extrabold text-white/[0.08] tracking-[-0.05em] whitespace-nowrap pointer-events-none z-[1]"
        style={{ fontSize: 'clamp(5rem, 18vw, 12rem)' }}
      >
        MALLIKARJUNA
      </div>
    </footer>
  );
}
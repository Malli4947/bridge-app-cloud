import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/portfolio';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function Navigation() {
  const { progress, scrolled, activeSection } = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const newState = !menuOpen;
    setMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-1 z-[9998] shadow-[0_0_10px_#06d4d4]"
        style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${
          scrolled ? 'py-3 bg-bg/85' : 'py-5 bg-bg/60'
        }`}
        style={{ paddingLeft: 'clamp(1rem, 4vw, 3rem)', paddingRight: 'clamp(1rem, 4vw, 3rem)' }}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo('#home');
          }}
          className="flex items-center gap-2.5 font-display font-bold text-xl no-underline tracking-tight text-[#f4f4f8]"
        >
          <img
            src="/MyImage.jpeg"
            alt="Mallikarjuna Rao Lattupalli"
            className="w-9 h-9 rounded-full object-cover object-top border-2 border-accent-cyan/40 flex-shrink-0"
          />
          <span>
            Mallikarjuna Rao<span className="gradient-text">.dev</span>
          </span>
        </a>

        <ul className="hidden lg:flex list-none gap-2">
          {navLinks.map((link) => (
            <li key={link.section}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(link.href);
                }}
                className={`flex items-center gap-2 px-4 py-2 no-underline text-sm rounded-md transition-all relative ${
                  activeSection === link.section
                    ? 'text-[#f4f4f8] bg-white/5'
                    : 'text-muted hover:text-[#f4f4f8] hover:bg-white/5'
                }`}
              >
                <span className="font-mono text-[0.7rem] text-accent-cyan/70">{link.num}</span>
                {link.label}
                {activeSection === link.section && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-gradient-1 rounded"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleScrollTo('#contact')}
          className="hidden lg:flex items-center gap-2 font-display bg-[#f4f4f8] text-bg border-none px-5 py-2.5 rounded-full font-semibold cursor-none transition-all text-sm hover:bg-accent-cyan hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(6,212,212,0.3)]"
        >
          Let's Talk <ArrowRight size={14} />
        </button>

        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} className="text-[#f4f4f8]" /> : <Menu size={24} className="text-[#f4f4f8]" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-bg/[0.98] backdrop-blur-xl z-[99] flex items-center justify-center lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="list-none text-center">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.section}
                  className="my-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(link.href);
                    }}
                    className="font-display text-3xl text-[#f4f4f8] no-underline flex items-center gap-4 justify-center"
                  >
                    <span className="font-mono text-base text-accent-cyan">{link.num}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

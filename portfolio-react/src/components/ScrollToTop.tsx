import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [scrolled, setScrolled] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show once the user has scrolled well down the page
      setScrolled(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide while the chat window is open so they don't overlap
  useEffect(() => {
    const handleChatToggle = (e: Event) => {
      setChatOpen((e as CustomEvent<{ open: boolean }>).detail.open);
    };
    window.addEventListener('chatbot:toggle', handleChatToggle);
    return () => window.removeEventListener('chatbot:toggle', handleChatToggle);
  }, []);

  const visible = scrolled && !chatOpen;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
          title="Back to top"
          className="fixed bottom-24 right-6 z-[999] w-12 h-12 rounded-full bg-bg-card/90 backdrop-blur-md border border-accent-cyan/40 text-accent-cyan flex items-center justify-center shadow-[0_8px_30px_rgba(6,212,212,0.25)] hover:bg-accent-cyan hover:text-bg hover:border-accent-cyan transition-colors cursor-none"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

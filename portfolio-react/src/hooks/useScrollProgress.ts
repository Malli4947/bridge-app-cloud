import { useEffect, useState } from 'react';

export function useScrollProgress(): { progress: number; scrolled: boolean; activeSection: string } {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrollY / total) * 100 : 0);
      setScrolled(scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((sec) => {
        const top = (sec as HTMLElement).offsetTop - 200;
        if (scrollY >= top) current = sec.id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { progress, scrolled, activeSection };
}

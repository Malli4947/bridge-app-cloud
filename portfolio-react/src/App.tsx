import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import Cursor from '@/components/Cursor';
import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import FreelanceProjects from '@/components/FreelanceProjects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import ChatBot from '@/components/ChatBot';
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
  const [toast, setToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: '',
  });

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 4000);
  };

  // Easter egg: type "mallik"
  useEffect(() => {
    let buffer = '';
    const code = 'Mallikarjuna Rao';
    const handleKeydown = (e: KeyboardEvent) => {
      buffer += e.key.toLowerCase();
      if (buffer.length > code.length) buffer = buffer.slice(-code.length);
      if (buffer === code) {
        document.body.style.transition = 'filter 0.6s';
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
          document.body.style.filter = '';
        }, 2000);
        showToast('✨ You found the easter egg!');
        buffer = '';
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  // Console greeting
  useEffect(() => {
    console.log(
      '%c⚡ Hi there!',
      'font-size: 24px; font-weight: bold; background: linear-gradient(90deg, #06d4d4, #a855f7); -webkit-background-clip: text; color: transparent;',
    );
    console.log(
      '%cInterested in working together? Drop me a line at mrao.developer@gmail.com',
      'font-size: 14px; color: #06d4d4;',
    );
    console.log(
      '%cTip: type "Mallikarjuna Rao" anywhere to find a little surprise.',
      'font-size: 12px; color: #a855f7;',
    );
  }, []);

  return (
    <>
      <Loader />
      <Cursor />
      <ParticleBackground />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <FreelanceProjects />
        <Testimonials />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />
      <Toast show={toast.show} message={toast.message} />
      <ChatBot />
      <ScrollToTop />
    </>
  );
}

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = '';
    }, 1800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const letters = ['M', 'A', 'L', 'L', 'I', 'K', 'A', 'R', 'J', 'U', 'N', 'A', ' ', 'R', 'A', 'O', ' ', 'P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O'];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-bg z-[10000] flex items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="text-center">
            <div className="font-display font-bold tracking-[0.1em] mb-6 flex gap-1 justify-center text-[clamp(2rem,6vw,4rem)]">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block bg-gradient-1 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="w-[200px] h-0.5 bg-white/10 mx-auto overflow-hidden rounded">
              <motion.div
                className="h-full bg-gradient-1"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

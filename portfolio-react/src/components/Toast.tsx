import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface Props {
  show: boolean;
  message: string;
}

export default function Toast({ show, message }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 flex items-center gap-3 px-6 py-4 bg-bg-card border border-accent-cyan rounded-xl text-[#f4f4f8] text-[0.95rem] font-medium shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-[999] max-w-[calc(100vw-2rem)]"
        >
          <Check size={20} className="text-emerald-500 flex-shrink-0" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

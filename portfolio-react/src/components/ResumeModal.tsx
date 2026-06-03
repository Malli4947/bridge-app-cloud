import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
          style={{ background: 'rgba(10,10,15,0.92)', backdropFilter: 'blur(12px)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[90vh] flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            style={{ background: '#161620' }}
          >
            {/* ── Toolbar ── */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-bg-surface flex-shrink-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent-cyan/70 tracking-widest uppercase">Resume</span>
                <span className="text-dim text-xs">·</span>
                <span className="text-muted text-sm font-display">Mallikarjuna Rao Lattupalli</span>
              </div>
              <div className="flex items-center gap-2">
                {/* Open in new tab */}
                <a
                  href="/My_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open PDF in new tab"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-muted text-xs font-mono hover:border-accent-cyan hover:text-accent-cyan transition-all"
                >
                  <ExternalLink size={13} />
                  Open PDF
                </a>
                {/* Download */}
                <a
                  href="/My_Resume.pdf"
                  download="Mallikarjuna_Rao_Lattupalli_Resume.pdf"
                  title="Download PDF Resume"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono hover:bg-accent-cyan hover:text-bg transition-all"
                >
                  <Download size={13} />
                  Download PDF
                </a>
                {/* Close */}
                <button
                  onClick={onClose}
                  aria-label="Close resume"
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-muted hover:border-red-400/50 hover:text-red-400 transition-all ml-1"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* ── Resume content ── */}
            <div className="flex-1 overflow-y-auto bg-white">
              <iframe
                src="/resume.html"
                title="Mallikarjuna Rao Lattupalli — Resume"
                className="w-full border-none"
                style={{ height: '1100px', minHeight: '1100px', display: 'block' }}
                sandbox="allow-same-origin"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

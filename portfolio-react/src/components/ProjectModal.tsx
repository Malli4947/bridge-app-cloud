import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X, Globe, Apple, PlayCircle } from 'lucide-react';
import type { Project } from '@/types';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div className="absolute inset-0 bg-bg/85 backdrop-blur-md" onClick={onClose} />

          <motion.div
            className="relative w-full max-w-[760px] max-h-[88vh] bg-bg-card border border-white/20 rounded-[20px] overflow-hidden flex flex-col"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 border border-white/20 rounded-full text-[#f4f4f8] cursor-none flex items-center justify-center z-10 transition-all hover:bg-accent-cyan hover:text-bg hover:rotate-90"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto">
              <div
                className="h-[200px] flex items-center justify-center relative overflow-hidden"
                style={{ background: project.bg }}
              >
                <span
                  className="text-7xl z-[2]"
                  style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
                >
                  {project.icon}
                </span>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="inline-block font-mono text-xs text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded tracking-[0.1em] uppercase">
                    {project.category}
                  </span>
                  <span className="inline-block font-mono text-xs text-accent-amber bg-accent-amber/10 px-3 py-1 rounded">
                    {project.year}
                  </span>
                </div>

                <h2 className="font-display text-3xl mb-1 font-bold">{project.title}</h2>
                <p className="text-accent-amber text-sm font-medium mb-5 italic">{project.role}</p>
                <p className="text-muted leading-[1.7] mb-5">{project.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="px-4 py-3 bg-bg-surface rounded-lg border-l-[3px] border-accent-cyan text-sm text-muted"
                    >
                      <strong className="block text-[#f4f4f8] mb-1 text-[0.9rem]">
                        {feature.title}
                      </strong>
                      {feature.desc}
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[0.8rem] px-3 py-1.5 bg-accent-purple/10 text-accent-purple rounded-md border border-accent-purple/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live links */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent-cyan/10 hover:bg-accent-cyan hover:text-bg text-accent-cyan border border-accent-cyan/30 hover:border-accent-cyan rounded-lg text-sm font-medium transition-all cursor-none"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Website
                    </a>
                  )}
                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500/10 hover:bg-emerald-500 hover:text-bg text-emerald-400 border border-emerald-500/30 hover:border-emerald-500 rounded-lg text-sm font-medium transition-all cursor-none"
                    >
                      <PlayCircle className="w-4 h-4" />
                      Google Play
                    </a>
                  )}
                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-500/10 hover:bg-blue-500 hover:text-bg text-blue-400 border border-blue-500/30 hover:border-blue-500 rounded-lg text-sm font-medium transition-all cursor-none"
                    >
                      <Apple className="w-4 h-4" />
                      App Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
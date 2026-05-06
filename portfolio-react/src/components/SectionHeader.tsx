import { motion } from 'framer-motion';

interface Props {
  num: string;
  title: string;
  accent: string;
}

export default function SectionHeader({ num, title, accent }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-baseline gap-6 mb-16 flex-wrap"
    >
      <span className="font-mono text-sm text-accent-cyan tracking-[0.1em]">{num}</span>
      <h2
        className="font-display font-bold tracking-[-0.03em] leading-none"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
      >
        {title} <span className="italic-accent">{accent}</span>
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent min-w-[100px]" />
    </motion.div>
  );
}

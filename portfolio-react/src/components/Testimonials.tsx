import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { testimonials } from '@/data/portfolio';
import type { Testimonial } from '@/types';

export default function Testimonials() {
  return (
    <section id="reviews" className="section-pad container-custom relative z-[2]">
      <SectionHeader num="07" title="Client" accent="reviews" />

      <p className="text-muted text-sm sm:text-base lg:text-lg max-w-2xl mb-10 sm:mb-12 -mt-6 sm:-mt-8">
        What clients say about working with me — direct feedback from the people behind the brands
        I designed and shipped.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
        {testimonials.map((t, i) => (
          <ReviewCard key={t.key} testimonial={t} delay={i * 0.12} />
        ))}
      </div>
    </section>
  );
}

function ReviewCard({ testimonial, delay }: { testimonial: Testimonial; delay: number }) {
  const { name, role, project, quote, initials, rating, accent } = testimonial;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl p-7 lg:p-8 flex flex-col h-full overflow-hidden border transition-all duration-500"
      style={{
        background: `linear-gradient(160deg, ${accent}14 0%, rgba(17,17,22,0) 55%)`,
        borderColor: `${accent}33`,
        boxShadow: `0 1px 0 0 ${accent}1f inset`,
      }}
    >
      {/* Brand accent top bar */}
      <span
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}55)` }}
      />

      {/* Oversized brand-tinted quote mark */}
      <Quote
        size={64}
        className="absolute -top-2 right-4 fill-current"
        style={{ color: `${accent}1f` }}
        aria-hidden="true"
      />

      {/* Project chip */}
      <span
        className="self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.65rem] font-mono uppercase tracking-[0.1em] mb-5 relative z-[1]"
        style={{ background: `${accent}1a`, color: accent, border: `1px solid ${accent}33` }}
      >
        {project}
      </span>

      <div className="flex gap-1 mb-5 relative z-[1]">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={15} style={{ color: accent, fill: accent }} />
        ))}
      </div>

      <p className="text-[#e6e6ee] text-[0.95rem] leading-[1.75] mb-7 flex-1 relative z-[1]">
        “{quote}”
      </p>

      <div
        className="flex items-center gap-4 pt-5 mt-auto relative z-[1]"
        style={{ borderTop: `1px solid ${accent}26` }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${accent}, ${accent}aa)`,
            boxShadow: `0 6px 18px ${accent}55`,
          }}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <h4 className="font-display font-semibold text-[#f4f4f8] leading-tight truncate">{name}</h4>
          <p className="text-sm text-dim truncate">
            {role} · <span style={{ color: accent }}>{project}</span>
          </p>
        </div>
      </div>
    </motion.article>
  );
}

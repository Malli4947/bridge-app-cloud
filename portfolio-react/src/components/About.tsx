import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { stats } from '@/data/portfolio';
import { useCountUp } from '@/hooks/useCountUp';
import type { Stat } from '@/types';

export default function About() {
  return (
    <section id="about" className="section-pad container-custom relative z-[2]">
      <SectionHeader num="02" title="About" accent="me" />

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Lead headline */}
          <p className="font-display text-xl leading-snug mb-5">
            I'm a{' '}
            <strong className="bg-gradient-1 bg-clip-text text-transparent font-semibold">
              Senior Software Engineer
            </strong>{' '}
            with{' '}
            <strong className="bg-gradient-1 bg-clip-text text-transparent font-semibold">
              3+ years
            </strong>{' '}
            of experience architecting and shipping scalable web, mobile, and full-stack
            applications end-to-end.
          </p>

          {/* Current role */}
          <p className="text-[1.05rem] text-muted mb-5 leading-[1.75]">
            Currently at <span className="text-accent-amber font-medium">Code Facts IT Solutions</span> in
            Hyderabad, I've engineered and shipped{' '}
            <strong className="text-[#f4f4f8] font-semibold">9+ production apps</strong> live on Google
            Play Store and Apple App Store — spanning service marketplaces, e-commerce, real estate,
            on-demand delivery, ride-booking, and B2B platforms.
          </p>

          {/* Tech breadth */}
          <p className="text-[1.05rem] text-muted mb-5 leading-[1.75]">
            My toolkit covers the full product lifecycle — from{' '}
            <span className="tag-inline">React.js</span> and{' '}
            <span className="tag-inline">React Native</span> UI architecture, to{' '}
            <span className="tag-inline">Node.js</span> &amp;{' '}
            <span className="tag-inline">Express</span> REST APIs, to{' '}
            <span className="tag-inline">MongoDB</span> schema design, secure payment flows with{' '}
            <span className="tag-inline">Razorpay</span> &amp;{' '}
            <span className="tag-inline">Stripe</span>, and real-time features powered by{' '}
            <span className="tag-inline">Firebase</span>.
          </p>

          {/* Performance & ownership */}
          <p className="text-[1.05rem] text-muted mb-5 leading-[1.75]">
            I obsess over performance — shaving milliseconds, eliminating crashes, and making
            interfaces feel <em className="font-serif text-accent-amber">alive</em>. I've improved
            backend response times by{' '}
            <strong className="text-[#f4f4f8] font-semibold">40%</strong> through query optimization
            and caching, and I own features end-to-end: from UI implementation to backend deployment,
            Play Store / App Store releases, and production monitoring.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {[
              'Full-Stack Engineer',
              'React & React Native',
              'API Architect',
              'Performance Nerd',
              'Mobile-First',
              'Production Owner',
              'Agile Collaborator',
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-white/20 rounded-full text-sm text-muted font-mono transition-all hover:border-accent-cyan hover:text-accent-cyan hover:-translate-y-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const [inView, setInView] = useState(false);
  const count = useCountUp(stat.target, 1800, inView);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({ x: ((y - cy) / cy) * -8, y: ((x - cx) / cx) * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative p-8 px-6 bg-bg-card border border-white/10 rounded-2xl text-center overflow-hidden cursor-none hover:border-accent-cyan transition-colors duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s linear, border-color 0.3s',
      }}
    >
      <div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6, 212, 212, 0.15) 0%, transparent 50%)',
        }}
      />
      <div
        className="font-display font-bold leading-none mb-2 bg-gradient-1 bg-clip-text text-transparent"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
      >
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm text-muted font-mono tracking-[0.05em]">{stat.label}</div>
    </motion.div>
  );
}
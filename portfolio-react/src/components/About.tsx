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

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-x-12 gap-y-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-xl leading-snug mb-5">
            
            <strong className="bg-gradient-1 bg-clip-text text-transparent font-semibold">
              Senior Software Engineer
            </strong>{' '}
            with{' '}
            <strong className="bg-gradient-1 bg-clip-text text-transparent font-semibold">
              3+ years
            </strong>{' '}
            architecting and shipping scalable <strong className="text-[#f4f4f8] font-semibold">websites,
            admin dashboards, mobile apps, and full-stack platforms</strong> — owned end-to-end, from the
            first wireframe to live production.
          </p>

          <p className="text-[1.05rem] text-muted mb-5 leading-[1.75]">
            At <span className="text-accent-amber font-medium">Code Facts IT Solutions</span> in
            Hyderabad, I engineered and shipped{' '}
            <strong className="text-[#f4f4f8] font-semibold">9+ production apps</strong> live on the Google
            Play Store and Apple App Store — spanning service marketplaces, e-commerce, real estate,
            on-demand delivery, ride-booking, and B2B platforms.
          </p>

          <p className="text-[1.05rem] text-muted mb-5 leading-[1.75]">
            Beyond that, I design and deliver{' '}
            <strong className="text-[#f4f4f8] font-semibold">freelance websites &amp; storefronts</strong>{' '}
            for real business clients — handling everything from UI/UX design and front-end build to
            deployment. <span className="text-accent-amber font-medium">You bring the vision; I design it,
            build it, and take it live.</span>
          </p>

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

          <p className="text-[1.05rem] text-muted mb-5 leading-[1.75]">
            I obsess over performance — shaving milliseconds, eliminating crashes, and making
            interfaces feel <em className="font-serif text-accent-amber">alive</em>. Improved
            backend response times by{' '}
            <strong className="text-[#f4f4f8] font-semibold">40%</strong> through query optimization
            and caching, and I own features end-to-end: from UI implementation to backend deployment,
            Play Store / App Store releases, and production monitoring.
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {[
              'Full-Stack Engineer',
              'Web & Mobile',
              'Admin Dashboards',
              'React & React Native',
              'API Architect',
              'Freelance Developer',
              'Design to Deployment',
              'Performance Nerd',
              'Production Owner',
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

        <div className="flex flex-col gap-4 w-full lg:max-w-[300px] lg:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-bg-card"
          >
            <img
              src="/MyImage.jpeg"
              alt="Mallikarjuna Rao Lattupalli"
              className="w-full aspect-[991/1280] object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-display font-semibold text-[#f4f4f8] leading-tight">
                Mallikarjuna Rao Lattupalli
              </p>
              <span className="inline-flex items-center gap-1.5 mt-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[0.65rem] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Full-Time &amp; Freelance
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
            ))}
          </div>
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
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)' }}
      >
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm text-muted font-mono tracking-[0.05em]">{stat.label}</div>
    </motion.div>
  );
}
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Smartphone, Globe, Server } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { stats } from '@/data/portfolio';
import { useCountUp } from '@/hooks/useCountUp';
import type { Stat } from '@/types';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    subtitle: 'iOS & Android',
    desc: 'Cross-platform React Native apps published on the App Store & Google Play — with payments, real-time tracking, push notifications, and native integrations.',
    tags: ['React Native', 'Firebase', 'FCM', 'Razorpay', 'Stripe'],
    accent: '#06d4d4',
  },
  {
    icon: Globe,
    title: 'Web Platforms',
    subtitle: 'React.js & Dashboards',
    desc: 'Production web apps and admin dashboards with React.js + TypeScript — charts, data tables, role-based access, and pixel-perfect responsive UIs.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Material UI'],
    accent: '#a855f7',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    subtitle: 'Node.js · MongoDB · REST',
    desc: 'Scalable REST APIs with Node.js, Express, and MongoDB — JWT authentication, payment gateway integrations, real-time Firebase, and cloud deployment.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT Auth', 'Vercel'],
    accent: '#fbbf24',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad container-custom relative z-[2]">
      <SectionHeader num="02" title="About" accent="me" />

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-x-12 gap-y-8 lg:gap-y-10 items-start">

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1"
        >
          <p className="font-display text-xl leading-snug mb-5">
            <strong className="bg-gradient-1 bg-clip-text text-transparent font-semibold">
              Senior Software Engineer
            </strong>{' '}
            specialising in{' '}
            <strong className="text-accent-cyan font-semibold">React Native</strong>{' '}
            &amp;{' '}
            <strong className="text-accent-cyan font-semibold">MERN Stack</strong>{' '}
            — <strong className="text-[#f4f4f8] font-semibold">3+ years</strong> designing and shipping scalable
            mobile apps, web platforms, and full-stack APIs from the ground up, end-to-end.
          </p>

          <p className="text-[1.05rem] text-muted mb-5 leading-[1.75]">
            At <span className="text-accent-amber font-medium">Code Facts IT Solutions</span> in
            Hyderabad, I engineered and shipped{' '}
            <strong className="text-[#f4f4f8] font-semibold">9+ cross-platform mobile apps</strong> live on the{' '}
            <strong className="text-[#f4f4f8] font-semibold">Google Play Store and Apple App Store</strong> — spanning
            service marketplaces, e-commerce, real estate, on-demand delivery, ride-booking, and B2B platforms.
            Every app was owned end-to-end: architecture, UI, backend APIs, and store deployment.
          </p>

          <p className="text-[1.05rem] text-muted mb-5 leading-[1.75]">
            Beyond mobile, I design and deliver{' '}
            <strong className="text-[#f4f4f8] font-semibold">freelance websites &amp; storefronts</strong>{' '}
            for business clients — handling everything from UI/UX design to front-end build to production
            deployment.{' '}
            <span className="text-accent-amber font-medium">You bring the vision; I design it, build it, and take it live.</span>
          </p>

          <p className="text-[1.05rem] text-muted mb-5 leading-[1.75]">
            My full-stack toolkit spans:{' '}
            <span className="tag-inline">React.js</span>{' '}
            <span className="tag-inline">React Native</span>{' '}
            <span className="tag-inline">TypeScript</span>{' '}
            <span className="tag-inline">Node.js</span>{' '}
            <span className="tag-inline">Express.js</span>{' '}
            <span className="tag-inline">MongoDB</span>{' '}
            <span className="tag-inline">Firebase</span>{' '}
            <span className="tag-inline">Razorpay</span>{' '}
            <span className="tag-inline">Stripe</span>{' '}
            &amp; REST APIs — from database schema design to payment integrations and real-time features.
          </p>

          <p className="text-[1.05rem] text-muted mb-8 leading-[1.75]">
            I obsess over performance — shaving milliseconds, eliminating crashes, and building interfaces
            that feel <em className="font-serif text-accent-amber">alive</em>. Improved backend response
            times by{' '}
            <strong className="text-accent-cyan font-semibold">40%</strong>{' '}
            through query optimisation and caching, and boosted booking accuracy by{' '}
            <strong className="text-accent-cyan font-semibold">40%</strong>{' '}
            via geo-fencing and smart pricing logic.
          </p>

          {/* Identity tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              'Full-Stack Engineer',
              'React Native Expert',
              'Mobile → App Store',
              'MERN Stack',
              'API Architect',
              'Admin Dashboards',
              'Payment Integrations',
              'Performance Nerd',
              'Design to Deployment',
            ].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 border border-white/15 rounded-full text-sm text-muted font-mono transition-all hover:border-accent-cyan hover:text-accent-cyan hover:-translate-y-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* What I Build — service pillars */}
          <div className="grid sm:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <ServiceCard key={svc.title} service={svc} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Right col — photo + stats */}
        <div className="flex flex-col gap-4 w-full sm:max-w-sm sm:mx-auto lg:max-w-[300px] lg:mx-auto order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-bg-card"
          >
            <img
              src="/MyImage.jpeg"
              alt="Mallikarjuna Rao Lattupalli — Senior React Native Engineer"
              className="w-full aspect-[991/1280] object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-display font-semibold text-[#f4f4f8] leading-tight">
                Mallikarjuna Rao Lattupalli
              </p>
              <p className="text-[0.75rem] text-accent-cyan font-mono mt-0.5">
                React Native · MERN Stack · Full-Stack
              </p>
              <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[0.65rem] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Work · Hyderabad · Remote
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

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-4 rounded-2xl bg-bg-card border border-white/10 overflow-hidden transition-all duration-400 hover:-translate-y-1"
      style={{ '--accent': service.accent } as React.CSSProperties}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: service.accent }} />
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 flex-shrink-0"
        style={{ background: `${service.accent}20`, border: `1px solid ${service.accent}40` }}
      >
        <Icon className="w-4 h-4" style={{ color: service.accent }} />
      </div>
      <h4 className="font-display font-bold text-[#f4f4f8] text-sm leading-tight">{service.title}</h4>
      <p className="font-mono text-[0.65rem] mb-2 mt-0.5" style={{ color: service.accent }}>{service.subtitle}</p>
      <p className="text-muted text-[0.78rem] leading-relaxed mb-3">{service.desc}</p>
      <div className="flex flex-wrap gap-1">
        {service.tags.map((t) => (
          <span key={t} className="text-[0.6rem] px-1.5 py-0.5 rounded border font-mono text-muted" style={{ borderColor: `${service.accent}30`, background: `${service.accent}0d` }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const [inView, setInView] = useState(false);
  const count = useCountUp(stat.target, 1800, inView);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({ x: ((e.clientY - rect.top - cy) / cy) * -8, y: ((e.clientX - rect.left - cx) / cx) * 8 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="group relative p-5 sm:p-8 sm:px-6 bg-bg-card border border-white/10 rounded-2xl text-center overflow-hidden cursor-pointer lg:cursor-none hover:border-accent-cyan transition-colors duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s linear, border-color 0.3s',
      }}
    >
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6, 212, 212, 0.15) 0%, transparent 50%)' }} />
      <div className="font-display font-bold leading-none mb-1.5 bg-gradient-1 bg-clip-text text-transparent" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
        {count}{stat.suffix}
      </div>
      <div className="text-[0.72rem] text-muted font-mono tracking-[0.05em]">{stat.label}</div>
    </motion.div>
  );
}

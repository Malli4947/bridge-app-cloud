import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeader from './SectionHeader';
import { personalInfo } from '@/data/portfolio';

// ─── EmailJS config ───────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_fffel9a';
const EMAILJS_TEMPLATE_ID = 'template_6sdo6a5';
const EMAILJS_PUBLIC_KEY  = '5iATdztOtqW_sDD5E';
// ─────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Props {
  onShowToast: (message: string) => void;
}

export default function Contact({ onShowToast }: Props) {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to:  form.email,
          subject:   form.subject,
          message:   form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      onShowToast(`Thanks ${form.name.split(' ')[0]}! Your message has been sent ✓`);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      onShowToast('Oops! Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [key]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="section-pad container-custom relative z-[2]"
    >
      <SectionHeader num="08" title="Let's" accent="connect" />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3
            className="font-display font-bold leading-[1.15] mb-4 tracking-[-0.02em]"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
          >
            Have a project or role in mind?
            <br />
            <span className="gradient-text">Let's build something great.</span>
          </h3>
          <p className="text-muted mb-6 text-[1.05rem] leading-[1.7]">
            Open to <strong className="text-[#f4f4f8] font-semibold">full-time roles</strong>,{' '}
            <strong className="text-[#f4f4f8] font-semibold">freelance projects</strong>, and interesting
            collaborations. I specialise in <strong className="text-accent-cyan font-semibold">React Native</strong>,{' '}
            <strong className="text-accent-cyan font-semibold">React.js</strong>, and{' '}
            <strong className="text-accent-cyan font-semibold">Node.js / MERN Stack</strong> —{' '}
            drop me a line and I'll respond within 24 hours.
          </p>

          {/* Availability banner */}
          <div className="flex items-center gap-3 px-4 py-3 mb-6 rounded-xl bg-emerald-500/[0.07] border border-emerald-500/20">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse" />
            <p className="text-sm text-emerald-300 leading-snug">
              <strong>Open to Work · Full-Time &amp; Freelance</strong> — Hyderabad · Remote Ready · IST timezone
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ContactMethod
              href={`mailto:${personalInfo.email}`}
              label="Email"
              value={personalInfo.email}
              icon={<Mail size={22} />}
            />
            <ContactMethod
              href={personalInfo.whatsapp}
              label="WhatsApp"
              value="+91 63044 34947"
              icon={<MessageCircle size={22} />}
              external
            />
            <ContactMethod
              href={`tel:${personalInfo.phone}`}
              label="Phone"
              value={personalInfo.phoneDisplay}
              icon={<Phone size={22} />}
            />
            <ContactMethod
              href={personalInfo.linkedin}
              label="LinkedIn"
              value={personalInfo.linkedinHandle}
              external
              icon={<Linkedin size={22} />}
            />
            <ContactMethod
              href={personalInfo.github}
              label="GitHub"
              value={personalInfo.githubHandle}
              external
              icon={<Github size={22} />}
            />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 sm:gap-6 p-5 sm:p-8 lg:p-10 bg-bg-card border border-white/10 rounded-[20px]"
        >
          <FormField label="Your Name"  name="from_name"    value={form.name}    onChange={handleChange('name')} />
          <FormField label="Your Email" name="reply_to"     value={form.email}   onChange={handleChange('email')} type="email" />
          <FormField label="Subject"    name="subject"      value={form.subject} onChange={handleChange('subject')} />
          <FormField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange('message')}
            textarea
          />
          <button
            type="submit"
            disabled={sending}
            className="btn btn-primary group self-start mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">{sending ? 'Sending…' : 'Send Message'}</span>
            <Send size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

interface ContactMethodProps {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  external?: boolean;
}

function ContactMethod({ href, label, value, icon, external }: ContactMethodProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-bg-card border border-white/10 rounded-xl no-underline text-[#f4f4f8] transition-all hover:border-accent-cyan sm:hover:translate-x-2 hover:bg-accent-cyan/[0.03]"
    >
      <div className="w-11 h-11 flex items-center justify-center bg-accent-cyan/10 rounded-[10px] text-accent-cyan flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-mono text-[0.7rem] uppercase text-dim tracking-[0.1em] mb-0.5">{label}</div>
        <div className="text-[0.95rem] font-medium">{value}</div>
      </div>
    </a>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  textarea?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function FormField({ label, name, value, type = 'text', textarea, onChange }: FormFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label htmlFor={name} className="block font-mono text-xs uppercase tracking-[0.1em] text-dim mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={5}
          required
          className="w-full py-3 bg-transparent border-none border-b text-[#f4f4f8] font-body text-base outline-none resize-y"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
          autoComplete={name === 'email' ? 'email' : name === 'name' ? 'name' : 'off'}
          className="w-full py-3 bg-transparent border-none border-b text-[#f4f4f8] font-body text-base outline-none"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}
        />
      )}
      <span
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-1"
        style={{ width: focused ? '100%' : '0%', transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
      />
    </div>
  );
}

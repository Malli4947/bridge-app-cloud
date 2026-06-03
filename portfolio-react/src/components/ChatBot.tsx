import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, ExternalLink, RotateCcw } from 'lucide-react';
import {
  projects,
  freelanceProjects,
  testimonials,
  skillCategories,
  experiences,
  personalInfo,
  stats,
} from '@/data/portfolio';

// ─── Types ────────────────────────────────────────────────────────
type CardType = 'skills' | 'projects' | 'freelance' | 'reviews' | 'about' | 'contact' | 'experience';

interface Message {
  id: number;
  from: 'bot' | 'user';
  text: string;
  card?: CardType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cardData?: any;
}

// ─── Quick reply chips ────────────────────────────────────────────
const QUICK_REPLIES = [
  { label: '🛠 Skills',       query: 'skills' },
  { label: '📦 Projects',     query: 'projects' },
  { label: '🌐 Freelance',    query: 'freelance projects' },
  { label: '⭐ Reviews',      query: 'client reviews' },
  { label: '👤 About',        query: 'about' },
  { label: '💼 Experience',   query: 'experience' },
  { label: '📬 Contact',      query: 'contact' },
//   { label: '🟢 Availability', query: 'availability' },N
];

// ─── Local brain ──────────────────────────────────────────────────
function getResponse(input: string): Message {
  const q = input.toLowerCase().trim();
  const id = Date.now();

  // Greetings
  if (/^(hi|hello|hey|howdy|sup|yo|hii|helo|good morning|good evening|good afternoon)\b/.test(q)) {
    return {
      id, from: 'bot',
      text: `Hey there! 👋 I'm Malli's AI assistant. I can tell you all about Mallikarjuna — his skills, projects, experience, and how to reach him. What would you like to know?`,
    };
  }

  // Thanks
  if (/\b(thank|thanks|thx|ty|thank you)\b/.test(q)) {
    return { id, from: 'bot', text: "You're welcome! 😊 Feel free to ask anything else about Mallikarjuna." };
  }

  // Client reviews / testimonials
  if (/review|testimonial|feedback|rating|recommend|what.*(client|customer)|(client|customer).*(say|said|think)|happy client|word of mouth/.test(q)) {
    return {
      id, from: 'bot', card: 'reviews',
      text: "Here's what Mallikarjuna's freelance clients say about working with him ⭐",
      cardData: testimonials,
    };
  }

  // Freelance projects (independent client & self-initiated web work)
  if (/freelanc|client (work|website|site|project)|own design|own code|prime pro|prime project|mk estate|aerovexa|exim|fashionly|shoporbit|restaurant (site|website)|jewell?ery|jewelry|web design|websites|vercel/.test(q)) {
    return {
      id, from: 'bot', card: 'freelance',
      text: "Here are Mallikarjuna's freelance projects — designed & coded end to end, from concept to live deployment 🌐",
      cardData: freelanceProjects,
    };
  }

  // Skills
  if (/skill|tech|stack|language|framework|tool|react|node|typescript|javascript|mobile|flutter|backend|frontend|database|mongodb|firebase|redux|tailwind|express|what can|technologies|coding|programming/.test(q)) {
    return {
      id, from: 'bot', card: 'skills',
      text: "Here's Mallikarjuna's complete tech stack 🛠",
      cardData: skillCategories,
    };
  }

  // Projects
  if (/project|app|application|built|portfolio|techmate|gobooze|bodegaa|rntout|luxorace|garuda|srirudra|firsthouse|gochauffeur|launched|shipped|developed|created/.test(q)) {
    return {
      id, from: 'bot', card: 'projects',
      text: "Here are the projects Mallikarjuna has shipped 🚀",
      cardData: projects,
    };
  }

  // Experience / Work
  if (/experience|work history|career|job|company|engineer|role|position|employment|codefacts|worked|working/.test(q)) {
    return {
      id, from: 'bot', card: 'experience',
      text: "Here's Mallikarjuna's work history 💼",
      cardData: experiences,
    };
  }

  // About / Who
  if (/about|who|introduce|background|yourself|bio|profile|summary|tell me|mallikarjuna|malli|name|person|developer|senior|full.?stack/.test(q)) {
    return {
      id, from: 'bot', card: 'about',
      text: "Here's a quick intro about Mallikarjuna 👋",
      cardData: { personalInfo, stats },
    };
  }

  // Contact / Hire / Location
  if (/contact|email|phone|reach|hire|connect|linkedin|github|message|whatsapp|location|address|where|city|hyderabad|available|freelance/.test(q)) {
    return {
      id, from: 'bot', card: 'contact',
      text: "Here's how to reach Mallikarjuna 📬",
      cardData: personalInfo,
    };
  }

  // Availability
  if (/availab|free|open to work|hire|hiring|freelance|full.?time|connect|reach out|opportunity|opportunities/.test(q)) {
    return {
      id, from: 'bot', card: 'contact',
      text: `🟢 Available for Full-Time & Freelance! Feel free to connect with Mallikarjuna anytime through:\n\n• ✉️ Email — ${personalInfo.email}\n• 💼 LinkedIn — ${personalInfo.linkedinHandle}\n• 🐙 GitHub — ${personalInfo.githubHandle}\n\nHe responds within 24 hours and is open to full-time roles, freelance projects, and collaborations.`,
      cardData: personalInfo,
    };
  }

  // Off-topic — politely decline
  return {
    id, from: 'bot',
    text: `Hey! 👋 I'm Malli's AI assistant and I only share information about Mallikarjuna Rao — his skills, projects, freelance work, client reviews, experience, and contact details.\n\nI'm not able to help with other topics. Try asking me:\n• "What are his skills?"\n• "Show me his projects"\n• "Show his freelance projects"\n• "What do clients say about him?"\n• "How to contact him?"`,
  };
}

const INITIAL_MESSAGE: Message = {
  id: 0, from: 'bot',
  text: "Hi! 👋 I'm Malli's AI assistant. Ask me anything about Mallikarjuna — his skills, projects, experience, or how to get in touch!",
};

// ─── Main Component ───────────────────────────────────────────────
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  // Let other floating UI (e.g. scroll-to-top) react to the chat being open
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('chatbot:toggle', { detail: { open } }));
  }, [open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), from: 'user', text };
    const botMsg = getResponse(text);
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const resetChat = () => {
    setMessages([{ ...INITIAL_MESSAGE, id: Date.now() }]);
    setInput('');
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat assistant"
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple shadow-[0_8px_30px_rgba(6,212,212,0.4)] flex items-center justify-center text-white cursor-none"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x"   initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90,  opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.span>
            : <motion.span key="bot" initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Bot size={24} /></motion.span>
          }
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-[998] w-[380px] max-w-[calc(100vw-2rem)] h-[580px] max-h-[calc(100vh-8rem)] bg-bg-card border border-white/15 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center flex-shrink-0">
                <Bot size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-[#f4f4f8]">Malli's Assistant</p>
                <p className="text-[0.7rem] text-accent-cyan flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan inline-block animate-pulse" />
                  Always online
                </p>
              </div>
              <button
                onClick={resetChat}
                title="Reset chat"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-dim hover:border-accent-cyan/50 hover:text-accent-cyan transition-all"
              >
                <RotateCcw size={14} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map(msg => (
                <MessageBubble key={msg.id} msg={msg} />
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div className="px-4 pb-2 flex gap-2 flex-wrap flex-shrink-0">
              {QUICK_REPLIES.map(q => (
                <button
                  key={q.query}
                  onClick={() => send(q.query)}
                  className="text-[0.7rem] px-3 py-1.5 rounded-full border border-white/15 text-muted hover:border-accent-cyan hover:text-accent-cyan transition-colors bg-white/[0.03]"
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={e => { e.preventDefault(); send(input); }}
              className="flex items-center gap-2 px-4 py-3 border-t border-white/10 flex-shrink-0"
            >
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about Malli…"
                className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#f4f4f8] placeholder:text-dim outline-none focus:border-accent-cyan/50 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-white disabled:opacity-40 transition-opacity flex-shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Message Bubble ───────────────────────────────────────────────
function MessageBubble({ msg }: { msg: Message }) {
  const isBot = msg.from === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex gap-2 ${isBot ? 'items-start' : 'items-start flex-row-reverse'}`}
    >
      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isBot ? 'bg-gradient-to-br from-accent-cyan to-accent-purple' : 'bg-white/10'}`}>
        {isBot ? <Bot size={14} className="text-white" /> : <User size={14} className="text-muted" />}
      </div>

      <div className={`flex flex-col gap-2 max-w-[88%] ${isBot ? '' : 'items-end'}`}>
        <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isBot
            ? 'bg-white/[0.06] text-[#f4f4f8] rounded-tl-sm'
            : 'bg-gradient-to-br from-accent-cyan to-accent-purple text-white rounded-tr-sm'
        }`}>
          {msg.text}
        </div>

        {/* Rich cards */}
        {isBot && msg.card === 'skills'     && <SkillsCard     data={msg.cardData} />}
        {isBot && msg.card === 'projects'   && <ProjectsCard   data={msg.cardData} />}
        {isBot && msg.card === 'freelance'  && <FreelanceCard  data={msg.cardData} />}
        {isBot && msg.card === 'reviews'    && <ReviewsCard    data={msg.cardData} />}
        {isBot && msg.card === 'about'      && <AboutCard      data={msg.cardData} />}
        {isBot && msg.card === 'contact'    && <ContactCard    data={msg.cardData} />}
        {isBot && msg.card === 'experience' && <ExperienceCard data={msg.cardData} />}
      </div>
    </motion.div>
  );
}

// ─── Skills Card ──────────────────────────────────────────────────
function SkillsCard({ data }: { data: typeof skillCategories }) {
  return (
    <div className="w-full space-y-2">
      {data.map((cat: typeof skillCategories[0]) => (
        <div key={cat.category} className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
          <p className="text-[0.7rem] font-mono uppercase tracking-wider text-accent-cyan mb-2">{cat.title}</p>
          <div className="flex flex-wrap gap-1.5">
            {cat.skills.map(s => (
              <span key={s.name} className="text-[0.7rem] px-2 py-1 bg-white/[0.06] text-muted rounded-md border border-white/10">{s.name}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Projects Card ────────────────────────────────────────────────
function ProjectsCard({ data }: { data: typeof projects }) {
  return (
    <div className="w-full space-y-2">
      {data.map((p: typeof projects[0]) => (
        <div key={p.key} className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{p.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#f4f4f8] truncate">{p.title}</p>
              <p className="text-[0.65rem] text-accent-amber font-mono">{p.category} · {p.year}</p>
            </div>
          </div>
          <p className="text-[0.72rem] text-muted leading-relaxed mb-2">{p.shortDesc}</p>
          <div className="flex flex-wrap gap-1 mb-2">
            {p.tags.map(t => (
              <span key={t} className="text-[0.65rem] px-2 py-0.5 bg-accent-purple/10 text-accent-purple rounded border border-accent-purple/20">{t}</span>
            ))}
          </div>
          {p.links && (
            <div className="flex gap-2 flex-wrap">
              {p.links.website   && <LinkChip href={p.links.website}   label="Website" />}
              {p.links.playStore && <LinkChip href={p.links.playStore} label="Play Store" />}
              {p.links.appStore  && <LinkChip href={p.links.appStore}  label="App Store" />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Freelance Card ───────────────────────────────────────────────
function FreelanceCard({ data }: { data: typeof freelanceProjects }) {
  return (
    <div className="w-full space-y-2">
      {data.map((p: typeof freelanceProjects[0]) => (
        <div key={p.key} className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{p.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#f4f4f8] truncate">{p.title}</p>
              <p className="text-[0.65rem] text-accent-amber font-mono">{p.category} · {p.year}</p>
            </div>
          </div>
          {p.client && (
            <p className="text-[0.65rem] text-accent-cyan mb-1">👤 Client · {p.client}</p>
          )}
          <p className="text-[0.72rem] text-muted leading-relaxed mb-2">{p.description}</p>
          <div className="flex flex-wrap gap-1 mb-2">
            {p.tags.map(t => (
              <span key={t} className="text-[0.65rem] px-2 py-0.5 bg-accent-purple/10 text-accent-purple rounded border border-accent-purple/20">{t}</span>
            ))}
          </div>
          <LinkChip href={p.url} label="Visit Live Site" />
        </div>
      ))}
    </div>
  );
}

// ─── Reviews Card ─────────────────────────────────────────────────
function ReviewsCard({ data }: { data: typeof testimonials }) {
  return (
    <div className="w-full space-y-2">
      {data.map((t: typeof testimonials[0]) => (
        <div key={t.key} className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-[0.65rem] font-bold text-white flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.accent}cc)` }}
            >
              {t.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#f4f4f8] truncate">{t.name}</p>
              <p className="text-[0.65rem] text-muted truncate">{t.role}</p>
            </div>
            <span className="text-[0.7rem] text-accent-amber tracking-tight">{'★'.repeat(t.rating)}</span>
          </div>
          <p className="text-[0.72rem] text-muted leading-relaxed italic">“{t.quote}”</p>
        </div>
      ))}
    </div>
  );
}

// ─── About Card ───────────────────────────────────────────────────
function AboutCard({ data }: { data: { personalInfo: typeof personalInfo; stats: typeof stats } }) {
  const { personalInfo: info, stats: s } = data;
  return (
    <div className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 space-y-3">
      <div className="flex items-center gap-3">
        <img
          src="/MyImage.jpeg"
          alt={info.name}
          className="w-12 h-12 rounded-full object-cover object-top border-2 border-accent-cyan/40 flex-shrink-0"
        />
        <div className="min-w-0">
          <p className="font-bold text-[#f4f4f8] leading-tight">{info.name}</p>
          <p className="text-[0.75rem] text-accent-cyan">{info.role}</p>
          <p className="text-[0.7rem] text-muted mt-0.5">📍 {info.location}</p>
        </div>
      </div>
      <p className="text-[0.7rem] text-emerald-300 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Available for Full-Time &amp; Freelance
      </p>
      <div className="grid grid-cols-2 gap-2">
        {s.map((stat: typeof stats[0]) => (
          <div key={stat.label} className="bg-white/[0.04] rounded-lg p-2 text-center border border-white/10">
            <p className="text-lg font-bold text-accent-cyan">{stat.target}{stat.suffix}</p>
            <p className="text-[0.65rem] text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Contact Card ─────────────────────────────────────────────────
function ContactCard({ data }: { data: typeof personalInfo }) {
  return (
    <div className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3 space-y-1">
      {[
        { label: '✉️ Email',    value: data.email,          href: `mailto:${data.email}` },
        { label: '📞 Phone',    value: data.phoneDisplay,   href: `tel:${data.phone}` },
        { label: '💼 LinkedIn', value: data.linkedinHandle, href: data.linkedin },
        { label: '🐙 GitHub',   value: data.githubHandle,   href: data.github },
      ].map(item => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="flex items-center justify-between p-2 rounded-lg hover:bg-white/[0.06] transition-colors group"
        >
          <div>
            <p className="text-[0.65rem] text-dim font-mono">{item.label}</p>
            <p className="text-[0.75rem] text-[#f4f4f8]">{item.value}</p>
          </div>
          <ExternalLink size={12} className="text-dim group-hover:text-accent-cyan transition-colors" />
        </a>
      ))}
    </div>
  );
}

// ─── Experience Card ──────────────────────────────────────────────
function ExperienceCard({ data }: { data: typeof experiences }) {
  return (
    <div className="w-full space-y-2">
      {data.map((exp: typeof experiences[0], i: number) => (
        <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
          <p className="text-[0.65rem] font-mono text-accent-cyan mb-0.5">{exp.date}</p>
          <p className="text-sm font-semibold text-[#f4f4f8]">{exp.title}</p>
          <p className="text-[0.72rem] text-muted mb-2">{exp.company} · {exp.location}</p>
          <div className="flex flex-wrap gap-1">
            {exp.stack.map(s => (
              <span key={s} className="text-[0.65rem] px-2 py-0.5 bg-accent-cyan/10 text-accent-cyan rounded border border-accent-cyan/20">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Link Chip ────────────────────────────────────────────────────
function LinkChip({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-[0.65rem] px-2 py-1 bg-accent-cyan/10 text-accent-cyan rounded border border-accent-cyan/20 hover:bg-accent-cyan/20 transition-colors"
    >
      <ExternalLink size={10} />
      {label}
    </a>
  );
}

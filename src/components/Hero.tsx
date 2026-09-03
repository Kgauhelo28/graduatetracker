import { useEffect, useState } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/portfolio';

const roles = [
  'Economics Graduate',
  'Operations Coordinator',
  'Business Analyst',
  'Project Planner',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent-500/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="section-container w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-ink-200 mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 animate-fade-up">
            Hi, I'm <span className="text-brand-400">Kgauhelo Liphoko</span>
          </h1>

          <div className="flex items-center gap-2 font-mono text-lg sm:text-xl text-ink-300 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-brand-400">&gt;</span>
            <span>{displayed}</span>
            <span className="animate-blink text-brand-400">|</span>
          </div>

          <p className="text-lg sm:text-xl text-ink-300 leading-relaxed max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {profile.tagline}
          </p>

          <div className="flex items-center gap-3 text-sm text-ink-400 mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-brand-400" />
              {profile.location}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a href={profile.resumeUrl} download className="btn-ghost">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-4 mt-10 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-all hover:border-brand-500/50 hover:text-brand-400 hover:-translate-y-0.5" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-all hover:border-brand-500/50 hover:text-brand-400 hover:-translate-y-0.5" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-all hover:border-brand-500/50 hover:text-brand-400 hover:-translate-y-0.5" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-ink-950/50 backdrop-blur-sm">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
          {profile.highlights.map((h) => (
            <div key={h.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-brand-400">{h.value}</div>
              <div className="text-xs sm:text-sm text-ink-400 mt-1">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-ink-950">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="text-lg">Kgauhelo<span className="text-brand-400">.</span></span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-400 hover:text-brand-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-300 hover:border-brand-500/50 hover:text-brand-400 transition-colors" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            )}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-300 hover:border-brand-500/50 hover:text-brand-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-300 hover:border-brand-500/50 hover:text-brand-400 transition-colors" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} Alex Carter. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-brand-400 transition-colors"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

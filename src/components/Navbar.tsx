import { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { navLinks } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive('#' + id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-ink-950">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="text-lg">Kgauhelo<span className="text-brand-400">.</span></span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === link.href
                    ? 'text-brand-400'
                    : 'text-ink-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-ink-950 transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
        >
          Let's Talk
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[32rem]' : 'max-h-0'
        }`}
      >
        <ul className="section-container flex flex-col gap-1 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'bg-brand-500/10 text-brand-400'
                    : 'text-ink-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

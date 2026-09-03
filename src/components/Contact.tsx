import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`section-container reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-16">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-brand-400" />
            Get In Touch
            <span className="h-px w-8 bg-brand-400" />
          </span>
          <h2 className="section-title">Let's work together</h2>
          <p className="text-ink-400 mt-4 max-w-xl mx-auto">
            Have a role you think I'd be a great fit for, or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="card card-hover p-5 flex items-center gap-4 group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-ink-400 uppercase tracking-wide">Email</p>
                <p className="text-sm font-medium text-white">{profile.email}</p>
              </div>
            </a>

            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-5 flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-ink-400 uppercase tracking-wide">GitHub</p>
                  <p className="text-sm font-medium text-white">View profile</p>
                </div>
              </a>
            )}

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover p-5 flex items-center gap-4 group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-ink-400 uppercase tracking-wide">LinkedIn</p>
                <p className="text-sm font-medium text-white">Kgauhelo Liphoko</p>
              </div>
            </a>

            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="card card-hover p-5 flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-ink-400 uppercase tracking-wide">Phone</p>
                <p className="text-sm font-medium text-white">{profile.phone}</p>
              </div>
            </a>

            <div className="card p-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-ink-400 uppercase tracking-wide">Location</p>
                <p className="text-sm font-medium text-white">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-200 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-brand-500/50 focus:bg-white/[0.07]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-200 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-brand-500/50 focus:bg-white/[0.07]"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-brand-500/50 focus:bg-white/[0.07] resize-none"
                  placeholder="Tell me about the role or opportunity..."
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="btn-primary w-full justify-center disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BarChart3, ClipboardCheck, Users, GraduationCap } from 'lucide-react';
import { about } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

const iconMap = { BarChart3, ClipboardCheck, Users, GraduationCap };

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`section-container reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: heading + paragraphs */}
          <div className="lg:col-span-7">
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-brand-400" />
              About Me
            </span>
            <h2 className="section-title mb-6">
              Engineering with empathy,
              <br />
              <span className="text-brand-400">designing with purpose</span>
            </h2>
            <div className="space-y-5 text-ink-300 leading-relaxed text-lg">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right: values cards */}
          <div className="lg:col-span-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {about.values.map((value) => {
                const Icon = iconMap[value.icon as keyof typeof iconMap];
                return (
                  <div key={value.title} className="card card-hover p-6 group">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 mb-4 transition-colors group-hover:bg-brand-500/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold text-white mb-1.5">{value.title}</h3>
                    <p className="text-sm text-ink-400 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

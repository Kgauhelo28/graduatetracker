import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="py-24 sm:py-32 bg-ink-900/30">
      <div
        ref={ref}
        className={`section-container reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-16">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-brand-400" />
            Career Journey
            <span className="h-px w-8 bg-brand-400" />
          </span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <div
                key={job.role + job.company}
                className={`relative flex flex-col sm:flex-row gap-6 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-1/2 top-2 -translate-x-1/2 z-10">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 ring-4 ring-ink-950" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Content */}
                <div className="pl-8 sm:pl-0 sm:w-1/2 sm:px-8">
                  <div className="card card-hover p-6">
                    <div className="flex items-center gap-2 text-brand-400 mb-2">
                      <Briefcase className="h-4 w-4" />
                      <span className="text-sm font-medium">{job.period}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{job.role}</h3>
                    <p className="text-brand-400 font-medium text-sm mb-1">{job.company}</p>
                    <p className="flex items-center gap-1 text-xs text-ink-400 mb-4">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </p>
                    <p className="text-sm text-ink-300 leading-relaxed mb-4">{job.description}</p>
                    <ul className="space-y-2 mb-4">
                      {job.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-ink-400">
                          <CheckCircle2 className="h-4 w-4 text-brand-400 flex-shrink-0 mt-0.5" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

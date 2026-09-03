import { GraduationCap, Award, MapPin } from 'lucide-react';
import { education } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Education() {
  const { ref, visible } = useReveal();

  return (
    <section id="education" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`section-container reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-16">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-brand-400" />
            Academic Background
            <span className="h-px w-8 bg-brand-400" />
          </span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu) => (
            <div key={edu.institution} className="card card-hover p-7 group">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 flex-shrink-0 transition-colors group-hover:bg-brand-500/20">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                  <p className="text-brand-400 font-medium text-sm">{edu.institution}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 text-sm text-ink-400">
                <span className="flex items-center gap-1.5">
                  <Award className="h-4 w-4" />
                  {edu.period}
                </span>
                {edu.gpa && (
                  <span className="text-ink-500">|</span>
                )}
                {edu.gpa && (
                  <span>GPA: {edu.gpa}</span>
                )}
              </div>

              <p className="text-sm text-ink-300 leading-relaxed mt-4">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

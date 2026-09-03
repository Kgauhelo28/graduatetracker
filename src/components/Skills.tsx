import {
  Code2, Database, BarChart3, FileChartColumn, ClipboardList, Monitor, Container,
  Puzzle, Users, MessageSquare, ScanSearch, Handshake, Clock,
} from 'lucide-react';
import { skills } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

const techIcons = { Code2, Database, BarChart3, FileChartColumn, ClipboardList, Monitor, TableProperties: Monitor };
const softIcons = { Puzzle, Users, MessageSquare, ScanSearch, Handshake, Clock };

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="py-24 sm:py-32 bg-ink-900/30">
      <div
        ref={ref}
        className={`section-container reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-16">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-brand-400" />
            Skills & Expertise
            <span className="h-px w-8 bg-brand-400" />
          </span>
          <h2 className="section-title">What I bring to the table</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Technical skills with progress bars */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-brand-400" />
              Technical Skills
            </h3>
            <div className="space-y-5">
              {skills.technical.map((skill, i) => {
                const Icon = techIcons[skill.icon as keyof typeof techIcons];
                return (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-2 text-sm font-medium text-ink-200">
                        {Icon && <Icon className="h-4 w-4 text-brand-400" />}
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-ink-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-1000 ease-out"
                        style={{
                          width: visible ? `${skill.level}%` : '0%',
                          transitionDelay: `${i * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft skills + tools */}
          <div className="space-y-10">
            <div>
              <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-400" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.soft.map((skill) => {
                  const Icon = softIcons[skill.icon as keyof typeof softIcons];
                  return (
                    <div
                      key={skill.name}
                      className="card card-hover flex flex-col items-center gap-2 p-4 text-center"
                    >
                      {Icon && <Icon className="h-5 w-5 text-brand-400" />}
                      <span className="text-xs font-medium text-ink-200">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Container className="h-5 w-5 text-brand-400" />
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span key={tool} className="tag hover:border-brand-500/40 hover:text-brand-400 transition-colors cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

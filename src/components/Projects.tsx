import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div
        ref={ref}
        className={`section-container reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-brand-400" />
              Featured Projects
            </span>
            <h2 className="section-title">Things I've built</h2>
          </div>
          <p className="max-w-sm text-sm text-ink-400 sm:text-right">
            Practical work shaped by economics, operations, and a strong interest in business improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`card card-hover p-7 group flex flex-col ${
                project.featured && i === 0 ? 'md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {project.featured && (
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-400 mb-4">
                  <Star className="h-3 w-3 fill-accent-400" />
                  Featured
                </span>
              )}

              <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-brand-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-ink-300 leading-relaxed mb-5">{project.description}</p>

              <ul className="space-y-2 mb-5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-ink-400">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              {(project.link || project.demo) && (
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 hover:text-brand-400 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 hover:text-brand-400 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  ClipboardList, Target, WalletCards, BadgeCheck,
} from 'lucide-react';
import { certifications } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

const certIcons = { ClipboardList, Target, WalletCards };

export default function Certifications() {
  const { ref, visible } = useReveal();

  return (
    <section id="certifications" className="py-24 sm:py-32 bg-ink-900/30">
      <div
        ref={ref}
        className={`section-container reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-16">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-brand-400" />
            Professional Credentials
            <span className="h-px w-8 bg-brand-400" />
          </span>
          <h2 className="section-title">Certifications</h2>
          <p className="text-ink-400 mt-4 max-w-xl mx-auto">
            Continuously investing in my craft through industry-recognized certifications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => {
            const Icon = certIcons[cert.icon as keyof typeof certIcons];
            return (
              <div key={cert.name} className="card card-hover p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500/20">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <BadgeCheck className="h-5 w-5 text-brand-400/60" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm leading-snug mb-2">
                  {cert.name}
                </h3>
                <p className="text-xs text-ink-400 mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-xs font-mono text-ink-500">{cert.credentialId}</span>
                  <span className="text-xs font-medium text-brand-400">{cert.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

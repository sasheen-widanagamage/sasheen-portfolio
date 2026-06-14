import { FiMapPin, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/portfolio';

export default function Contact() {
  const details = [
    { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'Sasheen Sri Widanagamage', href: profile.linkedin },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/sasheen-widanagamage', href: profile.github },
    { icon: FiMapPin, label: 'Location', value: `${profile.location} · Open to suitable internships`, href: null }
  ];

  return (
    <section id="contact" className="section-padding bg-white/45 dark:bg-white/[0.02]">
      <div className="container-pad">
        <SectionHeader
          eyebrow="08 / Contact"
          title="Let us discuss a"
          highlight="data-focused opportunity."
        />

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
          {details.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="glass-card flex items-center gap-4 rounded-3xl p-5 sm:p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-100 text-primary-700 dark:bg-primary-400/10 dark:text-primary-200">
                <Icon aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{label}</p>
                {href ? (
                  <a
                    className="focus-ring mt-1 block break-words font-semibold text-ink hover:text-primary-700 dark:text-white dark:hover:text-primary-200"
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 break-words font-semibold text-ink dark:text-white">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { aboutCards, profile } from '../data/portfolio';
import profilePhoto from '../assets/profile-photo.png';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-pad">
        <SectionHeader
          eyebrow="01 / About me"
          title="Curious, practical and"
          highlight="data-focused."
        />
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="glass-card h-fit self-start overflow-hidden rounded-[2.5rem] p-5"
>
  <div className="relative h-[620px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-600 via-accent-cyan to-accent-violet">
    <div className="absolute inset-0 bg-premium-grid bg-[length:28px_28px] opacity-20" />

    <img
      src={profilePhoto}
      alt={`${profile.name} profile`}
      className="absolute inset-0 h-full w-full object-cover object-top"
      loading="lazy"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

    <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/90 p-4 backdrop-blur dark:bg-ink/85">
      <p className="text-sm font-extrabold text-ink dark:text-white">
        Open to internships
      </p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Data Analyst · BI · Data Science · ML · AI
      </p>
    </div>
  </div>
</motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2rem] p-6 sm:p-8"
            >
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{profile.summary}</p>
              <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                My project work combines data cleaning, statistical investigation, dashboard design, ETL workflows, data warehousing concepts and professional GitHub documentation. I also have a software-development foundation that helps me understand end-to-end technical solutions.
              </p>
            </motion.div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {aboutCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="glass-card rounded-3xl p-5"
                >
                  <span className="text-sm font-extrabold text-primary-700 dark:text-primary-300">0{index + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-extrabold text-ink dark:text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{card.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { FiCheckCircle, FiGithub } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { achievements, githubHighlights, profile } from '../data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-pad">
        <SectionHeader
          eyebrow="07 / Achievements and GitHub"
          title="Professional visibility through"
          highlight="documented work."
        />
        <div className="grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2rem] p-6"
          >
            <h3 className="font-display text-2xl font-extrabold text-ink dark:text-white">Achievement highlights</h3>
            <div className="mt-6 grid gap-4">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex gap-3 rounded-3xl bg-white/60 p-4 dark:bg-white/5">
                  <FiCheckCircle className="mt-1 shrink-0 text-primary-700 dark:text-primary-300" aria-hidden="true" />
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2rem] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">GitHub contribution section</p>
                <h3 className="mt-3 font-display text-2xl font-extrabold text-ink dark:text-white">Repository and contribution overview</h3>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white dark:bg-white dark:text-ink"><FiGithub /></span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {githubHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{item.title}</p>
                  <p className="mt-3 font-display text-xl font-extrabold text-ink dark:text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button href={profile.github}>Open GitHub profile</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

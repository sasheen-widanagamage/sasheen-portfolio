import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white/45 dark:bg-white/[0.02]">
      <div className="container-pad">
        <SectionHeader
          eyebrow="02 / Education"
          title="Academic foundation in"
          highlight="data science."
          
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass-card rounded-[2rem] p-6"
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">{item.period}</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-ink dark:text-white">{item.institution}</h3>
              <p className="mt-2 font-semibold text-slate-700 dark:text-slate-200">{item.qualification}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.details}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700 dark:bg-primary-400/10 dark:text-primary-200">{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

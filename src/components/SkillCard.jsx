import { motion } from 'framer-motion';

export default function SkillCard({ group, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="glass-card group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary-300/80"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">{group.level}</p>
          <h3 className="mt-3 font-display text-xl font-extrabold text-ink dark:text-white">{group.title}</h3>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-100 text-sm font-extrabold text-primary-700 transition group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-400/10 dark:text-primary-200">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{group.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

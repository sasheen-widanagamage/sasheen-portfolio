import { motion } from 'framer-motion';

export default function TimelineItem({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -22 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="relative border-l border-slate-200 pb-10 pl-8 last:pb-0 dark:border-white/10"
    >
      <span className="absolute -left-3 top-1 grid h-6 w-6 place-items-center rounded-full bg-primary-600 ring-8 ring-paper dark:ring-[#06101f]" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-white" />
      </span>
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-primary-700 dark:text-primary-300">{item.label}</p>
      <h3 className="mt-3 font-display text-2xl font-extrabold text-ink dark:text-white">{item.title}</h3>
      <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
        {item.organisation} · {item.period}
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">{item.details}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700 dark:bg-primary-400/10 dark:text-primary-200">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

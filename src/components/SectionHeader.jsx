import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, highlight, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className={`mb-10 max-w-3xl ${alignment}`}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-primary-700 dark:text-primary-300">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink dark:text-white sm:text-4xl lg:text-5xl">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>}
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

export default function CertificationCard({ certification, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.035 }}
      className="glass-card rounded-3xl p-5"
    >
      <div className="flex gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-100 text-primary-700 dark:bg-primary-400/10 dark:text-primary-200">
          <FiAward aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-lg font-extrabold text-ink dark:text-white">{certification.title}</h3>
          <p className="mt-1 text-sm font-semibold text-primary-700 dark:text-primary-300">
            {certification.issuer} · {certification.date}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{certification.focus}</p>
        </div>
      </div>
    </motion.article>
  );
}

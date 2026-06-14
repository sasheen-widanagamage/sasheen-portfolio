import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="glass-card group overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1 hover:border-primary-300"
    >
      <div className="p-6">
        <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-extrabold text-primary-700 dark:bg-primary-500/10 dark:text-primary-300">
          {project.category}
        </span>
        <h3 className="mt-4 font-display text-xl font-extrabold leading-tight text-ink dark:text-white">{project.title}</h3>
        <div className="mt-4 grid gap-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          <p><span className="font-bold text-ink dark:text-white">Business problem:</span> {project.problem}</p>
          <p><span className="font-bold text-ink dark:text-white">Solution:</span> {project.solution}</p>
        </div>
        <ul className="mt-5 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 6).map((tech) => (
            <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-700 dark:bg-white dark:text-ink"
          >
            <FiGithub aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

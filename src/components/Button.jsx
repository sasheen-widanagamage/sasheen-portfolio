import { FiArrowUpRight } from 'react-icons/fi';

const variants = {
  primary:
    'bg-ink text-white hover:bg-primary-700 dark:bg-white dark:text-ink dark:hover:bg-primary-100 shadow-soft',
  secondary:
    'border border-slate-300/70 bg-white/70 text-ink hover:border-primary-400 hover:text-primary-700 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-primary-300',
  subtle:
    'bg-primary-50 text-primary-800 hover:bg-primary-100 dark:bg-primary-400/10 dark:text-primary-100 dark:hover:bg-primary-400/20'
};

export default function Button({ href, children, variant = 'primary', icon = true, download = false, className = '' }) {
  return (
    <a
      href={href}
      download={download}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {icon && <FiArrowUpRight aria-hidden="true" />}
    </a>
  );
}

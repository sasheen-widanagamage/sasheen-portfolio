import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 shadow-sm transition hover:border-primary-400 hover:text-primary-700 dark:border-white/15 dark:bg-white/10 dark:text-slate-100 dark:hover:text-primary-200"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
}

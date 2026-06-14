import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { profile, navLinks } from '../data/portfolio';
import { useScrollSpy } from '../hooks/useScrollSpy';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ isDark, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ids = navLinks.map((link) => link.href.replace('#', ''));
  const activeId = useScrollSpy(ids);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav className="container-pad">
        <div className="glass-card flex items-center justify-between rounded-full px-4 py-3">
          <a href="#home" className="focus-ring flex items-center gap-3 rounded-full" aria-label="Go to home">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-sm font-extrabold text-white dark:bg-white dark:text-ink">
              {profile.initials}
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-sm font-extrabold text-ink dark:text-white">Sasheen Sri Widanagamage</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeId === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <button
              type="button"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-800 dark:border-white/15 dark:bg-white/10 dark:text-white lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass-card mt-3 rounded-3xl p-3 lg:hidden">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-primary-50 hover:text-primary-700 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import { profile, navLinks } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/60 py-10 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="container-pad flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="focus-ring inline-flex items-center gap-3 rounded-full">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-sm font-extrabold text-white dark:bg-white dark:text-ink">{profile.initials}</span>
            <span>
              <span className="block font-display font-extrabold text-ink dark:text-white">{profile.name}</span>
            </span>
          </a>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
            Built for Data Analyst, Business Intelligence, Data Science, Machine Learning, AI and Big Data Analytics internship opportunities.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navLinks.slice(1).map((link) => (
            <a key={link.href} className="focus-ring rounded-full px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-primary-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-primary-200" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container-pad mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

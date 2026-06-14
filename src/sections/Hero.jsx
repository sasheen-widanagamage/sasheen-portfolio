import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Button from '../components/Button';
import StatCounter from '../components/StatCounter';
import { heroBadges, profile, stats } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:min-h-screen lg:pb-20 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-premium-grid bg-[length:38px_38px] opacity-60 dark:opacity-35" />
      <div className="container-pad grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary-200 bg-white/80 px-4 py-2 text-sm font-bold text-primary-800 shadow-sm backdrop-blur dark:border-primary-400/20 dark:bg-primary-400/10 dark:text-primary-100"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-accent-emerald" />
            {profile.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-extrabold tracking-tight text-ink dark:text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I am <span className="gradient-text">Sasheen Sri Widanagamage.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 dark:text-slate-300"
          >
            {profile.headline}. I build data analytics, BI, data warehousing, machine-learning and AI-focused project work for practical business insight.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="#projects">Explore projects</Button>
            <Button href={profile.resume} variant="secondary">View resume</Button>
            <Button href={profile.resume} variant="subtle" download>Download resume</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-slate-700 hover:text-primary-700 dark:text-slate-300 dark:hover:text-primary-200" href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <a className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-slate-700 hover:text-primary-700 dark:text-slate-300 dark:hover:text-primary-200" href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <a className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-slate-700 hover:text-primary-700 dark:text-slate-300 dark:hover:text-primary-200" href={`mailto:${profile.email}`}><FiMail /> Email</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="relative"
        >
          <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-5 sm:p-7">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-400/20 blur-3xl" />
            <div className="rounded-[2rem] border border-white/30 bg-ink p-5 font-mono text-sm text-slate-100 shadow-soft dark:bg-black/30">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-semibold text-accent-cyan">career_profile.py</span>
                <span className="rounded-full bg-accent-emerald/15 px-3 py-1 text-xs font-bold text-accent-emerald">Ready</span>
              </div>
              {[
                'import pandas as pd',
                'import numpy as np',
                '',
                'candidate = {',
                '  "name": "Sasheen",',
                '  "specialisation": "Data Science",',
                '  "focus": ["Analytics", "BI", "ML", "AI"],',
                '  "status": "Seeking internship"',
                '}'
              ].map((line, index) => (
                <p key={`${line}-${index}`} className="grid grid-cols-[2.5rem_1fr] gap-3 leading-7">
                  <span className="select-none text-slate-500">{String(index + 1).padStart(2, '0')}</span>
                  <code>{line || ' '}</code>
                </p>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <span key={badge} className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-extrabold text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-200">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-pad mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => <StatCounter key={stat.label} {...stat} />)}
      </div>
    </section>
  );
}

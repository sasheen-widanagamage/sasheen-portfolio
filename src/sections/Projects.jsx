import { useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';

const filters = ['All', 'Data Science', 'Business Intelligence', 'Data Engineering', 'Full Stack', 'Mobile App', 'Web App'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const shownProjects = useMemo(() => (
    active === 'All' ? projects : projects.filter((project) => project.category === active)
  ), [active]);

  return (
    <section id="projects" className="section-padding bg-white/45 dark:bg-white/[0.02]">
      <div className="container-pad">
        <SectionHeader
          eyebrow="04 / Featured projects"
          title="Practical work with"
          highlight="measurable purpose."
        />
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar" role="tablist" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`focus-ring shrink-0 rounded-full px-4 py-2 text-sm font-extrabold transition ${
                active === filter
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'border border-slate-200 bg-white/75 text-slate-600 hover:border-primary-300 hover:text-primary-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {shownProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}

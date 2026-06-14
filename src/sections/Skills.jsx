import SectionHeader from '../components/SectionHeader';
import SkillCard from '../components/SkillCard';
import { skillGroups } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-pad">
        <SectionHeader
          eyebrow="03 / Technical skills"
          title="A toolkit for the"
          highlight="complete data workflow."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => <SkillCard key={group.title} group={group} index={index} />)}
        </div>
      </div>
    </section>
  );
}

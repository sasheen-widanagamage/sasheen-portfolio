import SectionHeader from '../components/SectionHeader';
import TimelineItem from '../components/TimelineItem';
import { journey } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="journey" className="section-padding">
      <div className="container-pad">
        <SectionHeader
          eyebrow="05 / Journey"
          title="Education and"
          highlight="project-based experience."
        />
        <div className="glass-card rounded-[2.5rem] p-6 sm:p-8">
          {journey.map((item, index) => <TimelineItem key={item.title} item={item} index={index} />)}
        </div>
      </div>
    </section>
  );
}

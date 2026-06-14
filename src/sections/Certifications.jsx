import SectionHeader from '../components/SectionHeader';
import CertificationCard from '../components/CertificationCard';
import Button from '../components/Button';
import { certifications, profile } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-white/45 dark:bg-white/[0.02]">
      <div className="container-pad">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="06 / Certifications"
            title="Continuous learning across"
            highlight="data and technology."
          />
          <div className="mb-10">
            <Button href={`${profile.linkedin}/details/certifications/`} variant="secondary">View LinkedIn credentials</Button>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificationCard key={certification.title} certification={certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

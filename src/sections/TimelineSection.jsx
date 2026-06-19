import SectionTitle from '../components/SectionTitle';
import FadeInSection from '../components/FadeInSection';

import data from '../data.json';

import './TimelineSection.css';

export default function TimelineSection() {
  const { timeline, timelineSection } = data;

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <FadeInSection>
          <SectionTitle
            title={timelineSection.title}
            subtitle={timelineSection.subtitle}
          />
        </FadeInSection>

        <div className="timeline">
          {timeline.map((item, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className="timeline-item">
                <div className="timeline-dot" />

                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

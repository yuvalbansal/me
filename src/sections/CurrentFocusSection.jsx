import SectionTitle from '../components/SectionTitle';
import FadeInSection from '../components/FadeInSection';

import data from '../data.json';

import './CurrentFocusSection.css';

export default function CurrentFocusSection() {
  const { currentFocus } = data;

  return (
    <section className="focus-section">
      <div className="container">
        <FadeInSection>
          <SectionTitle
            title={currentFocus.title}
            subtitle={currentFocus.subtitle}
          />
        </FadeInSection>

        <div className="focus-grid">
          {currentFocus.items.map((item, index) => (
            <FadeInSection key={item.category} delay={index * 0.08}>
              <div className="focus-card">
                <div className="focus-icon">{item.icon}</div>

                <div className="focus-category">{item.category}</div>

                <div className="focus-value">{item.value}</div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

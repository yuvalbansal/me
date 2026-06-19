import SectionTitle from '../components/SectionTitle';
import FadeInSection from '../components/FadeInSection';

import data from '../data.json';

import './AboutSection.css';

export default function AboutSection() {
  const { personal, about } = data;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <FadeInSection>
          <SectionTitle title={about.title} subtitle={about.subtitle} />
        </FadeInSection>

        <div className="about-grid">
          <FadeInSection>
            <div className="about-image">
              <div className="profile-image-wrapper">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="profile-image"
                />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div className="about-content">
              {about.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="tags">
                {about.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

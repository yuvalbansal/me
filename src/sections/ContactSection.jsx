import { FaLinkedin, FaGithub, FaSpotify, FaEnvelope } from 'react-icons/fa';

import SectionTitle from '../components/SectionTitle';
import FadeInSection from '../components/FadeInSection';

import data from '../data.json';

import './ContactSection.css';

export default function ContactSection() {
  const { contact, socials } = data;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <FadeInSection>
          <SectionTitle title={contact.title} subtitle={contact.subtitle} />
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <div className="contact-card">
            <div className="contact-intro">
              {contact.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="social-grid">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href={socials.spotify}
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                <FaSpotify />
                <span>Spotify</span>
              </a>

              <a href={`mailto:${socials.email}`} className="social-card">
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

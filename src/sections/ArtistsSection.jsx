import data from '../data.json';

import FadeInSection from '../components/FadeInSection';
import ArtistCard from '../components/ArtistCard';

import './ArtistsSection.css';

export default function ArtistsSection() {
  const { artists } = data;

  return (
    <section className="artists-section">
      <div className="container">
        <div className="artists-grid">
          {artists.map((artist, index) => (
            <FadeInSection key={artist.name} delay={index * 0.08}>
              <ArtistCard artist={artist} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

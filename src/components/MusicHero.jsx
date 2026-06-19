import data from '../data.json';
import './MusicHero.css';

export default function MusicHero() {
  const { musicPage } = data;

  return (
    <section className="music-hero">
      <div className="container">
        <h1>{musicPage.title}</h1>

        <h2>{musicPage.subtitle}</h2>

        <p>{musicPage.description}</p>

        <div className="music-highlight">
          <div className="music-highlight-label">Favourite Artist</div>

          <div className="music-highlight-name">
            {musicPage.favouriteArtist.name}
          </div>

          <div className="music-highlight-quote">
            "{musicPage.favouriteArtist.quote}"
          </div>
        </div>
      </div>
    </section>
  );
}

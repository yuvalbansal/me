import './ArtistCard.css';

export default function ArtistCard({ artist }) {
  return (
    <div className="artist-card">
      <div className="artist-image-container">
        <img src={artist.image} alt={artist.name} className="artist-image" />
      </div>

      <div className="artist-content">
        <h3>{artist.name}</h3>

        <div className="spotify-wrapper">
          <iframe
            src={artist.spotifyEmbed}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen"
            loading="lazy"
            title={artist.name}
            style={{
              border: 'none',
              borderRadius: '12px',
            }}
          />
        </div>

        <div className="artist-genres">
          {artist.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>

        <p>{artist.note}</p>
      </div>
    </div>
  );
}

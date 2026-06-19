import data from '../data.json';
import './ThoughtsHero.css';

export default function ThoughtsHero() {
  const { thoughtsPage } = data;

  return (
    <section className="thoughts-hero">
      <div className="container">
        <h1>{thoughtsPage.title}</h1>

        <h2>{thoughtsPage.subtitle}</h2>

        <p>{thoughtsPage.description}</p>
      </div>
    </section>
  );
}

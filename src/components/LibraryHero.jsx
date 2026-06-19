import data from '../data.json';
import './LibraryHero.css';

export default function LibraryHero() {
  const { booksPage, books } = data;

  const totalBooks = books.length;

  const totalPages = books.reduce((sum, book) => sum + (book.pages || 0), 0);

  const categories = new Set(books.map((book) => book.category)).size;

  return (
    <section className="library-hero">
      <div className="container">
        <h1>{booksPage.title}</h1>

        <h2>{booksPage.subtitle}</h2>

        <p>{booksPage.description}</p>

        <div className="library-stats">
          <div className="library-stat">
            <label>Total Books Read</label>
            <span>{totalBooks}</span>
          </div>

          <div className="library-stat">
            <label>Total Pages Read</label>
            <span>{totalPages.toLocaleString()}</span>
          </div>

          <div className="library-stat current-reading">
            <label>Currently Reading</label>
            <span>{booksPage.currentlyReading}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

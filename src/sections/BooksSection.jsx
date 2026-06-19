import { useState } from 'react';

import data from '../data.json';

import FadeInSection from '../components/FadeInSection';
import BookModal from '../components/BookModal';

import './BooksSection.css';

export default function BooksSection() {
  const { books } = data;

  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <section className="books-section">
      <div className="container">
        <div className="books-grid">
          {books.map((book, index) => (
            <FadeInSection key={book.title} delay={index * 0.08}>
              <div className="book-card" onClick={() => setSelectedBook(book)}>
                <div className="book-cover-container">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="book-cover"
                  />
                </div>

                <div className="book-content">
                  <h3>{book.title}</h3>

                  <p className="book-author">{book.author}</p>

                  <div className="book-meta">
                    <span>{book.category}</span>

                    <span>{book.dateRead}</span>
                  </div>

                  <div className="book-rating">{'★'.repeat(book.rating)}</div>

                  <p className="book-note">{book.note}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      </div>
    </section>
  );
}

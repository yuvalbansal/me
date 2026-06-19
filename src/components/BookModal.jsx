import './BookModal.css';

export default function BookModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-layout">
          <div className="modal-cover-container">
            <img src={book.cover} alt={book.title} className="modal-cover" />
          </div>

          <div>
            <h2>{book.title}</h2>

            <p className="modal-author">{book.author}</p>

            <p>
              <strong>Category:</strong> {book.category}
            </p>

            <p>
              <strong>Read:</strong> {book.dateRead}
            </p>

            <p>
              <strong>Rating:</strong> {'★'.repeat(book.rating)}
            </p>

            <p className="modal-note">{book.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

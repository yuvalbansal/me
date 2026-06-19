import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import remarkBreaks from 'remark-breaks';

import './WritingModal.css';

export default function WritingModal({
  writing,
  writings,
  onClose,
  onSelectWriting,
}) {
  const [content, setContent] = useState('');
  const [progress, setProgress] = useState(0);

  const modalRef = useRef(null);

  const currentIndex = writings?.findIndex(
    (item) => item.title === writing?.title,
  );

  const goToPrevious = () => {
    if (currentIndex <= 0) return;

    onSelectWriting(writings[currentIndex - 1]);
  };

  const goToNext = () => {
    if (currentIndex >= writings.length - 1) return;

    onSelectWriting(writings[currentIndex + 1]);
  };

  useEffect(() => {
    if (!writing) return;

    setProgress(0);

    fetch(writing.file)
      .then((res) => res.text())
      .then(setContent);
  }, [writing]);

  useEffect(() => {
    const modal = modalRef.current;

    if (!modal || !writing) return;

    const handleScroll = () => {
      const scrollTop = modal.scrollTop;

      const scrollHeight = modal.scrollHeight - modal.clientHeight;

      const percentage =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(percentage);
    };

    handleScroll();

    modal.addEventListener('scroll', handleScroll);

    return () => {
      modal.removeEventListener('scroll', handleScroll);
    };
  }, [writing]);

  useEffect(() => {
    if (!writing) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'ArrowLeft') {
        goToPrevious();
      }

      if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [writing, currentIndex]);

  return (
    <AnimatePresence>
      {writing && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className="writing-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.97,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div className="reading-progress">
              <div
                className="reading-progress-bar"
                style={{
                  transform: `scaleX(${progress / 100})`,
                }}
              />
            </div>

            <button className="modal-close" onClick={onClose}>
              ×
            </button>

            <h1>{writing.title}</h1>

            <div className="writing-date">{writing.date}</div>

            <div className="writing-navigation">
              <button onClick={goToPrevious} disabled={currentIndex === 0}>
                ← Previous
              </button>

              <button
                onClick={goToNext}
                disabled={currentIndex === writings.length - 1}
              >
                Next →
              </button>
            </div>

            <div className="writing-position">
              {currentIndex + 1} / {writings.length}
            </div>

            <div className="markdown-content">
              <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                {content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

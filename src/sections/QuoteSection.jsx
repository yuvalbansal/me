import { useState } from 'react';

import data from '../data.json';

import FadeInSection from '../components/FadeInSection';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { AnimatePresence, motion } from 'framer-motion';

import './QuoteSection.css';

export default function QuoteSection() {
  const { quotes } = data;

  const [current, setCurrent] = useState(0);

  const previousQuote = () => {
    setCurrent((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const nextQuote = () => {
    setCurrent((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="quote-section">
      <div className="container">
        <FadeInSection>
          <div className="quote-carousel">
            <button
              className="quote-arrow"
              onClick={previousQuote}
              aria-label="Previous Quote"
            >
              <FaChevronLeft />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="quote-content"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <blockquote>"{quotes[current].quote}"</blockquote>

                <cite>— {quotes[current].author}</cite>
              </motion.div>
            </AnimatePresence>

            <button
              className="quote-arrow"
              onClick={nextQuote}
              aria-label="Next Quote"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="quote-dots">
            {quotes.map((_, index) => (
              <button
                key={index}
                className={index === current ? 'quote-dot active' : 'quote-dot'}
                onClick={() => setCurrent(index)}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

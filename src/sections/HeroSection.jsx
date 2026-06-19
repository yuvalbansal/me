import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import data from '../data.json';

import './HeroSection.css';

export default function HeroSection() {
  const { hero } = data;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % hero.statusItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hero.statusItems.length]);

  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {hero.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
        >
          {hero.title}
        </motion.h2>

        <motion.div
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
        >
          {hero.description}
        </motion.div>

        <div className="hero-status-container">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              className="hero-status"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              {hero.statusItems[current]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span>{hero.scrollText}</span>
          <div className="arrow">↓</div>
        </motion.div>
      </div>
    </section>
  );
}

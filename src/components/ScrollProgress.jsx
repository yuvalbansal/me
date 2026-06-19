import { useEffect, useRef } from 'react';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress / 100})`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress-container">
      <div ref={progressRef} className="progress-bar" />
    </div>
  );
}

import { useEffect, useRef } from 'react';
import './ConstellationBackground.css';

export default function ConstellationBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = {
      x: null,
      y: null,
    };

    const PARTICLE_COUNT = width < 768 ? 40 : width < 1200 ? 60 : 120;
    const MAX_DISTANCE = 140;

    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;

        this.radius = Math.random() * 2 + 1;

        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) {
          this.vx *= -1;
        }

        if (this.y < 0 || this.y > height) {
          this.vy *= -1;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const force = (120 - distance) / 120;

            this.x += dx * force * 0.02;
            this.y += dy * force * 0.02;
          }
        }
      }

      draw() {
        const alpha = 0.5 + Math.sin(Date.now() * 0.001 + this.phase) * 0.25;

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(201,162,39,${alpha})`;

        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(201,162,39,0.8)';

        ctx.fill();

        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MAX_DISTANCE) {
            const opacity = 1 - distance / MAX_DISTANCE;

            let glow = opacity * 0.2;

            if (mouse.x !== null && mouse.y !== null) {
              const midX = (particles[a].x + particles[b].x) / 2;

              const midY = (particles[a].y + particles[b].y) / 2;

              const mouseDistance = Math.sqrt(
                (midX - mouse.x) ** 2 + (midY - mouse.y) ** 2,
              );

              if (mouseDistance < 150) {
                glow += 0.35;
              }
            }

            ctx.beginPath();

            ctx.moveTo(particles[a].x, particles[a].y);

            ctx.lineTo(particles[b].x, particles[b].y);

            ctx.strokeStyle = `rgba(201,162,39,${glow})`;

            ctx.lineWidth = 1;

            ctx.stroke();
          }
        }
      }
    }

    function drawMouseHalo() {
      if (mouse.x === null || mouse.y === null) {
        return;
      }

      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        220,
      );

      gradient.addColorStop(0, 'rgba(201,162,39,0.08)');

      gradient.addColorStop(1, 'rgba(201,162,39,0)');

      ctx.fillStyle = gradient;

      ctx.fillRect(0, 0, width, height);
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      drawMouseHalo();

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();

      animationFrameId = requestAnimationFrame(animate);
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener('mousemove', handleMouseMove);

    window.addEventListener('mouseout', handleMouseLeave);

    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener('mousemove', handleMouseMove);

      window.removeEventListener('mouseout', handleMouseLeave);

      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="constellation-canvas" />;
}

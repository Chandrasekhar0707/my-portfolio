import { useEffect, useRef } from 'react';

// A lightweight canvas particle field — chosen over Three.js/R3F to keep the
// bundle small and performance snappy, while still giving the "floating
// particles" effect the design calls for.
export default function ParticleBackground({ count = 60 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const colors = ['#7C3AED', '#2563EB', '#06B6D4'];

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function init() {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      }));
    }

    function drawFrame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    function loop() {
      drawFrame();
      animId = requestAnimationFrame(loop);
    }

    resize();
    init();
    if (!reduceMotion) loop();
    else drawFrame(); // single static frame, no animation loop

    const onResize = () => { resize(); init(); };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, [count]);

  return <canvas id="particle-canvas" ref={canvasRef} aria-hidden="true" />;
}

import { useEffect } from 'react';
import Lenis from 'lenis';

// Sets up Lenis for buttery-smooth scrolling across the whole page.
// Also keeps GSAP's ScrollTrigger (if used) in sync via the `scroll` event.
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Exposed so anchor links (Navbar, Hero, BackToTop) can trigger
    // Lenis-eased scrolling instead of the native scrollIntoView.
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);
}

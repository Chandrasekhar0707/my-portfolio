export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.lenis) {
    window.lenis.scrollTo(el, { offset: -20 });
  } else {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export function scrollToTop() {
  if (window.lenis) {
    window.lenis.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

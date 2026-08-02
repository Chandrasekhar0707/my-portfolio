import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { scrollToTop } from '../hooks/scrollUtils';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center
            bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/40"
        >
          <FaArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

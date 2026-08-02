import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white dark:bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="w-14 h-14 rounded-full border-4 border-primary-500/20 border-t-primary-500"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
            />
            <motion.p
              className="font-display font-semibold gradient-text text-lg tracking-wide"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            >
              Chandrasekhar Samal
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

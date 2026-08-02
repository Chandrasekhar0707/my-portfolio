import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { scrollToId } from '../hooks/scrollUtils';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(NAV_LINKS.map((l) => l.id));

  const scrollTo = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8 mt-3">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="font-display font-bold text-lg gradient-text tracking-tight"
          >
            Chandrasekhar<span className="text-slate-800 dark:text-white">.dev</span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  active === link.id
                    ? 'text-primary-600 dark:text-primary-300'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary-500'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-primary-500/10"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-300/60 dark:border-slate-700 hover:border-primary-500 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {theme === 'dark' ? <FaSun className="text-amber-400" /> : <FaMoon className="text-primary-600" />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href="/Chandrasekhar_Samal_Resume.pdf"
              download
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full
                bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md shadow-primary-500/30
                hover:shadow-primary-500/50 transition-shadow"
            >
              <FaDownload size={12} /> Resume
            </a>

            <button
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center border border-slate-300/60 dark:border-slate-700"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass rounded-2xl mt-2 overflow-hidden"
            >
              <div className="flex flex-col p-3">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium ${
                      active === link.id
                        ? 'bg-primary-500/10 text-primary-600 dark:text-primary-300'
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="/Chandrasekhar_Samal_Resume.pdf"
                  download
                  className="mt-2 text-center text-sm font-medium px-4 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white"
                >
                  Download Resume
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';
import profileImg from '../assets/profile.png';
import ParticleBackground from './ParticleBackground';
import FloatingTechIcons from './FloatingTechIcons';
import { scrollToId } from '../hooks/scrollUtils';

const ROLES = ['Frontend Developer', 'React Developer', 'MERN Stack Developer', 'Backend Developer', 'Python Developer'];

function useTypewriter(words, speed = 90, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const typed = useTypewriter(ROLES);
  const heroRef = useRef(null);

  // Mouse-parallax for the profile image: image drifts slightly toward the cursor.
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 60, damping: 15 });
  const springY = useSpring(mvY, { stiffness: 60, damping: 15 });
  const rotateX = useTransform(springY, [-40, 40], [8, -8]);
  const rotateY = useTransform(springX, [-40, 40], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 80;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 80;
    mvX.set(x);
    mvY.set(y);
  };
  const handleMouseLeave = () => { mvX.set(0); mvY.set(0); };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
    >
      {/* Layered animated background: grid + particles + gradient blobs */}
      <div className="absolute inset-0 -z-20 bg-grid" aria-hidden="true" />
      <ParticleBackground count={55} />
      <FloatingTechIcons />
      <div className="absolute top-0 -left-20 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-blob -z-10" aria-hidden="true" />
      <div className="absolute top-40 -right-10 w-96 h-96 bg-accent-400/30 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: '3s' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary-500/25 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: '6s' }} aria-hidden="true" />

      <div className="section-container !py-0 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium glass text-primary-600 dark:text-primary-300 mb-6">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Hi, I'm <span className="gradient-text">Chandrasekhar Samal</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-4 text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 h-9"
          >
            {typed}
            <span className="inline-block w-0.5 h-6 bg-primary-500 ml-1 align-middle animate-pulse" />
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 max-w-lg text-slate-500 dark:text-slate-400"
          >
            Final-year Computer Science student building responsive, modern web
            experiences with the MERN stack — and always shipping something new.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToId('contact'); }}
              className="btn-primary"
            >
              Hire Me <HiOutlineArrowRight />
            </a>
            <a href="/Chandrasekhar_Samal_Resume.pdf" download className="btn-secondary">
              <FaDownload size={13} /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8 flex items-center gap-4">
            {[
              { icon: FaGithub, href: 'https://github.com/Chandrasekhar0707', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/chandrasekhar-samal-a50356318', label: 'LinkedIn' },
              { icon: FaEnvelope, href: 'mailto:chandrasekharsamal981@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary-500 hover:shadow-glow hover:-translate-y-1 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative flex justify-center"
          style={{ perspective: 800 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 animate-float"
            style={{ x: springX, y: springY, rotateX, rotateY }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-400 blur-2xl opacity-40" />
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-400/50 animate-spin-slow" />
            <img
              src={profileImg}
              alt="Chandrasekhar Samal"
              className="relative w-full h-full object-cover rounded-full shadow-lg outline outline-black/5 dark:bg-slate-900 dark:shadow-none dark:-outline-offset-1 dark:outline-black/10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

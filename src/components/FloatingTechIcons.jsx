import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript } from 'react-icons/si';

// Gentle floating tech-stack icons in the hero background.
// Built with Framer Motion (already a project dependency) — no GSAP needed.
const ICONS = [
  { Icon: FaReact, color: '#61dafb', top: '12%', left: '8%', size: 34, duration: 5 },
  { Icon: SiJavascript, color: '#f7df1e', top: '68%', left: '6%', size: 26, duration: 6 },
  { Icon: FaNodeJs, color: '#3c873a', top: '20%', left: '90%', size: 30, duration: 4.5 },
  { Icon: SiTailwindcss, color: '#38bdf8', top: '78%', left: '88%', size: 30, duration: 5.5 },
  { Icon: FaHtml5, color: '#e34f26', top: '46%', left: '4%', size: 24, duration: 6.5 },
  { Icon: SiMongodb, color: '#47a248', top: '8%', left: '75%', size: 24, duration: 5 },
  { Icon: FaCss3Alt, color: '#1572b6', top: '90%', left: '70%', size: 24, duration: 4 },
  { Icon: FaGitAlt, color: '#f05032', top: '55%', left: '94%', size: 22, duration: 6 },
];

export default function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none hidden md:block" aria-hidden="true">
      {ICONS.map(({ Icon, color, top, left, size, duration }, i) => (
        <motion.div
          key={i}
          className="absolute opacity-30 dark:opacity-25"
          style={{ top, left }}
          animate={{
            y: [0, -18 - (i % 3) * 6, 0],
            x: i % 2 === 0 ? [0, 8, 0] : [0, -8, 0],
            rotate: i % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
          }}
          transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        >
          <Icon size={size} style={{ color }} />
        </motion.div>
      ))}
    </div>
  );
}

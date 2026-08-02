import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 260, damping: 18 } }}
      className="gradient-border"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card card-glow rounded-2xl overflow-hidden group transition-transform duration-200 will-change-transform h-full relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800/60">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div className="p-6">
          <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-300">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              <FaGithub size={14} /> GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white"
              >
                <FaExternalLinkAlt size={12} /> View Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

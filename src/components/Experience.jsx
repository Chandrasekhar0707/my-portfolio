import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My <span className="gradient-text">Experience</span>
      </motion.h2>
      <p className="section-sub">A timeline of internships that shaped my skills.</p>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-400 to-transparent md:-translate-x-1/2" />

        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative mb-10 pl-12 md:pl-0 md:w-1/2 ${
              i % 2 === 0 ? 'md:pr-10 md:ml-0' : 'md:pl-10 md:ml-auto'
            }`}
          >
            <span className="absolute left-2.5 md:left-auto md:right-auto top-1 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-primary-500/20
              md:top-1"
              style={i % 2 === 0 ? { right: '-8px' } : { left: '-8px' }}
            />
            <div className="card p-5">
              <div className="flex items-center gap-2 text-xs text-primary-500 font-medium mb-2">
                <FaBriefcase size={12} /> {item.duration}
              </div>
              <h3 className="font-display font-semibold">{item.role}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{item.company}</p>
              <ul className={`text-sm text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside ${i % 2 === 0 ? 'md:list-outside' : ''}`}>
                {item.points.map((p, pi) => <li key={pi}>{p}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

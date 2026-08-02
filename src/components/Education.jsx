import { motion } from 'framer-motion';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="section-container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My <span className="gradient-text">Education</span>
      </motion.h2>
      <p className="section-sub">The academic path that got me here.</p>

      <div className="relative max-w-4xl mx-auto">
        {/* Center timeline line */}
        <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500 via-accent-400 to-transparent md:-translate-x-1/2" />

        <div className="space-y-10 md:space-y-4">
          {education.map((item, i) => (
            <div key={item.id} className="relative">
              {/* Logo node on the line */}
              <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-10">
                <div className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-500 shadow-glow flex items-center justify-center overflow-hidden">
                  <img src={item.logo} alt={`${item.school} logo`} className="w-full h-full object-cover" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`card p-6 pl-16 md:pl-6 md:w-[calc(50%-2.5rem)] ${
                  i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <h3 className="font-display font-semibold text-lg">{item.degree}</h3>
                <p className="text-sm text-primary-500 dark:text-primary-300 font-medium mt-1">
                  {item.school}
                </p>
                {item.duration && (
                  <p className="text-xs text-slate-400 mt-1">{item.duration}</p>
                )}
                {item.grade && (
                  <span className="inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-300">
                    {item.grade}
                  </span>
                )}
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';

function SkillGroupCard({ group, index }) {
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
      key={group.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="relative"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card card-glow p-6 md:p-8 rounded-2xl transition-transform duration-200 will-change-transform h-full"
      >
        <h3 className="font-display font-bold text-xl md:text-2xl text-center mb-6">
          {group.title}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {group.skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-700/60
                  bg-white/60 dark:bg-slate-900/50 px-3 py-4 text-center hover:border-primary-500/60
                  hover:shadow-glow transition-colors duration-200"
              >
                <Icon size={28} style={{ color: skill.color }} />
                <span className="text-xs md:text-[13px] font-medium leading-tight text-slate-700 dark:text-slate-200">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My <span className="gradient-text">Skills</span>
      </motion.h2>
      <p className="section-sub">Technologies and tools I use to bring ideas to life.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group, gi) => (
          <SkillGroupCard key={group.title} group={group} index={gi} />
        ))}
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaLaptopCode, FaProjectDiagram, FaGithub } from 'react-icons/fa';

const STATS = [
  { icon: FaBriefcase, value: 4, suffix: '+', label: 'Internships' },
  { icon: FaLaptopCode, value: 100, suffix: '%', label: 'Responsive Web Design' },
  { icon: FaProjectDiagram, value: 6, suffix: '+', label: 'Projects Completed' },
  { icon: FaGithub, value: 22, suffix: '+', label: 'GitHub Repositories' },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="section-container !pt-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 text-center"
            >
              <Icon className="mx-auto text-primary-500 mb-3" size={22} />
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

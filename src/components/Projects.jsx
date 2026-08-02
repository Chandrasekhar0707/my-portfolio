import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>
      <p className="section-sub">A selection of things I've built and shipped to GitHub.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

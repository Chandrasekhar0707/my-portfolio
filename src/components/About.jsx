import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaCode } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.h2
        className="section-heading"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        About <span className="gradient-text">Me</span>
      </motion.h2>
      <motion.p
        className="section-sub"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        A little about who I am and what I love building.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto"
        >
          <div className="card p-3 rounded-3xl max-w-xs mx-auto">
            <img src={profileImg} alt="Chandrasekhar Samal" className="rounded-2xl w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            I am a passionate <strong className="text-slate-800 dark:text-white">Frontend and MERN Stack
            Developer</strong> with a strong foundation in HTML, CSS, JavaScript, React.js, Node.js,
            Express.js and MongoDB. I enjoy creating responsive, modern and user-friendly web
            applications. I continuously learn new technologies and love solving real-world
            problems through code.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: FaMapMarkerAlt, label: 'Location', value: 'Bhubaneswar, Odisha, India' },
              { icon: FaGraduationCap, label: 'Degree', value: 'B.Tech CSE (2022-2026)' },
              { icon: FaCode, label: 'Focus', value: 'Full Stack Web Development' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="card p-4 text-center">
                <Icon className="mx-auto text-primary-500 mb-2" size={18} />
                <p className="text-xs text-slate-400">{label}</p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

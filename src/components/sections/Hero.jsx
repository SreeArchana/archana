import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { FiArrowRight, FiCheckCircle, FiDownload, FiMail, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { profile } from '../../data/profile.js';

const techIcons = [FaReact, FaJs, FaHtml5, FaCss3Alt];

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero-copy">
        <motion.div className="hero-status" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <span><FiCheckCircle /> Open to frontend roles</span>
          <span><FiMapPin /> {profile.location}</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          React interfaces recruiters can trust.
        </motion.h1>
        <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          I build responsive web applications using React.js, JavaScript, and modern frontend technologies. My focus is creating intuitive user experiences, reusable components, and clean code that scales.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <a className="button primary" href="#featured-projects">View My Work <FiArrowRight /></a>
          <Link className="button secondary" to="/contact">Contact Me <FiMail /></Link>
          <a className="button ghost" href={profile.resume} download>Download Resume <FiDownload /></a>
        </motion.div>
        <motion.div className="hero-proof" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
          {profile.highlights.map((item) => <span key={item}>{item}</span>)}
        </motion.div>
      </div>

      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }}>
        <div className="hero-panel-top">
          <div>
            <span className="status-dot" />
            production-ready-ui.jsx
          </div>
          <span>React</span>
        </div>
        <div className="code-card">
          <p><span>const</span> developer = {'{'}</p>
          <p>&nbsp;&nbsp;name: <strong>'Sree Archana'</strong>,</p>
          <p>&nbsp;&nbsp;focus: <strong>'React UI systems'</strong>,</p>
          <p>&nbsp;&nbsp;worksWith: <strong>['APIs', 'routing', 'responsive layouts']</strong></p>
          <p>{'};'}</p>
        </div>
        <div className="hero-metrics" aria-label="Portfolio highlights">
          <article><strong>2+</strong><span>Years building frontend interfaces</span></article>
          <article><strong>6</strong><span>React projects presented clearly</span></article>
        </div>
        <div className="hero-signature">
          <span>SYA</span>
          <div>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </div>
        </div>
        <div className="orbital" aria-hidden="true">
          {techIcons.map((Icon, index) => (
            <motion.span
              key={index}
              className={`tech-icon tech-${index + 1}`}
              animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Icon />
            </motion.span>
          ))}
        </div>
        <motion.div className="react-orbit" animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}>
          <FaReact />
        </motion.div>
      </motion.div>
    </section>
  );
}

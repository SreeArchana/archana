import { motion } from 'framer-motion';
import { skills } from '../../data/skills.js';
import Reveal from '../ui/Reveal.jsx';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <Reveal className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Frontend tools used to build maintainable React interfaces.</h2>
      </Reveal>
      <div className="skill-grid">
        {skills.map((group, index) => (
          <Reveal key={group.group} delay={index * 0.04} className="skill-card">
            <h3>{group.group}</h3>
            {group.items.map((item) => (
              <div className="skill-row" key={item.name}>
                <div><span>{item.name}</span><small>{item.level}%</small></div>
                <div className="skill-track">
                  <motion.span initial={{ width: 0 }} whileInView={{ width: `${item.level}%` }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }} />
                </div>
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

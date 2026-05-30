import { experience } from '../../data/experience.js';
import Reveal from '../ui/Reveal.jsx';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <Reveal className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Recent work focused on React interfaces, dashboards, and team delivery.</h2>
      </Reveal>
      <div className="experience-timeline">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 0.08} className="experience-item">
            <div className="timeline-dot" />
            <article>
              <p className="eyebrow">{item.date}</p>
              <h3>{item.company} <span>{item.type}</span></h3>
              <strong>{item.role}</strong>
              <div className="two-list">
                <div>
                  <h4>Responsibilities</h4>
                  <ul>{item.responsibilities.map((line) => <li key={line}>{line}</li>)}</ul>
                </div>
                <div>
                  <h4>Achievements</h4>
                  <ul>{item.achievements.map((line) => <li key={line}>{line}</li>)}</ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

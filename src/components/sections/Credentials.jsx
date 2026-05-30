import { FiAward, FiBookOpen, FiGlobe } from 'react-icons/fi';
import { profile } from '../../data/profile.js';
import Reveal from '../ui/Reveal.jsx';

export default function Credentials() {
  return (
    <section className="section credential-grid" id="credentials">
      <Reveal className="credential-card">
        <FiAward />
        <p className="eyebrow">Certification</p>
        <h3>Frontend Development Training</h3>
        <p>Frontlines Media - India</p>
        <div className="tag-row">
          {['HTML5', 'CSS3', 'JavaScript', 'React.js Fundamentals', 'API Integration', 'UI Design Principles'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </Reveal>
      <Reveal delay={0.08} className="credential-card">
        <FiBookOpen />
        <p className="eyebrow">Education</p>
        <h3>Bachelor of Science</h3>
        <p>Usha Rama College of Engineering & Technology</p>
        <strong>2017 - 2021</strong>
      </Reveal>
      <Reveal delay={0.16} className="credential-card">
        <FiGlobe />
        <p className="eyebrow">Languages</p>
        <h3>Communication</h3>
        {profile.languages.map((language) => <p key={language}>{language}</p>)}
      </Reveal>
    </section>
  );
}

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../../data/profile.js';
import Reveal from '../ui/Reveal.jsx';

export default function ContactPanel() {
  return (
    <section className="section contact-cta">
      <Reveal>
        <p className="eyebrow">Available for frontend roles</p>
        <h2>Interested in React roles in France and Europe.</h2>
        <p>For recruiter conversations, project discussions, or frontend opportunities, email is the most reliable way to reach me.</p>
        <div className="social-row">
          <a href={`mailto:${profile.email}`}><FiMail /> Email</a>
          <span className="is-disabled"><FiLinkedin /> LinkedIn pending</span>
          <span className="is-disabled"><FiGithub /> GitHub pending</span>
        </div>
      </Reveal>
    </section>
  );
}

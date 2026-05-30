import { FiMail, FiMapPin } from 'react-icons/fi';
import { profile } from '../../data/profile.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{profile.name}</strong>
        <p>{profile.role}</p>
      </div>
      <div className="footer-meta">
        <span><FiMapPin /> {profile.location}</span>
        <a href={`mailto:${profile.email}`}><FiMail /> {profile.email}</a>
      </div>
    </footer>
  );
}

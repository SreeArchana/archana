import { NavLink } from 'react-router-dom';
import { FiDownload, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext.jsx';
import { profile } from '../../data/profile.js';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
];

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="nav-shell" aria-label="Primary navigation">
        <NavLink className="brand" to="/" aria-label="Sree Archana Yanamadala home">
          <span>SYA</span>
        </NavLink>
        <div className="nav-links">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Toggle dark mode">
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <a className="icon-button" href={profile.resume} download aria-label="Download resume">
            <FiDownload />
          </a>
        </div>
      </nav>
    </header>
  );
}

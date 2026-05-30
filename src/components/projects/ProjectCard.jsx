import { FiArrowUpRight, FiCode } from 'react-icons/fi';
import Reveal from '../ui/Reveal.jsx';

export default function ProjectCard({ project, onOpen, index = 0 }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.25)} className="project-card">
      <button type="button" onClick={() => onOpen(project)} className="project-button">
        <div className="project-preview" aria-hidden="true">
          <FiCode />
          <span>{project.category}</span>
        </div>
        <div className="project-body">
          <p className="eyebrow">{project.tech.slice(0, 2).join(' / ')}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-row">
            {project.tech.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
          </div>
          <span className="card-link">View details <FiArrowUpRight /></span>
        </div>
      </button>
    </Reveal>
  );
}

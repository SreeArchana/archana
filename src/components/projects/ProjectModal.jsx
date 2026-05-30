import { useEffect, useRef } from 'react';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const linkProps = (url) => url ? { href: url, target: '_blank', rel: 'noreferrer' } : { 'aria-disabled': true };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onMouseDown={(event) => event.stopPropagation()}>
        <button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
          <FiX />
        </button>
        <div className="modal-preview" aria-hidden="true">
          <span>{project.title}</span>
        </div>
        <div className="modal-content">
          <p className="eyebrow">Project details</p>
          <h2 id="project-title">{project.title}</h2>
          <p>{project.description}</p>

          <div className="modal-grid">
            <article>
              <h3>Technologies</h3>
              <div className="tag-row">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
            <article>
              <h3>Challenge</h3>
              <p>{project.challenge}</p>
            </article>
            <article>
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </article>
            <article>
              <h3>Features</h3>
              <ul>{project.features.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>

          <div className="modal-actions">
            <a className={!project.github ? 'is-disabled' : ''} {...linkProps(project.github)}><FiGithub /> GitHub link pending</a>
            <a className={!project.demo ? 'is-disabled' : ''} {...linkProps(project.demo)}><FiExternalLink /> Live demo pending</a>
          </div>
        </div>
      </section>
    </div>
  );
}

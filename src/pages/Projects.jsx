import { useEffect, useMemo, useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import ProjectModal from '../components/projects/ProjectModal.jsx';
import Seo from '../components/ui/Seo.jsx';
import { getProjects } from '../services/projectsApi.js';

const filters = ['all', 'dashboard', 'website', 'application', 'api'];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    getProjects().then(setProjects).catch(() => setProjects([]));
  }, []);

  const filteredProjects = useMemo(() => (
    filter === 'all' ? projects : projects.filter((project) => project.category === filter)
  ), [filter, projects]);

  return (
    <>
      <Seo title="Projects" description="React project work by Sree Archana Yanamadala, including dashboards, API interfaces, business websites, and productivity applications." />
      <section className="section page-hero">
        <p className="eyebrow">Projects</p>
        <h1>React applications with clear interfaces and practical patterns.</h1>
        <p>Each project focuses on reusable components, responsive design, and everyday frontend concerns recruiters expect to see.</p>
      </section>
      <section className="section compact-section">
        <div className="filter-bar" role="tablist" aria-label="Project filters">
          {filters.map((item) => (
            <button key={item} type="button" className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filteredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setActiveProject} />)}
        </div>
      </section>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}

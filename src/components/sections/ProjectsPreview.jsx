import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { getProjects } from '../../services/projectsApi.js';
import ProjectCard from '../projects/ProjectCard.jsx';
import ProjectModal from '../projects/ProjectModal.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function ProjectsPreview() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    getProjects().then((data) => setProjects(data.slice(0, 3))).catch(() => setProjects([]));
  }, []);

  return (
    <section className="section" id="featured-projects">
      <Reveal className="section-heading row-heading">
        <div>
          <p className="eyebrow">Featured projects</p>
          <h2>Selected React work with practical product patterns.</h2>
        </div>
        <Link className="text-link" to="/projects">All projects <FiArrowRight /></Link>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setActiveProject} />)}
      </div>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

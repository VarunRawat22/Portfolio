import { projects } from '../data/projects';
import './Projects.css';

/**
 * Projects section: list of projects from data file with GitHub and Live links.
 */
function Projects() {
  return (
    <div className="projects">
      <h2 className="projects__title">Projects</h2>
      <p className="projects__subtitle">
        A selection of full-stack and frontend projects I've built.
      </p>
      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__tech">
              {project.tech.map((t) => (
                <span key={t} className="project-card__tag">{t}</span>
              ))}
            </div>
            <div className="project-card__links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__link">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;

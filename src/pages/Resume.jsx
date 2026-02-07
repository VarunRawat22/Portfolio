import './Resume.css';
import { projects } from '../data/projects';

const skillGroups = [
  { title: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design'] },
  { title: 'Backend & Data', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT Auth'] },
  { title: 'Tools', items: ['Git & GitHub', 'VS Code', 'npm', 'Vite', 'Chrome DevTools'] },
];

/**
 * Resume section: short preview (Skills, Projects, Education) + Download CTA.
 */
function Resume() {
  return (
    <div className="resume">
      <h2 className="resume__title">Resume</h2>
      <p className="resume__intro">
        A concise overview of my skills, projects, and education. Download the full PDF for details.
      </p>

      <div className="resume__preview">
        <div className="resume__block">
          <h3 className="resume__subtitle">Skills</h3>
          <ul className="resume__list">
            {skillGroups.map((group) => (
              <li key={group.title}>
                <strong>{group.title}:</strong>{' '}
                {group.items.join(', ')}
              </li>
            ))}
          </ul>
        </div>

        <div className="resume__block">
          <h3 className="resume__subtitle">Projects</h3>
          <ul className="resume__list">
            {projects.slice(0, 3).map((p) => (
              <li key={p.id}>
                <strong>{p.title}</strong> — {p.tech.slice(0, 3).join(', ')}
              </li>
            ))}
          </ul>
        </div>

        <div className="resume__block">
          <h3 className="resume__subtitle">Education</h3>
          <ul className="resume__list">
            <li>Bachelor&apos;s degree / relevant coursework in Computer Science or related field</li>
          </ul>
        </div>
      </div>

      <div className="resume__cta-wrapper">
        <a
          href="/Varun_Resume_Web_Developer.pdf.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary resume__cta"
          aria-label="View or download resume PDF (opens in new tab)"
        >
          Download Resume
        </a>
        <p className="resume__meta">Last updated: Feb 2026</p>
      </div>
    </div>
  );
}

export default Resume;

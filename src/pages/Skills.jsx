import './Skills.css';

/**
 * Skills section: Frontend, Backend basics, Tools in a clear grid.
 */
const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT Auth'],
  },
  {
    title: 'Tools',
    items: ['Git & GitHub', 'VS Code', 'npm', 'Vite', 'Chrome DevTools'],
  },
];

function Skills() {
  return (
    <div className="skills">
      <h2 className="skills__title">Skills</h2>
      <p className="skills__subtitle">
        Technologies and tools I use to build and ship projects.
      </p>
      <div className="skills__grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3 className="skill-group__title">{group.title}</h3>
            <ul className="skill-group__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

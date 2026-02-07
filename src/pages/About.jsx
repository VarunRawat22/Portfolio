import './About.css';

/**
 * About Me: short bio and skills overview.
 */
function About() {
  return (
    <div className="about">
      <h2 className="about__title">About Me</h2>
      <div className="about__grid">
        <div className="about__bio">
          <p>
            I'm a web developer focused on building clean, maintainable applications. 
            I enjoy working with React for the frontend and have experience with Node.js and MongoDB for full-stack projects.
          </p>
          <p>
            I'm currently strengthening my skills in modern JavaScript, REST APIs, and responsive design, 
            and I'm eager to apply what I've learned in an internship or junior role.
          </p>
        </div>
        <div className="about__highlights">
          <h3 className="about__subtitle">Quick highlights</h3>
          <ul>
            <li>Built full-stack projects with MERN stack</li>
            <li>Comfortable with Git and component-based UI</li>
            <li>Focused on readable code and user experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

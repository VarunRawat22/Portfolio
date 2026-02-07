import './Hero.css';

/**
 * Hero / Home section: name, role, short intro and CTA.
 */
function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero__content">
        <div className="hero__avatar-wrapper">
          <img
            src="/profile.jpg.jpg"
            alt="Varun Singh Rawat"
            className="hero__avatar"
          />
        </div>
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">Varun Singh Rawat</h1>
        <p className="hero__role">Web Developer</p>
        <p className="hero__intro">
          I build responsive web applications with React and Node.js. 
          Currently looking for internship opportunities to grow and contribute to real-world projects.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact" className="btn btn--secondary">Get in Touch</a>
          <a
            href="/Varun_Resume_Web_Developer.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--resume"
            aria-label="View or download resume (opens in new tab)"
          >
            Resume
          </a>
        </div>
        <p className="hero__resume-meta">Last updated: Feb 2026</p>
      </div>
    </header>
  );
}

export default Hero;

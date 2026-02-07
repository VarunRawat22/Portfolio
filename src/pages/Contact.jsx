import './Contact.css';

/**
 * Contact section: email, GitHub, LinkedIn and short CTA.
 */
function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">Contact</h2>
      <p className="contact__intro">
        I'm open to internship and collaboration opportunities. 
        Reach out via email or connect on LinkedIn or GitHub.
      </p>
      <div className="contact__links">
        <a href="mailto:varunrwt03@gmail.com" className="contact__link">
          varunrwt03@gmail.com
        </a>
        <a href="https://github.com/VarunRawat22" target="_blank" rel="noopener noreferrer" className="contact__link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/varunrawat2/" target="_blank" rel="noopener noreferrer" className="contact__link">
          LinkedIn
        </a>
      </div>
      <a href="mailto:varunrwt03@gmail.com" className="btn btn--primary contact__cta">
        Send an email
      </a>
    </div>
  );
}

export default Contact;

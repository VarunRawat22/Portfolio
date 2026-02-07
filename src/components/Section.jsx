import './Section.css';

/**
 * Reusable section wrapper for consistent layout and optional animation.
 * @param {string} id - Section id for anchor links and scroll spy
 * @param {string} className - Optional extra class names
 * @param {React.ReactNode} children
 */
function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      {children}
    </section>
  );
}

export default Section;

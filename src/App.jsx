import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

/**
 * Single-page portfolio layout. Sections are wrapped for scroll-spy and animation.
 * Customize content in: src/data/projects.js, and placeholder text in each page component.
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section id="about">
          <About />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="resume">
          <Resume />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;

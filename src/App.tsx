import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionsRef.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const registerSection = (id: string) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el;
  };

  return (
    <div className="bg-[#020818] text-white overflow-x-hidden">
      <ParticleBackground />
      <Navbar activeSection={activeSection} />
      <main>
        <section id="hero" ref={registerSection('hero')}>
          <Hero />
        </section>
        <section id="about" ref={registerSection('about')}>
          <About />
        </section>
        <section id="skills" ref={registerSection('skills')}>
          <Skills />
        </section>
        <section id="experience" ref={registerSection('experience')}>
          <Experience />
        </section>
        <section id="education" ref={registerSection('education')}>
          <Education />
        </section>
        <section id="interests" ref={registerSection('interests')}>
          <Interests />
        </section>
        <section id="contact" ref={registerSection('contact')}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;

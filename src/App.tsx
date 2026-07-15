import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { CustomCursor, MouseGlow, FloatingBlobs, Particles } from './components/Effects';

function SectionDivider() {
  return <div className="section-divider" />;
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // After loader fades out, set loaded
    const timer = setTimeout(() => setLoaded(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  // Trigger initial reveals after page load
  useEffect(() => {
    if (loaded) {
      // Observe all .reveal elements that are in viewport on load
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.1 }
      );

      setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate').forEach(el => {
          observer.observe(el);
        });
      }, 100);

      return () => observer.disconnect();
    }
  }, [loaded]);

  return (
    <>
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <MouseGlow />
      <FloatingBlobs />
      <Particles />
      <Navbar />

      <Hero />
      <SectionDivider />

      <About />
      <SectionDivider />

      <Skills />
      <SectionDivider />

      <Projects />
      <SectionDivider />

      <Achievements />
      <SectionDivider />

      <Timeline />
      <SectionDivider />

      <Services />
      <SectionDivider />

      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

import { useState, useEffect, useRef } from 'react'
import './styles/globals.css'

// Import components
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Import hooks
import { useScrollReveal } from './hooks/useScrollReveal'
import { useSkillBars } from './hooks/useSkillBars'
import { useCountUp } from './hooks/useCountUp'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [backTopVisible, setBackTopVisible] = useState(false)
  const progressRef = useRef(null)
  
  useScrollReveal()
  useSkillBars()
  useCountUp()
  
  // Force reflow and ensure CSS classes are applied
  useEffect(() => {
    // Trigger a reflow to ensure CSS transitions work
    document.body.style.display = 'none';
    document.body.offsetHeight; // Force reflow
    document.body.style.display = '';
  }, []);
  
  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;
      if (progressRef.current) {
        progressRef.current.style.width = scrolled + '%';
      }
      setBackTopVisible(window.scrollY > 400);
      
      // Manual scroll spy for nav links
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-links a');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
          link.style.color = 'var(--accent)';
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Page loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div id="page-loader">
        <div className="loader-logo">VB<span>.dev</span></div>
        <div className="loader-bar-track">
          <div className="loader-bar-fill"></div>
        </div>
        <div className="loader-label">Loading portfolio…</div>
      </div>
    );
  }
  
  return (
    <>
      <Cursor />
      <canvas id="particle-canvas"></canvas>
      <div id="scroll-progress" ref={progressRef}></div>
      <a href="#hero" id="back-top" className={backTopVisible ? 'visible' : ''}>
        <i className="bi bi-arrow-up"></i>
      </a>
      <div className="hero-bg-grid"></div>
      <div className="hero-orb-1"></div>
      <div className="hero-orb-2"></div>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
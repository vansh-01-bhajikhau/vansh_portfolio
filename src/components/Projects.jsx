import { useEffect } from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
      
      const mx = ((x + 0.5) * 100).toFixed(1);
      const my = ((y + 0.5) * 100).toFixed(1);
      card.style.setProperty('--mx', mx + '%');
      card.style.setProperty('--my', my + '%');
    };
    
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = '';
    };
    
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">03 — Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <div className="section-bar mx-auto"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card reveal">
              <div className="project-card-top"></div>
              <div className="project-num">{project.num}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <div className="project-pills">
                {project.pills.map((pill, pillIdx) => (
                  <span key={pillIdx} className="pill">{pill}</span>
                ))}
              </div>
              <ul className="project-bullets">
                {project.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} dangerouslySetInnerHTML={{ __html: bullet }}></li>
                ))}
              </ul>
              <div className="project-metrics">
                {project.metrics.map((metric, metricIdx) => (
                  <div key={metricIdx} className="metric">
                    <span className="metric-n">{metric.n}</span>
                    <span className="metric-l">{metric.l}</span>
                  </div>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
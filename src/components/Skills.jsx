import { useEffect } from 'react';
import { skills } from '../data/skills';

export default function Skills() {
  // 3D tilt effect
  useEffect(() => {
    const cards = document.querySelectorAll('.skill-card');
    
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-5px)`;
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
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">02 — Skills</span>
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="section-bar mx-auto"></div>
        </div>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-card reveal">
              <i className={`bi ${skill.icon} skill-card-icon`}></i>
              <div className="skill-card-title">{skill.title}</div>
              {skill.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className="tag">{tag}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
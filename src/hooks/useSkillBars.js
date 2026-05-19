import { useEffect } from 'react';

export const useSkillBars = () => {
  useEffect(() => {
    const bars = document.querySelectorAll('.bar-fill');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-w');
          if (width) {
            entry.target.style.width = width + '%';
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    bars.forEach(bar => observer.observe(bar));
    
    return () => {
      bars.forEach(bar => observer.unobserve(bar));
      observer.disconnect();
    };
  }, []);
};
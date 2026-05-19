import { useEffect } from 'react';

export const useCountUp = () => {
  useEffect(() => {
    const statNums = document.querySelectorAll('.stat-num');
    const statsData = [
      { suffix: '+', val: 4 },
      { suffix: '×', val: 3 },
      { suffix: 'K+', val: 8 }
    ];
    
    const countUp = (el, target, suffix) => {
      let current = 0;
      const step = target / 50;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.innerHTML = Math.floor(current) + '<em>' + suffix + '</em>';
        if (current >= target) clearInterval(timer);
      }, 30);
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            countUp(entry.target, statsData[i]?.val || 0, statsData[i]?.suffix || '');
          }, i * 150);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    statNums.forEach(stat => observer.observe(stat));
    
    return () => {
      statNums.forEach(stat => observer.unobserve(stat));
      observer.disconnect();
    };
  }, []);
};
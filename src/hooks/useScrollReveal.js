import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Target all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    // Add initial styles if not present
    revealElements.forEach(el => {
      if (el.classList.contains('reveal')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
      } else if (el.classList.contains('reveal-left')) {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-30px)';
      } else if (el.classList.contains('reveal-right')) {
        el.style.opacity = '0';
        el.style.transform = 'translateX(30px)';
      }
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });
    
    // Create observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add a small delay for staggered animation
            setTimeout(() => {
              entry.target.classList.add('in');
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translate(0, 0)';
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Triggers a bit earlier
      }
    );
    
    // Observe all elements
    revealElements.forEach(el => observer.observe(el));
    
    // Also observe any dynamically added elements
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      newElements.forEach(el => {
        if (!el.hasAttribute('data-observed')) {
          el.setAttribute('data-observed', 'true');
          observer.observe(el);
        }
      });
    });
    
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
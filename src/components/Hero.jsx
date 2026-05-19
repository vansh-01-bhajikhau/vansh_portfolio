import { useEffect, useRef } from 'react';
import  v1  from '../assets/v1.jpeg';

export default function Hero() {
    const roleRef = useRef(null);

    useEffect(() => {
        const phrases = [
            'Full Stack Developer',
            'MERN Stack Developer',
            'Angular Specialist',
            'React Developer',
            'Node.js Engineer',
        ];
        const roleEl = roleRef.current;
        if (!roleEl) return;

        let pi = 0, ci = 0, deleting = false;

        const type = () => {
            const phrase = phrases[pi];
            if (!deleting) {
                roleEl.textContent = phrase.slice(0, ++ci);
                if (ci === phrase.length) {
                    deleting = true;
                    setTimeout(type, 1800);
                    return;
                }
            } else {
                roleEl.textContent = phrase.slice(0, --ci);
                if (ci === 0) {
                    deleting = false;
                    pi = (pi + 1) % phrases.length;
                }
            }
            setTimeout(type, deleting ? 45 : 90);
        };

        const timeout = setTimeout(type, 1200);
        return () => clearTimeout(timeout);
    }, []);

    // Magnetic button effect
    useEffect(() => {
        const btns = document.querySelectorAll('.btn-primary, .btn-outline, .nav-cta');

        const handleMouseMove = (e) => {
            const btn = e.currentTarget;
            const rect = btn.getBoundingClientRect();
            const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.3;
            const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.3;
            btn.style.transform = `translate(${dx}px, ${dy}px)`;
        };

        const handleMouseLeave = (e) => {
            e.currentTarget.style.transform = '';
        };

        btns.forEach(btn => {
            btn.addEventListener('mousemove', handleMouseMove);
            btn.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            btns.forEach(btn => {
                btn.removeEventListener('mousemove', handleMouseMove);
                btn.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <section id="hero">
            <div className="hero-left">
                <div className="hero-eyebrow">
                    <span className="hero-eyebrow-dot"></span>
                    Available for opportunities
                </div>
                <h1 className="hero-name">
                    Vansh<br />
                    <span className="line2">Bhajikhau</span>
                </h1>
                <p className="hero-role">
                    <span ref={roleRef} className="highlight">Full Stack Developer</span>
                </p>
                <p className="hero-desc">
                    Motivated Full Stack Developer and BCA graduate with hands-on experience building RESTful APIs, real-time web applications, and responsive frontends using Angular, React, Node.js, and Firebase. Proficient in state management, NoSQL databases, and component-driven architecture.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn-primary">
                        <span>View Work</span>
                        <i className="bi bi-arrow-down-right"></i>
                    </a>
                    <a href="mailto:vanshbhajikhau90@gmail.com" className="btn-outline">
                        <i className="bi bi-envelope"></i> Get in Touch
                    </a>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <div className="stat-num">4<em>+</em></div>
                        <div className="stat-lbl">Projects Shipped</div>
                    </div>
                    <div className="stat">
                        <div className="stat-num">3<em>×</em></div>
                        <div className="stat-lbl">Deployed Live</div>
                    </div>
                    <div className="stat">
                        <div className="stat-num">8<em>K+</em></div>
                        <div className="stat-lbl">Data Points Analysed</div>
                    </div>
                </div>
            </div>

            <div className="hero-right">
                <div className="photo-frame-outer">
                    <div className="photo-frame-inner">




                        <img
                            src={v1}
                            alt="Vansh Bhajikhau"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top'
                            }}
                        />
                    </div>
                </div>

                <div className="badge-float b1">
                    <span className="badge-dot dot-green"></span>
                    <span style={{ color: 'var(--text)' }}>MERN Stack</span>
                </div>
                <div className="badge-float b2">
                    <span className="badge-dot dot-blue"></span>
                    <span style={{ color: 'var(--text)' }}>Angular + Firebase</span>
                </div>
                <div className="badge-float b3">
                    <span className="badge-dot dot-purple"></span>
                    <span style={{ color: 'var(--text)' }}>BCA Graduate '26</span>
                </div>
            </div>
        </section>
    );
}
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="reveal-left">
            <span className="section-label">01 — About</span>
            <h2 className="section-title">The Developer<br />Behind the Code</h2>
            <div className="section-bar"></div>
            <div className="about-text">
              <p>
                Motivated Full Stack Developer and BCA graduate with hands-on experience building RESTful APIs, real-time web applications, and responsive frontends using Angular, React, Node.js, and Firebase.
              </p>
              <p>
                Proficient in state management, NoSQL databases, and component-driven architecture. Eager to contribute to a collaborative development team, write clean maintainable code, and grow through real-world engineering challenges.
              </p>
              <p>
                Passionate about open-source contribution, system design, backend architecture, and scalable API development — with AI-assisted workflows already part of my everyday toolkit.
              </p>
              <div className="interest-tags">
                <span className="interest-tag">🔭 Open-Source</span>
                <span className="interest-tag">⚙️ System Design</span>
                <span className="interest-tag">🚀 Backend Architecture</span>
                <span className="interest-tag">🤖 AI-Assisted Dev</span>
                <span className="interest-tag">📦 Scalable APIs</span>
              </div>
            </div>
          </div>
          
          <div className="reveal-right">
            <div className="hero-code-card" style={{ marginBottom: '1.5rem' }}>
              <div className="code-titlebar">
                <span className="dot-r"></span><span className="dot-y"></span><span className="dot-g"></span>
                <span className="code-file">developer.ts</span>
              </div>
              <div>
                <span className="kw">const</span> <span className="fn">vansh</span> = {'{'}<br />
                &nbsp;&nbsp;<span className="key">role</span>: <span className="str">"Full Stack Developer"</span>,<br />
                &nbsp;&nbsp;<span className="key">stack</span>: [<span className="str">"MERN"</span>, <span className="str">"Angular"</span>, <span className="str">"Firebase"</span>],<br />
                &nbsp;&nbsp;<span className="key">location</span>: <span className="str">"Surat, Gujarat 🇮🇳"</span>,<br />
                &nbsp;&nbsp;<span className="key">education</span>: <span className="str">"BCA — VNSGU 2026"</span>,<br />
                &nbsp;&nbsp;<span className="key">openTo</span>: <span className="str">"Full-time / Collaborative Team"</span>,<br />
                &nbsp;&nbsp;<span className="key">aiTools</span>: [<span className="str">"Copilot"</span>, <span className="str">"ChatGPT"</span>],<br />
                {'};'}<span className="cursor-blink"></span>
              </div>
            </div>
            
            <div className="proficiency-card">
              <div className="proficiency-card-title">Proficiency Overview</div>
              <div className="bar-wrap">
                <div className="bar-header"><span>Angular / TypeScript</span><span className="bar-val">92%</span></div>
                <div className="bar-track"><div className="bar-fill" data-w="92"></div></div>
              </div>
              <div className="bar-wrap">
                <div className="bar-header"><span>React / JSX</span><span className="bar-val">85%</span></div>
                <div className="bar-track"><div className="bar-fill" data-w="85"></div></div>
              </div>
              <div className="bar-wrap">
                <div className="bar-header"><span>Node.js / Express</span><span className="bar-val">82%</span></div>
                <div className="bar-track"><div className="bar-fill" data-w="82"></div></div>
              </div>
              <div className="bar-wrap">
                <div className="bar-header"><span>Firebase / Firestore</span><span className="bar-val">88%</span></div>
                <div className="bar-track"><div className="bar-fill" data-w="88"></div></div>
              </div>
              <div className="bar-wrap">
                <div className="bar-header"><span>MongoDB / NoSQL</span><span className="bar-val">80%</span></div>
                <div className="bar-track"><div className="bar-fill" data-w="80"></div></div>
              </div>
              <div className="bar-wrap">
                <div className="bar-header"><span>Python / Data Analysis</span><span className="bar-val">72%</span></div>
                <div className="bar-track"><div className="bar-fill" data-w="72"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
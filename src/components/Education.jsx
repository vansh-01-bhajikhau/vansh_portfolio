import {achievements} from '../data/achievements'

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="edu-ach-grid">
          <div className="reveal-left">
            <span className="section-label">04 — Education</span>
            <h2 className="section-title">Background</h2>
            <div className="section-bar"></div>
            <div className="edu-card">
              <div className="edu-degree">Bachelor of Computer Applications (BCA)</div>
              <div className="edu-uni">Veer Narmad South Gujarat University</div>
              <div className="edu-meta">📍 Gujarat, India &nbsp;·&nbsp; 🎓 Completed 2026</div>
              <div className="edu-body">
                Built a strong foundation in software engineering, data structures, algorithms, and web development —
                applying every concept directly through real-world projects.
              </div>
            </div>
          </div>
          
          <div className="reveal-right">
            <span className="section-label">05 — Achievements</span>
            <h2 className="section-title">Highlights</h2>
            <div className="section-bar"></div>
            <div className="ach-list">
              {achievements.map((ach, idx) => (
                <div key={idx} className="ach-item">
                  <div className="ach-icon"><i className={`bi ${ach.icon}`}></i></div>
                  <div className="ach-text" dangerouslySetInnerHTML={{ __html: ach.text }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Contact() {
  const contacts = [
    { icon: "bi-envelope-fill", label: "Email", value: "vanshbhajikhau90@gmail.com", href: "mailto:vanshbhajikhau90@gmail.com" },
    { icon: "bi-linkedin", label: "LinkedIn", value: "linkedin.com/in/vansh-bhajikhau-228899263", href: "https://linkedin.com/in/vansh-bhajikhau-228899263" },
    { icon: "bi-github", label: "GitHub", value: "github.com/vansh-01-bhajikhau", href: "https://github.com/vansh-01-bhajikhau" },
  ];
  
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-wrap reveal">
          <span className="section-label" style={{ display: 'block', marginBottom: '.75rem' }}>06 — Contact</span>
          <h2 className="section-title">Let's Build Together</h2>
          <div className="section-bar mx-auto"></div>
          <p className="contact-sub">
            I'm actively looking for full-stack development opportunities. Whether it's a full-time role, freelance project, or a quick chat — my inbox is open.
          </p>
          <div className="contact-links">
            {contacts.map((contact, idx) => (
              <a key={idx} href={contact.href} target={contact.href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer" className="contact-item">
                <div className="contact-item-icon"><i className={`bi ${contact.icon}`}></i></div>
                <div>
                  <span className="contact-item-label">{contact.label}</span>
                  <span className="contact-item-val">{contact.value}</span>
                </div>
                <i className="bi bi-arrow-right contact-item-arrow"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
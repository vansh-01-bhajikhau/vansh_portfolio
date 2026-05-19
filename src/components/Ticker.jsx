export default function Ticker() {
  const tickerItems = [
    "MERN Stack", "Angular", "React", "TypeScript", "Node.js", "Express.js",
    "MongoDB", "Firebase", "RxJS", "REST APIs", "JWT Auth", "Python",
    "Pandas", "GitHub Copilot", "Component Architecture"
  ];
  
  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <span key={idx} className="ticker-item">
            {item} <span className="ticker-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
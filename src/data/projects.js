export const projects = [
  {
    num: "PROJECT / 01",
    title: "GKG Learning",
    subtitle: "E-Learning Platform",
    pills: ["Angular", "TypeScript", "MongoDB", "Firebase"],
    bullets: [
      "Refactored component architecture into lazy-loaded Angular modules, reducing average course load time by <strong>35%</strong> and sustaining performance across <strong>200+ concurrent sessions</strong>.",
      "Implemented a structured learning-path engine with real-time Firestore progress sync, improving learner retention by <strong>28%</strong>.",
      "Achieved <strong>100% mobile responsiveness</strong> using Angular Material, eliminating UX inconsistencies across all device categories."
    ],
    metrics: [
      { n: "35%", l: "faster load" },
      { n: "28%", l: "↑ retention" },
      { n: "200+", l: "concurrent sessions" }
    ],
    github: "https://github.com/vansh-01-bhajikhau/GKG_Learning"
  },
  {
    num: "PROJECT / 02",
    title: "GadgetMania",
    subtitle: "E-Commerce Web Application",
    pills: ["Angular", "Firebase", "RxJS", "State Management"],
    bullets: [
      "Migrated inventory reads to real-time Firestore queries with optimistic UI updates, eliminating <strong>60%</strong> of stock-display latency.",
      "Redesigned a 3-step purchase flow using RxJS-powered state management, lifting cart-to-checkout conversion by <strong>22%</strong>.",
      "Centralised async data pipelines via RxJS BehaviorSubjects across <strong>15+ components</strong>, reducing UI state bugs by <strong>50%</strong>."
    ],
    metrics: [
      { n: "60%", l: "↓ latency" },
      { n: "22%", l: "↑ conversion" },
      { n: "50%", l: "fewer bugs" }
    ],
    github: "https://github.com/vansh-01-bhajikhau/Gadget_Mania"
  },
  {
    num: "PROJECT / 03",
    title: "Antique Store",
    subtitle: "E-Commerce Platform",
    pills: ["React", "Firebase", "NoSQL", "JWT Auth"],
    bullets: [
      "Architected a full-stack marketplace with <strong>category filtering</strong>, real-time inventory management, and Firebase Authentication.",
      "Implemented lazy-loading product gallery to improve browsing performance on both <strong>mobile and desktop</strong> devices."
    ],
    metrics: [
      { n: "Full", l: "stack" },
      { n: "JWT", l: "secured" },
      { n: "Live", l: "deployed" }
    ],
    github: "https://github.com/vansh-01-bhajikhau/antique_store"
  },
  {
    num: "PROJECT / 04",
    title: "Streaming Industry Analysis",
    subtitle: "Data Analysis & EDA",
    pills: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    bullets: [
      "Performed exploratory data analysis (EDA) on <strong>8,000+ titles</strong> to uncover a <strong>3× content-growth advantage</strong> for Prime Video in drama genres (2018–2022).",
      "Engineered reusable Pandas transformation pipelines, reducing raw-data processing time by <strong>45%</strong>."
    ],
    metrics: [
      { n: "8K+", l: "titles analysed" },
      { n: "3×", l: "growth advantage" },
      { n: "45%", l: "faster pipeline" }
    ],
  }
];
import { useEffect, useRef, useState } from 'react';

const timelineItems = [
  { year: 'PHASE 1', title: 'Started Learning HTML', desc: 'Built the foundation of web development by learning HTML5 semantics, structure, and best practices.' },
  { year: 'PHASE 2', title: 'Learned CSS', desc: 'Mastered styling, layouts, flexbox, grid, animations, and responsive design principles.' },
  { year: 'PHASE 3', title: 'Mastered JavaScript Basics', desc: 'Learned DOM manipulation, event handling, ES6+ features, and interactive web programming.' },
  { year: 'PHASE 4', title: 'Built Frontend Projects', desc: 'Applied skills to build real-world projects including showroom, gaming, and fitness websites.' },
  { year: 'PHASE 5', title: 'Learning React', desc: 'Expanding into modern component-based development with React.js ecosystem.' },
  { year: 'PHASE 6', title: 'Improving UI/UX Skills', desc: 'Deepening knowledge of user-centered design, prototyping, and interactive animations.' },
];

function TimelineItem({ item, index }: { item: typeof timelineItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 150);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="timeline-item"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : (index % 2 === 0 ? 'translateX(-80px)' : 'translateX(80px)'),
        transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.15}s`,
      }}
    >
      <div className="timeline-dot" />
      <div className="timeline-content">
        <div className="timeline-year">{item.year}</div>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title gradient-text">Experience Timeline</h2>
          <div className="section-line" />
        </div>

        <div className="timeline">
          {timelineItems.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

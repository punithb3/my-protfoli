import { useEffect, useRef, useState } from 'react';

const achievements = [
  { icon: '🚀', number: 4, suffix: '+', label: 'Projects Completed' },
  { icon: '📱', number: 100, suffix: '%', label: 'Responsive Designs' },
  { icon: '💡', number: 100, suffix: '%', label: 'Frontend Focused' },
  { icon: '📚', number: 999, suffix: '+', label: 'Hours of Learning' },
];

function AchievementCounter({ item, index }: { item: typeof achievements[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let current = 0;
    const step = item.number / 60;
    const interval = setInterval(() => {
      current += step;
      if (current >= item.number) {
        current = item.number;
        clearInterval(interval);
      }
      setCount(Math.round(current));
    }, 25);

    return () => clearInterval(interval);
  }, [started, item.number]);

  return (
    <div
      ref={ref}
      className="achievement-card reveal"
      style={{ transitionDelay: index * 100 + 'ms' }}
    >
      <div className="achievement-icon">{item.icon}</div>
      <div className="achievement-number">
        {count}{item.suffix}
      </div>
      <div className="achievement-label">{item.label}</div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-subtitle">My Stats</span>
          <h2 className="section-title gradient-text">Achievements</h2>
          <div className="section-line" />
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <AchievementCounter key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

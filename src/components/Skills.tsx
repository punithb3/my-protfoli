import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

const skills = [
  { name: 'HTML5', icon: '📝', level: 'Advanced', percent: 92 },
  { name: 'CSS3', icon: '🎨', level: 'Advanced', percent: 90 },
  { name: 'JavaScript', icon: '⚡', level: 'Intermediate', percent: 78 },
  { name: 'Bootstrap', icon: '🅱️', level: 'Advanced', percent: 85 },
  { name: 'Responsive Design', icon: '📱', level: 'Advanced', percent: 88 },
  { name: 'Git & GitHub', icon: '🔀', level: 'Intermediate', percent: 75 },
  { name: 'UI/UX Design', icon: '🎯', level: 'Intermediate', percent: 72 },
  { name: 'React', icon: '⚛️', level: 'Learning', percent: 45 },
  { name: 'Framer Motion', icon: '🎬', level: 'Learning', percent: 35 },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), index * 100);
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
      className={`skill-card ${animated ? 'animate' : ''}`}
      style={{ '--fill': skill.percent + '%' } as React.CSSProperties}
    >
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-level">{skill.level} — {skill.percent}%</div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: animated ? skill.percent + '%' : '0%' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <Reveal>
          <div className="section-header">
            <span className="section-subtitle">What I Know</span>
            <h2 className="section-title gradient-text">My Skills</h2>
            <div className="section-line" />
          </div>
        </Reveal>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 80}>
              <SkillCard skill={skill} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

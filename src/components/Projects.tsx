import { useRef } from 'react';
import { RevealLeft, RevealRight } from './Reveal';

const projects = [
  {
    title: 'Punith Gear Showroom',
    desc: 'A premium RC showroom website featuring modern UI, responsive layouts, animations, and interactive design.',
    link: 'https://punithb3.github.io/my-show-room-/',
    github: 'https://github.com/punithb3',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    icon: '🏪',
  },
  {
    title: 'Punith Play Station',
    desc: 'A frontend gaming website with engaging UI, attractive animations, and interactive gaming showcase.',
    link: 'https://punithb3.github.io/my-game/',
    github: 'https://github.com/punithb3',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Animations'],
    icon: '🎮',
  },
  {
    title: 'FitnessZone',
    desc: 'A responsive fitness website with workout programs, trainers, pricing sections, and attractive animations.',
    link: 'https://punithb3.github.io/my-fitnesszone/',
    github: 'https://github.com/punithb3',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    icon: '💪',
  },
  {
    title: 'Tic Tac Toe Game',
    desc: 'A responsive X and O game developed using HTML, CSS, and JavaScript with smooth gameplay and animations.',
    link: 'https://punithb3.github.io/-x-and-o-game-/',
    github: 'https://github.com/punithb3',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Game Dev'],
    icon: '❌⭕',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  };

  return (
    <>
      {index % 2 === 0 ? (
        <RevealLeft delay={index * 150}>
          <div
            ref={cardRef}
            className="project-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-image">
              <div className="project-image-placeholder">{project.icon}</div>
              <div className="project-glow" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span className="tech-badge" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link primary" target="_blank" rel="noopener noreferrer">
                  🚀 Live Demo
                </a>
                <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                  📂 GitHub
                </a>
              </div>
            </div>
          </div>
        </RevealLeft>
      ) : (
        <RevealRight delay={index * 150}>
          <div
            ref={cardRef}
            className="project-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-image">
              <div className="project-image-placeholder">{project.icon}</div>
              <div className="project-glow" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span className="tech-badge" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link primary" target="_blank" rel="noopener noreferrer">
                  🚀 Live Demo
                </a>
                <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                  📂 GitHub
                </a>
              </div>
            </div>
          </div>
        </RevealRight>
      )}
    </>
  );
}

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-subtitle">My Recent Work</span>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <div className="section-line" />
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

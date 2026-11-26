import { RevealLeft, RevealRight } from './Reveal';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-subtitle">Get To Know Me</span>
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <RevealLeft>
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <div className="inner">👨‍💻</div>
              </div>
              <div className="about-floating-badge">🎓 IT Student</div>
              <div className="about-floating-badge">💻 Frontend Dev</div>
            </div>
          </RevealLeft>

          <RevealRight delay={200}>
            <div className="about-text">
              <h3>A Passionate <span className="gradient-text">Frontend Developer</span></h3>
              <p>
                I'm an <strong>Information Technology student</strong> passionate about building modern, responsive, 
                and interactive frontend websites using HTML, CSS, and JavaScript. My journey in web development 
                started with a curiosity about how websites work, and it quickly turned into a deep passion for 
                crafting beautiful digital experiences.
              </p>
              <p>
                I specialize in <strong>UI design, animations, and user experience</strong>, focusing on creating 
                websites that are not only visually stunning but also intuitive and accessible. I believe in the 
                power of clean code, pixel-perfect design, and smooth interactions that delight users.
              </p>
              <p>
                Currently, I'm expanding my skills in <strong>React and Framer Motion</strong> while continuously 
                improving my foundation in vanilla JavaScript and CSS animations.
              </p>
              <p>
                Beyond my development skills, I have a <strong>proven ability to manage results-oriented customer support</strong> and digital services with hands-on experience in client interaction, issue resolution, and service delivery. I have a proven ability to manage multiple customer requests, resolve issues efficiently, and maintain clear communication from initiation to closure. I am known for my reliability, adaptability, and consistent delivery of high-quality outcomes.
              </p>
              <div className="about-details">
                <div className="about-detail-item">
                  <span>Name: </span>Punith B
                </div>
                <div className="about-detail-item">
                  <span>Role: </span>Frontend Developer
                </div>
                <div className="about-detail-item">
                  <span>Education: </span>BSc IT, Rathinam Global University
                </div>
                <div className="about-detail-item">
                  <span>Focus: </span>UI/UX & Animations
                </div>
              </div>

              <div className="resume-details" style={{ marginTop: '2.5rem' }}>
                <h4 style={{ color: 'var(--neon-cyan)', marginBottom: '1rem', fontSize: '1.2rem' }}>Internship Experience</h4>
                <div className="resume-item" style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Customer Support &amp; Business Development Intern</strong>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
                    <li style={{ marginBottom: '0.3rem' }}>Communicated with customers through phone calls, emails, and online channels to understand their requirements.</li>
                    <li style={{ marginBottom: '0.3rem' }}>Explained products and services and provided suitable solutions based on customer needs.</li>
                    <li style={{ marginBottom: '0.3rem' }}>Developed professional communication and customer-handling skills.</li>
                    <li>Collaborated with team members to support business development activities.</li>
                  </ul>
                </div>

                <h4 style={{ color: 'var(--neon-cyan)', marginBottom: '1rem', fontSize: '1.2rem' }}>Education</h4>
                <div className="resume-item" style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--text-primary)' }}>BSc Information Technology (2024 - 2027)</strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Rathinam Global Deemed To Be University</span>
                </div>

                <h4 style={{ color: 'var(--neon-cyan)', marginBottom: '1rem', fontSize: '1.2rem' }}>Skills</h4>
                <div className="resume-item" style={{ marginBottom: '1.5rem' }}>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    <li style={{ marginBottom: '0.3rem' }}><strong style={{ color: 'var(--text-primary)' }}>Web &amp; Tools:</strong> HTML, CSS, JavaScript, GitHub, VS Code, Figma (Basic), Git Version Control</li>
                    <li style={{ marginBottom: '0.3rem' }}><strong style={{ color: 'var(--text-primary)' }}>Productivity:</strong> Google Workspace, Documentation &amp; Reporting</li>
                    <li style={{ marginBottom: '0.3rem' }}><strong style={{ color: 'var(--text-primary)' }}>Media Tools:</strong> DaVinci Resolve, Adobe Premiere Pro, After Effects, Avid Media</li>
                    <li><strong style={{ color: 'var(--text-primary)' }}>Soft Skills:</strong> Customer Interaction &amp; Relationship Management, Issue Resolution &amp; Time Management, Problem Solving, Quick Learning, Team Collaboration, Adaptability, Critical Thinking</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a
                  href="./resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta secondary"
                >
                  📥 View Resume
                </a>
              </div>
            </div>
          </RevealRight>
        </div>
      </div>
    </section>
  );
}

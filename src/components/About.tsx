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
                <h4 style={{ color: 'var(--neon-cyan)', marginBottom: '1rem', fontSize: '1.2rem' }}>Experience</h4>
                <div className="resume-item" style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Customer Support Executive</strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>HRH Next Company</span>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
                    <li style={{ marginBottom: '0.3rem' }}>Handled customer interactions through voice calls and chat channels, ensuring clear communication.</li>
                    <li style={{ marginBottom: '0.3rem' }}>Responded to queries, concerns, and service requests by providing appropriate resolutions.</li>
                    <li style={{ marginBottom: '0.3rem' }}>Managed tickets by logging, categorizing, prioritizing, and tracking them until closure.</li>
                    <li>Maintained proper documentation and ticket status updates.</li>
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
                    <li style={{ marginBottom: '0.3rem' }}><strong style={{ color: 'var(--text-primary)' }}>Web & Tools:</strong> HTML, CSS, JavaScript (Basics), GitHub, VS Code</li>
                    <li style={{ marginBottom: '0.3rem' }}><strong style={{ color: 'var(--text-primary)' }}>Media Tools:</strong> DaVinci Resolve, Adobe Premiere Pro, After Effects</li>
                    <li><strong style={{ color: 'var(--text-primary)' }}>Soft Skills:</strong> Customer Interaction, Issue Resolution, Time Management, Documentation</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a
                  href="https://cdn.phototourl.com/pdf/member/2026-07-16-4cb58fda-96c9-414c-bc48-16d35cdd37b2.pdf"
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

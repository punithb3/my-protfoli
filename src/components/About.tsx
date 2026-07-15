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
              <div className="about-details">
                <div className="about-detail-item">
                  <span>Name: </span>Punith K
                </div>
                <div className="about-detail-item">
                  <span>Role: </span>Frontend Developer
                </div>
                <div className="about-detail-item">
                  <span>Education: </span>IT Student
                </div>
                <div className="about-detail-item">
                  <span>Focus: </span>UI/UX & Animations
                </div>
              </div>
            </div>
          </RevealRight>
        </div>
      </div>
    </section>
  );
}

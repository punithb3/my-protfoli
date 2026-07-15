import { useEffect, useState } from 'react';

const typedTexts = ['Frontend Developer', 'UI Designer', 'Creative Web Developer'];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => setTypingStarted(true), 2800);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!typingStarted) return;
    const currentText = typedTexts[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
        if (displayedText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typedTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting]);

  const createRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
    ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid-bg" />

      {/* Floating shapes */}
      <div className="hero-shape" />
      <div className="hero-shape" />
      <div className="hero-shape" />
      <div className="hero-shape" />

      <div className="hero-content">
        <p className="hero-greeting"></p>
        <h1 className="hero-name">
          <span className="gradient-text">Punith K</span>
        </h1>
        <p className="hero-title">A passionate developer crafting digital experiences</p>
        <div className="hero-typing">
          <span>{displayedText}</span>
        </div>

        <div className="hero-buttons">
          <a
            href="#projects"
            className="hero-cta primary magnetic-btn"
            onClick={createRipple}
          >
            ⚡ View My Work
          </a>
          <a
            href="#contact"
            className="hero-cta secondary magnetic-btn"
            onClick={createRipple}
          >
            💬 Contact Me
          </a>
          <a
            href="#about"
            className="hero-cta ghost magnetic-btn"
            onClick={createRipple}
          >
            📄 About Me
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

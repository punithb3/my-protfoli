import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer-section" ref={ref}>
      <svg className="footer-wave" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
        <path
          d="M0,30 C150,0 350,50 480,30 C610,10 750,50 960,30 C1170,10 1300,50 1440,30 C1590,10 1750,50 1920,30 C2070,10 2200,50 2400,30 C2600,10 2750,50 2880,30"
          fill="none"
          stroke="rgba(0,212,255,0.15)"
          strokeWidth="1.5"
        />
      </svg>

      <div
        className="footer-content"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease',
        }}
      >
        <div className="footer-social">
          <a href="https://github.com/punithb3" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            📂
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            💼
          </a>
          <a href="mailto:bpunith333@gmail.com" className="social-link" aria-label="Email">
            📧
          </a>
        </div>

        <p className="footer-text">
          © 2026 <span className="gradient-text" style={{ fontWeight: 600 }}>Punith K</span>. All Rights Reserved.
          <br />
          Designed & Developed with <span className="heart">❤️</span> using HTML, CSS & JavaScript
        </p>
      </div>
    </footer>
  );
}

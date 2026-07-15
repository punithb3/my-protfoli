import { useEffect, useRef } from 'react';

/* Custom Cursor */
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 4 + 'px';
        dotRef.current.style.top = e.clientY - 4 + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX - 20 + 'px';
        ringRef.current.style.top = e.clientY - 20 + 'px';
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover:cursor-pointer') ||
        target.style.cursor === 'pointer'
      ) {
        ringRef.current?.classList.add('hover');
      }
    };

    const handleMouseOut = () => {
      ringRef.current?.classList.remove('hover');
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

/* Mouse Glow */
function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveGlow = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveGlow);
    return () => window.removeEventListener('mousemove', moveGlow);
  }, []);

  return <div className="mouse-glow" ref={glowRef} />;
}

/* Floating Blobs */
function FloatingBlobs() {
  return (
    <div className="blobs-container">
      <div className="blob" />
      <div className="blob" />
      <div className="blob" />
    </div>
  );
}

/* Particles */
function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const count = window.innerWidth < 768 ? 15 : 40;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 3 + 1 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDuration = Math.random() * 15 + 10 + 's';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.opacity = String(Math.random() * 0.5);
      containerRef.current.appendChild(particle);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div className="particles-container" ref={containerRef} />;
}

export { CustomCursor, MouseGlow, FloatingBlobs, Particles };

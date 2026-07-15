import { useEffect, useRef, useState } from 'react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}

export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, revealed } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? 'active' : ''} ${className}`}
      style={{ transitionDelay: delay + 'ms' }}
    >
      {children}
    </div>
  );
}

export function RevealLeft({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, revealed } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal-left ${revealed ? 'active' : ''} ${className}`}
      style={{ transitionDelay: delay + 'ms' }}
    >
      {children}
    </div>
  );
}

export function RevealRight({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, revealed } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal-right ${revealed ? 'active' : ''} ${className}`}
      style={{ transitionDelay: delay + 'ms' }}
    >
      {children}
    </div>
  );
}

export function RevealScale({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, revealed } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal-scale ${revealed ? 'active' : ''} ${className}`}
      style={{ transitionDelay: delay + 'ms' }}
    >
      {children}
    </div>
  );
}

export function RevealRotate({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, revealed } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal-rotate ${revealed ? 'active' : ''} ${className}`}
      style={{ transitionDelay: delay + 'ms' }}
    >
      {children}
    </div>
  );
}

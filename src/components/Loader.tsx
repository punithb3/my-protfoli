import { useEffect, useState } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-overlay ${visible ? '' : 'hidden'}`}>
      <div className="loader-text">PK</div>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
        Loading Portfolio...
      </p>
    </div>
  );
}

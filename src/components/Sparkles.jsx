import React, { useEffect, useState } from 'react';
import './Sparkles.css';

const Sparkles = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < 25; i++) {
      items.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 1.5 + Math.random() * 2,
        size: 3 + Math.random() * 5,
      });
    }
    setSparkles(items);
  }, []);

  return (
    <div className="sparkles-container">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;

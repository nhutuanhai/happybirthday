import React, { useEffect, useState } from 'react';
import './Flowers.css';

const flowerEmojis = ['🌸', '🌺', '🌷', '🌹', '🌻', '💐', '🌼', '🏵️', '💮', '🌾'];

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < 30; i++) {
      items.push({
        id: i,
        emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 6 + Math.random() * 8,
        size: 16 + Math.random() * 20,
        rotation: Math.random() * 360,
        swingAmount: 20 + Math.random() * 60,
      });
    }
    setFlowers(items);
  }, []);

  return (
    <div className="flowers-container">
      {/* Falling flowers */}
      {flowers.map((f) => (
        <div
          key={f.id}
          className="falling-flower"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}px`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            '--swing': `${f.swingAmount}px`,
            '--rot': `${f.rotation}deg`,
          }}
        >
          {f.emoji}
        </div>
      ))}

      {/* Static corner flowers */}
      <div className="corner-flowers top-left">
        <span className="static-flower sf1">🌸</span>
        <span className="static-flower sf2">🌺</span>
        <span className="static-flower sf3">🌷</span>
        <span className="static-flower sf4">🌹</span>
        <span className="static-flower sf5">🌼</span>
      </div>
      <div className="corner-flowers top-right">
        <span className="static-flower sf1">🌹</span>
        <span className="static-flower sf2">🌸</span>
        <span className="static-flower sf3">🌺</span>
        <span className="static-flower sf4">🌷</span>
        <span className="static-flower sf5">🌻</span>
      </div>
      <div className="corner-flowers bottom-left">
        <span className="static-flower sf1">🌺</span>
        <span className="static-flower sf2">🌷</span>
        <span className="static-flower sf3">💐</span>
        <span className="static-flower sf4">🌸</span>
      </div>
      <div className="corner-flowers bottom-right">
        <span className="static-flower sf1">🌷</span>
        <span className="static-flower sf2">🌹</span>
        <span className="static-flower sf3">🌸</span>
        <span className="static-flower sf4">💐</span>
      </div>
    </div>
  );
};

export default Flowers;

import React, { useEffect, useState } from 'react';
import './Confetti.css';

const confettiColors = [
  '#ff6b9d', '#ffd700', '#ff4081', '#00bcd4',
  '#4caf50', '#ff9800', '#e91e63', '#9c27b0',
  '#2196f3', '#ff5722', '#8bc34a', '#ffeb3b',
];

const shapes = ['square', 'circle', 'triangle', 'star-shape'];

const Confetti = () => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < 50; i++) {
      items.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 4 + Math.random() * 6,
        size: 6 + Math.random() * 10,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * 360,
        swingAmount: 30 + Math.random() * 60,
      });
    }
    setPieces(items);
  }, []);

  return (
    <div className="confetti-container">
      {pieces.map((p) => (
        <div
          key={p.id}
          className={`confetti-piece ${p.shape}`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: p.shape === 'circle' ? `${p.size}px` : `${p.size * 0.6}px`,
            backgroundColor: p.shape !== 'triangle' ? p.color : 'transparent',
            borderBottom: p.shape === 'triangle' ? `${p.size}px solid ${p.color}` : 'none',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--swing': `${p.swingAmount}px`,
            '--rot': `${p.rotation}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;

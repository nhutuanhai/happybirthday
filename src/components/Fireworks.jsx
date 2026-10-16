import React, { useEffect, useState, useCallback } from 'react';
import './Fireworks.css';

const Fireworks = () => {
  const [fireworks, setFireworks] = useState([]);
  const [hearts, setHearts] = useState([]);
  const [ribbons, setRibbons] = useState([]);
  const [stars, setStars] = useState([]);
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    // Firework bursts
    const fw = [];
    for (let i = 0; i < 8; i++) {
      const particles = [];
      const numParticles = 10 + Math.floor(Math.random() * 8);
      const hue = Math.floor(Math.random() * 360);
      for (let j = 0; j < numParticles; j++) {
        const angle = (j / numParticles) * 360;
        const distance = 40 + Math.random() * 40;
        particles.push({
          angle,
          distance,
          color: `hsl(${hue + Math.random() * 60}, 90%, ${55 + Math.random() * 20}%)`,
          size: 3 + Math.random() * 4,
        });
      }
      fw.push({
        id: i,
        left: 10 + Math.random() * 80,
        top: 10 + Math.random() * 40,
        delay: i * 2.5 + Math.random() * 2,
        duration: 2 + Math.random() * 1.5,
        particles,
      });
    }
    setFireworks(fw);

    // Floating hearts
    const h = [];
    for (let i = 0; i < 20; i++) {
      h.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 6 + Math.random() * 8,
        size: 14 + Math.random() * 18,
        color: ['#ff1744', '#e91e63', '#ff4081', '#f50057', '#ff80ab', '#ff6090', '#d81b60'][Math.floor(Math.random() * 7)],
        opacity: 0.5 + Math.random() * 0.5,
        sway: 20 + Math.random() * 40,
      });
    }
    setHearts(h);

    // Ribbons
    const r = [];
    for (let i = 0; i < 15; i++) {
      r.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 5 + Math.random() * 6,
        width: 4 + Math.random() * 8,
        height: 20 + Math.random() * 35,
        color: ['#ff4081', '#ffd54f', '#81d4fa', '#b39ddb', '#a5d6a7', '#ffab91', '#80deea', '#f48fb1'][Math.floor(Math.random() * 8)],
        rotation: Math.random() * 360,
        sway: 30 + Math.random() * 50,
      });
    }
    setRibbons(r);

    // Floating stars
    const s = [];
    for (let i = 0; i < 18; i++) {
      s.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 2 + Math.random() * 3,
        size: 8 + Math.random() * 14,
        emoji: ['⭐', '🌟', '💫', '✨'][Math.floor(Math.random() * 4)],
      });
    }
    setStars(s);

    // Gift boxes floating
    const g = [];
    for (let i = 0; i < 8; i++) {
      g.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 6,
        size: 18 + Math.random() * 14,
        emoji: ['🎁', '🎀', '🎊', '🎉', '🥳', '🎶', '🎵', '🎈'][i],
        sway: 15 + Math.random() * 35,
      });
    }
    setGifts(g);
  }, []);

  return (
    <div className="fireworks-container">
      {/* Firework bursts */}
      {fireworks.map((fw) => (
        <div
          key={`fw-${fw.id}`}
          className="firework"
          style={{
            left: `${fw.left}%`,
            top: `${fw.top}%`,
            animationDelay: `${fw.delay}s`,
            animationDuration: `${fw.duration}s`,
          }}
        >
          {fw.particles.map((p, j) => (
            <div
              key={j}
              className="fw-particle"
              style={{
                '--angle': `${p.angle}deg`,
                '--distance': `${p.distance}px`,
                backgroundColor: p.color,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: `${fw.delay}s`,
                animationDuration: `${fw.duration}s`,
              }}
            />
          ))}
          <div className="fw-center" style={{ animationDelay: `${fw.delay}s`, animationDuration: `${fw.duration}s` }} />
        </div>
      ))}

      {/* Floating hearts */}
      {hearts.map((h) => (
        <div
          key={`heart-${h.id}`}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            '--sway': `${h.sway}px`,
            opacity: h.opacity,
          }}
        >
          <svg width={h.size} height={h.size} viewBox="0 0 24 24">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={h.color}
            />
          </svg>
        </div>
      ))}

      {/* Ribbons */}
      {ribbons.map((r) => (
        <div
          key={`ribbon-${r.id}`}
          className="floating-ribbon"
          style={{
            left: `${r.left}%`,
            width: `${r.width}px`,
            height: `${r.height}px`,
            backgroundColor: r.color,
            animationDelay: `${r.delay}s`,
            animationDuration: `${r.duration}s`,
            '--swing': `${r.sway}px`,
            '--rot': `${r.rotation}deg`,
          }}
        />
      ))}

      {/* Floating stars */}
      {stars.map((s) => (
        <div
          key={`star-${s.id}`}
          className="floating-star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          {s.emoji}
        </div>
      ))}

      {/* Gift emojis floating up */}
      {gifts.map((g) => (
        <div
          key={`gift-${g.id}`}
          className="floating-gift"
          style={{
            left: `${g.left}%`,
            fontSize: `${g.size}px`,
            animationDelay: `${g.delay}s`,
            animationDuration: `${g.duration}s`,
            '--sway': `${g.sway}px`,
          }}
        >
          {g.emoji}
        </div>
      ))}

      {/* Light rays from center */}
      <div className="light-rays">
        {[...Array(12)].map((_, i) => (
          <div
            key={`ray-${i}`}
            className="light-ray"
            style={{
              transform: `rotate(${i * 30}deg)`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating music notes */}
      <div className="music-notes">
        {['♪', '♫', '♬', '♩', '♪', '♫'].map((note, i) => (
          <span
            key={`note-${i}`}
            className="music-note"
            style={{
              left: `${10 + i * 16}%`,
              animationDelay: `${i * 1.5}s`,
              fontSize: `${16 + Math.random() * 12}px`,
            }}
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Fireworks;

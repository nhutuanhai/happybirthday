import React, { useEffect, useState } from 'react';
import './ClapEmojis.css';

const ClapEmojis = () => {
  const [claps, setClaps] = useState([]);

  useEffect(() => {
    const items = [];
    // Left side clappers
    for (let i = 0; i < 5; i++) {
      items.push({
        id: `left-${i}`,
        side: 'left',
        top: 25 + i * 12,
        delay: i * 0.8,
        emoji: ['👏', '🙌', '🎉', '👏', '🥳'][i],
      });
    }
    // Right side clappers
    for (let i = 0; i < 5; i++) {
      items.push({
        id: `right-${i}`,
        side: 'right',
        top: 20 + i * 13,
        delay: i * 0.8 + 0.4,
        emoji: ['👏', '🎊', '🙌', '👏', '🎉'][i],
      });
    }
    setClaps(items);
  }, []);

  return (
    <div className="clap-container">
      {claps.map((c) => (
        <div
          key={c.id}
          className={`clap-emoji ${c.side}`}
          style={{
            top: `${c.top}%`,
            animationDelay: `${c.delay}s`,
          }}
        >
          <span className="clap-icon">{c.emoji}</span>
        </div>
      ))}
    </div>
  );
};

export default ClapEmojis;

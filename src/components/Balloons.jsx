import React, { useEffect, useState } from 'react';
import './Balloons.css';

// Rich palette for balloons
const balloonColors = [
  { main: '#ff2d75', light: '#ff8fb3', dark: '#c2185b' }, // Hot pink
  { main: '#ff69b4', light: '#ffc0cb', dark: '#d81b60' }, // Rose pink
  { main: '#ff1493', light: '#ff80bf', dark: '#ad1457' }, // Deep pink
  { main: '#ffd700', light: '#fff9c4', dark: '#f57f17' }, // Gold metallic
  { main: '#ff80ab', light: '#ffe4ed', dark: '#f06292' }, // Soft pink
  { main: '#00e5ff', light: '#b2ebf2', dark: '#0097a7' }, // Cyan pop
  { main: '#7c4dff', light: '#d1c4e9', dark: '#512da8' }, // Purple
  { main: '#ff6e40', light: '#ffccbc', dark: '#e64a19' }, // Coral
  { main: '#69f0ae', light: '#c8e6c9', dark: '#00c853' }, // Mint
  { main: '#ffab40', light: '#ffe0b2', dark: '#ff6f00' }, // Peach orange
  { main: '#ea80fc', light: '#f8bbd0', dark: '#aa00ff' }, // Lilac
  { main: '#ffffff', light: '#ffffff', dark: '#cfd8dc' }, // Pearl white
  { main: '#ff4081', light: '#ff80ab', dark: '#c51162' }, // Neon berry
  { main: '#40c4ff', light: '#e1f5fe', dark: '#0288d1' }, // Sky blue
];

const balloonTypes = ['oval', 'heart', 'star', 'oval', 'oval'];

const Balloons = () => {
  const [floatingBalloons, setFloatingBalloons] = useState([]);
  const [poppedBalloons, setPoppedBalloons] = useState(new Set());

  useEffect(() => {
    // Generate 85 floating balloons with different layers and speeds
    const items = [];
    for (let i = 0; i < 85; i++) {
      const type = balloonTypes[Math.floor(Math.random() * balloonTypes.length)];
      const colorScheme = balloonColors[Math.floor(Math.random() * balloonColors.length)];
      // Depth layer: 1 (far, small, slower), 2 (mid), 3 (front, big, faster)
      const layer = Math.random() < 0.35 ? 1 : Math.random() < 0.75 ? 2 : 3;
      
      const baseSize = layer === 1 ? 24 : layer === 2 ? 38 : 52;
      const size = baseSize + Math.random() * 16;
      
      items.push({
        id: `fb-${i}`,
        type,
        color: colorScheme,
        left: Math.random() * 98,
        delay: Math.random() * 14,
        duration: layer === 1 ? 13 + Math.random() * 8 : layer === 2 ? 9 + Math.random() * 6 : 7 + Math.random() * 4,
        size,
        layer,
        sway: 20 + Math.random() * 60,
        swaySpeed: 2.2 + Math.random() * 2.5,
        opacity: layer === 1 ? 0.65 : layer === 2 ? 0.88 : 0.96,
        stringLen: 22 + Math.random() * 28,
        tilt: -12 + Math.random() * 24,
      });
    }
    setFloatingBalloons(items);
  }, []);

  const handlePop = (id) => {
    setPoppedBalloons((prev) => new Set([...prev, id]));
  };

  return (
    <div className="balloons-container">
      {/* 85 Floating balloons */}
      {floatingBalloons.map((b) => {
        if (poppedBalloons.has(b.id)) return null;

        return (
          <div
            key={b.id}
            className={`balloon layer-${b.layer}`}
            style={{
              left: `${b.left}%`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
              '--sway': `${b.sway}px`,
              '--sway-speed': `${b.swaySpeed}s`,
              '--tilt': `${b.tilt}deg`,
              opacity: b.opacity,
              zIndex: b.layer === 3 ? 9 : b.layer === 2 ? 3 : 1,
            }}
            onClick={() => handlePop(b.id)}
            title="Click để nổ bóng!"
          >
            {b.type === 'oval' && (
              <svg
                width={b.size}
                height={b.size * 1.35 + b.stringLen}
                viewBox={`0 0 50 ${65 + b.stringLen}`}
                className="balloon-svg"
              >
                <defs>
                  <radialGradient id={`grad-${b.id}`} cx="32%" cy="26%" r="65%">
                    <stop offset="0%" stopColor={b.color.light} stopOpacity="0.95" />
                    <stop offset="45%" stopColor={b.color.main} stopOpacity="0.95" />
                    <stop offset="100%" stopColor={b.color.dark} stopOpacity="1" />
                  </radialGradient>
                  <filter id={`glow-${b.id}`}>
                    <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor={b.color.dark} floodOpacity="0.35" />
                  </filter>
                </defs>
                <ellipse
                  cx="25"
                  cy="24"
                  rx="22"
                  ry="24"
                  fill={`url(#grad-${b.id})`}
                  filter={`url(#glow-${b.id})`}
                />
                {/* Glossy reflection */}
                <ellipse
                  cx="17"
                  cy="16"
                  rx="6"
                  ry="9"
                  fill="#ffffff"
                  fillOpacity="0.45"
                  transform="rotate(-28, 17, 16)"
                />
                <ellipse
                  cx="14"
                  cy="26"
                  rx="2"
                  ry="4"
                  fill="#ffffff"
                  fillOpacity="0.25"
                  transform="rotate(-20, 14, 26)"
                />
                {/* Knot */}
                <polygon points="21,47 25,53 29,47" fill={b.color.dark} />
                {/* Wavy string */}
                <path
                  d={`M25,53 Q${20 + (b.id.charCodeAt(3) % 10)},${60 + b.stringLen * 0.4} ${26},${53 + b.stringLen}`}
                  stroke="rgba(240, 240, 240, 0.75)"
                  strokeWidth="0.9"
                  fill="none"
                />
              </svg>
            )}

            {b.type === 'heart' && (
              <svg
                width={b.size * 1.05}
                height={b.size * 1.25 + b.stringLen}
                viewBox={`0 0 50 ${58 + b.stringLen}`}
                className="balloon-svg"
              >
                <defs>
                  <radialGradient id={`hgrad-${b.id}`} cx="35%" cy="30%" r="65%">
                    <stop offset="0%" stopColor={b.color.light} stopOpacity="0.98" />
                    <stop offset="50%" stopColor={b.color.main} stopOpacity="0.95" />
                    <stop offset="100%" stopColor={b.color.dark} stopOpacity="1" />
                  </radialGradient>
                </defs>
                <path
                  d="M25,44 C25,44 7,32 7,19 C7,12 12,8 18,8 C21.5,8 24,10 25,12 C26,10 28.5,8 32,8 C38,8 43,12 43,19 C43,32 25,44 25,44 Z"
                  fill={`url(#hgrad-${b.id})`}
                  filter="drop-shadow(0 3px 6px rgba(0,0,0,0.25))"
                />
                {/* Gloss highlight */}
                <ellipse
                  cx="17"
                  cy="15"
                  rx="3.5"
                  ry="5.5"
                  fill="#ffffff"
                  fillOpacity="0.45"
                  transform="rotate(-20, 17, 15)"
                />
                <polygon points="23,44 25,48 27,44" fill={b.color.dark} />
                <path
                  d={`M25,48 Q${22},${55 + b.stringLen * 0.5} ${25},${48 + b.stringLen}`}
                  stroke="rgba(240, 240, 240, 0.7)"
                  strokeWidth="0.8"
                  fill="none"
                />
              </svg>
            )}

            {b.type === 'star' && (
              <svg
                width={b.size * 1.1}
                height={b.size * 1.2 + b.stringLen}
                viewBox={`0 0 50 ${55 + b.stringLen}`}
                className="balloon-svg"
              >
                <defs>
                  <radialGradient id={`sgrad-${b.id}`} cx="35%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#fffde7" />
                    <stop offset="40%" stopColor={b.color.light} />
                    <stop offset="85%" stopColor={b.color.main} />
                    <stop offset="100%" stopColor={b.color.dark} />
                  </radialGradient>
                </defs>
                <polygon
                  points="25,5 31,18 45,19 34,29 37,43 25,36 13,43 16,29 5,19 19,18"
                  fill={`url(#sgrad-${b.id})`}
                  filter="drop-shadow(0 3px 6px rgba(0,0,0,0.25))"
                />
                <circle cx="21" cy="18" r="3" fill="#ffffff" fillOpacity="0.5" />
                <polygon points="23,38 25,43 27,38" fill={b.color.dark} />
                <path
                  d={`M25,43 Q${23},${50 + b.stringLen * 0.4} ${26},${43 + b.stringLen}`}
                  stroke="rgba(240, 240, 240, 0.7)"
                  strokeWidth="0.8"
                  fill="none"
                />
              </svg>
            )}
          </div>
        );
      })}

      {/* Top Ceiling Balloon Arch (Rực rỡ trên đỉnh màn hình) */}
      <div className="balloon-arch top-arch">
        {[
          '#ff2d75', '#ffd700', '#ff80ab', '#00e5ff', '#ea80fc',
          '#ff6e40', '#69f0ae', '#ffffff', '#ff1493', '#40c4ff',
          '#ffd700', '#ff69b4', '#7c4dff', '#ff80ab', '#00e5ff',
          '#ff2d75', '#69f0ae', '#ea80fc', '#ffd700', '#ff1493',
        ].map((c, idx) => (
          <div
            key={`arch-${idx}`}
            className="arch-balloon"
            style={{
              '--color': c,
              animationDelay: `${idx * 0.18}s`,
            }}
          >
            <div className="arch-balloon-inner" style={{ backgroundColor: c }}>
              <div className="arch-balloon-shine"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Massive Left Balloon Cluster */}
      <div className="balloon-cluster cluster-left-rich">
        {[
          { color: '#ff1493', size: 55, x: 5, y: -20, delay: 0 },
          { color: '#ffd700', size: 48, x: 42, y: -45, delay: 0.3 },
          { color: '#ff80ab', size: 50, x: 15, y: -70, delay: 0.6 },
          { color: '#00e5ff', size: 44, x: -15, y: -50, delay: 0.9 },
          { color: '#ea80fc', size: 52, x: 30, y: -95, delay: 1.2 },
          { color: '#ffffff', size: 40, x: -5, y: -105, delay: 0.4 },
          { color: '#ff6e40', size: 46, x: 22, y: -130, delay: 1.5 },
          { color: '#69f0ae', size: 42, x: -18, y: -85, delay: 0.8 },
          { color: '#ff4081', size: 48, x: 48, y: -115, delay: 1.1 },
        ].map((item, idx) => (
          <div
            key={`l-rich-${idx}`}
            className="cluster-balloon-rich"
            style={{
              left: `${item.x}px`,
              bottom: `${Math.abs(item.y)}px`,
              animationDelay: `${item.delay}s`,
            }}
          >
            <svg width={item.size} height={item.size * 1.5} viewBox="0 0 50 75">
              <defs>
                <radialGradient id={`cl-grad-${idx}`} cx="32%" cy="26%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor={item.color} />
                  <stop offset="100%" stopColor="#333333" stopOpacity="0.4" />
                </radialGradient>
              </defs>
              <ellipse cx="25" cy="24" rx="21" ry="24" fill={item.color} />
              <ellipse cx="25" cy="24" rx="21" ry="24" fill={`url(#cl-grad-${idx})`} />
              <ellipse cx="17" cy="16" rx="5" ry="8" fill="#ffffff" fillOpacity="0.45" transform="rotate(-25, 17, 16)" />
              <polygon points="21,47 25,52 29,47" fill={item.color} />
              <line x1="25" y1="52" x2="25" y2="75" stroke="#ddd" strokeWidth="0.8" opacity="0.7" />
            </svg>
          </div>
        ))}
      </div>

      {/* Massive Right Balloon Cluster */}
      <div className="balloon-cluster cluster-right-rich">
        {[
          { color: '#ffd700', size: 54, x: -10, y: -25, delay: 0.2 },
          { color: '#ff4081', size: 48, x: -45, y: -50, delay: 0.5 },
          { color: '#7c4dff', size: 50, x: -18, y: -75, delay: 0.8 },
          { color: '#00e5ff', size: 45, x: 12, y: -55, delay: 1.1 },
          { color: '#ff69b4', size: 52, x: -35, y: -100, delay: 1.4 },
          { color: '#ffffff', size: 42, x: 5, y: -110, delay: 0.3 },
          { color: '#69f0ae', size: 46, x: -20, y: -135, delay: 0.7 },
          { color: '#ea80fc', size: 42, x: 18, y: -88, delay: 1.0 },
          { color: '#ff80ab', size: 48, x: -48, y: -120, delay: 1.3 },
        ].map((item, idx) => (
          <div
            key={`r-rich-${idx}`}
            className="cluster-balloon-rich"
            style={{
              right: `${Math.abs(item.x)}px`,
              bottom: `${Math.abs(item.y)}px`,
              animationDelay: `${item.delay}s`,
            }}
          >
            <svg width={item.size} height={item.size * 1.5} viewBox="0 0 50 75">
              <defs>
                <radialGradient id={`cr-grad-${idx}`} cx="32%" cy="26%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor={item.color} />
                  <stop offset="100%" stopColor="#222222" stopOpacity="0.4" />
                </radialGradient>
              </defs>
              <ellipse cx="25" cy="24" rx="21" ry="24" fill={item.color} />
              <ellipse cx="25" cy="24" rx="21" ry="24" fill={`url(#cr-grad-${idx})`} />
              <ellipse cx="17" cy="16" rx="5" ry="8" fill="#ffffff" fillOpacity="0.45" transform="rotate(-25, 17, 16)" />
              <polygon points="21,47 25,52 29,47" fill={item.color} />
              <line x1="25" y1="52" x2="25" y2="75" stroke="#ddd" strokeWidth="0.8" opacity="0.7" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Balloons;

import React, { useEffect, useState } from 'react';
import Cake3D from './components/Cake3D';
import Balloons from './components/Balloons';
import Confetti from './components/Confetti';
import Flowers from './components/Flowers';
import ClapEmojis from './components/ClapEmojis';
import Sparkles from './components/Sparkles';
import Fireworks from './components/Fireworks';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
    setTimeout(() => setShowCake(true), 800);
    setTimeout(() => setShowTitle(true), 1500);
  }, []);

  return (
    <div className="birthday-app">
      {/* Background gradient */}
      <div className="bg-gradient"></div>
      
      {/* Animated background elements */}
      <Fireworks />
      <Flowers />
      <Balloons />
      <Confetti />
      <Sparkles />
      <ClapEmojis />
      
      {/* Main content */}
      <div className={`main-content ${showContent ? 'visible' : ''}`}>
        {/* Title */}
        <div className={`title-container ${showTitle ? 'visible' : ''}`}>
          <h1 className="birthday-title">
            <span className="title-line">🎉 Chúc Mừng Sinh Nhật 🎉</span>
            <span className="title-name">✨ Hồng Anh ✨</span>
          </h1>
        </div>

        {/* 3D Cake */}
        <div className={`cake-wrapper ${showCake ? 'visible' : ''}`}>
          <Cake3D />
        </div>

        {/* Bottom message */}
        <div className={`bottom-message ${showTitle ? 'visible' : ''}`}>
          <p className="wish-text">
            🌸 Chúc bạn luôn vui vẻ, hạnh phúc và thành công! 🌸
          </p>
          <div className="hearts-row">
            {['💖', '🎂', '🎁', '🎈', '🌹', '💝', '🎊', '🎀'].map((emoji, i) => (
              <span key={i} className="bounce-emoji" style={{ animationDelay: `${i * 0.15}s` }}>
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

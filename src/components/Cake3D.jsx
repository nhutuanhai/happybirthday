import React from 'react';
import './Cake3D.css';

const Cake3D = () => {
  return (
    <div className="cake-scene">
      <div className="cake-3d">
        {/* ===== BOTTOM LAYER ===== */}
        <div className="cake-layer layer-1">
          {/* Create cylinder sides with CSS panels */}
          {[...Array(24)].map((_, i) => (
            <div
              key={`s1-${i}`}
              className="cylinder-panel panel-1"
              style={{
                transform: `rotateY(${i * 15}deg) translateZ(115px)`,
              }}
            />
          ))}
          {/* Top face */}
          <div className="cylinder-top top-1"></div>
          {/* Bottom face */}
          <div className="cylinder-bottom bottom-1"></div>
          
          {/* Frosting drips */}
          {[...Array(14)].map((_, i) => (
            <div
              key={`drip1-${i}`}
              className="drip drip-white"
              style={{
                transform: `rotateY(${i * 25.7}deg) translateZ(116px)`,
                height: `${18 + Math.sin(i * 1.3) * 12}px`,
              }}
            />
          ))}
          
          {/* Bottom layer decorative dots */}
          {[...Array(16)].map((_, i) => (
            <div
              key={`dot1-${i}`}
              className="deco-dot dot-white"
              style={{
                transform: `rotateY(${i * 22.5}deg) translateZ(117px)`,
                top: '55%',
              }}
            />
          ))}
          
          {/* Strawberries */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`straw-${i}`}
              className="cake-emoji strawberry-emoji"
              style={{
                transform: `rotateY(${i * 45}deg) translateZ(105px) translateY(-2px)`,
              }}
            >
              🍓
            </div>
          ))}
        </div>

        {/* ===== MIDDLE LAYER ===== */}
        <div className="cake-layer layer-2">
          {[...Array(20)].map((_, i) => (
            <div
              key={`s2-${i}`}
              className="cylinder-panel panel-2"
              style={{
                transform: `rotateY(${i * 18}deg) translateZ(85px)`,
              }}
            />
          ))}
          <div className="cylinder-top top-2"></div>
          <div className="cylinder-bottom bottom-2"></div>
          
          {/* Pink frosting drips */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`drip2-${i}`}
              className="drip drip-pink"
              style={{
                transform: `rotateY(${i * 30}deg) translateZ(86px)`,
                height: `${14 + Math.sin(i * 1.7) * 10}px`,
              }}
            />
          ))}
          
          {/* Hearts around middle */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`heart-${i}`}
              className="deco-dot heart-dot"
              style={{
                transform: `rotateY(${i * 36}deg) translateZ(87px)`,
                top: '50%',
              }}
            >
              💗
            </div>
          ))}
          
          {/* Roses on edge */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`rose-${i}`}
              className="cake-emoji rose-emoji"
              style={{
                transform: `rotateY(${i * 60}deg) translateZ(72px) translateY(-2px)`,
              }}
            >
              🌹
            </div>
          ))}
        </div>

        {/* ===== TOP LAYER ===== */}
        <div className="cake-layer layer-3">
          {[...Array(18)].map((_, i) => (
            <div
              key={`s3-${i}`}
              className="cylinder-panel panel-3"
              style={{
                transform: `rotateY(${i * 20}deg) translateZ(58px)`,
              }}
            />
          ))}
          <div className="cylinder-top top-3"></div>
          <div className="cylinder-bottom bottom-3"></div>
          
          {/* Gold star decorations */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="deco-dot star-dot"
              style={{
                transform: `rotateY(${i * 45}deg) translateZ(59px)`,
                top: '45%',
              }}
            >
              ✨
            </div>
          ))}
          
          {/* Cream piping on top */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`cream-${i}`}
              className="cream-blob"
              style={{
                transform: `rotateY(${i * 45}deg) translateZ(42px) translateY(-2px)`,
              }}
            />
          ))}
        </div>

        {/* ===== NUMBER 22 CANDLES ===== */}
        <div className="number-candles">
          <div className="num-candle">
            <div className="num-candle-body">
              <span>2</span>
            </div>
            <div className="num-wick"></div>
            <div className="num-flame">
              <div className="num-flame-core"></div>
            </div>
            <div className="num-glow"></div>
          </div>
          <div className="num-candle">
            <div className="num-candle-body">
              <span>2</span>
            </div>
            <div className="num-wick"></div>
            <div className="num-flame">
              <div className="num-flame-core"></div>
            </div>
            <div className="num-glow"></div>
          </div>
        </div>

        {/* ===== SMALL CANDLES ===== */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`sc-${i}`}
            className="tiny-candle"
            style={{
              transform: `rotateY(${i * 72 + 15}deg) translateZ(38px)`,
            }}
          >
            <div className="tiny-candle-stick"></div>
            <div className="tiny-wick"></div>
            <div className="tiny-flame-wrap">
              <div className="tiny-flame"></div>
            </div>
          </div>
        ))}

        {/* ===== PLATE ===== */}
        <div className="cake-plate"></div>
        <div className="cake-plate-rim"></div>
      </div>

      {/* Shadow */}
      <div className="cake-shadow"></div>
    </div>
  );
};

export default Cake3D;

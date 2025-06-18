
import React, { useState, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const WaterRipple = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
      timestamp: Date.now(),
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);
  }, []);

  return (
    <div 
      className="absolute inset-0 overflow-hidden cursor-pointer"
      onClick={createRipple}
      style={{ pointerEvents: 'auto' }}
    >
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: 50,
            height: 50,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400/30 to-teal-400/30 animate-ping" 
               style={{ 
                 animationDuration: '1s',
                 animationIterationCount: 1,
                 transform: 'scale(0)',
                 animation: 'ripple 1s ease-out forwards'
               }} 
          />
        </div>
      ))}
    </div>
  );
};

export default WaterRipple;

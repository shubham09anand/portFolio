import React, { useEffect } from 'react';

import '../style/FallingDrop.css';

const FallingDrop = () => {
  useEffect(() => {
    const rainContainer = document.getElementById('rain');

    for (let i = 0; i < 400; i++) {
      const raindrop = document.createElement('div');
      raindrop.className = 'raindrop opacity-20 md:opacity-60';
      raindrop.style.left = `${Math.random() * 200}vw`;
      raindrop.style.animationDuration = `${Math.random() * 1 + 3}s`;
      rainContainer.appendChild(raindrop);
    }

    setTimeout(() => {
      rainContainer.style.opacity = 1;
    }, 4000);

    return () => {
      while (rainContainer.firstChild) {
        rainContainer.removeChild(rainContainer.firstChild);
      }
    };
  }, []);

  return (
    <>
      <div id="rain" className="opacity-0 relative -z-50"></div>
      
    </>
  );
};

export default FallingDrop;


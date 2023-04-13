import React, { useState, useEffect } from 'react';

const NumberAnimation = ({ value, duration = 1000, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const timeElapsed = timestamp - start;

      if (timeElapsed >= delay) {
        const progress = timeElapsed - delay;
        const increment = Math.floor((value / duration) * progress);

        if (increment < value) {
          setDisplayValue(increment);
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      } else {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{displayValue}</span>;
};

export default NumberAnimation;

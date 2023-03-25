import React, { useState, useEffect } from 'react';

import './index.scss';

const MAX_VISIBILITY = 4;

const Carousel = ({ children }) => {
  const count = React.Children.count(children);
  const [active, setActive] = useState(Math.floor(count / 2));
  const [autoPlayDirection, setAutoPlayDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  const bindHoverEvent = (el) => {
    if (!el) return;
    el.addEventListener('mouseenter', () => {
      setAutoPlay(false);
    });
    el.addEventListener('mouseleave', () => {
      setAutoPlay(true);
    });
  };

  const handleClickPrev = () => {
    setActive((active) => {
      if (active === 0) {
        setAutoPlayDirection(1);
        return 0;
      }
      if (active - 1 === 0) {
        setAutoPlayDirection(1);
      }
      return active - 1;
    });
    if (!autoPlay) {
      setAutoPlay(true);
      setAutoPlayDirection(-1);
    }
  };

  const handleClickNext = () => {
    setActive((active) => {
      if (active === count - 1) {
        setAutoPlayDirection(-1);
        return count - 1;
      }
      if (active + 1 === count - 1) {
        setAutoPlayDirection(-1);
      }
      return active + 1;
    });
    if (!autoPlay) {
      setAutoPlay(true);
      setAutoPlayDirection(1);
    }
  };

  // auto play from left to right then right to left
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      if (autoPlayDirection === 1) {
        handleClickNext();
      } else {
        handleClickPrev();
      }
    }, 3500);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoPlayDirection, autoPlay]);

  const bindTouchEvents = (el) => {
    if (!el) return;
    let startX = 0;
    let endX = 0;
    el.addEventListener(
      'touchstart',
      (e) => {
        startX = e.touches[0].pageX;
      },
      { passive: true },
    );
    el.addEventListener(
      'touchend',
      (e) => {
        endX = e.changedTouches[0].pageX;
        if (startX - endX > 50) {
          handleClickNext();
        } else if (endX - startX > 50) {
          handleClickPrev();
        }
      },
      { passive: true },
    );
  };

  useEffect(() => {
    const el = document.querySelector('.carousel');
    bindTouchEvents(el);
    bindHoverEvent(el);
    () => {
      el.removeEventListener('touchstart');
      el.removeEventListener('touchend');
      el.removeEventListener('mouseenter');
      el.removeEventListener('mouseleave');
    };
  }, []);

  // TODO recursively render children
  return (
    <div className="flex justify-center max-w-6xl px-4 mx-auto sm:px-6">
      <div className="carousel">
        {active > 0 && (
          <button className="nav left" onClick={() => handleClickPrev()}>
            {'<'}
          </button>
        )}
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            className="card-container"
            onClick={() => {
              setAutoPlay(false);
            }}
            style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              pointerEvents: active === i ? 'auto' : 'none',
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}
          >
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <button className="nav right" onClick={() => handleClickNext()}>
            {'>'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;

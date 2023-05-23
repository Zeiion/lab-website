import { useEffect, useRef } from 'react';
import { Expo, gsap } from 'gsap';
import { getRandomPic } from '~/utils/GetRandomPic';

import './index.scss';

const OutlineText = ({ text, imgSrc }) => {
  const wrapperRef = useRef(null);
  const init = () => {
    const filledText = wrapperRef.current.querySelector('.filled-text');
    const outlineText = wrapperRef.current.querySelector('.outline-text');
    const outlineTextImage = wrapperRef.current.querySelector(
      '.outline-text-image',
    );

    const xSpace = Math.min(
      0.3 * window.innerWidth,
      0.95 * window.innerWidth - filledText.getBoundingClientRect().right,
    );

    gsap.to(filledText, {
      scrollTrigger: {
        trigger: filledText,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      x: xSpace,
    });
    gsap.to(outlineText, {
      scrollTrigger: {
        trigger: filledText,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      x: xSpace,
    });

    gsap.to(outlineTextImage, {
      scrollTrigger: {
        trigger: outlineTextImage,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      x: -150,
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <section className="section-text-view" data-component="outline-text">
      <div className="sticky-wrapper">
        <div className="sticky-content">
          <div className="section-wrapper" ref={wrapperRef}>
            <h2 className="filled-text">{text}</h2>
            <h2 className="outline-text">{text}</h2>
            <img
              className="outline-text-image object-cover w-full h-[50vh]"
              src={
                imgSrc || 'http://81.70.246.244:9126/i/2023/04/07/1yx48m.webp'
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutlineText;

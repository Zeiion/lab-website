import { useEffect } from 'react';
import { Expo, gsap } from 'gsap';
import { getRandomPic } from '~/utils/GetRandomPic';

import './index.scss';

const OutlineText = ({ text, imgSrc }) => {
  const init = () => {
    gsap.to('.filled-text, .outline-text', {
      scrollTrigger: {
        trigger: '.filled-text, .outline-text',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      x: '30vw',
    });

    gsap.to('.outline-text-image', {
      scrollTrigger: {
        trigger: '.outline-text-image',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      x: -250,
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <section className="section-text-view" data-component="outline-text">
      <div className="sticky-wrapper">
        <div className="sticky-content">
          <div className="section-wrapper">
            <h2 className="filled-text">{text}</h2>
            <h2 className="outline-text">{text}</h2>
            <img
              className="outline-text-image"
              src={imgSrc || 'https://i2.100024.xyz/2023/04/07/1yx48m.webp'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutlineText;

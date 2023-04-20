import { useEffect, useRef } from 'react';
import { Expo, gsap } from 'gsap';
import { getRandomPic } from '~/utils/GetRandomPic';

import './index.scss';

const StickyTextImg = ({ text, subText, imgSrc }) => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const init = () => {
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: 'center 50%',
        end: 'bottom+=500',
        scrub: 1,
      },
      scale: 0.7,
      y: -100,
    });
    gsap.to(text1Ref.current, {
      scrollTrigger: {
        trigger: text1Ref.current,
        start: 'top-=500',
        end: 'bottom+=100',
        scrub: 1,
      },
      y: -210,
      opacity: 1,
    });
    gsap.to(text2Ref.current, {
      scrollTrigger: {
        trigger: text2Ref.current,
        start: 'top-=1000',
        end: 'bottom+=500',
        scrub: 1,
      },
      y: -420,
      opacity: 0.3,
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <section className="section-text-view" data-component="sticky-text">
      <div className="sticky-wrapper">
        <div className="sticky-content" ref={wrapperRef}>
          <div className="section-wrapper">
            <img
              ref={imgRef}
              src={imgSrc || getRandomPic()}
              alt=""
              className="sticky-text-image object-cover w-full h-[40vh]"
            />
            <h1 className="opacity-0 h1 show-text-1" ref={text1Ref}>
              {text}
            </h1>
            <h2 className="mt-40 opacity-0 h2 show-text-2" ref={text2Ref}>
              {subText}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyTextImg;

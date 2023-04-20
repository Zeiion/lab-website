import { useEffect, useRef } from 'react';
import { Expo, gsap } from 'gsap';
import { getRandomPic } from '~/utils/GetRandomPic';

import './index.scss';

const StickyTexts = ({ headText, text, subText }) => {
  const wrapperRef = useRef(null);
  const text0Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const init = () => {
    gsap.to(text0Ref.current, {
      scrollTrigger: {
        trigger: text0Ref.current,
        start: 'top-=800',
        end: 'bottom+=1',
        scrub: 1,
      },
      y: -110,
      opacity: 1,
    });
    gsap.to(text1Ref.current, {
      scrollTrigger: {
        trigger: text1Ref.current,
        start: 'top-=500',
        end: 'bottom+=100',
        scrub: 1,
      },
      y: -210,
      opacity: 0.8,
    });
    gsap.to(text2Ref.current, {
      scrollTrigger: {
        trigger: text1Ref.current,
        start: 'top',
        end: 'bottom+=200',
        scrub: 1,
      },
      y: -520,
      opacity: 0.3,
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <section className="section-text-view" data-component="sticky-texts">
      <div className="sticky-wrapper">
        <div className="sticky-content" ref={wrapperRef}>
          <div className="section-wrapper">
            <h1 className="opacity-0 h1 show-text" ref={text0Ref}>
              {headText}
            </h1>
            <h2 className="opacity-0 h2 show-text" ref={text1Ref}>
              {text}
            </h2>
            <h3 className="mt-48 opacity-0 h3 show-text" ref={text2Ref}>
              {subText}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyTexts;

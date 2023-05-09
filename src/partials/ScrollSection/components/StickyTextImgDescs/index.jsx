import { useEffect, useRef } from 'react';
import { Expo, gsap } from 'gsap';
import { getRandomPic } from '~/utils/GetRandomPic';

import './index.scss';

const StickyTextImgDescs = ({ texts = [], subTexts = [], imgSrc = [] }) => {
  const wrapperRef = useRef(null);
  const imgRefs = useRef([]);
  const text1Refs = useRef([]);
  const text2Refs = useRef([]);
  const imgWrapperRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const effectOffset = 20;

  const init = () => {
    const tl = gsap.timeline();
    tl.to(imgWrapperRef.current, {
      scrollTrigger: {
        trigger: imgWrapperRef.current,
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
    imgRefs.current.forEach((img, index) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: imgWrapperRef.current,
          start: 'bottom top-=' + (500 + 4000 * index),
          end: 'bottom top-=' + (4000 * index + 100),
          scrub: 1,
        },
        opacity: 1,
        y: effectOffset,
      });
      index++;
      gsap.to(img, {
        scrollTrigger: {
          trigger: imgWrapperRef.current,
          start: 'bottom top-=' + (500 + 4000 * index),
          end: 'bottom top-=' + (4000 * index + 100),
          scrub: 1,
        },
        opacity: 0,
        y: -effectOffset,
      });
    });
    text1Refs.current.forEach((text, index) => {
      gsap.to(text, {
        scrollTrigger: {
          trigger: imgWrapperRef.current,
          start: 'bottom top-=' + (1000 + 4000 * index),
          end: 'bottom top-=' + (4000 * index - 500),
          scrub: 1,
        },
        opacity: 1,
        x: -effectOffset,
      });
      index++;
      gsap.to(text, {
        scrollTrigger: {
          trigger: imgWrapperRef.current,
          start: 'bottom top-=' + (1000 + 4000 * index),
          end: 'bottom top-=' + (4000 * index - 500),
          scrub: 1,
        },
        opacity: 0,
        x: effectOffset,
      });
    });
    text2Refs.current.forEach((text, index) => {
      gsap.to(text, {
        scrollTrigger: {
          trigger: imgWrapperRef.current,
          start: 'bottom top-=' + (1000 + 4000 * index),
          end: 'bottom top-=' + (4000 * index - 500),
          scrub: 1,
        },
        opacity: 1,
        x: effectOffset,
      });
      index++;
      gsap.to(text, {
        scrollTrigger: {
          trigger: imgWrapperRef.current,
          start: 'bottom top-=' + (1000 + 4000 * index),
          end: 'bottom top-=' + (4000 * index - 500),
          scrub: 1,
        },
        opacity: 0,
        x: -effectOffset,
      });
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <section className="section-text-view" data-component="sticky-text-img-descs">
      <div className="sticky-wrapper">
        <div className="sticky-content" ref={wrapperRef}>
          <div className="section-wrapper">
            {/*  <img
              ref={imgRef}
              src={imgSrc[0] || getRandomPic()}
              alt=""
              className="sticky-text-image object-cover w-full h-[40vh]"
            /> */}
            <div className="opacity-0 section-text-wrapper-top" ref={text1Ref}>
              {texts.map((text, index) => (
                <h1
                  className="mt-2 opacity-0 h1 show-text-1"
                  ref={(el) => (text1Refs.current[index] = el)}
                  style={{
                    left: effectOffset,
                  }}
                >
                  {text}
                </h1>
              ))}
            </div>
            <div className="section-img-wrapper" ref={imgWrapperRef}>
              {imgSrc.map((src, index) => (
                <img
                  ref={(el) => (imgRefs.current[index] = el)}
                  src={src || getRandomPic()}
                  alt=""
                  key={index}
                  className="sticky-text-image object-cover w-full h-[40vh]"
                  style={{
                    opacity: index === 0 ? 1 : 0,
                  }}
                />
              ))}
            </div>
            
            <div className="opacity-0 section-text-wrapper-bottom" ref={text2Ref}>
              {subTexts.map((subText, index) => (
                <h5
                  className="opacity-0 h5 show-text-2"
                  style={{
                    left: -effectOffset,
                  }}
                  ref={(el) => (text2Refs.current[index] = el)}
                >
                  {subText}
                </h5>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyTextImgDescs;

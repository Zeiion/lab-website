import { useEffect, useRef } from 'react';
import { Expo, gsap } from 'gsap';
import { getRandomPic } from '~/utils/GetRandomPic';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.scss';


const StickyTextImgDescs = ({ texts = [], subTexts = [], imgSrc = [] }) => {
  const wrapperRef = useRef(null);
  const imgRefs = useRef([]);
  const text1Refs = useRef([]);
  const text2Refs = useRef([]);
  const text1Ref = useRef(null);
  const imgWrapperRef = useRef(null);
  const text2Ref = useRef(null);
  const num = texts.length;
  const effectOffset = 30;

  const init = () => {
    gsap.to(text1Ref.current, {
      scrollTrigger: {
        trigger: text1Ref.current,
        start: 'top-=1000',
        end: 'top-=400',
        scrub: 1,
      },
      opacity: 0.7,
      y: '-7vh',
    });
    gsap.to(imgWrapperRef.current, {
      scrollTrigger: {
        trigger: imgWrapperRef.current,
        start: 'top-=500',
        end: 'top-=400',
        scrub: 2,
      },
      y: '-14vh',
      scale: 0.7,
      opacity: 0.7,
    });
    gsap.to(text2Ref.current, {
      scrollTrigger: {
        trigger: text2Ref.current,
        start: 'top-=1000',
        end: 'top-=400',
        scrub: 3,
      },
      y: '-52vh',
      opacity: 0.3,
    });

    text1Refs.current.forEach((text, index) => {
      gsap.to(text, {
        scrollTrigger: {
          trigger: text1Ref.current,
          start: 'bottom top-=' + (400 + 1500 * index),
          end: 'bottom top-=' + (1500 * index - 1100),
          scrub: 1,
        },
        opacity: 1,
        x: -effectOffset,
      });
      index++;
      gsap.to(text, {
        scrollTrigger: {
          trigger: text1Ref.current,
          start: 'bottom top-=' + (400 + 1500 * index),
          end: 'bottom top-=' + (1500 * index - 1100),
          scrub: 1,
        },
        opacity: 0,
        x: effectOffset,
      });
    });

    imgRefs.current.forEach((img, index) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: text1Ref.current,
          start: 'bottom top-=' + (400 + 1500 * index),
          end: 'bottom top-=' + (1500 * index - 1100),
          scrub: 1,
        },
        opacity: 1,
        y: effectOffset,
        x: effectOffset,
        scale: 1,
      });
      index++;
      gsap.to(img, {
        scrollTrigger: {
          trigger: text1Ref.current,
          start: 'bottom top-=' + (400 + 1500 * index),
          end: 'bottom top-=' + (1500 * index - 1100),
          scrub: 1,
        },
        scale: 0.7,
        opacity: 0,
        y: -effectOffset,
        x: -effectOffset,
      });
    });

    text2Refs.current.forEach((text, index) => {
      gsap.to(text, {
        scrollTrigger: {
          trigger: text1Ref.current,
          start: 'bottom top-=' + (400 + 1500 * index),
          end: 'bottom top-=' + (1500 * index - 1100),
          scrub: 1,
        },
        opacity: 1,
        x: effectOffset,
      });
      index++;
      gsap.to(text, {
        scrollTrigger: {
          trigger: text1Ref.current,
          start: 'bottom top-=' + (400 + 1500 * index),
          end: 'bottom top-=' + (1500 * index - 1100),
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
    <section
      className="section-text-view"
      data-component="sticky-text-img-descs"
    >
      <div className="sticky-wrapper" style={{ height: `${ 240 * num }vh` }}>
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
                  className="mt-2 opacity-0 h1"
                  ref={(el) => (text1Refs.current[index] = el)}
                  key={index}
                  style={{
                    left: effectOffset,
                  }}
                >
                  {text}
                </h1>
              ))}
            </div>
            <div className="opacity-0 section-img-wrapper " ref={imgWrapperRef}>
              {imgSrc.map((src, index) => (
                <img
                  ref={(el) => (imgRefs.current[index] = el)}
                  src={src || getRandomPic()}
                  alt=""
                  key={index}
                  className="sticky-text-image object-cover w-full h-[56vh] opacity-0 "
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    top: -effectOffset,
                  }}
                />
              ))}
            </div>

            <div
              className="opacity-0 section-text-wrapper-bottom"
              ref={text2Ref}
            >
              {subTexts.map((subText, index) => (
                <h5
                  key={index}
                  className="opacity-0 h5 indent-10"
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

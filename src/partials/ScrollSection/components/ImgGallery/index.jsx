import { useEffect, useRef } from 'react';
import { Expo, gsap } from 'gsap';
import { getRandomPic } from '~/utils/GetRandomPic';
import { FEIYUN_URL } from '~/consts/index';

import './index.scss';

const StickyTexts = ({ imgList = [] }) => {
  const wrapperRef = useRef(null);
  const text0Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const init = () => {
    const LandingPageScrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '#ImgWrapper',
        start: '0% 0%',
        end: '100% 0%',
        scrub: 2.2,
      },
    });
    LandingPageScrollTrigger.to(
      '#ImgWrapper #img7',
      { transform: 'translateZ(3800px)' },
      0,
    )
      .to('#ImgWrapper #img6', { transform: 'translateZ(3000px)' }, 0)
      .to('#ImgWrapper #img5', { transform: 'translateZ(2400px)' }, 0)
      .to('#ImgWrapper #img4', { transform: 'translateZ(2100px)' }, 0)
      .to('#ImgWrapper #img3', { transform: 'translateZ(1900px)' }, 0)
      .to('#ImgWrapper #img2', { transform: 'translateZ(1700px)' }, 0)
      .to('#ImgWrapper #img1', { transform: 'translateZ(1500px)' }, 0)
      .to('#codeby a', { y: -330, opacity: 1 }, 1);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <section data-component="img-gallery">
      <div id="ImgWrapper">
        {imgList.map((imgSrc, index) => (
          <img key={index} id={'img' + (index + 1)} src={imgSrc} alt="" />
        ))}
        <div id="codeby">
          <a target="_blank" href={FEIYUN_URL} className="opacity-0 h1">
            Powered By <span>Feiyun</span>
            <br />
            <br />↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default StickyTexts;

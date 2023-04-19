import { useEffect, useRef } from 'react';

import './index.scss';
import { getRandomPic } from '~/utils/GetRandomPic';
import StickyCard from './components/StickyCard';
import OutlineText from './components/OutlineText';
import StickyText from './components/StickyText';

const ScrollSection = () => {
  const cardViewFn = () => {
    // const headline = section.querySelector('.section-headline-wrapper');
    // const img = section.querySelector('.section-img-wrapper');
    // gsap.to('.show-text', {
    //   scrollTrigger: {
    //     trigger: headline,
    //     start: 'top 65',
    //     end: 'bottom 55',
    //     scrub: 1,
    //   },
    //   y: -300,
    //   ease: Expo.easeOut,
    //   scale: 0.8,
    //   opacity: 1,
    // });
    // gsap.to(img, {
    //   scrollTrigger: {
    //     trigger: headline,
    //     start: 'top 65',
    //     end: 'bottom 35',
    //     scrub: 1,
    //   },
    //   y: -200,
    //   x: 200,
    //   ease: Expo.easeOut,
    //   scale: 1.3,
    //   opacity: 1,
    // });
    // // headline scale
    // gsap.to(headline, {
    //   scrollTrigger: {
    //     trigger: headline,
    //     start: 'top 65',
    //     end: 'bottom 65',
    //     scrub: 1,
    //   },
    //   y: -100,
    //   ease: Expo.easeOut,
    //   scale: 1.2,
    // });
  };
  useEffect(() => {
    cardViewFn();
  });
  return (
    <section data-component="scroll-section">
      <div className="px-4 mx-auto overflow-visible sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 mx-auto text-center md:pb-20 scroll-wrapper">
            <h2 className="mb-4 h2">飞云集智</h2>
            <p className="text-xl text-center text-gray-400 para">
              交通大数据共享开放平台
            </p>
            <div>test</div>
            <StickyCard
              list={[
                {
                  children: (
                    <>
                      数据-模型-应用 <br /> 一站式服务平台
                    </>
                  ),
                  imgSrc: getRandomPic(),
                },
                {
                  children: (
                    <>
                      数据-模型-应用 <br /> 一站式服务平台
                    </>
                  ),
                  imgSrc: getRandomPic(),
                },
              ]}
            />
            <OutlineText text="交通大数据共享开放平台" />
            <StickyText
              text="交通大数据共享开放平台"
              subText="交通大数据共享开放平台"
              imgSrc="https://cdn.pixabay.com/photo/2019/07/11/07/20/industry-4330186__340.jpg"
            />
            <StickyCard
              list={[
                {
                  children: (
                    <>
                      数据-模型-应用 <br /> 一站式服务平台
                    </>
                  ),
                  imgSrc: getRandomPic(),
                },
                {
                  children: (
                    <>
                      数据-模型-应用 <br /> 一站式服务平台
                    </>
                  ),
                  imgSrc: getRandomPic(),
                },
                {
                  children: (
                    <>
                      数据-模型-应用 <br /> 一站式服务平台
                    </>
                  ),
                  imgSrc: getRandomPic(),
                },
              ]}
            />
            <StickyText
              text="交通大数据共享开放平台"
              subText="交通大数据共享开放平台"
              imgSrc="https://cdn.pixabay.com/photo/2019/07/11/07/20/industry-4330186__340.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;

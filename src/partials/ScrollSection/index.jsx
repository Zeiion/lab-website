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
            <StickyText
              text="飞云集智"
              subText="交通大数据共享开放平台"
              imgSrc="http://www.feiyun.tech:82/img/homepage_background.fe6132fb.png "
            />
            <StickyCard
              list={[
                {
                  children: (
                    <div className="flex flex-col justify-center h-full gap-8">
                      <span>
                        数据-模型-应用 <br /> 一站式服务平台
                      </span>
                      <span className="h4 opacity-80">
                        Data-Model-Application <br /> One stop service platform
                      </span>
                    </div>
                  ),
                  imgSrc: 'https://i2.100024.xyz/2023/04/20/ze5yrh.webp',
                },
                {
                  children: (
                    <div className="flex flex-col justify-center h-full gap-8">
                      <span>汇聚行业优质数据</span>
                      <span className="h4 opacity-80">
                        Gathering high-quality industry data
                      </span>
                      <span>动态发布公开数据</span>
                      <span className="h4 opacity-80">
                        Dynamic release of public data
                      </span>
                    </div>
                  ),
                  imgSrc: 'https://i2.100024.xyz/2023/04/20/zgi02w.webp',
                },
              ]}
            />
            <OutlineText text="多维数据，海量汇聚" />
            <StickyCard
              list={[
                {
                  children: (
                    <div className="flex flex-col justify-center h-full gap-8">
                      <span>打造知识流通环境</span>
                      <span className="h4 opacity-80">
                        Create a knowledge circulation environment
                      </span>
                    </div>
                  ),
                  imgSrc:
                    'https://cdn.pixabay.com/photo/2018/06/09/15/49/technology-3464633__340.jpg',
                },
                {
                  children: (
                    <div className="flex flex-col justify-center h-full gap-8">
                      <span>促进模型快速落地</span>
                      <span className="h4 opacity-80">
                        Promote the rapid landing of models
                      </span>
                    </div>
                  ),
                  imgSrc:
                    'https://cdn.pixabay.com/photo/2020/04/25/12/14/circle-5090539__340.jpg',
                },
                {
                  children: (
                    <div className="flex flex-col justify-center h-full gap-8">
                      <span>搭建学者交流平台</span>
                      <span className="h4 opacity-80">
                        Build a platform for scholars to communicate
                      </span>
                    </div>
                  ),
                  imgSrc:
                    'https://cdn.pixabay.com/photo/2019/10/15/05/17/artificial-intelligence-4550606__340.jpg',
                },
              ]}
            />
            <StickyText
              text="智能算法，智慧互联"
              subText="Artificial Intelligence, Incredible Interconnection"
              imgSrc="https://cdn.pixabay.com/photo/2019/07/11/07/20/industry-4330186__340.jpg"
            />
            {/* <StickyCard
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
            /> */}
            <OutlineText
              text="持续共享数据，学术资源发布"
              imgSrc="https://cdn.pixabay.com/photo/2018/03/10/09/45/businessman-3213659__340.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;

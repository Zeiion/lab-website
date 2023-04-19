import { Expo, gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import './index.scss';
import { getRandomPic } from '../../utils/GetRandomPic';

const ScrollSection = () => {
  const cardViewFn = () => {
    const sections = document.querySelectorAll('.section-card-view');
    const screenWidth = document.documentElement.clientWidth;

    sections.forEach((section) => {
      const cards = section.querySelectorAll('.section-card');
      const cardsNumber = cards.length;
      if (!cardsNumber) {
        // TODO extract
        const headline = section.querySelector('.section-headline-wrapper');
        const img = section.querySelector('.section-img-wrapper');
        gsap.to('.show-text', {
          scrollTrigger: {
            trigger: headline,
            start: 'top 65',
            end: 'bottom 55',
            scrub: 1,
          },
          y: -300,
          ease: Expo.easeOut,
          scale: 0.8,
          opacity: 1,
        });
        gsap.to(img, {
          scrollTrigger: {
            trigger: headline,
            start: 'top 65',
            end: 'bottom 35',
            scrub: 1,
          },
          y: -200,
          x: 200,
          ease: Expo.easeOut,
          scale: 1.3,
          opacity: 1,
        });
        // headline scale
        gsap.to(headline, {
          scrollTrigger: {
            trigger: headline,
            start: 'top 65',
            end: 'bottom 65',
            scrub: 1,
          },
          y: -100,
          ease: Expo.easeOut,
          scale: 1.2,
        });

        return;
      }
      const cardWidth = cards[0].clientWidth;
      const cardMargin = Number(
        window
          .getComputedStyle(cards[1])
          .getPropertyValue('margin-left')
          .slice(0, -2),
      );
      const cardScroll = cardWidth + cardMargin;
      const stickyTop = 65;

      const wrapper = section.querySelector('.section-wrapper');
      const stickyWrapper = section.querySelector('.sticky-wrapper');
      // console.log(cardWidth, cardMargin, cardsNumber);
      const swiperOffset =
        // 距离页面左侧的宽度 * 2
        wrapper.getBoundingClientRect().left * 2 +
        // 每个卡片宽度 * 卡片数量
        cardWidth * cardsNumber +
        // 卡片的左侧距离 * (卡片数量 - 1)
        cardMargin * (cardsNumber - 1) -
        // 屏幕的宽度
        screenWidth;

      gsap.to(wrapper, {
        scrollTrigger: {
          trigger: stickyWrapper,
          start: 'top 65',
          end: 'bottom 100%',
          scrub: 0,
        },
        ease: 'none',
        x: -swiperOffset,
      });
      cards.forEach(function (card, index) {
        if (index > 0) {
          const startTrigger = stickyTop - cardScroll * (index - 1);
          gsap.to(card.querySelector('.section-card-content'), {
            scrollTrigger: {
              trigger: card,
              start: 'top ' + startTrigger,
              end: '+=' + cardScroll / 3,
              scrub: 0,
            },
            ease: 'none',
            filter: 'blur(0px)',
            scale: 1,
          });
        }
      });
    });
  };
  useEffect(() => {
    cardViewFn();
  });
  return (
    <section>
      <div className="px-4 mx-auto overflow-visible sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 mx-auto text-center md:pb-20 scroll-wrapper">
            <h2 className="mb-4 h2">飞云集智</h2>
            <p className="text-xl text-center text-gray-400 para">
              交通大数据共享开放平台
            </p>
            <div>test</div>
            <section className="section-connect-4 section-card-view">
              <div className="sticky-wrapper">
                <div className="sticky-content">
                  <div className="section-wrapper">
                    {/* TODO 渐变色 */}
                    <div className="section-card">
                      <div className="flex gap-6 overflow-hidden section-card-content bg-purple-500/20 rounded-3xl ">
                        <div className="flex-1 p-4 h2">
                          <div className="section-group">
                            数据-模型-应用 <br />
                            一站式服务平台
                          </div>
                        </div>
                        <img
                          src={getRandomPic()}
                          alt=""
                          className="object-cover w-2/3 h-[40vh]"
                        />
                      </div>
                    </div>

                    <div className="section-card">
                      <div className="flex gap-6 overflow-hidden section-card-content bg-purple-500/20 rounded-3xl ">
                        <div className="flex-1 p-4 h2">
                          <div className="section-group">
                            数据-模型-应用 <br />
                            一站式服务平台
                          </div>
                        </div>
                        <img
                          src={getRandomPic()}
                          alt=""
                          className="object-cover w-2/3 h-[40vh]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section-connect-4 section-card-view">
              <div className="sticky-wrapper">
                <div className="sticky-content">
                  <div className="section-headline-wrapper">
                    <img
                      src={getRandomPic()}
                      alt=""
                      className="object-cover w-2/3 h-[40vh] section-img-wrapper"
                    />
                    <h1 className="h1">Test Text</h1>
                    <h2 className="h2 show-text">阿巴阿巴</h2>
                  </div>
                </div>
              </div>
            </section>
            <section className="section-connect-4 section-card-view">
              <div className="sticky-wrapper">
                <div className="sticky-content">
                  <div className="section-headline-wrapper">
                    <h1 className="h1 show-text-2">交通大数据共享开放平台</h1>
                    <h2 className="h2 show-text-3">交通大数据共享开放平台</h2>
                    <img
                      src={getRandomPic()}
                      alt=""
                      className="object-cover w-full h-[40vh]"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="section-connect-4 section-card-view">
              <div className="sticky-wrapper">
                <div className="sticky-content">
                  <div className="section-wrapper">
                    {/* TODO 渐变色 */}
                    <div className="section-card">
                      <div className="flex gap-6 overflow-hidden section-card-content bg-purple-500/20 rounded-3xl ">
                        <div className="flex-1 p-4 h2">
                          <div className="section-group">
                            数据-模型-应用 <br />
                            一站式服务平台
                          </div>
                        </div>
                        <img
                          src={getRandomPic()}
                          alt=""
                          className="object-cover w-2/3 h-[40vh]"
                        />
                      </div>
                    </div>

                    <div className="section-card">
                      <div className="flex gap-6 overflow-hidden section-card-content bg-purple-500/20 rounded-3xl ">
                        <div className="flex-1 p-4 h2">
                          <div className="section-group">
                            数据-模型-应用 <br />
                            一站式服务平台
                          </div>
                        </div>
                        <img
                          src={getRandomPic()}
                          alt=""
                          className="object-cover w-2/3 h-[40vh]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;

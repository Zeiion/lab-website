import { useEffect } from 'react';
import { Expo, gsap } from 'gsap';
import { getRandomPic } from '~/utils/GetRandomPic';

import './index.scss';

const StickyCard = ({ list = [] }) => {
  const initCard = () => {
    const sections = document.querySelectorAll('.section-card-view');
    const screenWidth = document.documentElement.clientWidth;
    sections.forEach((section) => {
      const cards = section.querySelectorAll('.section-card');
      const cardsNumber = cards.length;
      if (!cardsNumber) {
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
          end: 'bottom 150%',
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
    initCard();
  }, []);
  return (
    <section className="section-card-view" data-component="sticky-card">
      <div className="sticky-wrapper">
        <div className="sticky-content">
          <div className="section-wrapper">
            {/* TODO 渐变色 */}
            {list.map(({ children, imgSrc }, index) => {
              return (
                <div className="section-card" key={index}>
                  <div className="flex gap-6 overflow-hidden section-card-content bg-purple-500/20 rounded-3xl ">
                    <div className="flex-1 p-4 h2">
                      <div className="section-group">{children}</div>
                    </div>
                    <img
                      src={imgSrc || getRandomPic()}
                      alt=""
                      className="object-cover w-2/3 h-[40vh]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyCard;

import { useEffect, useRef } from 'react';
import MemberCard from '~/components/MemberCard';
import './index.scss';
import { getRandomPic } from '~/utils/GetRandomPic';
import StickyCard from './components/StickyCard';
import StickyTextCard from './components/StickyTextCard';
import OutlineText from './components/OutlineText';
import StickyTextImg from './components/StickyTextImg';
import StickyTextImgs from './components/StickyTextImgs';
import StickyTexts from './components/StickyTexts';
import TeamInfo from './components/TeamInfo';
import ImgGallery from './components/ImgGallery';

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
            <StickyTextImg
              text="飞云集智"
              subText="交通大数据共享开放平台"
              imgSrc="https://i2.100024.xyz/2023/05/02/12pfkjy.webp"
            />
            <StickyTextCard
              title="数据共享"
              list={[
                {
                  children: (
                    <div className="flex flex-col justify-center h-full gap-8">
                      <span className="h3">
                        数据-模型-应用 <br /> 一站式服务平台
                      </span>
                      <span className="h5 opacity-80">
                        Data-Model-Application <br /> One stop service platform
                      </span>
                    </div>
                  ),
                  imgSrc: 'https://i2.100024.xyz/2023/05/02/13083ew.webp',
                },
                {
                  children: (
                    <div className="flex flex-col justify-center h-full gap-8">
                      <span className="h3">汇聚行业优质数据</span>
                      <span className="h5 opacity-80">
                        Gathering high-quality industry data
                      </span>
                      <span className="h3">动态发布公开数据</span>
                      <span className="h5 opacity-80">
                        Dynamic release of public data
                      </span>
                    </div>
                  ),
                  imgSrc: 'https://i2.100024.xyz/2023/05/03/wvb2.webp',
                },
              ]}
            />
            <OutlineText
              text="多维数据，海量汇聚"
              imgSrc="https://i2.100024.xyz/2023/05/03/6v5vq.webp"
            />

            <StickyCard
              list={[
                {
                  children: (
                    <div className="flex flex-col justify-center h-full gap-8">
                      <span className="h3">打造知识流通环境</span>
                      <span className="h5 opacity-80">
                        Create a knowledge circulation environment
                      </span>
                    </div>
                  ),
                  imgSrc: 'https://i2.100024.xyz/2023/05/03/grx1s.webp',
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
                  imgSrc: 'https://i2.100024.xyz/2023/05/03/hy9kw.webp',
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
                  imgSrc: 'https://i2.100024.xyz/2023/05/03/j80cs.webp',
                },
              ]}
            />
            <StickyTextImgs
              texts={[
                '智能算法，智慧互联',
                '合约图谱，知识互通',
                '合约执行，资源共享',
              ]}
              subTexts={[
                'Artificial Intelligence, Incredible Interconnection',
                'Contract Diagrams, Share Knowledge',
                'Execute Contracts, Share Resources',
              ]}
              imgSrc={[
                'https://i2.100024.xyz/2023/05/04/ii9ya5.webp',
                'https://i2.100024.xyz/2023/05/07/ql158o.webp',
                'https://i2.100024.xyz/2023/05/07/qlh1jb.webp',
              ]}
            />
            <div></div>
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
              imgSrc="https://i2.100024.xyz/2023/04/14/jozbu.webp"
            />

            <StickyTexts headText="敬请关注" text="..." />

            <ImgGallery
              imgList={Array(7)
                .fill(0)
                .map(() => getRandomPic())}
            />
            <StickyTexts
              headText="团队带头人"
              text={
                <div className="flex items-stretch h-64 gap-16 w-[64rem]">
                  <img
                    src='https://i2.100024.xyz/2023/05/08/h2ncfy.webp'
                    className='flex flex-col object-cover w-64 h-64 rounded-full center'
                  />
                  <div className='flex-1 overflow-auto text-justify h4 opacity-80'>
                    吕卫锋，教授、博士生导师。 1998年博士毕业于北京航空航天大学计算机系。现任北京航空航天大学副校长，软件开发环境国家重点实验室副主任。目前是国家标准委员会专家组成员，国家科技平台标准化技术委员会委员，北京市信息化专家咨询委员会委员，中国电子学会理事会理事。中国软件协会副理事长、秘书长。
                    主要从事大数据挖掘理论与智慧城市应用研究工作。
                  </div>
                </div>
              }
              subText="博士16人，研究生20人，本科生40人"
            />

            {/* <TeamInfo
              headText="团队领头人"
              text=""
              subText="博士生20人，研究生12人，本科生40人"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;

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
    import StickyTextImgDescs from './components/StickyTextImgDescs';

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
                  imgSrc: 'https://i2.100024.xyz/2023/05/08/kn8bd0.webp',
                },
              ]}
            />
            <OutlineText
              text="多维数据，海量汇聚"
              imgSrc="https://i2.100024.xyz/2023/05/08/pglmj7.webp"
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
                  imgSrc: 'https://i2.100024.xyz/2023/05/08/kg4ak8.webp',
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
                  imgSrc: 'https://i2.100024.xyz/2023/05/08/kidpox.webp',
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
                  imgSrc: 'https://i2.100024.xyz/2023/05/08/kkd1yk.webp',
                },
              ]}
            />
            <StickyTextImgDescs
              texts={[
                '智能算法，智慧互联',
                '合约图谱，知识互通',
                '合约执行，资源共享',
              ]}
              subTexts={[
                '结合人工智能、云计算等技术，通过高效算法实现城市交通的优化调度和智能管控。平台集成了多种智慧交通算法，如路况预测、拥堵识别、优化路径规划等，可快速响应交通事件，提升路网运行效率，改善出行体验，为城市发展注入新动能。',
                '平台突出了知识共享和沉淀，为用户提供优质、可持续的智能交通解决方案，助力智慧城市建设和交通管理优化。我们致力于打造一个开放、协作的平台，让不同领域的专家和企业间能够自由交流和共享资源，实现更好的互通和合作。',
                '通过高效可靠的交通数据分析和预测功能提供算法合约服务，实现用户需求与算法执行的无缝衔接，同时通过资源共享的方式降低了用户使用成本，确保每个用户都能快速地获得所需结果。平台维护算法执行过程中的稳定性和可靠性，为用户提供优质的交通智能化解决方案。',
              ]}
              imgSrc={[
                'https://i2.100024.xyz/2023/05/08/rbwb23.webp',
                'https://i2.100024.xyz/2023/05/08/kobmji.webp',
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
                <div className="flex items-stretch h-70 gap-16 w-[64rem]">
                  <img
                    src='https://i2.100024.xyz/2023/05/08/gnnfsz.webp'
                    className='flex flex-col object-cover w-64 h-64 rounded-3xl center'
                  />
                  <div className='flex-1 overflow-auto text-justify h4 opacity-80'>
                    吕卫锋，教授、博士生导师。 1998年博士毕业于北京航空航天大学计算机系。现任北京航空航天大学副校长，软件开发环境国家重点实验室副主任。目前是国家标准委员会专家组成员，国家科技平台标准化技术委员会委员，北京市信息化专家咨询委员会委员，中国电子学会理事会理事。中国软件协会副理事长、秘书长。
                    主要从事大数据挖掘理论与智慧城市应用研究工作，主要研究方向为海量数据处理、算法及大型信息系统开发方法。获国家科技发明二等奖1项，国家科技进步二等奖1项，省部级科学技术一等奖3项。
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

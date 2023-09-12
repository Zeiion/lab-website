import { useEffect, useRef } from 'react';
import { Expo, gsap } from 'gsap';
import { getRandomPic } from '~/utils/GetRandomPic';

import './index.scss';
import MemberCard from '../../../../components/MemberCard';

const StickyTexts = ({ headText, text, subText }) => {
  const teamInfo = {
    title: '北航计算机学院交通大数据组',
    description: `北京航空航天大学（简称北航）成立于1952年，是新中国第一所航空航天高等学府，现隶属于工业和信息化部，位列首批国家“双一流”A类、“985工程”、“211工程.主要针对我国综合交通跨行业、跨地域管理服务能力不足等问题，建设综合交通大数据应用技术创新平台，支撑开展交通运输大数据采集处理、分析挖掘、管理决策、融合应用等技术的研发和工程化。为大数据驱动的综合交通运输规划、大型综合交通枢纽协同运行组织与优化、城市群综合交通系统运行监测与服务、综合交通智慧出行协同运行研发、综合交通系统能耗排放分析与节能服务、综合交通系统运行安全与应急保障等综合交通大数据应用提供技术、平台支撑；产出各类科技专利、标准、建议与工程产品原型；在国家层面提高支撑开展综合交通大数据应用的研究、服务和应用推广工作的能力；积极进行产业合作，包括软硬件销售、集成开发及公益服务；培养综合交通大数据应用技术和管理人才。    `,
    researchDirections: ['研究方向1', '研究方向2'],
    collaborationIntro:
      '我们团队由两位经验丰富的技术专家担任领头人，拥有丰富的科研经验，多年的软件开发和技术管理能力。团队成员结构包括10位博士、40余位硕士和90余位本科生，涵盖了软件开发、交通大数据科学、人工智能等多个领域。我们团队成员均来自北京航空航天大学的优秀学生，拥有各种专业技能和技术能力，包括程序设计、算法开发、数据库设计和管理等。我们的团队成员拥有的各种头衔，包括但不限于教授、高级工程师、架构师等。我们的团队注重技术创新和学习，积极研究新技术、新方法和新工具，以提供更优秀的解决方案。',
    contactInfo: 'xxx@buaa.edu.cn',
    members: [
      {
        name: '杜博文',
        description: `男，教授，博士生导师，国家自然科学基金委优秀青年基金获得者。2013年博士毕业于北京航空航天大学，曾在美国新泽西州立大学(Rutgers)做访问学者，现就职于软件开发环境国家重点实验室、综合交通大数据应用技术国家工程实验室及北京脑科学高精尖中心，主要研究方向为时空大数据挖掘、人工智能与工程大数据。现是IEEE computational Intelligence Society TC Member，SIGKDD、AAAI等多个CCF A类会议SPC/PC，TKDE、TITS等Q1期刊审稿人，是中国土木工程学会轨道交通分会青年专家委员、中国铁道学会高速铁路委员会青年专家委员。
                围绕所研究方向，主持了包括国家自然科学基金（含优秀青年基金、重大项目课题等）、国家重点研发计划课题等项目10余项，共发表包括KDD、AAAI、SIGMOD、TKDE、Networks、TC等国际期刊/会议学术论文70余篇，其中CCF A类（或JCR Q1）论文30余篇，授权发明专利10余项，荣获国家科技发明二等奖1项（排名3），国家技术进步二等奖1项（排名3），省部级科技奖项5项`,
        imgSrc: 'http://39.97.209.211:9126/i/2023/05/08/h2ncfy.webp',
        tags: ['教授', '博士生导师'],
        // 代表作
        works: [
          {
            title: '',
            href: '',
          },
          {
            title: '',
            href: '',
          },
        ],
      },
      {
        name: '孙磊磊',
        description: `北京航空航天大学计算机学院副教授，博士生导师。
                2009年、2012年、2017年分别于大连理工大学获得工学学士、硕士、博士学位。2015年9月至2016年8月国家公派赴美国罗格斯新泽西州立大学访问学习，2017年3月至2019年4月于清华大学从事博士后研究工作。主要研究方向为机器学习与数据挖掘，具体包括深度时空学习网络、图神经网络、时序数据分析与挖掘等。已经在数据挖掘领域国际顶级学术期刊TKDE，数据挖掘领域国际顶级学术会议KDD，以及AAAI，SIGIR，WWW，ICDM，TITS等国际学术期刊会议发表学术论文60余篇，包括CCF-A类期刊/会议论文30余篇。担任KDD、AAAI、IJCAI、SIGIR、CIKM、WWW、WSDM、KSEM等国际学术会议程序委员，以及TKDE、PAMI、TKDD、TITS等国际学术期刊审稿人。主持科技部科技创新2030——“新一代人工智能” 重大项目课题，国家自然自然科学基金面上项目《动态图表示学习研究与应用》，国家自然科学基金青年基金《广义时空数据分析与挖掘》，北航青年拔尖人才支持计划项目《面向智慧交通的动态演化预测模型》，并参与国家自然科学基金联合基金，科技部重点研发计划等国家和省部级重点课题10余项。研究成果在国家路网中心等部门得到了很好地应用，获得2021年度中国公路学会科学技术奖特等奖。获得“优秀班主任”和“优秀学业导师”荣誉称号，多次指导博士/硕士研究生获得“国家奖学金”，指导本科科技竞赛，获冯如杯一等奖1项，二等奖3项，被评为“冯如杯”竞赛优秀指导教师。`,
        imgSrc: 'http://39.97.209.211:9126/i/2023/05/08/h3t97z.webp',
        tags: ['副教授', '博士生导师'],
        // 代表作
        works: [],
      },
    ],
    works: [
      {
        title: 'Designing a functional workflow at home.',
        description: `Description of the card
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
              nisl, eu aliquet nunc nunc eget lorem.`,
        imgSrc:
          'https://img2.baidu.com/it/u=1296226479,2546842574&fm=253&fmt=auto&app=138&f=PNG?w=554&h=237',
        tags: ['tag1', 'tag2'],
        author: 'Zeiion',
        authorImgSrc: 'http://placekitten.com/300/300',
        date: '2023-01',
        href: '/achieve/1',
      },
      {
        title: 'Designing a functional workflow at home.',
        description: `Description of the card
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
              nisl, eu aliquet nunc nunc eget lorem.`,
        imgSrc:
          'https://img2.baidu.com/it/u=1296226479,2546842574&fm=253&fmt=auto&app=138&f=PNG?w=554&h=237',
        tags: ['tag1', 'tag2'],
        author: 'Zeiion',
        authorImgSrc: 'http://placekitten.com/300/300',
        date: '2023-01',
        href: '/achieve/2',
      },
      {
        title: 'Designing a functional workflow at home.',
        description: `Description of the card
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
              nisl, eu aliquet nunc nunc eget lorem.`,
        imgSrc: 'http://placekitten.com/1200/600',
        tags: ['tag1', 'tag2'],
        author: 'Zeiion',
        authorImgSrc: 'http://placekitten.com/300/300',
        date: '2023-01',
        href: '/achieve/1',
      },
      {
        title: 'Designing a functional workflow at home.',
        description: `Description of the card
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
              nisl, eu aliquet nunc nunc eget lorem.`,
        imgSrc: 'http://placekitten.com/1200/600',
        tags: ['tag1', 'tag2'],
        author: 'Zeiion',
        authorImgSrc: 'http://placekitten.com/300/300',
        date: '2023-01',
        href: '/achieve/1',
      },
      {
        title: 'Designing a functional workflow at home.',
        description: `Description of the card
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
              nisl, eu aliquet nunc nunc eget lorem.`,
        imgSrc:
          'https://img2.baidu.com/it/u=1296226479,2546842574&fm=253&fmt=auto&app=138&f=PNG?w=554&h=237',
        tags: ['tag1', 'tag2'],
        author: 'Zeiion',
        authorImgSrc: 'http://placekitten.com/300/300',
        date: '2023-01',
        href: '/achieve/1',
      },
      {
        title: 'Designing a functional workflow at home.',
        description: `Description of the card
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
              nisl, eu aliquet nunc nunc eget lorem.`,
        imgSrc: 'http://placekitten.com/1200/600',
        tags: ['tag1', 'tag2'],
        author: 'Zeiion',
        authorImgSrc: 'http://placekitten.com/300/300',
        date: '2023-01',
        href: '/achieve/1',
      },
    ],
    timeline: [
      {
        title: 'Penta Consulting',
        type: 'Front End Developer',
        date: '2023 June 4',
        dateRange: 'June 2016 - Present',
        description: 'Wo address team necessities.',
        tags: ['okok', 'Test'],
      },
      {
        title: 'Penta Consulting',
        type: 'Front End Developer',
        date: '2023 Jan 4',
        dateRange: 'June 2016 - Present',
        description:
          'Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Wordpress', 'Test'],
      },
      {
        title: 'Penta Consulting',
        type: 'Front End Developer',
        date: '2022 Oct 4',
        dateRange: 'June 2016 - Present',
        description: 'Worksolutions to address team necessities.',
        tags: ['jQuery', 'Wordpress', 'Test'],
      },
      {
        title: 'Penta Consulting',
        type: 'Front End Developer',
        date: 'June 4',
        dateRange: 'June 2016 - Present',
        description: 'Working alongside the designer team implementing the ',
        tags: ['HTML5', 'CSS3'],
      },
    ],
  };
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
            <div
              className="grid items-start max-w-sm gap-8 mx-auto md:grid-cols-1 lg:grid-cols-3 lg:gap-x-1 lg:gap-y-4 md:max-w-2xl lg:max-w-none gap-y-10 gap-x-4"
              ref={text1Ref}
            >
              <h2 className="opacity-0 h2 show-text">{text}</h2>
              {teamInfo?.members &&
                teamInfo?.members?.map(
                  ({ name, imgSrc, description, works, tags }) => (
                    <MemberCard
                      key={name}
                      name={name}
                      imgSrc={imgSrc}
                      description={description}
                      works={works}
                      tags={tags}
                    />
                  ),
                )}
            </div>

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

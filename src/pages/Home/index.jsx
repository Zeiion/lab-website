import React from 'react';

import Header from '~/components/Header';
import PageIllustration from '~/partials/PageIllustration';
import HeroHome from '~/partials/HeroHome';
import TeamSection from '~/partials/TeamSection';
import ScrollSection from '~/partials/ScrollSection';
import TopicSection from '~/partials/TopicSection';
import Testimonials from '~/partials/Testimonials';
import Newsletter from '~/partials/Newsletter';
import Timeline from '~/components/Timeline';
import Banner from '~/components/Banner';
import Footer from '~/components/Footer';
import VCard from '~/components/VCard';
import Carousel from '~/components/Carousel';
import ProjectCard from '~/components/ProjectCard';
import IconCard from '~/components/IconCard';
import { parseHomeInsList } from '~/consts/homeInsList';
import { FEIYUN_URL } from '~/consts/index';

function Home() {
  const projectList = [
    {
      title: 'AI引擎平台',
      description:
        'AI 引擎平台是一种用于构建和部署人工智能应用程序的软件平台。它提供了一种将数据转化为智能模型的方法，使开发人员能够使用机器学习和深度学习算法来处理大规模数据集，并提供预测、分类、聚类、推荐等功能。',
      imgSrc: 'https://i2.100024.xyz/2023/04/03/123vmt7.webp',
      href: '/achieve/3',
    },
    {
      title: '地下基础设施智慧化管理平台',
      description:
        '地下基础设施智慧化管理平台是一种利用物联网、大数据、云计算等技术，对地下基础设施进行智能化管理和监控的平台。其主要功能包括数据分析和预警、智能诊断和预测、可视化和交互式展示，可以对地下基础设施设备进行火灾、地震、损裂、爆炸、变形、渗漏等病害的智能诊断和分析。',
      imgSrc: 'https://i2.100024.xyz/2023/04/03/1266ch3.webp',
      href: 'http://81.70.246.244:9002/',
    },
    {
      title: '飞云集智——城市大数据开放共享平台',
      description: `全国种类最全、数量最大的交通大数据平台，一站式服务从idea到应用场景,一个平台搞定所有资源问题；数据的深度挖掘和分析提供强大算力；跨领域、跨地域的数据融汇、综合、联系`,
      imgSrc: 'http://www.feiyun.tech/img/homepage_background.fe6132fb.png',
      href: { FEIYUN_URL },
    },
    {
      title: 'AI引擎平台',
      description:
        'AI 引擎平台是一种用于构建和部署人工智能应用程序的软件平台。它提供了一种将数据转化为智能模型的方法，使开发人员能够使用机器学习和深度学习算法来处理大规模数据集，并提供预测、分类、聚类、推荐等功能。',
      imgSrc: 'https://i2.100024.xyz/2023/04/03/123vmt7.webp',
      href: '/achieve/3',
    },
    {
      title: '地下基础设施智慧化管理平台',
      description:
        '地下基础设施智慧化管理平台是一种利用物联网、大数据、云计算等技术，对地下基础设施进行智能化管理和监控的平台。其主要功能包括数据分析和预警、智能诊断和预测、可视化和交互式展示，可以对地下基础设施设备进行火灾、地震、损裂、爆炸、变形、渗漏等病害的智能诊断和分析。',
      imgSrc: 'https://i2.100024.xyz/2023/04/03/1266ch3.webp',
      href: 'http://81.70.246.244:9002/',
    },
    {
      title: '飞云集智——城市大数据开放共享平台',
      description: `全国种类最全、数量最大的交通大数据平台，一站式服务从idea到应用场景,一个平台搞定所有资源问题；数据的深度挖掘和分析提供强大算力；跨领域、跨地域的数据融汇、综合、联系`,
      imgSrc: 'http://www.feiyun.tech/img/homepage_background.fe6132fb.png',
      href: { FEIYUN_URL },
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative h-0 mx-auto pointer-events-none max-w-7xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
        {/*  Page sections */}
        <HeroHome />

        <TeamSection />
        <div className="h-16"></div>
        <ScrollSection />
        <div className="h-32"></div>
        <Carousel>
          {projectList.map(({ title, imgSrc, description, href }, index) => (
            <ProjectCard
              key={index}
              description={description}
              imgSrc={imgSrc}
              title={title}
              href={href}
              readmore="进入系统"
            />
          ))}
        </Carousel>
        <div className="h-16"></div>
        {/* <TopicSection
          title="机构介绍"
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla."
          subTitle="Topic Intro"
          list={parseHomeInsList()}
        /> */}
        {/* <Testimonials /> */}
        {/* <Timeline /> */}

        {/* <Newsletter /> */}
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;

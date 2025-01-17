import React from 'react';

import Header from '~/components/Header';
import PageIllustration from '~/partials/PageIllustration';
import HeroHome from '~/partials/HeroHome';
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
import FY_IMAGE from '~/images/fy-image.png';

function Home() {
  const projectList = [
    {
      title: 'AI引擎平台',
      description:
        'AI 引擎平台是一种用于构建和部署人工智能应用程序的软件平台。它提供了一种将数据转化为智能模型的方法，使开发人员能够使用机器学习和深度学习算法来处理大规模数据集，并提供预测、分类、聚类、推荐等功能。',
      imgSrc: 'http://39.97.209.211:9126/i/2023/04/03/123vmt7.webp',
      href: 'http://39.97.209.211:10001',
    },
    {
      title: '基于大数据的城市交通平行验证与分析系统',
      description:
        '基于大数据的城市交通平行验证与分析系统提出了一种基于代理的多尺度、全要素计算交通建模方法，构建了与实际交通系统动态互校、协同演化的人工交通系统，形成了虚实互动的平行交通管控模式。项目技术形成了城市交通信号控制平行推荐技术，作为杭州市“城市大脑”项目的核心模板，应用于杭州市城市交通管控，覆盖杭州市309个路口和872条路段，月均处理3000余起的交通拥堵事件。',
      imgSrc: 'http://dev80.openits.cn/style/images/bg1.jpg',
      href: 'http://dev80.openits.cn/ketiwu/16.html',
    },
    {
      title: '地下基础设施智慧化管理平台',
      description:
        '地下基础设施智慧化管理平台是一种利用物联网、大数据、云计算等技术，对地下基础设施进行智能化管理和监控的平台。其主要功能包括数据分析和预警、智能诊断和预测、可视化和交互式展示，可以对地下基础设施设备进行火灾、地震、损裂、爆炸、变形、渗漏等病害的智能诊断和分析。',
      imgSrc: 'http://39.97.209.211:9126/i/2023/04/03/1266ch3.webp',
      href: 'http://39.97.209.211:10002/',
    },
    {
      title: '飞云集智——城市大数据开放共享平台',
      description: `全国种类最全、数量最大的交通大数据平台，一站式服务从idea到应用场景,一个平台搞定所有资源问题；数据的深度挖掘和分析提供强大算力；跨领域、跨地域的数据融汇、综合、联系`,
      imgSrc: 'http://39.97.209.211:9126/i/2023/05/02/12pfkjy.webp',
      href: FEIYUN_URL,
    },
    {
      title: '城市交通出行规律挖掘与演化分析',
      description:
        '系统研究了基于图卷积神经网络的交通预测理论，提出了优化图建模、动态图建模以及超图建模等图卷积网络新模型，解决了非平稳交通流的建模难题，实现了鲁棒的交通流特征提取和交通流潜在变化规律的发现，显著提高了交通流预测的精度。',
      imgSrc:
        'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/8ebdcf3c3839ba731108bbdc78df32d0.png',
      href: 'http://dev80.openits.cn/ketier/13.html',
    },
    {
      title: '交通拥堵预测平台',
      description:
        '地下基础设施智慧化管理平台是一种利用联邦学习与差分隐私技术，对交通数据进行可视化展示的智能化管理和监控的平台。其主要功能包括数据分析和预警、智能诊断和预测、可视化和交互式展示，可以对交通拥堵情况进行智能诊断和分析。',
      imgSrc:
        'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/81c6299f65a333b90bf91e88b947de7b.png',
      href: 'http://8.140.124.245:38080/#/',
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <img
        className="absolute top-0 left-0 hidden object-cover w-screen pointer-events-none h-[100vh] lg:block opacity-30"
        src={FY_IMAGE}
        alt=""
      />
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

        {/* <TeamSection /> */}
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

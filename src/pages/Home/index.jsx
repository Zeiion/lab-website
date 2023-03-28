import React from 'react';

import Header from '~/components/Header';
import PageIllustration from '~/partials/PageIllustration';
import HeroHome from '~/partials/HeroHome';
import TeamSection from '~/partials/TeamSection';
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

function Home() {
  const projectList = [
    {
      title: '智慧物流管理系统',
      description:
        '该系统集成了人工智能、物联网、云计算等技术，实现对物流全链路的监控、调度和优化，提高了物流效率和准确性，降低了成本和误差率。系统支持多种物流方式，如陆运、海运、航空、快递等，适用于各种规模的企业和组织。',
      imgSrc:
        'https://img2.baidu.com/it/u=1296226479,2546842574&fm=253&fmt=auto&app=138&f=PNG?w=554&h=237',
      href: '/achievements/3',
    },
    {
      title: '智慧医疗平台',
      description:
        '该平台整合了医疗设备、医疗信息、医疗资源等多种资源，实现了医疗数据的共享和整合，提供了包括远程医疗、智能诊断、病例分析等在内的多种医疗服务，有效提升了医疗水平和效率。',
      imgSrc:
        'https://img2.baidu.com/it/u=1296226479,2546842574&fm=253&fmt=auto&app=138&f=PNG?w=554&h=237',
      href: '/achievements/4',
    },
    {
      title: '智能客服系统',
      description:
        '该系统通过人工智能技术，实现了自然语言处理、智能问答、情感识别等功能，能够智能地解答用户的问题和需求，提升了客户满意度和忠诚度。系统还支持多种渠道的接入，如电话、短信、社交媒体等，满足了多种客户服务的需求。',
      imgSrc:
        'https://img2.baidu.com/it/u=1296226479,2546842574&fm=253&fmt=auto&app=138&f=PNG?w=554&h=237',
      href: '/achievements/5',
    },
    {
      title: '飞云集智——城市大数据开放共享平台',
      description: `全国种类最全、数量最大的交通大数据平台，一站式服务从idea到应用场景,一个平台搞定所有资源问题；数据的深度挖掘和分析提供强大算力；跨领域、跨地域的数据融汇、综合、联系`,
      imgSrc: 'http://www.feiyun.tech/img/homepage_background.fe6132fb.png',
      href: 'http://www.feiyun.tech/',
    },
    {
      title: '飞云集智——城市大数据开放共享平台',
      description: `全国种类最全、数量最大的交通大数据平台，一站式服务从idea到应用场景,一个平台搞定所有资源问题；数据的深度挖掘和分析提供强大算力；跨领域、跨地域的数据融汇、综合、联系`,
      imgSrc: 'http://www.feiyun.tech/img/homepage_background.fe6132fb.png',
      href: 'http://www.feiyun.tech/',
    },
    {
      title: '智慧农业物联网平台',
      description:
        '该平台通过物联网技术，实现了对农业生产全链路的监控和管理，包括土壤湿度、气象参数、植物生长情况等多种数据的采集和分析，提供了精准的农业生产决策和服务，有效提升了农业生产效率和质量。',
      imgSrc:
        'https://img2.baidu.com/it/u=1296226479,2546842574&fm=253&fmt=auto&app=138&f=PNG?w=554&h=237',
      href: '/achievements/6',
    },
    {
      title: '智慧教育管理平台',
      description:
        '该平台集成了人工智能、大数据、云计算等技术，实现了对学生学习、教师教学、校园管理等多个方面的全面监控和管理，提供了个性化的学习和教学服务，有效提升了教育质量和效率。',
      imgSrc:
        'https://img2.baidu.com/it/u=1296226479,2546842574&fm=253&fmt=auto&app=138&f=PNG?w=554&h=237',
      href: '/achievements/7',
    },
    {
      title: '智能电网管理系统',
      description:
        '该系统通过物联网、大数据、云计算等技术，实现了对电网全链路的监控和管理，包括电力生产、传输、配送等多个环节的数据采集和分析，提供了智能化的电网管理和调度服务，有效提高了电力系统的稳定性和安全性。',
      imgSrc:
        'https://img2.baidu.com/it/u=1296226479,2546842574&fm=253&fmt=auto&app=138&f=PNG?w=554&h=237',
      href: '/achievements/8',
    },
  ];
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
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
        <Carousel>
          {projectList.map(({ title, imgSrc, description, href }, index) => (
            <ProjectCard
              key={index}
              description={description}
              imgSrc={imgSrc}
              title={title}
              href={href}
            />
          ))}
        </Carousel>
        <TopicSection
          title="机构介绍"
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla."
          subTitle="Topic Intro"
        />
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

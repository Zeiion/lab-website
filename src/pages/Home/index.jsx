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
      title: 'Designing a functional workflow at home.',
      description: `Description of the card
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
      nisl, eu aliquet nunc nunc eget lorem.`,
      imgSrc: 'http://placekitten.com/1100/600',
      href: 'https://www.baidu.com',
    },
    {
      title: 'Designing a functional workflow at home.',
      description: `Description of the card
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
      nisl, eu aliquet nunc nunc eget lorem.`,
      imgSrc: 'http://placekitten.com/1150/600',
      href: 'https://www.baidu.com',
    },
    {
      title: 'Designing a functional workflow at home.',
      description: `Description of the card
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
      nisl, eu aliquet nunc nunc eget lorem.`,
      imgSrc: 'http://placekitten.com/1233/600',
      href: 'https://www.baidu.com',
    },
    {
      title: '飞云集智——城市大数据开放共享平台',
      description: `全国种类最全、数量最大的交通大数据平台，一站式服务从idea到应用场景,一个平台搞定所有资源问题；数据的深度挖掘和分析提供强大算力；跨领域、跨地域的数据融汇、综合、联系`,
      imgSrc: 'http://www.feiyun.tech/img/homepage_background.fe6132fb.png',
      href: 'http://www.feiyun.tech/',
    },
    {
      title: 'Designing a functional workflow at home.',
      description: `Description of the card
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
      nisl, eu aliquet nunc nunc eget lorem.`,
      imgSrc: 'http://placekitten.com/1220/500',
      href: 'https://www.baidu.com',
    },
    {
      title: 'Designing a functional workflow at home.',
      description: `Description of the card
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
      nisl, eu aliquet nunc nunc eget lorem.`,
      imgSrc: 'http://placekitten.com/1300/600',
      href: 'https://www.baidu.com',
    },
    {
      title: 'Designing a functional workflow at home.',
      description: `Description of the card
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
      nisl, eu aliquet nunc nunc eget lorem.`,
      imgSrc: 'http://placekitten.com/1100/600',
      href: 'https://www.baidu.com',
    },
    {
      title: 'Designing a functional workflow at home.',
      description: `Description of the card
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
      nisl, eu aliquet nunc nunc eget lorem.`,
      imgSrc: 'http://placekitten.com/1150/600',
      href: 'https://www.baidu.com',
    },
    {
      title: 'Designing a functional workflow at home.',
      description: `Description of the card
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
      nisl, eu aliquet nunc nunc eget lorem.`,
      imgSrc: 'http://placekitten.com/1233/600',
      href: 'https://www.baidu.com',
    },
    {
      title: '飞云集智——城市大数据开放共享平台',
      description: `全国种类最全、数量最大的交通大数据平台，一站式服务从idea到应用场景,一个平台搞定所有资源问题；数据的深度挖掘和分析提供强大算力；跨领域、跨地域的数据融汇、综合、联系`,
      imgSrc: 'http://www.feiyun.tech/img/homepage_background.fe6132fb.png',
      href: 'http://www.feiyun.tech/',
    },
    {
      title: 'Designing a functional workflow at home.',
      description: `Description of the card
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
      nisl, eu aliquet nunc nunc eget lorem.`,
      imgSrc: 'http://placekitten.com/1220/500',
      href: 'https://www.baidu.com',
    },
    {
      title: 'Designing a functional workflow at home.',
      description: `Description of the card
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
      nisl, eu aliquet nunc nunc eget lorem.`,
      imgSrc: 'http://placekitten.com/1300/600',
      href: 'https://www.baidu.com',
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
          className="relative h-0 max-w-7xl mx-auto pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <TeamSection />
        <TopicSection />
        {/* <Testimonials /> */}
        {/* <Timeline /> */}

        {/* <Newsletter /> */}
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
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;

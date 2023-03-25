import React from 'react';

import PageTemplate from '~/components/PageTemplate';
import Carousel from '~/components/Carousel';
import ProjectCard from '~/components/ProjectCard';
import TopicSection from '~/partials/TopicSection';

const Scenes = () => {
  const sceneList = [
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
  ];
  return (
    <PageTemplate title="典型场景" subTitle="Typical Scenarios">
      <Carousel>
        {sceneList.map(({ title, description, imgSrc, href }, index) => (
          <ProjectCard
            title={title}
            description={description}
            imgSrc={imgSrc}
            href={href}
          />
        ))}
      </Carousel>
      <TopicSection
        title="场景列表"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla."
        subTitle="Scene List"
      />
    </PageTemplate>
  );
};

export default Scenes;

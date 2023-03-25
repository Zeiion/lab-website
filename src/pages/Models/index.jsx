import React from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';

const Models = () => {
  const modelList = [
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
      href: '/achievements/1',
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
      href: '/achievements/1',
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
      href: '/achievements/1',
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
      href: '/achievements/1',
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
      href: '/achievements/1',
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
      href: '/achievements/1',
    },
  ];
  const prizeList = modelList;
  return (
    <PageTemplate title={'典型模型'} subTitle={'Models'}>
      <div className="mt-10">
        <HCard
          title={modelList[0].title}
          description={modelList[0].description}
          imgSrc={modelList[0].imgSrc}
          tags={modelList[0].tags}
          author={modelList[0].author}
          authorImgSrc={modelList[0].authorImgSrc}
          date={modelList[0].date}
        />
      </div>
      <VCardList title="Models" list={modelList.slice(1)}></VCardList>
    </PageTemplate>
  );
};

export default Models;

import React from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';

const Achievements = () => {
  const archieveList = [
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
  const prizeList = archieveList;
  return (
    <PageTemplate title={'成果共享'} subTitle={'Achievements'}>
      {archieveList && archieveList.length > 0 && (
        <>
          <div className="mt-10">
            <HCard
              title={archieveList[0].title}
              description={archieveList[0].description}
              imgSrc={archieveList[0].imgSrc}
              tags={archieveList[0].tags}
              author={archieveList[0].author}
              authorImgSrc={archieveList[0].authorImgSrc}
              date={archieveList[0].date}
              href={archieveList[0].href}
            />
          </div>
          <VCardList
            title="Latest articles"
            list={archieveList.slice(1)}
          ></VCardList>
        </>
      )}
      <VCardList title="Recent Prizes" list={prizeList} />
    </PageTemplate>
  );
};

export default Achievements;

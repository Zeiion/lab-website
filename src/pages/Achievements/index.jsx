import React from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';

import { parseAchieveList } from '~/consts/achieveList';

const achieveList = parseAchieveList();

const Achievements = () => {
  const prizeList = [
    {
      title: '智能客服系统获得人工智能应用大赛一等奖',
      description:
        '我们的智能客服系统在最近的人工智能应用大赛中荣获一等奖。该系统集成了自然语言处理、情感分析、语音识别等多种技术，能够为用户提供智能、高效的客服服务。与传统客服系统相比，我们的智能客服系统不仅能够解决用户问题，还能主动了解用户需求，提供个性化的服务。这项技术的成功应用，不仅为企业节省了大量的客服人力成本，还提升了客户满意度，带来了明显的商业价值。',
      imgSrc: 'https://i2.100024.xyz/2023/03/28/stxgx7.webp',
      tags: ['人工智能', '客服'],
      author: 'Zeiion',
      authorImgSrc: 'http://placekitten.com/300/300',
      date: '2023-02',
      href: '/achievements/2',
    },
    {
      title: '基于深度学习的人脸识别技术获得国际大奖',
      description:
        '我们的人脸识别技术最近在国际大奖中获得了殊荣。该技术基于深度学习算法，能够高效准确地识别人脸，并实现多种应用场景，如人脸认证、人脸搜索、人脸跟踪等。与传统人脸识别技术相比，我们的技术不仅在准确率上有明显的提升，还能够处理复杂的场景，如低光、变形、遮挡等。该技术已经在多个领域得到了应用，如公安、金融、智能家居等，展现了巨大的商业价值。',
      imgSrc: 'https://i2.100024.xyz/2023/03/28/swb7yw.webp',
      tags: ['人脸识别', '深度学习'],
      author: 'Zeiion',
      authorImgSrc: 'http://placekitten.com/300/300',
      date: '2023-03',
      href: '/achievements/3',
    },
  ];
  return (
    <PageTemplate title={'成果共享'} subTitle={'Achievements'}>
      {achieveList && achieveList.length > 0 && (
        <>
          <div className="mt-10">
            <HCard
              title={achieveList[0].title}
              description={achieveList[0].description}
              imgSrc={achieveList[0].imgSrc}
              tags={achieveList[0].tags}
              author={achieveList[0].author}
              authorImgSrc={achieveList[0].authorImgSrc}
              date={achieveList[0].date}
              href={achieveList[0].href}
            />
          </div>
          <VCardList
            title="Latest articles"
            list={achieveList.slice(1)}
          ></VCardList>
        </>
      )}
      <VCardList title="Recent Prizes" list={prizeList} />
    </PageTemplate>
  );
};

export default Achievements;

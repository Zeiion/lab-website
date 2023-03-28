import React from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';

const Achievements = () => {
  const achieveList = [
    {
      title: '流量实时监测',
      description: `流量监测是智能交通系统的重要组成部分，可以为交通管理、规划和服务提供有效的数据支持。但是，传统的流量监测方法往往依赖于固定的传感器设备，如线圈、雷达、摄像头等，这些设备的安装和维护成本高，覆盖范围有限，数据质量受到各种因素的影响。为了解决这些问题，我们开发了这款软件。我们的软件可以帮助你用我们的软件实现实时流量监测。你可以通过我们的软件，利用移动设备、车载设备、社交媒体等多种数据源，实时采集和分析流量信息，如车辆数、速度、密度、行程时间等。你还可以通过我们的软件，根据不同的时间、地点、路段等条件，动态展示和预测流量状况，为交通决策和服务提供依据。`,
      imgSrc: 'https://i2.100024.xyz/2023/03/28/sylh26.webp',
      tags: ['实时', '准确'],
      author: 'Zeiion',
      authorImgSrc: 'http://placekitten.com/300/300',
      date: '2023-01',
      href: '/achievements/1',
    },
    {
      title: '交通安全监测',
      description: `交通安全是智能交通系统的核心目标之一，也是社会公众关注的焦点问题。为了降低交通事故的发生率和严重程度，提高交通参与者的安全感和满意度，我们开发了这款软件。我们的软件可以帮助你用我们的软件提升交通安全系统。你可以通过我们的软件，利用人工智能、大数据等技术，对交通事故进行智能检测、识别和预警，快速响应和处置事故现场，减少事故后果和影响。你还可以通过我们的软件，对交通事故进行深入分析和评估，找出事故原因和风险因素，制定有效的预防措施和改进方案。`,
      imgSrc:
        'https://img2.baidu.com/it/u=1296226479,2546842574&fm=253&fmt=auto&app=138&f=PNG?w=554&h=237',
      tags: ['智能', '监控'],
      author: 'Zeiion',
      authorImgSrc: 'http://placekitten.com/300/300',
      date: '2023-01',
      href: '/achievements/1',
    },
    {
      title: 'ETC知识图谱',
      description: `本场景利用现有高速公路ETC收费门架数据，在不增设设备的情况下，通过数据分析方法计算高速公路路况，并通过数据填补方法利用全局信息还原高速公路路况。相关流程可以实现路况精准感知，为路况分析与预测提供了数据基础，可以有效支撑道路管控相关决策。`,
      imgSrc: 'http://placekitten.com/1200/600',
      tags: ['tag1', 'tag2'],
      author: 'Zeiion',
      authorImgSrc: 'http://placekitten.com/300/300',
      date: '2023-01',
      href: '/achievements/1',
    },
    {
      title: '分布式区块链技术应用',
      description: `这是一个基于区块链技术的分布式系统，可用于交易、数据、日志、合约、成果的可信化共享以及存储。`,
      imgSrc: 'http://placekitten.com/1200/600',
      tags: ['tag1', 'tag2'],
      author: 'Zeiion',
      authorImgSrc: 'http://placekitten.com/300/300',
      date: '2023-01',
      href: '/achievements/1',
    },
    {
      title: '智能客服系统',
      description: `智能客服系统是一个基于自然语言处理技术的人工智能应用，可以为企业提供高效、快捷的客户服务。我们的智能客服系统可以自动回复常见问题、识别用户意图、推荐产品等。通过机器学习和深度学习算法，我们的系统可以不断地学习和优化自己，提高回答准确率和响应速度。我们的智能客服系统可以帮助企业节省人力成本，提高客户满意度。`,
      imgSrc: 'http://placekitten.com/1200/601',
      tags: ['自然语言处理', '机器学习', '深度学习'],
      author: 'Alex',
      authorImgSrc: 'http://placekitten.com/300/300',
      date: '2022-12',
      href: '/achievements/2',
    },
    {
      title: '智能推荐系统',
      description: `智能推荐系统是一个基于大数据分析和机器学习算法的人工智能应用，可以为用户提供个性化的推荐服务。我们的智能推荐系统可以分析用户的历史行为、兴趣爱好、社交网络等多种数据，为用户推荐相关的商品、内容、服务等。通过不断地学习和优化，我们的系统可以提高推荐准确率和覆盖范围。我们的智能推荐系统可以帮助企业提高销售额和用户满意度，为用户节省时间和精力。`,
      imgSrc: 'http://placekitten.com/1200/602',
      tags: ['大数据分析', '机器学习'],
      author: 'Lucas',
      authorImgSrc: 'http://placekitten.com/300/300',
      date: '2023-02',
      href: '/achievements/3',
    },
  ];
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

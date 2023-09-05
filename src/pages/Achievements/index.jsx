import React from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';
import { getModelList } from '../../request/model';
import { parseAchieveList } from '~/consts/achieveList';
import { getAuthorImgSrc } from '~/utils/GetRandomPic';
import { useRequest } from '~/utils/useRequest';
import { getAchieveList } from '~/request/achieve';
import { FEIYUN_URL } from '../../consts';
const getAuthorFromDesc = (desc) => {
  const authors = desc.split(',');
  return authors[0] + ',' + authors[1];
};
const dealAuthorName = (name) => {
  if (name.substr(-2, 2) == '大学' || name.substr(-1, 1) == '所')
    name += '交通大数据组';
  return name;
};
const Achievements = () => {
  const { data: achieveList = [] } = useRequest(
    () => getAchieveList(),
    [],
    (list) => {
      return list.map((item) => {
        return {
          ...item,
          authorImgSrc: getAuthorImgSrc(item.author),
          author: getAuthorFromDesc(item.description),
          href: '/achieve/' + item.id,
          onlineHref: item.onlineHref ? item.onlineHref : FEIYUN_URL,
        };
      });
      // .sort((a,b)=>{
      //   const aHas = a.description?.includes('Le Yu') && a.description?.includes('KDD');
      //   const bHas = b.description?.includes('Le Yu') && b.description?.includes('KDD');
      //   if(aHas && !bHas){
      //     return -1;
      //   }
      //   if(!aHas && bHas){
      //     return 1;
      //   }
      //   return 0;
      // });
    },
  );
  const { data: modelList = [] } = useRequest(
    () => getModelList(),
    [],
    (list) => {
      return list.map((item, index) => {
        return {
          ...item,
          authorImgSrc: getAuthorImgSrc(item.author),
          author: dealAuthorName(item.author),
          href: '/achieve/' + item.id,
          onlineHref: item.onlineHref ? item.onlineHref : FEIYUN_URL,
        };
      });
    },
  );
  console.log(achieveList);
  console.log(modelList);
  // TODO
  // const prizeList = [
  //   {
  //     title: '智能客服系统获得人工智能应用大赛一等奖',
  //     description:
  //       '我们的智能客服系统在最近的人工智能应用大赛中荣获一等奖。该系统集成了自然语言处理、情感分析、语音识别等多种技术，能够为用户提供智能、高效的客服服务。与传统客服系统相比，我们的智能客服系统不仅能够解决用户问题，还能主动了解用户需求，提供个性化的服务。这项技术的成功应用，不仅为企业节省了大量的客服人力成本，还提升了客户满意度，带来了明显的商业价值。',
  //     imgSrc: 'http://81.70.246.244:9126/i/2023/03/28/stxgx7.webp',
  //     tags: ['人工智能', '客服'],
  //     author: 'Zeiion',
  //     authorImgSrc: 'http://placekitten.com/300/300',
  //     date: '2023-02',
  //     href: '/achieve/2',
  //   },
  //   {
  //     title: '基于深度学习的人脸识别技术获得国际大奖',
  //     description:
  //       '我们的人脸识别技术最近在国际大奖中获得了殊荣。该技术基于深度学习算法，能够高效准确地识别人脸，并实现多种应用场景，如人脸认证、人脸搜索、人脸跟踪等。与传统人脸识别技术相比，我们的技术不仅在准确率上有明显的提升，还能够处理复杂的场景，如低光、变形、遮挡等。该技术已经在多个领域得到了应用，如公安、金融、智能家居等，展现了巨大的商业价值。',
  //     imgSrc: 'http://81.70.246.244:9126/i/2023/03/28/swb7yw.webp',
  //     tags: ['人脸识别', '深度学习'],
  //     author: 'Zeiion',
  //     authorImgSrc: 'http://placekitten.com/300/300',
  //     date: '2023-03',
  //     href: '/achieve/3',
  //   },
  // ];
  return (
    <PageTemplate title={'知识协同'} subTitle={'Achievements'}>
      {achieveList &&
        modelList &&
        achieveList.length > 0 &&
        modelList.length > 0 && (
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
                withButton={true}
                onlineHref={achieveList[0].onlineHref}
                quoteCount={achieveList[0].quoteCount}
                downloadCount={achieveList[0].downloadCount}
              />
            </div>
            <VCardList
              title="Latest Achievements"
              list={achieveList.slice(1)}
              withButton={true}
            ></VCardList>
            <VCardList
              title="Latest Models"
              list={modelList}
              withButton={true}
            ></VCardList>
          </>
        )}
      {/* <VCardList title="Recent Prizes" list={prizeList} /> */}
    </PageTemplate>
  );
};

export default Achievements;

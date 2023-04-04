import React from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';
import CardWall from '~/components/CardWall';
import IconCard from '~/components/IconCard';
import { parseModelList } from '~/consts/modelList';
const models = parseModelList();

const Models = () => {
  const modelList = [
    {
      title: '基于深度学习的图像分类模型',
      description:
        '我们使用深度学习技术，构建了一个高精度的图像分类模型。该模型可以在大规模数据集上进行训练，具有很强的泛化能力，可以应用于各种图像分类任务，如人脸识别、物体识别等。我们的模型还支持快速迭代和调整，可以根据不同的数据集和应用场景进行优化和定制。',
      imgSrc: 'http://placekitten.com/1200/600',
      tags: ['深度学习', '图像分类'],
      author: 'Zeiion',
      authorImgSrc: 'http://placekitten.com/300/300',
      date: '2023-02',
      href: '/models/1',
      source: 'xxx课题',
    },
    {
      title: '基于自然语言处理的智能客服模型',
      description:
        '我们开发了一个基于自然语言处理技术的智能客服模型，可以自动识别用户的问题并给出相应的解答。该模型可以对用户的语言进行语义分析和情感识别，从而更加准确地理解用户的意图和需求。我们的模型还支持快速的知识库建设和更新，可以自动学习和掌握新的知识和技能。',
      imgSrc: 'http://placekitten.com/1200/600',
      tags: ['自然语言处理', '智能客服'],
      author: 'Zeiion',
      authorImgSrc: 'http://placekitten.com/300/300',
      date: '2023-02',
      href: '/models/2',
      source: 'OpenITS课题',
    },
    {
      title: '基于深度强化学习的自主导航模型',
      description:
        '我们使用深度强化学习技术，开发了一个可以在未知环境中自主导航的智能体模型。该模型可以根据环境的变化和任务的需求，自主学习和优化其行为策略，以达到最优的导航效果。我们的模型还支持实时的环境感知和路径规划，可以应用于无人驾驶、机器人导航等领域。',
      imgSrc: 'http://placekitten.com/1200/600',
      tags: ['深度强化学习', '自主导航'],
      author: 'Zeiion',
      authorImgSrc: 'http://placekitten.com/300/300',
      date: '2023-03',
      href: '/models/3',
      source: '地下基础设施课题',
    },
    {
      title: '自然语言处理模型：情感分析',
      description:
        '情感分析是自然语言处理中的一项重要任务，用于自动识别和提取文本中的情感信息。我们的情感分析模型基于深度学习算法，能够自动判断文本中的情感极性，包括正面、负面和中性。我们的模型使用了大量的训练数据和高质量的语料库，具有较高的准确度和稳定性。',
      imgSrc: 'http://placekitten.com/1200/600',
      tags: ['自然语言处理', '情感分析', '深度学习'],
      author: 'Zeiion',
      authorImgSrc: 'http://placekitten.com/300/300',
      date: '2022-12',
      href: '/models/1',
      source: '飞云集智课题',
    },
  ];
  return (
    <PageTemplate title={'典型模型'} subTitle={'Models'}>
      <CardWall
        list={[
          {
            children: models.map(
              (
                {
                  title,
                  description,
                  imgSrc,
                  tags,
                  author,
                  authorImgSrc,
                  date,
                  href,
                  source,
                },
                index,
              ) => (
                <IconCard
                  title={title}
                  description={description}
                  imgSrc={authorImgSrc}
                  tags={tags}
                  author={author}
                  source={source}
                  authorImgSrc={authorImgSrc}
                  date={date}
                  key={index}
                  href={href}
                />
              ),
            ),
            reverse: false,
          },
          {
            children: models.map(
              (
                {
                  title,
                  description,
                  imgSrc,
                  tags,
                  author,
                  authorImgSrc,
                  date,
                  href,
                  source,
                },
                index,
              ) => (
                <IconCard
                  title={title}
                  description={description}
                  imgSrc={authorImgSrc}
                  tags={tags}
                  author={author}
                  source={source}
                  authorImgSrc={authorImgSrc}
                  date={date}
                  key={index}
                  href={href}
                />
              ),
            ),
            reverse: true,
          },
        ]}
      />
      {models && models.length > 0 && (
        <>
          <div className="mt-10"></div>
          <VCardList title="Models" list={models}></VCardList>
        </>
      )}
    </PageTemplate>
  );
};

export default Models;

import React from 'react';
import TopicCard from '../components/TopicCard';

import FeatImage01 from '../images/features-03-image-01.png';
import FeatImage02 from '../images/features-03-image-02.png';
import FeatImage03 from '../images/features-03-image-03.png';

const TopicSection = () => {
  const topicList = [
    {
      title: '基于深度学习的人脸识别',
      description: `基于深度学习的人脸识别系统是一种人工智能应用，其目的是通过训练深度神经网络来学习人脸特征，并以此来识别和验证人的身份。`,
      imgSrc: FeatImage01,
      slogan: 'Face Recognition',
      list: [
        {
          text: '人脸识别',
        },
        {
          text: '人脸检测',
        },
      ],
    },
    {
      title: '基于深度学习的人体姿态估计',
      description: `基于深度学习的人体姿态估计系统是一种人工智能应用，其目的是通过训练深度神经网络来学习人体姿态特征，并以此来识别和验证人的身份。`,
      imgSrc: FeatImage02,
      slogan: 'XXXXX',
      list: [
        {
          text: '人体姿态估计',
        },
        {
          text: '人体检测',
        },
      ],
    },
    {
      title: '基于深度学习的人流量统计',
      description: `基于深度学习的人流量统计系统是一种人工智能应用，其目的是通过训练深度神经网络来学习人流量特征，并以此来识别和验证人的身份。`,
      imgSrc: FeatImage03,
      slogan: 'XXXXX',
      list: [
        {
          text: '人流量统计',
        },
        {
          text: '人流量检测',
        },
      ],
    },
  ];
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <div className="inline-flex px-3 py-1 m-2 mb-4 text-sm font-semibold text-green-600 bg-green-200 rounded-full">
              Reach goals that matter
            </div>
            <h1 className="mb-4 h2">课题介绍</h1>
            <p className="text-xl text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {topicList.map(
              ({ imgSrc, slogan, title, description, list }, index) => (
                <TopicCard
                  key={index}
                  imgSrc={imgSrc}
                  slogan={slogan}
                  title={title}
                  description={description}
                  list={list}
                  index={index}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicSection;

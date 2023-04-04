import React from 'react';

import PageTemplate from '~/components/PageTemplate';
import Carousel from '~/components/Carousel';
import ProjectCard from '~/components/ProjectCard';
import TopicSection from '~/partials/TopicSection';
import { parseApplicationList } from '~/consts/applicationList';
const scenes = parseApplicationList();
const Scenes = () => {
  const sceneList = [
    {
      title: '实现实时流量监测',
      description:
        '流量监测是智能交通系统的重要组成部分，可以为交通管理、规划和服务提供有效的数据支持。但是，传统的流量监测方法往往依赖于固定的传感器设备，如线圈、雷达、摄像头等，这些设备的安装和维护成本高，覆盖范围有限，数据质量受到各种因素的影响。为了解决这些问题，我们开发了这款软件。我们的软件可以帮助你用我们的软件实现实时流量监测。你可以通过我们的软件，利用移动设备、车载设备、社交媒体等多种数据源，实时采集和分析流量信息，如车辆数、速度、密度、行程时间等。你还可以通过我们的软件，根据不同的时间、地点、路段等条件，动态展示和预测流量状况，为交通决策和服务提供依据。',
      imgSrc: 'https://i2.100024.xyz/2023/03/28/sylh26.webp',
      href: 'https://www.baidu.com',
    },
    {
      title: '智能交通安全监测',
      description:
        '交通安全是智能交通系统的核心目标之一，也是社会公众关注的焦点问题。为了降低交通事故的发生率和严重程度，提高交通参与者的安全感和满意度，我们开发了这款软件。我们的软件可以帮助你用我们的软件提升交通安全系统。你可以通过我们的软件，利用人工智能、大数据等技术，对交通事故进行智能检测、识别和预警，快速响应和处置事故现场，减少事故后果和影响。你还可以通过我们的软件，对交通事故进行深入分析和评估，找出事故原因和风险因素，制定有效的预防措施和改进方案。',
      imgSrc: 'https://i2.100024.xyz/2023/03/28/sy59mk.webp',
      href: 'https://www.baidu.com',
    },
    {
      title: '基于ETC的车辆轨迹追踪',
      description: `先利用ETC门架感知设备等高精准数据采集设备获取位置数据，通过车辆的收费记录点得到空间位置稀疏但高准确率的车辆轨迹做基础数据。
      其次，对轨迹中的异常进行检测，为克服异常行为检测过程中难以给出清晰的决策边界的问题，本部分采用模糊规则特征提取与轨迹时空规律对比的方法进行处理。`,
      imgSrc: 'https://i2.100024.xyz/2023/03/28/tuzimw.webp',
      href: 'https://www.baidu.com',
    },
    {
      title: '高速公路ETC知识图谱',
      description: `本场景利用现有高速公路ETC收费门架数据，在不增设设备的情况下，通过数据分析方法计算高速公路路况，并通过数据填补方法利用全局信息还原高速公路路况。相关流程可以实现路况精准感知，为路况分析与预测提供了数据基础，可以有效支撑道路管控相关决策。`,
      imgSrc: 'https://i2.100024.xyz/2023/03/28/tu916b.webp',
      href: 'https://www.baidu.com',
    },
    {
      title: '分布式区块链技术应用',
      description: `这是一个基于区块链技术的分布式系统，可用于交易、数据、日志、合约、成果的可信化共享以及存储`,
      imgSrc: 'https://i2.100024.xyz/2023/03/28/sxmdg0.webp',
      href: 'https://www.baidu.com',
    },
  ];
  return (
    <PageTemplate title="典型场景" subTitle="Typical Scenarios">
      <Carousel>
        {scenes.map(({ title, heat,influence,faculty ,imgSrc, user,href }, index) => (
          <ProjectCard
            title={title}
            description={
              <p className="copy">
                <div data-v-6273df8a="" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span data-v-6273df8a="">贡献机构: {faculty}</span>
                  <span data-v-6273df8a="">负责用户: {user}</span><br/>
                  <span data-v-6273df8a="">点击量: {heat}</span>
                  <span data-v-6273df8a="">影响力: {influence}</span>

                </div>
                <br/>
              </p>
            }
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

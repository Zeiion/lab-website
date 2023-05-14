import { modelList } from './modelList';

export const parseApplicationList = () => {
  const list = applicationList.map((item) => {
    return {
      title: item.name,
      heat: item.heat,
      influence: item.influence,
      faculty: item.faculty,
      imgSrc: item.backgroundUrl,
      slogan: '',
      user: item.user,
      href: item.link,
      data: item.data,
      model: item.model,
      description: item.description,
    };
  });
  return list;
};

export const parseApplicationList2 = () => {
  const list = applicationList.map((item) => {
    return {
      title: item.name,
      description: '简介:' + item.description,
      imgSrc: item.backgroundUrl,
      slogan: ' ',
      href: item.link,
      list: [
        {
          text: '热度:' + item.heat,
        },
        {
          text: '影响力:' + item.influence,
        },
      ],
    };
  });
  return list;
};
export const applicationList = [
  {
    description:
      '基于深度学习模型DeepLabV3P实现高精度车道线检测,使用的数据集为城市道路交通流数据',
    backgroundUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/81c6299f65a333b90bf91e88b947de7b.png',
    heat: 8319,
    data: ['城市道路交通流数据'],
    name: '交通拥堵预测-联邦学习与差分隐私',
    link: 'http://8.140.124.245:38080/#/',
    model: ['GWNET', '基于深度学习模型DeepLabV3P实现高精度车道线检测'],
    user: '系统管理员',
    logoUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/f422b57b3eaf84f177d9c2a6edd25676.jpg',
    faculty: '该用户未注册机构',
    influence: 21342,
  },
  {
    description:
      '本系统首先针对交通系统运行与环境效益分离的问题，研究不同交通状态对交通环境的影响规律，同时，基于环境对交通需求的制约机制挖掘交通状态及交通环境的耦合关系。并研究大数据驱动的交通及环境重大事件的感知、辨识、预测、影响分析与应急响应，进而，提出基于交通与环境态势的协同决策方案，并基于路网动态排放实时监测平台实现本课题的决策应用。',
    backgroundUrl: 'https://i2.100024.xyz/2023/05/04/ivlqpm.webp',
    heat: 5623,
    data: ['城市道路交通流数据'],
    name: '地铁客流可视化系统',
    link: 'http://8.140.124.245:38080/#/',
    model: ['GWNET', '基于深度学习模型DeepLabV3P实现高精度车道线检测'],
    user: '系统管理员',
    logoUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/f422b57b3eaf84f177d9c2a6edd25676.jpg',
    faculty: '该用户未注册机构',
    influence: 24332,
  },
  {
    description:
      '本系统是一个基于大数据的城市交通平行验证与分析系统——针对城市交通管理面临的操作对象过于复杂、实验难以开展等难题，通过构建实际交通系统与人工交通系统之间交互运行和过程演化的“平行系统”，实现对现实交通系统管理和控制方案的仿真、评估和优化，为基于大数据的城市交通一体化协同技术集成与综合应用示范提供实验支持，减少我国城市交通规划、设计、建设和管理中的盲目性。',
    backgroundUrl: 'https://i2.100024.xyz/2023/05/04/j076yv.webp',
    heat: 11589,
    data: ['城市道路交通流数据'],
    name: '疫情防控应急系统',
    link: 'http://transworld.trsim.group/',
    model: ['GWNET', '基于深度学习模型DeepLabV3P实现高精度车道线检测'],
    user: '系统管理员',
    logoUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/f422b57b3eaf84f177d9c2a6edd25676.jpg',
    faculty: '该用户未注册机构',
    influence: 14332,
  },
  {
    description:
      '本项目形成城市交通出行大数据实时可视化分析平台，利用交通流一致的交通视频实时协同仿真技术，依托于“天河二号”超算平台，搭建了基于Spark的百万级轨迹数据的分析系统。',
    backgroundUrl: 'https://i2.100024.xyz/2023/05/04/j2rovg.webp',
    heat: 24613,
    data: ['城市道路交通流数据'],
    name: '交通线网可视化系统',
    link: 'http://metroflow-xw.trsim.group/bj/#/xw',
    model: ['GWNET', '基于深度学习模型DeepLabV3P实现高精度车道线检测'],
    user: '系统管理员',
    logoUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/f422b57b3eaf84f177d9c2a6edd25676.jpg',
    faculty: '该用户未注册机构',
    influence: 9371,
  },
  {
    description:
      '本系统探究了复杂交通系统的交通要素与特征内在耦合机理，面向交通出行行为分析研究了出行属性分布特征，提出了基于社会关联性的交通同行行为检测方法和出行关联强度分析方法，并构建出行行为的联合概率加权模型实现出行规律发现。',
    backgroundUrl: 'https://i2.100024.xyz/2023/05/04/ittmym.webp',
    heat: 39241,
    data: [
      '深圳出租车GPS数据',
      '中山大学—车道线检测数据集',
      '中山-城市poi数据',
      '中山-城市红绿灯数据',
      '中山-贵阳-智慧交通预测数据集',
      'mini_CULane',
      'instagram数据',
      '城市道路交通流数据',
      'METR_LA',
      'PEMS_BAY',
      '中科院-PEMSD3',
      '中科院-NYCTaxi20150103',
      'Los Angeles (METR-LA) and the Bay Area (PEMS-BAY) Traffic Data',
      '北京一卡通交通记录',
      '北京市城市天气记录',
      '国家-城市温度数据集',
      'NYCBike20140409',
      'PEMSD7',
      'LOS_LOOP',
      'PEMSD7(M)',
      'PEMSD8',
    ],
    name: '交通仿真系统',
    link: 'http://citytrsim.trsim.group/qingdao/',
    model: ['LOS_LOOP', 'PEMSD7(M)', 'PEMSD8'],
    user: '系统管理员',
    logoUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/6c2b6e57ff86535d435a47d6d330add2.png',
    faculty: '该用户未注册机构',
    influence: 34293,
  },
  {
    description: '基于AGCRN、DCRNN、MTGNN等模型进行城市数据知识挖掘与系统画像',
    backgroundUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/686fc2ae65a775c7eadce617c1126c74.png',
    heat: 39240,
    data: [
      '深圳出租车GPS数据',
      '中山大学—车道线检测数据集',
      '中山-城市poi数据',
      '中山-城市红绿灯数据',
      '中山-贵阳-智慧交通预测数据集',
      'mini_CULane',
      'instagram数据',
      '城市道路交通流数据',
      'METR_LA',
      'PEMS_BAY',
      '中科院-PEMSD3',
      '中科院-NYCTaxi20150103',
      'Los Angeles (METR-LA) and the Bay Area (PEMS-BAY) Traffic Data',
      '北京一卡通交通记录',
      '北京市城市天气记录',
      '国家-城市温度数据集',
      'NYCBike20140409',
      'PEMSD7',
      'LOS_LOOP',
      'PEMSD7(M)',
      'PEMSD8',
    ],
    name: '城市数据知识挖掘与系统画像',
    link: 'http://www.feiyun.tech:82/#/homepage',
    model: [
      'AGCRN',
      'DCRNN',
      'MTGNN',
      'CCRNN',
      'DeepMove',
      'STRNN',
      'ACFM',
      'STResNet',
      'GWNET',
      'STTN',
      'DMVSTNet',
      'LSTPM',
      '基于深度学习模型DeepLabV3P实现高精度车道线检测',
      'TTPnet',
      'Ada-STNet',
      '深圳出租车预测',
      'Artificial Bee Colony模型',
      'ASTGCN',
      'STGCN',
      'HGCN',
      'STG2Seq',
      'CARA',
      'HSTLSTM',
      'DeepTTE',
    ],
    user: '系统管理员',
    logoUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/eeaae2324e2fd55c65f13d2dab015831.png',
    faculty: '该用户未注册机构',
    influence: 18283,
  },
  {
    description: '基于AGCRN、DCRNN、MTGNN等模型进行路网结构分析',
    backgroundUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/168f491be7222b70e36be992d067a814.png',
    heat: 16995,
    data: ['NYCBike20140409', 'PEMSD7', 'LOS_LOOP', 'PEMSD7(M)', 'PEMSD8'],
    name: '基于图神经网络的路网结构分析工具',
    link: 'https://ogb.stanford.edu/docs/leader_graphprop/',
    model: [
      'AGCRN',
      'DCRNN',
      'MTGNN',
      'CCRNN',
      'DeepMove',
      'STRNN',
      'ACFM',
      'STResNet',
      'GWNET',
      'STTN',
      'DMVSTNet',
      'LSTPM',
      '基于深度学习模型DeepLabV3P实现高精度车道线检测',
      'TTPnet',
      'Ada-STNet',
      '深圳出租车预测',
      'Artificial Bee Colony模型',
      'ASTGCN',
      'STGCN',
      'HGCN',
      'STG2Seq',
      'CARA',
      'HSTLSTM',
      'DeepTTE',
    ],
    user: '系统管理员',
    logoUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/scene-logo/4dc6b127268dacf533c953e493b68703.png',
    faculty: '该用户未注册机构',
    influence: 8497,
  },
];

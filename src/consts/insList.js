/**
 * 
  {
    support_faculty: 0,
    data_detail_id: [1, 4, 8, 11, 12],
    owner_name: '中山大学超算中心',
    description:
      '中山大学（Sun Yat-sen University），简称“中大”，由中华人民共和国教育部直属，是教育部、国家国防科技工业局和广东省共建的综合性全国重点大学，位列首批国家“双一流”A类、“985工程”、“211工程”，入选国家“珠峰计划”、“111计划”、“2011计划”、卓越法律人才教育培养计划、卓越医生教育培养计划、国家大学生创新性实验计划、国家级大学生创新创业训练计划...',
    owner_phone: '12345678910',
    register_time: '2021-07-06 18:17:25',
    merit_count: 6,
    background_picture:
      'http://8.140.124.245:8129/mnt/deploy/resource/background_default.svg',
    contribution: 17,
    node_type: '科研院校-数据节点',
    user_count: 2,
    model_count: 6,
    name: '中山大学交通大数据组',
    contract_count: 0,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/f9601d80719b3b3473e9d5980304d03d.jpg',
    index_identify_id: '',
    data_count: 5,
    support_app: 0,
    node_id: 1,
  },
  to
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
      href: '/achieve/1',
    },
 */
const calcHref = ({ name = '', id = '' }) => {
  if (name == 'OpenITs') {
    return 'https://www.openits.cn/openITSjs/index.jhtml';
  } else if (name == 'Libcity交通大数据组') {
    return 'https://libcity.ai/#/about';
  } else {
    return 'http://www.feiyun.tech/#/manage/faculty/detail?facultyId=' + id;
  }
};
export const parseInsList = () => {
  return insList.map((item) => {
    return {
      id: item.node_id,
      title: item.name,
      description: item.description,
      imgSrc: item.background_picture,
      tags: item.node_type.split('-'),
      author: item.owner_name,
      authorImgSrc: item.iconUrl,
      date: item.register_time,
      href: calcHref({ name: item.name, id: item.node_id }),
    };
  });
};

export const insList = [
  {
    support_faculty: 40,
    data_detail_id: [2, 7, 10, 13, 14, 16, 19, 20, 22],
    owner_name: '北航计算机学院交通大数据组',
    description:
      '北京航空航天大学（简称北航）成立于1952年，是新中国第一所航空航天高等学府，现隶属于工业和信息化部。学校所在地北京，总建筑面积170余万平方米。建校以来，北航一直是国家重点建设的高校，是全国第一批16所重点高校之一，也是80年代恢复学位制度后全国第一批设立研究生院的22所高校之一，首批进入“211工程”，2001年进入“985工程”，2017年入选国家“双一流”建设高校名单...',
    owner_phone: '12345678910',
    register_time: '2022-07-04 18:30:29',
    merit_count: 0,
    background_picture: 'https://i2.100024.xyz/2023/04/03/12t396m.webp',
    contribution: 71,
    node_type: '科研院校-混合节点',
    user_count: 1,
    model_count: 12,
    name: '北航计算机学院交通大数据组',
    contract_count: 26,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/31b2afe97919a416e92e0e9ee7516a10.jpg',
    index_identify_id: '',
    data_count: 9,
    support_app: 0,
    node_id: 12,
  },
  {
    support_faculty: 0,
    data_detail_id: [1, 4, 8, 11, 12],
    owner_name: '中山大学超算中心',
    description:
      '中山大学（Sun Yat-sen University），简称“中大”，由中华人民共和国教育部直属，是教育部、国家国防科技工业局和广东省共建的综合性全国重点大学，位列首批国家“双一流”A类、“985工程”、“211工程”，入选国家“珠峰计划”、“111计划”、“2011计划”、卓越法律人才教育培养计划、卓越医生教育培养计划、国家大学生创新性实验计划、国家级大学生创新创业训练计划...',
    owner_phone: '12345678910',
    register_time: '2021-07-06 18:17:25',
    merit_count: 6,
    background_picture: 'https://i2.100024.xyz/2023/04/03/12x39p9.webp',
    contribution: 17,
    node_type: '科研院校-数据节点',
    user_count: 2,
    model_count: 6,
    name: '中山大学交通大数据组',
    contract_count: 0,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/f9601d80719b3b3473e9d5980304d03d.jpg',
    index_identify_id: '',
    data_count: 5,
    support_app: 0,
    node_id: 1,
  },
  {
    support_faculty: 5,
    data_detail_id: [],
    owner_name: '大连理工大学交通大数据组',
    description:
      '大连理工大学（Dalian University of Technology）简称”大工“，坐落于辽宁省大连市，是中华人民共和国教育部直属的全国重点大学，教育部与国家国防科技工业局共建高校，教育部、辽宁省、大连市共建高校，国家“双一流”建设高校，国家“985工程”、“211工程”建设高校，卓越大学联盟、中俄工科大学联盟、中俄交通大学联盟、中欧工程教育平台、全国16所工科重点大学科技工作研讨会、中国人工智能教育联席会主要成员，入选国家“2011计划”、“111计划”、卓越工程师教育培养计划、国家建设高水平大学公派研究生项目、新工科研究与实践项目、中国政府奖学金来华留学生接收院校、国家实施工程教育改革试点高校、国家大学生创新性实验计划、国家级大学生创新创业训练计划、全国首批深化创新创业教育改革示范高校、首批全国高校实践育人创新创业基地、首批高等学校科技成果转化和技术转移基地。',
    owner_phone: '12345678910',
    register_time: '2021-07-06 18:17:43',
    merit_count: 0,
    background_picture: 'https://i2.100024.xyz/2023/04/04/98ma5.webp',
    contribution: 5,
    node_type: '公司-数据节点',
    user_count: 1,
    model_count: 0,
    name: '大连理工大学交通大数据组',
    contract_count: 5,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/cddeae82421d840057200465882765bc.png',
    index_identify_id: '',
    data_count: 0,
    support_app: 0,
    node_id: 2,
  },
  {
    support_faculty: 0,
    data_detail_id: [],
    owner_name: '北京工业大学交通大数据组',
    description:
      '北京工业大学是一所以工为主，工、理、经、管、文、法、艺术、教育相结合的多科性市属重点大学，是国家“世界一流学科建设高校”、国家“211工程”建设高校',
    register_time: '2021-09-07 22:25:31',
    merit_count: 0,
    background_picture: 'https://i2.100024.xyz/2023/04/04/ad93x.webp',
    contribution: 0,
    node_type: '科研院校-数据节点',
    user_count: 1,
    model_count: 0,
    name: '北京工业大学交通大数据组',
    contract_count: 0,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/2b94a99310c61a874d06e353270c770f.png',
    index_identify_id: '',
    data_count: 0,
    support_app: 0,
    node_id: 3,
  },
  {
    support_faculty: 0,
    data_detail_id: [15, 17],
    owner_name: '中国科学院自动化研究所',
    description:
      '中国科学院自动化研究所（Institute of Automation，Chinese Academy of Sciences）成立于1956年10月，是中国最早成立的国立自动化研究机构。1968年，自动化所整建制划入空间技术研究院，更名为空间控制技术研究所，番号中国人民解放军第五○二研究所。1970年，根据自动化学科技术发展的需要，中国科学院重建自动化研究所。',
    owner_phone: '12345678910',
    register_time: '2021-11-22 18:22:08',
    merit_count: 0,
    background_picture: 'https://i2.100024.xyz/2023/04/04/ckj90.webp',
    contribution: 2,
    node_type: '科研院校-数据节点',
    user_count: 1,
    model_count: 0,
    name: '中科院自动化所交通大数据组',
    contract_count: 0,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/680c519ba3cd8d10ab5933ba298e9431.jpg',
    index_identify_id: '',
    data_count: 2,
    support_app: 0,
    node_id: 5,
  },
  {
    support_faculty: 4,
    data_detail_id: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    owner_name: ' 中山大学超算中心（混合节点1）',
    description:
      '中山大学（Sun Yat-sen University），简称中大，位于广东省广州市，由中华人民共和国教育部直属，是教育部、国家国防科技工业局和广东省共建的综合性全国重点大学，位列国家“双一流”、“985工程”、“211工程”，入选国家“珠峰计划”、“111计划”、“2011计划”、卓越法律人才教育培养计划、卓越医生教育培养计划、国家大学生创新性实验计划、国家级大学生创新创业训练计划。',
    owner_phone: '12345678910',
    register_time: '2022-08-16 22:35:23',
    merit_count: 0,
    background_picture: 'https://i2.100024.xyz/2023/04/03/12x39p9.webp',
    contribution: 19,
    node_type: '科研院校-混合节点',
    user_count: 1,
    model_count: 1,
    name: '中山大学超算中心（混合节点1）',
    contract_count: 4,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/fe43890d4dce4863bce17d0312ef0ae7.jpg',
    index_identify_id: '',
    data_count: 12,
    support_app: 0,
    node_id: 13,
  },
  {
    support_faculty: 0,
    data_detail_id: [],
    owner_name: 'Libcity大数据组',
    description:
      'LibCity 是一个统一、全面、可扩展的交通预测算法库（框架），为交通预测领域的研究人员提供了标准的模型对比平台和便捷的模型开发框架，由北京航空航天大学BIGSCity团队进行开发和维护。',
    owner_phone: '12345678910',
    register_time: '2022-02-06 18:25:54',
    merit_count: 0,
    background_picture: 'https://i2.100024.xyz/2023/04/03/12zelsi.webp',
    contribution: 7,
    node_type: '公司-算法节点',
    user_count: 1,
    model_count: 6,
    name: 'Libcity交通大数据组',
    contract_count: 0,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/35e7e94a05fa24a832ed11eedd6ba9ec.png',
    index_identify_id: '',
    data_count: 0,
    support_app: 0,
    node_id: 8,
  },
  {
    support_faculty: 19,
    data_detail_id: [
      36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
    ],
    owner_name: 'OpenITs',
    description:
      '广东省智能交通系统重点实验室提出了OpenITS研究计划的设想，在第14届CICTP国际会议上作了题为《基于大数据的智能交通研究与OpenITS计划》的报告。该报告引起了与会人员的积极响应。',
    owner_phone: '18811591037',
    register_time: '2022-10-25 15:46:44',
    merit_count: 0,
    background_picture: 'https://i2.100024.xyz/2023/04/04/fnkdt.webp',
    contribution: 53,
    node_type: '公司-混合节点',
    user_count: 1,
    model_count: 6,
    name: 'OpenITs',
    contract_count: 13,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/83f24c212fe29c3b0c6d1839c908acdd.png',
    index_identify_id: '',
    data_count: 18,
    support_app: 0,
    node_id: 15,
  },
  {
    support_faculty: 0,
    data_detail_id: [3, 6, 9, 18, 21],
    owner_name: '中国科学院',
    description:
      '中国科学院（University of Science and Technology of China），位于安徽省合肥市，是中国科学院直属的一所以前沿科学和高新技术为主，兼有医学、特色管理和人文学科的全国重点大学，中央直管副部级建制，由中科院、教育部和安徽省三方重点共建；位列“双一流”“985工程”“211工程”，入选““珠峰计划”“强基计划”“111计划”“2011计划”、卓越工程师教育培养计划、中国科学院知识创新工程、国家建设高水平大学公派研究生项目、全国深化创新创业教育改革示范高校、中国政府奖学金来华留学生接收院校，首批学位授权自主审核单位，九校联盟 [91]  、中国大学校长联谊会、环太平洋大学联盟、国际应用科技开发协作网、东亚研究型大学协会成员。',
    owner_phone: '12345678910',
    register_time: '2021-11-03 18:20:10',
    merit_count: 0,
    background_picture: 'https://i2.100024.xyz/2023/04/04/b23n0.webp',
    contribution: 5,
    node_type: '公司-数据节点',
    user_count: 1,
    model_count: 0,
    name: '中国科学院交通大数据组',
    contract_count: 0,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/680c519ba3cd8d10ab5933ba298e9431.jpg',
    index_identify_id: '',
    data_count: 5,
    support_app: 0,
    node_id: 4,
  },

  {
    support_faculty: 5,
    data_detail_id: [],
    owner_name: '中山大学超算中心（混合节点2）',
    description:
      '中山大学（Sun Yat-sen University），简称中大，位于广东省广州市，由中华人民共和国教育部直属，是教育部、国家国防科技工业局和广东省共建的综合性全国重点大学，位列国家“双一流”、“985工程”、“211工程”，入选国家“珠峰计划”、“111计划”、“2011计划”、卓越法律人才教育培养计划、卓越医生教育培养计划、国家大学生创新性实验计划、国家级大学生创新创业训练计划。',
    owner_phone: '12345678910',
    register_time: '2022-08-16 22:37:41',
    merit_count: 0,
    background_picture: 'https://i2.100024.xyz/2023/04/03/12x39p9.webp',
    contribution: 7,
    node_type: '科研院校-混合节点',
    user_count: 1,
    model_count: 0,
    name: '中山大学超算中心（混合节点2）',
    contract_count: 4,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/2fcbae7f31639527a9327213ce6c4f61.jpg',
    index_identify_id: '',
    data_count: 0,
    support_app: 0,
    node_id: 14,
  },

  {
    support_faculty: 20,
    data_detail_id: [],
    owner_name: '华南理工大学交通大数据组',
    description:
      '华南理工大学（South China University of Technology），简称“华工”，位于广东省广州市，由中华人民共和国教育部直属，是教育部与广东省人民政府共建的全国重点大学，位列国家“双一流”、“211工程”、“985工程”，入选高等学校学科创新引智计划、卓越工程师教育培养计划、卓越法律人才教育培养计划、新工科研究与实践项目、国家建设高水平大学公派研究生项目、中国政府奖学金来华留学生接收院校、教育部来华留学示范基地、首批高等学校科技成果转化和技术转移基地，为建筑老八校、卓越大学联盟、中俄工科大学联盟、中欧工程教育平台、粤港澳大湾区物流与供应链创新联盟、中英大学工程教育与研究联盟成员，全国首批博士和硕士学位授予单位，是首批“未来技术学院”建设高校；是以工见长，理工结合，管、经、文、法、医等多学科协调发展的综合性研究型大学。',
    owner_phone: '12345678910',
    register_time: '2021-12-24 18:22:49',
    merit_count: 0,
    background_picture: 'https://i2.100024.xyz/2023/04/04/d5q1k.webp',
    contribution: 20,
    node_type: '公司-混合节点',
    user_count: 1,
    model_count: 0,
    name: '华南理工大学交通大数据组',
    contract_count: 20,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/49c6af47317847c8cb4a33888afeb6c1.png',
    index_identify_id: '',
    data_count: 0,
    support_app: 0,
    node_id: 6,
  },
];

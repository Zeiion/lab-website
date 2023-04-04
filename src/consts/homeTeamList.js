
export const teamDescription =  "我们的交通大数据研发团队致力于将大数据技术应用于交通领域，旨在提高城市交通的效率和安全性。我们的团队由一群技术精湛、富有创新精神的专家和工程师组成，拥有丰富的大数据处理、机器学习、人工智能等方面的经验。我们利用先进的技术手段，对城市交通数据进行采集、存储、处理和分析，以便深入理解交通运行状况，并为政府和企业提供数据驱动的决策支持和解决方案。我们致力于为人们创造更加安全、高效、绿色的出行环境，以此推动城市可持续发展。"
export const parseCards = () => {
  return teams.map((card) => {
   return {
     id: card.node_id,
     title: card.name,
     description: card.description,
     icon: card.iconUrl,
   }
  })
} 
const teams = [
  {
    support_faculty: 40,
    data_detail_id: [2, 7, 10, 13, 14, 16, 19, 20, 22],
    owner_name: '北航计算机学院交通大数据组',
    description:
      '北京航空航天大学（简称北航）成立于1952年，是新中国第一所航空航天高等学府，现隶属于工业和信息化部，位列首批国家“双一流”A类、“985工程”、“211工程',
    owner_phone: '12345678910',
    register_time: '2022-07-04 18:30:29',
    merit_count: 0,
    background_picture:
      'https://i2.100024.xyz/2023/04/03/12t396m.webp',
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
      '中山大学，由中华人民共和国教育部直属，是教育部、国家国防科技工业局和广东省共建的综合性全国重点大学，位列首批国家“双一流”A类、“985工程”、“211工程”',
    owner_phone: '12345678910',
    register_time: '2021-07-06 18:17:25',
    merit_count: 6,
    background_picture:
      'https://i2.100024.xyz/2023/04/03/12x39p9.webp',
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
    support_faculty: 0,
    data_detail_id: [15, 17],
    owner_name: '中科大交通大数据组',
    description:
      '中国科学院自动化研究所（Institute of Automation，Chinese Academy of Sciences）成立于1956年10月，是中国最早成立的国立自动化研究机构',
    owner_phone: '12345678910',
    register_time: '2021-11-22 18:22:08',
    merit_count: 0,
    background_picture:
      'https://i2.100024.xyz/2023/04/04/ckj90.webp',
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
    support_faculty: 0,
    data_detail_id: [],
    owner_name: 'Libcity大数据组',
    description:
      'LibCity 是一个统一、全面、可扩展的交通预测算法库（框架），为交通预测领域的研究人员提供了标准的模型对比平台和便捷的模型开发框架，由北京航空航天大学BIGSCity团队进行开发和维护。',
    owner_phone: '12345678910',
    register_time: '2022-02-06 18:25:54',
    merit_count: 0,
    background_picture:
      'https://i2.100024.xyz/2023/04/03/12zelsi.webp',
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
    background_picture:
      'https://i2.100024.xyz/2023/04/04/fnkdt.webp',
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
    owner_name: '中国科学技术大学管理员',
    description:
      '中国科学技术大学是中国科学院直属的一所以前沿科学和高新技术为主，兼有医学、特色管理和人文学科的全国重点大学，中央直管副部级建制，由中科院、教育部和安徽省三方重点共建；位列“双一流”“985工程”“211工程”',
    owner_phone: '12345678910',
    register_time: '2021-11-03 18:20:10',
    merit_count: 0,
    background_picture:
      'https://i2.100024.xyz/2023/04/04/b23n0.webp',
    contribution: 5,
    node_type: '公司-数据节点',
    user_count: 1,
    model_count: 0,
    name: '中国科学技术大学交通大数据组',
    contract_count: 0,
    iconUrl:
      'http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/f38c30edd2d269929c02b62f4efef3df.png',
    index_identify_id: '',
    data_count: 5,
    support_app: 0,
    node_id: 4,
  },
]


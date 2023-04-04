const calcHref = ({ name = '', id = '' }) => {
  if (name == 'OpenITs') {
    return 'https://www.openits.cn/openITSjs/index.jhtml';
  } else if (name == 'Libcity交通大数据组') {
    return 'https://libcity.ai/#/about';
  } else if (name === "中山大学交通大数据组") {
    return 'https://www.sysu.edu.cn/';
  } else {
    return 'http://www.feiyun.tech/#/manage/faculty/detail?facultyId=' + id;
  }
};
export const parseHomeInsList = () => {
  const tagsToList = (tags) => {
    return tags.map((item) => {
      return {
        text: item,
      };
    });
  };
  return homeInsList.map((item) => {
      return {
        id: item.node_id,
        title: item.name,
        description: item.description,
        imgSrc: item.background_picture,
        list: tagsToList(item.node_type.split('-')),
        href: calcHref({ name: item.name, id: item.node_id }),
        slogan: item.slogan,
      };
    });
}
export const homeInsList = [
  {
      "support_faculty": 40,
      "data_detail_id": [
          2,
          7,
          10,
          13,
          14,
          16,
          19,
          20,
          22
      ],
      "owner_name": "北航计算机学院交通大数据组",
      "description": "北京航空航天大学（简称北航）成立于1952年，是新中国第一所航空航天高等学府，现隶属于工业和信息化部。学校所在地北京，总建筑面积170余万平方米。建校以来，北航一直是国家重点建设的高校，是全国第一批16所重点高校之一，也是80年代恢复学位制度后全国第一批设立研究生院的22所高校之一，首批进入“211工程”，2001年进入“985工程”，2017年入选国家“双一流”建设高校名单...",
      "owner_phone": "12345678910",
      "register_time": "2022-07-04 18:30:29",
      "merit_count": 0,
      "background_picture": "https://i2.100024.xyz/2023/04/03/12t396m.webp",
      "contribution": 71,
      "node_type": "科研院校-混合节点",
      "user_count": 1,
      "model_count": 12,
      "name": "北航计算机学院交通大数据组",
      "contract_count": 26,
      "iconUrl": "http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/31b2afe97919a416e92e0e9ee7516a10.jpg",
      "index_identify_id": "",
      "data_count": 9,
      "support_app": 0,
      "node_id": 12,
      "slogan": "Beihang University"
  },
  {
    "support_faculty": 0,
    "data_detail_id": [],
    "owner_name": "Libcity大数据组",
    "description": "LibCity 是一个统一、全面、可扩展的交通预测算法库（框架），为交通预测领域的研究人员提供了标准的模型对比平台和便捷的模型开发框架，由北京航空航天大学BIGSCity团队进行开发和维护。",
    "owner_phone": "12345678910",
    "register_time": "2022-02-06 18:25:54",
    "merit_count": 0,
    "background_picture": "https://i2.100024.xyz/2023/04/03/12zelsi.webp",
    "contribution": 7,
    "node_type": "公司-算法节点",
    "user_count": 1,
    "model_count": 6,
    "name": "Libcity交通大数据组",
    "contract_count": 0,
    "iconUrl": "http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/35e7e94a05fa24a832ed11eedd6ba9ec.png",
    "index_identify_id": "",
    "data_count": 0,
    "support_app": 0,
    "node_id": 8,
    "slogan": "Libcity"
},
{
      "support_faculty": 0,
      "data_detail_id": [
          1,
          4,
          8,
          11,
          12
      ],
      "owner_name": "中山大学超算中心",
      "description": "中山大学（Sun Yat-sen University），简称“中大”，由中华人民共和国教育部直属，是教育部、国家国防科技工业局和广东省共建的综合性全国重点大学，位列首批国家“双一流”A类、“985工程”、“211工程”，入选国家“珠峰计划”、“111计划”、“2011计划”、卓越法律人才教育培养计划、卓越医生教育培养计划、国家大学生创新性实验计划、国家级大学生创新创业训练计划...",
      "owner_phone": "12345678910",
      "register_time": "2021-07-06 18:17:25",
      "merit_count": 6,
      "background_picture": "https://i2.100024.xyz/2023/04/03/12x39p9.webp",
      "contribution": 17,
      "node_type": "科研院校-数据节点",
      "user_count": 2,
      "model_count": 6,
      "name": "中山大学交通大数据组",
      "contract_count": 0,
      "iconUrl": "http://8.140.124.245:8129/mnt/deploy/resource/faculty-logo/f9601d80719b3b3473e9d5980304d03d.jpg",
      "index_identify_id": "",
      "data_count": 5,
      "support_app": 0,
      "node_id": 1,
      "slogan": "Sun Yat-sen University"
  },
]
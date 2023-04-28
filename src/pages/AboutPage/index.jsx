import PageTemplate from '~/components/PageTemplate';
import React, { useState, useRef, useEffect } from 'react';
import Modal from '~/utils/Modal';
import Header from '~/components/Header';
import MemberCard from '../../components/MemberCard';
import Page from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';
import Timeline from '~/components/Timeline';
import TagList from '~/components/TagList';
import HeroImage from '~/images/hero-image-01.jpg';
import TeamSection from '~/partials/TeamSection';
import { teamInfo } from '~/consts/teamInfo'
// TODO reuse
const insList = [
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

const pos = [
  {
    top: '45%',
    width: '51.67%',
    aos: 'fade-right',
  },
  {
    top: 0,
    left: '10%',
    width: '88.13%',
    aos: 'fade-down',
    maxWidth: '650px',
  },
  {
    top: '8.5%',
    right: 0,
    width: '42.67%',
    maxWidth: '250px',
    aos: 'fade-left',
  },
  {
    bottom: '2%',
    right: '5%',
    width: '35.67%',
    maxWidth: '300px',
    aos: 'fade-up',
  },
];

const AboutPage = () => {
  return (
    <div>
      <img
        className="absolute top-0 left-0 hidden object-cover w-screen pointer-events-none h-[34rem] lg:block opacity-30"
        src="https://preview.cruip.com/open-pro/images/team-mosaic-01.jpg"
        alt=""
      />
      <PageTemplate
        title={
          <>
            {/* TODO color */}
            关于我们——北航交通大数据组
          </>
        }
        subTitle={'About Us'}
      >
        <p
          className="mb-14 text-xl text-justify text-gray-200 text-indent-2 "
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            textIndent: '2.5rem',
          }}
        >
          {teamInfo?.description}
        </p>
        
        <h3 className="h3 mt-20">研究方向</h3>
        <div className="mt-5 mb-16">
          <TagList list={teamInfo?.researchDirections || []} size="medium" />
        </div>

        <h3 className="h3">团队成员</h3>
        <div className="grid grid-cols-1 mt-8 mb-16 sm:grid-cols-2 gap-y-10 gap-x-4">
          {teamInfo?.members &&
            teamInfo?.members?.map(
              ({ name, imgSrc, description, works, tags }, index) => (
                <MemberCard
                  key={name}
                  name={name}
                  imgSrc={imgSrc}
                  description={description}
                  works={works}
                  tags={tags}
                />
              ),
            )}
        </div>

        {teamInfo?.collaborationIntro && (
          <div className="animate-scale">
            <h3 className="h3">团队介绍及成果概览</h3>
            <div className="mt-3 mb-8">
              <p className="mt-5 text-gray-400 indent-8">
                {teamInfo?.collaborationIntro}
              </p>
            </div>
          </div>
        )}
        <Timeline list={teamInfo?.timeline} />
        <VCardList title="Lateset Works" list={teamInfo?.works}></VCardList>
        <h3 className="h3 mt-20">合作团队</h3>
        <TeamSection showDetail={false} />
        <h3 className="h3 mt-20 mb-8">鸣谢</h3>
          <p
            className="mb-16 text-xl text-justify text-gray-400 text-indent-2 "
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              textIndent: '2.5rem',
            }}
          >
            在此鸣谢感谢所有为城市交通大数据集成平台所做出的贡献的合作伙伴和团队，包括但不限于：
              各大数据源提供者，他们为我们提供了海量、高质量的城市交通数据；
              各位专业的应用场景开发者，他们基于平台提供的数据和工具，开发了各种实用的、创新的交通应用场景；
              各位模型开发者，他们通过对数据的深入挖掘和分析，开发出了一系列高效、准确的交通预测、优化模型；
              平台开发及维护团队，他们投入了大量心血，精益求精地打造了这个平台，并且持续保障着平台的稳定运行。
              正是由于以上各方的努力和支持，才让城市交通大数据集成平台得以不断壮大和完善，从而更好地为广大用户服务。
          </p>
          <p
            className="mb-8 text-xl text-justify text-gray-400 text-indent-2 "
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              textIndent: '2.5rem',
            }}
          >
            Thank you to all partners and teams who have made contributions to the urban transportation big data integration platform, including but not limited to: major data source providers who have provided us with massive and high-quality urban transportation data; Professional application scenario developers have developed various practical and innovative transportation application scenarios based on the data and tools provided by the platform; Dear model developers, they have developed a series of efficient and accurate traffic prediction and optimization models through in-depth mining and analysis of data; The platform development and maintenance team has invested a lot of effort and excellence to build this platform, and continuously ensures its stable operation. It is precisely due to the efforts and support of all parties mentioned above that the urban transportation big data integration platform has been continuously strengthened and improved, thereby better serving the vast number of users.
          </p>
          <div className="relative max-w-4xl mx-auto text-center h-[36rem] mt-20">
                {pos.map((p, index) => {
                  return (
                    <img
                      key={index}
                      className="absolute"
                      src={insList[index].background_picture}
                      style={p}
                      data-aos={p.aos}
                    />
                  );
                })}
              </div>
      </PageTemplate>
    </div>
  );
};

export default AboutPage;

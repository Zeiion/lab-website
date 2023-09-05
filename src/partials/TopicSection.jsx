import React from 'react';
import TopicCard from '../components/TopicCard';

import FeatImage01 from '../images/features-03-image-01.png';
import FeatImage02 from '../images/features-03-image-02.png';
import FeatImage03 from '../images/features-03-image-03.png';

const TopicSection = ({
  title,
  subTitle,
  description,
  list = [
    {
      title: '中山大学超算中心',
      description:
        '中山大学（Sun Yat-sen University），简称“中大”，由中华人民共和国教育部直属，是教育部、国家国防科技工业局和广东省共建的综合性全国重点大学，位列首批国家“双一流”A类、“985工程”、“211工程”，入选国家“珠峰计划”、“111计划”、“2011计划”、卓越法律人才教育培养计划、卓越医生教育培养计划、国家大学生创新性实验计划、国家级大学生创新创业训练计划...',
      imgSrc: 'http://81.70.246.244:9126/i/2023/03/28/stxgx7.webp',
      slogan: 'Sun Yat-sen University',
      href: '/topic/1',
      list: [
        {
          text: '高性能计算',
        },
        {
          text: '高效率开发',
        },
      ],
    },
    {
      title: 'Libcity交通大数据组',
      description: `LibCity 是一个统一、全面、可扩展的交通预测算法库（框架），为交通预测领域的研究人员提供了标准的模型对比平台和便捷的模型开发框架，由北京航空航天大学BIGSCity团队进行开发和维护。`,
      imgSrc: 'http://81.70.246.244:9126/i/2023/03/28/swb7yw.webp',
      slogan: 'OpenITs',
      href: '/topic/1',
      list: [
        {
          text: '专注于交通算法',
        },
        {
          text: '经验丰富',
        },
      ],
    },
    {
      title: '北航计算机学院交通大数据组',
      description: `北京航空航天大学（简称北航）成立于1952年，是新中国第一所航空航天高等学府，现隶属于工业和信息化部。学校所在地北京，总建筑面积170余万平方米。建校以来，北航一直是国家重点建设的高校，是全国第一批16所重点高校之一，也是80年代恢复学位制度后全国第一批设立研究生院的22所高校之一，首批进入“211工程”，2001年进入“985工程”`,
      imgSrc: 'http://81.70.246.244:9126/i/2023/03/28/svk7ft.webp',
      slogan: 'BUAA',
      href: '/topic/1',
      list: [
        {
          text: '高校支持',
        },
        {
          text: '资历优秀',
        },
      ],
    },
  ],
}) => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <div className="inline-flex px-3 py-1 m-2 mb-4 text-sm font-semibold text-green-600 bg-green-200 rounded-full">
              {subTitle}
            </div>
            <h1 className="mb-4 h2">{title}</h1>
            <p className="text-xl text-gray-400">{description}</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {list.map(
              ({ imgSrc, slogan, title, description, list, href }, index) => (
                <TopicCard
                  key={index}
                  imgSrc={imgSrc}
                  slogan={slogan}
                  title={title}
                  description={description}
                  list={list}
                  href={href}
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

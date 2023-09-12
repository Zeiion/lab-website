import { useParams } from 'react-router-dom';
import PageTemplate from '~/components/PageTemplate';
import Tag from '~/components/Tag';
import VCardList from '~/components/VCardList';
import Timeline from '~/components/Timeline';
import TagList from '~/components/TagList';
import LinkTagList from '~/components/LinkTagList';
import MemberCard from '../../components/MemberCard';

import { useRequest } from '../../utils/useRequest';
import { getAchieve } from '../../request/achieve';

const AchieveIntro = () => {
  const { id } = useParams();

  const { data: achieveInfo = {} } = useRequest(() => getAchieve(id), [id]);

  //   const achieveInfo = {
  //     title:
  //       'Deep multi-task learning with flexible and compact architecture search',
  //     description: `Deep multi-task learning with flexible and compact architecture search is
  //     a method for searching for compact architectures for multi-task learning.
  //     The method is based on a novel architecture search algorithm that is able to
  //     search for compact architectures with flexible and compact architecture search.
  //     The method is based on a novel architecture search algorithm that is able to
  //     search for compact architectures with flexible and compact architecture search.
  //     The method is based on a novel architecture search algorithm that is able to
  //     search for compact architectures with flexible and compact architecture search.`,
  //     imgSrc: 'http://39.97.209.211:9126/i/2023/03/28/stxgx7.webp',
  //     tags: ['人工智能', '客服'],
  //     author: 'Zeiion',
  //     authorImgSrc: 'http://placekitten.com/300/300',
  //     date: '2023-02',
  //     href: '/achieve/2',
  //     // 在线地址
  //     onlineHref: 'https://www.baidu.com',
  //     // 被引用次数
  //     quoteCount: 123,
  //     // 实验设计和结果分析
  //     methodInfo: `1. 速度异常值处理 —— 速度异常值处理方法为将速度小于 0 或大于 120 的数据删除。
  // 2. 速度缺失值处理 —— 速度缺失值处理方法为将速度缺失值用前后两个速度的平均值进行填充。
  // 3. 速度平滑 —— 速度平滑方法为将速度数据进行 5 分钟的平滑处理。`,
  //     // 主要创新点
  //     innovationInfo: `1. 速度异常值处理 —— 速度异常值处理方法为将速度小于 0 或大于 120 的数据删除。
  // 2. 速度缺失值处理 —— 速度缺失值处理方法为将速度缺失值用前后两个速度的平均值进行填充。`,
  //     // 未来可能延续的研究点
  //     futureInfo: `1. 研究一：基于深度学习的路段拥堵预测
  // 2. 研究二：基于深度学习的路段拥堵预测`,
  //     // 参考模型
  //     modelInfo: [
  //       {
  //         title: '基于深度学习的路段拥堵预测',
  //         href: 'https://www.github.com',
  //       },
  //     ],
  //   };
  return (
    <PageTemplate
      title={
        <>
          {/* TODO color */}
          成果介绍 ——{' '}
          <span className="text-purple-600">{achieveInfo?.title}</span>
        </>
      }
      subTitle={'Achievement Introduction'}
    >
      <p
        className="mb-8 text-justify text-gray-400 para text-indent-2"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          textIndent: '2.5rem',
        }}
      >
        {achieveInfo?.description}
      </p>

      <div
        className="flex flex-col items-center content-between gap-4 mt-6 md:flex-row"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex flex-col items-start content-between flex-1">
          <div className="animate-scale">
            <h3 className="h3">主要创新点</h3>
            <div className="mt-3 mb-8">
              <p className="mt-3 text-gray-400 para">
                {achieveInfo?.innovationInfo}
              </p>
            </div>
          </div>
          <div className="animate-scale">
            <h3 className="mt-6 h3" data-aos="fade-up" data-aos-delay="200">
              在线地址
            </h3>
            <div className="mt-4 mb-8 " data-aos="fade-up" data-aos-delay="200">
              <a
                className="text-gray-400 whitespace-pre-wrap para"
                href={achieveInfo?.onlineHref}
              >
                {achieveInfo?.onlineHref}
              </a>
            </div>
          </div>

          <div className="animate-scale">
            <h3 className="mt-6 h3" data-aos="fade-up" data-aos-delay="200">
              被引次数
            </h3>
            <div className="mt-4 mb-8 " data-aos="fade-up" data-aos-delay="200">
              <p className="text-gray-400 whitespace-pre-wrap para">
                {achieveInfo?.quoteCount}
              </p>
            </div>
          </div>
        </div>
        <img
          className="object-cover w-full h-full md:w-7/12 animate-scale"
          src={achieveInfo?.imgSrc}
          alt="-"
        />
      </div>

      <div className="animate-scale">
        <h3 className="mt-6 h3" data-aos="fade-up" data-aos-delay="200">
          实验设计和结果分析
        </h3>
        <div className="mt-4 mb-8 " data-aos="fade-up" data-aos-delay="200">
          <p className="text-gray-400 whitespace-pre-wrap para">
            {achieveInfo?.methodInfo}
          </p>
        </div>
      </div>

      <div className="animate-scale">
        <h3 className="mt-6 h3" data-aos="fade-up" data-aos-delay="200">
          可能延续的研究点
        </h3>
        <div className="mt-4 mb-8 " data-aos="fade-up" data-aos-delay="200">
          <p className="text-gray-400 whitespace-pre-wrap para">
            {achieveInfo?.futureInfo}
          </p>
        </div>
      </div>

      <div className="animate-scale">
        <h3 className="mt-6 h3" data-aos="fade-up" data-aos-delay="200">
          参考模型
        </h3>
        <div className="mt-4 mb-8 " data-aos="fade-up" data-aos-delay="200">
          <LinkTagList list={achieveInfo?.modelInfo}></LinkTagList>
        </div>
      </div>
    </PageTemplate>
  );
};

export default AchieveIntro;

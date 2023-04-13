import { useParams } from 'react-router-dom';
import PageTemplate from '~/components/PageTemplate';
import Tag from '~/components/Tag';
import VCardList from '~/components/VCardList';
import Timeline from '~/components/Timeline';
import TagList from '~/components/TagList';
import LinkTagList from '~/components/LinkTagList';
import MemberCard from '../../components/MemberCard';
import { getData } from '../../request/data';
import { useRequest } from '~/utils/useRequest';

const DataIntro = () => {
  const { id } = useParams();
  const { data: dataInfo = {} } = useRequest(() => getData(id), [id]);
  //   const dataInfo = {
  //     title: 'Large-scale Traffic Speed Data Set',
  //     description:
  //       'This traffic speed data set is comprised of 214 anonymous road segments (mainly consist of urban expressways and arterials) from Aug. 1, 2016 to Sep. 30, 2016 at 10-minute interval in Guangzhou, China. It is available for everybody without any commercial use. Relying on this data set, if you plan to do some studies, please clarify the data sources and cite the OpenITS.This traffic speed data set is comprised of 214 anonymous road segments (mainly consist of urban expressways and arterials) from Aug. 1, 2016 to Sep. 30, 2016 at 10-minute interval in Guangzhou, China. It is available for everybody without any commercial use. Relying on this data set, if you plan to do some studies, please clarify the data sources and cite the OpenITS.This traffic speed data set is comprised of 214 anonymous road segments (mainly consist of urban expressways and arterials) from Aug. 1, 2016 to Sep. 30, 2016 at 10-minute interval in Guangzhou, China. It is available for everybody without any commercial use. Relying on this data set, if you plan to do some studies, please clarify the data sources and cite the OpenITS.',
  //     imgSrc: 'https://i2.100024.xyz/2023/04/07/1ywd3k.webp',
  //     tags: ['Openits'],
  //     author: 'OpenITs',
  //     authorImgSrc:
  //       'http://8.140.124.245:8129/mnt/deploy/resource/datafile-logo/9527fc2d434b052852ae152a8d40f9a4.jpg',
  //     date: '2022-10-26',
  //     href: 'http://www.feiyun.tech/#/manage/data/dataDetail/53',
  //     action: {
  //       type: 'a',
  //       key: null,
  //       ref: null,
  //       props: {
  //         href: 'http://81.70.246.244:9898/scene/create/3',
  //         target: '_blank',
  //         className:
  //           'absolute top-0 right-0 px-3 py-1 text-sm font-bold text-white transition duration-200 bg-purple-700 border-2 border-purple-600 cursor-pointer hover:bg-purple-800 hover:text-gray-200',
  //         children: '数据使用',
  //       },
  //       _owner: null,
  //       _store: {},
  //     },
  //     // 来源介绍
  //     sourceInfo: {
  //       tag: '来源xxx',
  //       description: `当前数据集包含 214 个匿名路段，每个路段包含 2016 年 8 月 1 日至 2016 年 9 月 30 日的 10 分钟间隔的速度数据。`,
  //     },
  //     // 格式介绍
  //     formatInfo: {
  //       tag: '文件后缀：csv',
  //       description: `每个路段的字段如下：
  //   - segment_id: 路段 ID
  //   - date: 日期
  //   - time: 时间
  //   - speed: 速度
  //   - travel_time: 行驶时间`,
  //     },
  //     // 数据处理和清洗的方法
  //     methodInfo: `1. 速度异常值处理 —— 速度异常值处理方法为将速度小于 0 或大于 120 的数据删除。
  // 2. 速度缺失值处理 —— 速度缺失值处理方法为将速度缺失值用前后两个速度的平均值进行填充。
  // 3. 速度平滑 —— 速度平滑方法为将速度数据进行 5 分钟的平滑处理。`,
  //     // 数据的评估指标和标注方法
  //     evaluationInfo: `1. 指标1 —— 评估指标1的计算方法为 xxx。
  // 2. 指标2 —— 评估指标2的计算方法为 xxx。`,
  //     // 数据的可视化图表
  //     chartInfo: [
  //       {
  //         title: '速度分布图',
  //         href: 'http://echarts.baidu.com/examples/editor.html?c=line-simple',
  //       },
  //     ],
  //   };
  return (
    <PageTemplate
      title={
        <>
          {/* TODO color */}
          数据介绍 —— <span className="text-purple-600">{dataInfo?.title}</span>
        </>
      }
      subTitle={'Data Introduction'}
    >
      <p
        className="mb-8 text-xl text-justify text-gray-400 text-indent-2"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          textIndent: '2.5rem',
        }}
      >
        {dataInfo?.description}
      </p>

      <div
        className="flex flex-col items-center content-between gap-4 mt-6 md:flex-row"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex flex-col items-start content-between flex-1">
          <div className="animate-scale">
            <h3 className="h3">来源介绍</h3>
            <div className="mt-3 mb-8">
              <TagList list={[dataInfo?.sourceInfo?.tag]}></TagList>
              <p className="mt-3 text-gray-400">
                {dataInfo?.sourceInfo?.description}
              </p>
            </div>
          </div>
          <div className="animate-scale">
            <h3 className="mt-4 h3">格式介绍</h3>
            <div className="mt-3 mb-8">
              <TagList list={[dataInfo?.formatInfo?.tag]}></TagList>
              <p className="mt-3 text-gray-400 whitespace-pre-wrap">
                {dataInfo?.formatInfo?.description}
              </p>
            </div>
          </div>
        </div>
        <img
          className="object-cover w-full h-full md:w-7/12 animate-scale"
          src={dataInfo?.imgSrc}
          alt="-"
        />
      </div>

      <div className="animate-scale">
        <h3 className="mt-6 h3" data-aos="fade-up" data-aos-delay="200">
          数据的处理和清洗方法
        </h3>
        <div className="mt-4 mb-8 " data-aos="fade-up" data-aos-delay="200">
          <p className="text-gray-400 whitespace-pre-wrap ">
            {dataInfo?.methodInfo}
          </p>
        </div>
      </div>

      <div className="animate-scale">
        <h3 className="mt-6 h3" data-aos="fade-up" data-aos-delay="200">
          数据的评估指标和标注方法
        </h3>
        <div className="mt-4 mb-8 " data-aos="fade-up" data-aos-delay="200">
          <p className="text-gray-400 whitespace-pre-wrap ">
            {dataInfo?.evaluationInfo}
          </p>
        </div>
      </div>

      <div className="animate-scale">
        <h3 className="mt-6 h3" data-aos="fade-up" data-aos-delay="200">
          数据的可视化图表
        </h3>
        <div className="mt-4 mb-8 " data-aos="fade-up" data-aos-delay="200">
          <LinkTagList list={dataInfo?.chartInfo || []}></LinkTagList>
        </div>
      </div>
    </PageTemplate>
  );
};

export default DataIntro;

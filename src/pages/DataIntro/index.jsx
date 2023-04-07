import { useParams } from 'react-router-dom';
import PageTemplate from '~/components/PageTemplate';
import Tag from '~/components/Tag';
import VCardList from '~/components/VCardList';
import Timeline from '~/components/Timeline';
import TagList from '~/components/TagList';
import MemberCard from '../../components/MemberCard';
const DataIntro = () => {
  const { id } = useParams();
  const dataInfo = {
    title: 'Large-scale Traffic Speed Data Set',
    description:
      'This traffic speed data set is comprised of 214 anonymous road segments (mainly consist of urban expressways and arterials) from Aug. 1, 2016 to Sep. 30, 2016 at 10-minute interval in Guangzhou, China. It is available for everybody without any commercial use. Relying on this data set, if you plan to do some studies, please clarify the data sources and cite the OpenITS.This traffic speed data set is comprised of 214 anonymous road segments (mainly consist of urban expressways and arterials) from Aug. 1, 2016 to Sep. 30, 2016 at 10-minute interval in Guangzhou, China. It is available for everybody without any commercial use. Relying on this data set, if you plan to do some studies, please clarify the data sources and cite the OpenITS.This traffic speed data set is comprised of 214 anonymous road segments (mainly consist of urban expressways and arterials) from Aug. 1, 2016 to Sep. 30, 2016 at 10-minute interval in Guangzhou, China. It is available for everybody without any commercial use. Relying on this data set, if you plan to do some studies, please clarify the data sources and cite the OpenITS.',
    imgSrc: 'https://i2.100024.xyz/2023/04/07/1ywd3k.webp',
    tags: ['Openits'],
    author: 'OpenITs',
    authorImgSrc:
      'http://8.140.124.245:8129/mnt/deploy/resource/datafile-logo/9527fc2d434b052852ae152a8d40f9a4.jpg',
    date: '2022-10-26',
    href: 'http://www.feiyun.tech/#/manage/data/dataDetail/53',
    action: {
      type: 'a',
      key: null,
      ref: null,
      props: {
        href: 'http://81.70.246.244:9898/scene/create/3',
        target: '_blank',
        className:
          'absolute top-0 right-0 px-3 py-1 text-sm font-bold text-white transition duration-200 bg-purple-700 border-2 border-purple-600 cursor-pointer hover:bg-purple-800 hover:text-gray-200',
        children: '数据使用',
      },
      _owner: null,
      _store: {},
    },
    // 规模介绍
    sizeInfo: {
      tag: '文件大小：1.2GB',
      description: `当前数据集包含 214 个匿名路段，每个路段包含 2016 年 8 月 1 日至 2016 年 9 月 30 日的 10 分钟间隔的速度数据。`,
    },
    // 格式介绍
    formatInfo: {
      tag: '文件后缀：csv',
      description: `每个路段的字段如下：
  - segment_id: 路段 ID
  - date: 日期
  - time: 时间
  - speed: 速度
  - travel_time: 行驶时间`,
    },
    // 注意事项
    attentionInfo: `1. 本数据集仅供学术研究使用，不得用于商业用途。
2. 本数据集仅供学术研究使用，不得用于商业用途。
3. 本数据集仅供学术研究使用，不得用于商业用途。
    `,
  };
  return (
    <PageTemplate
      title={
        <>
          {/* TODO color */}
          数据介绍 —— <span className='text-purple-600'>{dataInfo.title}</span>
        </>
      }
      subTitle={'Data Introduction'}
    >
      <p
        className='mb-8 text-xl text-justify text-gray-400 text-indent-2 '
        data-aos='fade-up'
        data-aos-delay='200'
        style={{
          textIndent: '2.5rem',
        }}
      >
        {dataInfo.description}
      </p>

      <div className='flex flex-row items-center content-between gap-2'>
        <div className='flex flex-col items-start content-between flex-1'>
          <h3 className='h3'>规模介绍</h3>
          <div className='mt-2 mb-8 '>
            <TagList list={[dataInfo.sizeInfo.tag]}></TagList>
            <p className='mt-2 text-gray-400'>
              {dataInfo.sizeInfo.description}
            </p>
          </div>
          <h3 className='h3'>格式介绍</h3>
          <div className='mt-2 mb-8 '>
            <TagList list={[dataInfo.formatInfo.tag]}></TagList>
            <p className='mt-2 text-gray-400 whitespace-pre-wrap'>
              {dataInfo.formatInfo.description}
            </p>
          </div>
        </div>
        <img
          className='object-cover w-7/12 h-full transition duration-700 ease-out transform hover:scale-105'
          src={dataInfo.imgSrc}
          alt='-'
        />
      </div>

      <h3 className='h3'>注意事项</h3>
      <div className='mt-5 mb-8 '>
        <p className='mt-2 text-gray-400 whitespace-pre-wrap'>
          {dataInfo.attentionInfo}
        </p>
      </div>

      {/* <h3 className='h3'>研究方向</h3>
      <div className='mt-5 mb-16'>
        <TagList list={dataInfo.researchDirections} size='medium' />
      </div> */}
      {/* 
      <h3 className='h3'>团队成员</h3>
      <div className='grid grid-cols-1 mt-8 mb-16 sm:grid-cols-2 gap-y-10 gap-x-4'>
        {dataInfo.members.map(({ name, imgSrc, description, works, tags }) => (
          <MemberCard
            key={name}
            name={name}
            imgSrc={imgSrc}
            description={description}
            works={works}
            tags={tags}
          />
        ))}
      </div>

      <Timeline list={dataInfo.timeline} />
      <VCardList title='Lateset Works' list={dataInfo.works}></VCardList> */}
    </PageTemplate>
  );
};

export default DataIntro;
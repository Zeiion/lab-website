import { useParams } from 'react-router-dom';
import PageTemplate from '~/components/PageTemplate';
import Tag from '~/components/Tag';
import VCardList from '~/components/VCardList';
import Timeline from '~/components/Timeline';
import TagList from '~/components/TagList';
import MemberCard from '~/components/MemberCard';

import { parseModelList } from '~/consts/modelList';

const ModelIntro = () => {
  const { id } = useParams();
  const modelInfo = {
    ...parseModelList()[0],
    // 规模介绍
    sizeInfo: {
      tag: '模型大小：120MB',
      description: `该模型主要由三个部分组成：输入层、卷积层和全连接层，包含数百个或数千个节点，广泛应用于图像识别、语音识别、自然语言处理等领域，具有强大的特征提取和分类能力，是目前深度学习领域中的经典模型之一`,
    },
    // 格式介绍
    formatInfo: {
      tag: '文件后缀：.tf3',
      description: `.tf3 是 TensorFlow 3.0 版本的文件后缀。TensorFlow 3.0 是 TensorFlow 的一个重大版本更新，它引入了一些新的功能和改进，包括更好的可移植性、更高的性能和更广泛的架构支持。`,
    },
    // 注意事项
    attentionInfo: `1. 数据预处理：在训练 CNN 模型之前，需要对数据进行预处理，包括数据清洗、数据增强、数据标注等。预处理过程可以提高模型的性能和泛化能力。
2. 网络结构设计:CNN 模型的结构对性能有着重要的影响。需要根据具体问题的特点和数据的特征，设计合适的网络结构。
3. 超参数调整:CNN 模型的训练过程中，需要调整超参数，如学习率、批量大小、正则化参数等，以获得更好的性能。超参数的调整需要根据具体问题和数据的特点进行优化。
4. 模型评估和调整：在训练过程中，需要对模型进行评估，并根据评估结果对模型进行调整。模型评估可以采用交叉验证等方法，以获得更准确的性能指标。
5. 模型部署和调整：在模型训练和评估完成后，需要将模型部署到生产环境中进行使用。在部署过程中，需要对模型进行调整，以适应具体的应用场景。`,
  };
  return (
    <PageTemplate
      title={
        <>
          {/* TODO color */}
          模型介绍 —— <span className="text-purple-600">{modelInfo.title}</span>
        </>
      }
      subTitle={'Model Introduction'}
    >
      <p
        className="mb-8 text-xl text-justify text-gray-400 text-indent-2"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          textIndent: '2.5rem',
        }}
      >
        {modelInfo.description}
      </p>

      <div
        className="flex flex-col items-center content-between gap-4 mt-6 h-fit md:flex-row"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex flex-col items-start content-between flex-1 h-full">
          <div className="animate-scale">
            <h3 className="h3">规模介绍</h3>
            <div className="mt-3 mb-8">
              <TagList list={[modelInfo.sizeInfo.tag]}></TagList>
              <p className="mt-3 text-gray-400">
                {modelInfo.sizeInfo.description}
              </p>
            </div>
          </div>
          <div className="animate-scale">
            <h3 className="mt-4 h3">格式介绍</h3>
            <div className="mt-3 mb-8">
              <TagList list={[modelInfo.formatInfo.tag]}></TagList>
              <p className="mt-3 text-gray-400 whitespace-pre-wrap">
                {modelInfo.formatInfo.description}
              </p>
            </div>
          </div>
        </div>
        <img
          className="object-contain w-full h-full md:w-5/12 animate-scale"
          src={modelInfo.imgSrc}
          alt="-"
        />
      </div>

      <div className="animate-scale">
        <h3 className="mt-6 h3" data-aos="fade-up" data-aos-delay="200">
          注意事项
        </h3>
        <div className="mt-4 mb-8 " data-aos="fade-up" data-aos-delay="200">
          <p className="text-gray-400 whitespace-pre-wrap ">
            {modelInfo.attentionInfo}
          </p>
        </div>
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

export default ModelIntro;
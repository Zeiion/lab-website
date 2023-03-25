import { useParams } from 'react-router-dom';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';
import Timeline from '~/components/Timeline';
import TagList from '~/components/TagList';
import MemberCard from '../../components/MemberCard';
const TeamIntro = () => {
  const { id } = useParams();
  const teamInfo = {
    title: '团队名称',
    description: `We are a full-service digital agency that builds immersive user experience. Our tr team creates an exceptionaxlvisualization and thought-out r team creates an exceptionaxlvisualization and thought-out eam creates an exceptionaxlvisualization and thought-out functionality. We believe, our clients deserve to be remarkable in their business. The studio develops the products people appreciate all around the world.`,
    researchDirections: ['研究方向1', '研究方向2'],
    members: [
      {
        name: '成员1',
        description:
          '成员1简介We are a full-service digital agency that builds immersive use exceptionaxlvisualizat',
        imgSrc: 'http://placekitten.com/300/300',
        tags: ['团队负责人', '开朗活泼'],
        // 代表作
        works: [
          {
            title: '作品1',
            href: '/achievements/1',
          },
          {
            title: '作品2',
            href: '/achievements/2',
          },
        ],
      },
      {
        name: '成员324',
        description:
          'e are a full-service digital agency that builds immersive user experience. Our tr team creates an exceptionaxlvisualization and thought-out r team creates an exceptionaxlvisualization and thought-out eam creates an exceptionaxlvisualization and thought-out functionality. We believe, our clients deserve to be remarkable in their business. The studio develops the products people appreciate all around the world.介',
        imgSrc: 'http://placekitten.com/300/300',
        tags: ['团队负责人', '开朗活泼'],
        // 代表作
        works: [
          {
            title: '作品21321321311',
            href: '/achievements/1',
          },
          {
            title: '作213213123123品2',
            href: '/achievements/2',
          },
          {
            title: '作12312321321312321321321312品1',
            href: '/achievements/1',
          },
          {
            title: '作1品2',
            href: '/achievements/2',
          },
          {
            title:
              '11111111111111111111111111111111111111         11111111111111 作品1',
            href: '/achievements/1',
          },
          {
            title: '作品2',
            href: '/achievements/2',
          },
        ],
      },
      {
        name: '成员2',
        description:
          'e are a full-service digital agency that builds immersive user experience. Our tr team creates an exceptionaxlvisualization and thought-out r team creates an exceptionaxlvisualization and thought-out eam creates an exceptionaxlvisualization and thought-out functionality. We believe, our clients deserve to be remarkable in their business. The studio develops the products people appreciate all around the world.',
        imgSrc: 'http://placekitten.com/300/300',
        tags: ['团队负责人', '开朗活泼'],
        // 代表作
        works: [
          {
            title: '作品1',
            href: '/achievements/1',
          },
          {
            title: '作品2',
            href: '/achievements/2',
          },
        ],
      },
    ],
    works: [
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
        href: '/achievements/1',
      },
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
        href: '/achievements/2',
      },
      {
        title: 'Designing a functional workflow at home.',
        description: `Description of the card
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
        nisl, eu aliquet nunc nunc eget lorem.`,
        imgSrc: 'http://placekitten.com/1200/600',
        tags: ['tag1', 'tag2'],
        author: 'Zeiion',
        authorImgSrc: 'http://placekitten.com/300/300',
        date: '2023-01',
        href: '/achievements/1',
      },
      {
        title: 'Designing a functional workflow at home.',
        description: `Description of the card
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
        nisl, eu aliquet nunc nunc eget lorem.`,
        imgSrc: 'http://placekitten.com/1200/600',
        tags: ['tag1', 'tag2'],
        author: 'Zeiion',
        authorImgSrc: 'http://placekitten.com/300/300',
        date: '2023-01',
        href: '/achievements/1',
      },
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
        href: '/achievements/1',
      },
      {
        title: 'Designing a functional workflow at home.',
        description: `Description of the card
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
        nisl, eu aliquet nunc nunc eget lorem.`,
        imgSrc: 'http://placekitten.com/1200/600',
        tags: ['tag1', 'tag2'],
        author: 'Zeiion',
        authorImgSrc: 'http://placekitten.com/300/300',
        date: '2023-01',
        href: '/achievements/1',
      },
    ],
    timeline: [
      {
        title: 'Penta Consulting',
        type: 'Front End Developer',
        date: '2023 June 4',
        dateRange: 'June 2016 - Present',
        description: 'Wo address team necessities.',
        tags: ['okok', 'Test'],
      },
      {
        title: 'Penta Consulting',
        type: 'Front End Developer',
        date: '2023 Jan 4',
        dateRange: 'June 2016 - Present',
        description:
          'Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Wordpress', 'Test'],
      },
      {
        title: 'Penta Consulting',
        type: 'Front End Developer',
        date: '2022 Oct 4',
        dateRange: 'June 2016 - Present',
        description: 'Worksolutions to address team necessities.',
        tags: ['jQuery', 'Wordpress', 'Test'],
      },
      {
        title: 'Penta Consulting',
        type: 'Front End Developer',
        date: 'June 4',
        dateRange: 'June 2016 - Present',
        description: 'Working alongside the designer team implementing the ',
        tags: ['HTML5', 'CSS3'],
      },
    ],
  };
  return (
    <PageTemplate
      title={
        <>
          {/* TODO color */}
          团队介绍 —— <span className="text-purple-600">{teamInfo.title}</span>
        </>
      }
      subTitle={'Team Profile'}
    >
      <p
        className="mb-8 text-xl text-justify text-gray-400 text-indent-2 "
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          textIndent: '2.5rem',
        }}
      >
        {teamInfo.description}
      </p>

      <h3 className="h3">研究方向</h3>
      <div className="mt-5 mb-16">
        <TagList list={teamInfo.researchDirections} size="medium" />
      </div>

      <h3 className="h3">团队成员</h3>
      <div className="grid grid-cols-2 mt-8 mb-16 gap-y-10 gap-x-4">
        {teamInfo.members.map(({ name, imgSrc, description, works, tags }) => (
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

      <Timeline list={teamInfo.timeline} />
      <VCardList title="Lateset Works" list={teamInfo.works}></VCardList>
    </PageTemplate>
  );
};

export default TeamIntro;

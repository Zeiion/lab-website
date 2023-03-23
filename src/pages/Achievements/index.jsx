import React from 'react';
import { Link } from 'react-router-dom';

import Header from '~/components/Header';
import PageIllustration from '~/partials/PageIllustration';
import Banner from '~/components/Banner';
import HCard from '../../components/HCard';
import VCard from '../../components/VCard';

const Achievements = () => {
  const archieveList = [
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
    },
  ];
  const prizeList = archieveList;
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative h-0 max-w-6xl mx-auto pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-6xl pb-12 mx-auto text-center md:pb-20 md:text-left">
                <h1 className="h1" data-aos="fade-up">
                  成果列表 <br /> <h2 className="h2">Achievements</h2>
                </h1>
              </div>
              <HCard
                title={archieveList[0].title}
                description={archieveList[0].description}
                imgSrc={archieveList[0].imgSrc}
                tags={archieveList[0].tags}
                author={archieveList[0].author}
                authorImgSrc={archieveList[0].authorImgSrc}
                date={archieveList[0].date}
              />
              <h4
                class="aos-init aos-animate border-b-2 pb-6 h4 mb-8 mt-16 border-gray-700"
                data-aos="fade-up"
              >
                Latest articles
              </h4>
              <div className="grid items-start w-full md:grid-cols-3 md:gap-x-6 md:gap-y-8 gap-y-5">
                {archieveList
                  .slice(1)
                  .map(
                    (
                      {
                        title,
                        description,
                        imgSrc,
                        tags,
                        author,
                        authorImgSrc,
                        date,
                      },
                      index,
                    ) => (
                      <VCard
                        title={title}
                        description={description}
                        imgSrc={imgSrc}
                        tags={tags}
                        author={author}
                        authorImgSrc={authorImgSrc}
                        date={date}
                        key={index}
                      />
                    ),
                  )}
              </div>

              <h4
                class="aos-init aos-animate border-b-2 pb-6 h4 mb-8 mt-16 border-gray-700"
                data-aos="fade-up"
              >
                Latest prizes
              </h4>
              <div className="grid items-start w-full md:grid-cols-3 md:gap-x-6 md:gap-y-8 gap-y-5">
                {prizeList
                  .slice(1)
                  .map(
                    (
                      {
                        title,
                        description,
                        imgSrc,
                        tags,
                        author,
                        authorImgSrc,
                        date,
                      },
                      index,
                    ) => (
                      <VCard
                        title={title}
                        description={description}
                        imgSrc={imgSrc}
                        tags={tags}
                        author={author}
                        authorImgSrc={authorImgSrc}
                        date={date}
                        key={index}
                      />
                    ),
                  )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Banner />
    </div>
  );
};

export default Achievements;

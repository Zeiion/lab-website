import React from 'react';

import Header from '~/components/Header';
import PageIllustration from '~/partials/PageIllustration';
import HeroHome from '~/partials/HeroHome';
import TeamSection from '~/partials/TeamSection';
import TopicSection from '~/partials/TopicSection';
import Testimonials from '~/partials/Testimonials';
import Newsletter from '~/partials/Newsletter';
import Timeline from '~/components/Timeline';
import Banner from '~/components/Banner';
import Footer from '~/components/Footer';
import VCard from '~/components/VCard';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
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

        {/*  Page sections */}
        <HeroHome />
        <TeamSection />
        <TopicSection />
        <Testimonials />
        {/* <Timeline /> */}

        {/* <Newsletter /> */}
      </main>
      <VCard
        title="Title"
        description="Description of the card
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed euismod, nisl nec tincidunt lacinia, nunc est aliquam
          nisl, eu aliquet nunc nunc eget lorem.
          "
        imgSrc="http://placekitten.com/1200/600"
        tags={['tag1', 'tag2']}
        author="Author"
        authorImgSrc=" http://placekitten.com/300/300"
        date="2023-01"
      />
      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;

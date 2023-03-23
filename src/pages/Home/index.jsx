import React from 'react';

import Header from '~/components/Header';
import PageIllustration from '~/partials/PageIllustration';
import HeroHome from '~/partials/HeroHome';
import TeamSection from '~/partials/TeamSection';
import TopicSection from '~/partials/TopicSection';
import Testimonials from '~/partials/Testimonials';
import Newsletter from '~/partials/Newsletter';
import Banner from '~/components/Banner';
import Footer from '~/components/Footer';

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
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
import React from 'react';
import IconCard from '~/components/IconCard';

import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';

function Testimonials() {
  const list = [
    {
      description: 'nininiin ',
      cite: ';123213',
      source: '12213',
      imgSrc: TestimonialImage01,
    },
    {
      description: '123123123',
      cite: ';123213',
      source: '12213',
      imgSrc: TestimonialImage02,
    },
    {
      description: '123123123',
      cite: ';123213',
      source: '12213',
      imgSrc: TestimonialImage03,
    },
  ];

  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">Don't take our word for it</h2>
            <p className="text-xl text-gray-400">
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus—in
              ornare.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid items-start max-w-sm gap-8 mx-auto lg:grid-cols-3 lg:gap-6 lg:max-w-none">
            {list.map(({ description, cite, source, imgSrc }) => {
              return (
                <IconCard
                  key={description}
                  description={description}
                  cite={cite}
                  source={source}
                  imgSrc={imgSrc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

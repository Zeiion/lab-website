import React from 'react';
import TeamCard from '../components/TeamCard';
import { parseCards, teamDescription } from '../consts/homeTeamList';

const TeamSection = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-4xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">团队介绍</h2>
            <p className="text-xl text-left text-gray-400 para indent-8">
              {teamDescription}
            </p>
          </div>

          {/* Items */}
          <div
            className="grid items-start max-w-sm gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-24 md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {parseCards().map(({ title, description, icon, id }, index) => (
              <div
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
                data-aos-delay={index * 400}
                data-aos-duration="1000"
              >
                <TeamCard
                  id={index}
                  icon={icon}
                  title={title}
                  description={description}
                  key={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

import React from 'react';
import TeamCard from '../components/TeamCard';
import { parseCards, teamDescription } from '../consts/homeTeamList';


const TeamSection = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">团队介绍</h2>
            <p className="text-xl text-gray-400">
              {teamDescription}
            </p>
          </div>

          {/* Items */}
          <div
            className="grid items-start max-w-sm gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {parseCards().map(({ title, description, icon, id }, index) => (
              <TeamCard
                id={id}
                icon={icon}
                title={title}
                description={description}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

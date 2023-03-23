import React from 'react';
import TeamCard from '../components/TeamCard';

function FeaturesBlocks() {
  const iconList = [
    <svg
      className="w-16 h-16 mb-4"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="text-purple-600 fill-current" cx="32" cy="32" r="32" />
      <path
        className="text-purple-100 stroke-current"
        strokeWidth="2"
        strokeLinecap="square"
        d="M21 23h22v18H21z"
        fill="none"
        fillRule="evenodd"
      />
      <path
        className="text-purple-300 stroke-current"
        d="M26 28h12M26 32h12M26 36h5"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>,
    <svg
      className="w-16 h-16 mb-4"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="text-purple-600 fill-current"
        width="64"
        height="64"
        rx="32"
      />
      <path
        className="text-purple-100 stroke-current"
        d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
        strokeLinecap="square"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
      <path
        className="text-purple-300 stroke-current"
        d="M43 42h-9M43 37h-9"
        strokeLinecap="square"
        strokeWidth="2"
      />
    </svg>,
    <svg
      className="w-16 h-16 mb-4"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="text-purple-600 fill-current"
        width="64"
        height="64"
        rx="32"
      />
      <g
        transform="translate(21 21)"
        strokeLinecap="square"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <ellipse
          className="text-purple-300 stroke-current"
          cx="11"
          cy="11"
          rx="5.5"
          ry="11"
        />
        <path className="text-purple-100 stroke-current" d="M11 0v22M0 11h22" />
        <circle
          className="text-purple-100 stroke-current"
          cx="11"
          cy="11"
          r="11"
        />
      </g>
    </svg>,
    <svg
      className="w-16 h-16 mb-4"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="text-purple-600 fill-current"
        width="64"
        height="64"
        rx="32"
      />
      <g
        transform="translate(22 21)"
        strokeLinecap="square"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <path
          className="text-purple-100 stroke-current"
          d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"
        />
        <circle
          className="text-purple-300 stroke-current"
          cx="13"
          cy="9"
          r="3"
        />
      </g>
    </svg>,
    <svg
      className="w-16 h-16 mb-4"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="text-purple-600 fill-current"
        width="64"
        height="64"
        rx="32"
      />
      <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
        <path
          className="text-purple-100 stroke-current"
          d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"
        />
        <path className="text-purple-300 stroke-current" d="M22 30h4v12h-4z" />
      </g>
    </svg>,
    <svg
      className="w-16 h-16 mb-4"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="text-purple-600 fill-current"
        width="64"
        height="64"
        rx="32"
      />
      <g
        transform="translate(21 22)"
        strokeLinecap="square"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <path
          className="text-purple-300 stroke-current"
          d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
        />
        <circle
          className="text-purple-300 stroke-current"
          cx="17"
          cy="5"
          r="3"
        />
        <path
          className="text-purple-100 stroke-current"
          d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
        />
      </g>
    </svg>,
  ];

  const cards = [
    {
      title: '团队1',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      icon: iconList[0],
    },
    {
      title: '团队2',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      icon: iconList[1],
    },
    {
      title: '团队3',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      icon: iconList[2],
    },
    {
      title: '团队4',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      icon: iconList[3],
    },
    {
      title: '团队5',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      icon: iconList[4],
    },
    {
      title: '团队6',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      icon: iconList[5],
    },
  ];

  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">团队介绍</h2>
            <p className="text-xl text-gray-400">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>

          {/* Items */}
          <div
            className="grid items-start max-w-sm gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {cards.map(({ title, description, icon }, index) => (
              <TeamCard
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
}

export default FeaturesBlocks;

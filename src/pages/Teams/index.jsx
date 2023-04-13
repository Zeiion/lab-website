import React from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';

import { parseTeamList } from '~/consts/teamList';
import { useRequest } from '~/utils/useRequest';
import { getTeamList } from '~/request/team';

const teamList = parseTeamList();
const Teams = () => {
  const { data: teamList = [] } = useRequest(() => getTeamList(), []);
  return (
    <PageTemplate title={'合作团队'} subTitle={'Collaborative Team'}>
      {teamList && teamList.length > 0 && (
        <>
          <div className="mt-10">
            <HCard
              title={teamList[0].title}
              description={teamList[0].description}
              imgSrc={teamList[0].imgSrc}
              tags={teamList[0].tags}
              author={teamList[0].author}
              authorImgSrc={teamList[0].authorImgSrc}
              date={teamList[0].date}
              href={teamList[0].href}
            />
          </div>
          <VCardList title="ALL TEAMS" list={teamList.slice(1)}></VCardList>
        </>
      )}
    </PageTemplate>
  );
};

export default Teams;

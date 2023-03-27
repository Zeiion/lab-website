import React from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';

import { parseInsList } from '~/consts/insList';

const insList = parseInsList();
const InsPage = () => {
  return (
    <PageTemplate title={'机构概览'} subTitle={'Institution Overview'}>
      {insList && insList.length > 0 && (
        <>
          <div className="mt-10">
            <HCard
              title={insList[0].title}
              description={insList[0].description}
              imgSrc={insList[0].imgSrc}
              tags={insList[0].tags}
              author={insList[0].author}
              authorImgSrc={insList[0].authorImgSrc}
              date={insList[0].date}
              href={insList[0].href}
            />
          </div>
          <VCardList
            title="ALL INSTITUTIONS"
            list={insList.slice(1)}
          ></VCardList>
        </>
      )}
    </PageTemplate>
  );
};

export default InsPage;

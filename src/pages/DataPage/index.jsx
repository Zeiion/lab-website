import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';

import { parseDataList } from '~/consts/dataList';
const dataList = parseDataList();
const DataPage = () => {
  // useEffect(() => {
  //   fetch('/feiyun/api/data/all').then((res) => {
  //     console.log(res, res.body);
  //   });
  // }, []);
  return (
    <PageTemplate title={'数据共享'} subTitle={'Models'}>
      {dataList && dataList.length > 0 && (
        <>
          <div className="mt-10">
            <HCard
              title={dataList[0].title}
              description={dataList[0].description}
              imgSrc={dataList[0].imgSrc}
              tags={dataList[0].tags}
              author={dataList[0].author}
              authorImgSrc={dataList[0].authorImgSrc}
              date={dataList[0].date}
              href={dataList[0].href}
            />
          </div>
          <VCardList title="Models" list={dataList.slice(1)}></VCardList>
        </>
      )}
    </PageTemplate>
  );
};

export default DataPage;

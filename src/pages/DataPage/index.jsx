import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';

import { parseDataList } from '~/consts/dataList';
const fullDataList = parseDataList();
const DataPage = () => {
  // useEffect(() => {
  //   fetch('/feiyun/api/data/all').then((res) => {
  //     console.log(res, res.body);
  //   });
  // }, []);
  const [keyword, setKeyword] = useState('');
  const dataList = fullDataList.filter((item) => {
    const lower = keyword.toLowerCase();
    return item.title.toLowerCase().match(lower) || item.description.toLowerCase().match(lower) 
    || item.tags.join(',').toLowerCase().match(lower) || item.author.toLowerCase().match(lower)
    || item.source.toLowerCase().match(lower);
  });
  const handleOnChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <PageTemplate title={'数据共享'} subTitle={'Models'}>
      <input type="text" className="form-input mb-10" placeholder="输入关键词" value={keyword} onChange={handleOnChange}></input>
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

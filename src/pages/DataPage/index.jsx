import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';

import { parseDataList } from '~/consts/dataList';
import { useRequest } from '~/utils/useRequest';
import { getDataList } from '../../request/data';

const DataPage = () => {
  const { data: fullDataList } = useRequest(
    () => getDataList(),
    [],
    (list) => {
      return list.map((item) => ({
        ...item,
        href: '/data/' + item.id,
        action: (
          <a
            href={'/datause/' + item.id}
            target="_blank"
            className="absolute top-0 right-0 px-3 py-1 text-sm font-bold text-white transition duration-200 bg-purple-700 border-2 border-purple-600 cursor-pointer hover:bg-purple-800 hover:text-gray-200"
          >
            数据使用
          </a>
        ),
      }));
    },
  );
  const [keyword, setKeyword] = useState('');
  const dataList = useMemo(() => {
    return fullDataList?.filter((item) => {
      const lower = keyword.toLowerCase();
      return (
        item.title?.toLowerCase().match(lower) ||
        item.description?.toLowerCase().match(lower) ||
        item.tags?.join(',').toLowerCase().match(lower) ||
        item.author?.toLowerCase().match(lower) ||
        item.source?.toLowerCase().match(lower)
      );
    });
  }, [fullDataList, keyword]);
  const handleOnChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <PageTemplate title={'数据共享'} subTitle={'Models'}>
      <input
        type="text"
        className="mb-10 form-input"
        placeholder="输入关键词"
        value={keyword}
        onChange={handleOnChange}
      ></input>
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

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';
import CardWall from '~/components/CardWall';
import IconCard from '~/components/IconCard';
import { parseModelList } from '~/consts/modelList';
import { useRequest } from '../../utils/useRequest';
import { getModelList } from '../../request/model';
import { getAuthorImgSrc } from '../../utils/GetRandomPic';

const dealAuthorName = (name) => {
  if (name.substr(-2, 2) == '大学' || name.substr(-1, 1) == '所')
    name += '交通大数据组';
  return name;
}
const Models = () => {
  const [keyword, setKeyword] = useState('');
  const { data: fullModels = [] } = useRequest(
    () => getModelList(),
    [],
    (list) => {
      return list.map((item, index) => {
        return {
          ...item,
          href: `/model/${item.id}`,
          authorImgSrc: getAuthorImgSrc(item.author),
          author: dealAuthorName(item.author),
        };
      });
    },
  );
  const models = useMemo(() => {
    return fullModels?.filter((item) => {
      const lower = keyword.toLowerCase();
      return (
        item.title?.toLowerCase().match(lower) ||
        item.description?.toLowerCase().match(lower) ||
        item.tags?.join(',').toLowerCase().match(lower) ||
        item.author?.toLowerCase().match(lower) ||
        item.source?.toLowerCase().match(lower)
      );
    });
  }, [fullModels, keyword]);
  const handleOnChange = (e) => {
    setKeyword(e.target.value);
  };
  const headerInput = (
    <input
      type="text"
      className="form-input"
      placeholder="输入关键词"
      value={keyword}
      onChange={handleOnChange}
    ></input>
  );
  return (
    <PageTemplate title={'知识协同'} subTitle={'Models'}>
      <CardWall
        list={[
          {
            children: fullModels?.map(
              (
                {
                  title,
                  description,
                  imgSrc,
                  tags,
                  author,
                  authorImgSrc,
                  date,
                  href,
                  source,
                },
                index,
              ) => (
                <IconCard
                  title={title}
                  description={description}
                  imgSrc={authorImgSrc}
                  tags={tags}
                  author={author}
                  source={source}
                  authorImgSrc={authorImgSrc}
                  date={date}
                  key={index}
                  href={href}
                />
              ),
            ),
            reverse: false,
          },
          {
            children: fullModels?.map(
              (
                {
                  title,
                  description,
                  imgSrc,
                  tags,
                  author,
                  authorImgSrc,
                  date,
                  href,
                  source,
                },
                index,
              ) => (
                <IconCard
                  title={title}
                  description={description}
                  imgSrc={authorImgSrc}
                  tags={tags}
                  author={author}
                  source={source}
                  authorImgSrc={authorImgSrc}
                  date={date}
                  key={index}
                  href={href}
                />
              ),
            ),
            reverse: true,
          },
        ]}
      />
      {fullModels && (
        <>
          <div className="mt-10"></div>
          <VCardList
            title="Models"
            list={models}
            headerInput={headerInput}
          ></VCardList>
        </>
      )}
    </PageTemplate>
  );
};

export default Models;

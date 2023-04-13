import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HCard from '~/components/HCard';
import VCard from '~/components/VCard';
import PageTemplate from '~/components/PageTemplate';
import VCardList from '~/components/VCardList';
import CardWall from '~/components/CardWall';
import IconCard from '~/components/IconCard';
import { parseModelList } from '~/consts/modelList';
const fullModels = parseModelList();

const Models = () => {
  const [keyword, setKeyword] = useState('');
  const models = fullModels.filter((item) => {
    const lower = keyword.toLowerCase();
    return item.title.toLowerCase().match(lower) || item.description.toLowerCase().match(lower)
    || item.tags.join(',').toLowerCase().match(lower) || item.author.toLowerCase().match(lower)
    || item.source.toLowerCase().match(lower);
  });
  const handleOnChange = (e) => {
    setKeyword(e.target.value);
  };
  const headerInput = (
    <input type="text" className="form-input" placeholder="输入关键词" value={keyword} onChange={handleOnChange}></input>
  )
  return (
    <PageTemplate title={'典型模型'} subTitle={'Models'}>
      <CardWall
        list={[
          {
            children: fullModels.map(
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
            children: fullModels.map(
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
          <VCardList title="Models" list={models} headerInput={headerInput}></VCardList>
        </>
      )}
    </PageTemplate>
  );
};

export default Models;

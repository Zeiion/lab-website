import VCard from '~/components/VCard';
import TagFilterList from '~/components/TagFilterList';
import { useMemo, useState } from 'react';

const VCardList = ({ title, list, headerInput }) => {
  const tags = list.map((item) => item.tags).flat(2);
  const [uniqueTags, setUniqueTags] = useState(
    [...new Set(tags)].map((text) => {
      return {
        text,
        active: true,
      };
    }),
  );
  const computedList = useMemo(() => {
    return list.filter((item) => {
      const activeTags = uniqueTags
        .filter((tag) => tag.active)
        .map((tag) => tag.text);
      return item.tags.some((tag) => activeTags.includes(tag));
    });
  }, [uniqueTags, list]);

  return (
    <>
      <div
        className="flex flex-col items-center justify-between gap-3 pb-6 mt-16 mb-8 border-b-2 border-gray-700 aos-init aos-animate md:flex-row"
        data-aos="fade-up"
      >
        <h4 className="h4">{title}</h4>
        {headerInput}
        <div>
          <TagFilterList
            list={uniqueTags}
            callback={(tag) => {
              const newTags = uniqueTags.map((item) => {
                if (item.text === tag) {
                  return {
                    ...item,
                    active: !item.active,
                  };
                }
                return item;
              });
              setUniqueTags(newTags);
            }}
          />
        </div>
      </div>
      <div className="grid items-start w-full md:grid-cols-3 md:gap-x-6 md:gap-y-8 gap-y-5">
        {computedList.map(
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
              action = null,
            },
            index,
          ) => (
            <VCard
              title={title}
              description={description}
              imgSrc={imgSrc}
              tags={tags}
              author={author}
              authorImgSrc={authorImgSrc}
              date={date}
              key={index}
              href={href}
              action={action}
            />
          ),
        )}
      </div>
    </>
  );
};

export default VCardList;

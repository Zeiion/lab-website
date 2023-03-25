import VCard from '~/components/VCard';

const VCardList = ({ title, list }) => {
  return (
    <>
      <h4
        className="pb-6 mt-16 mb-8 border-b-2 border-gray-700 aos-init aos-animate h4"
        data-aos="fade-up"
      >
        {title}
      </h4>
      <div className="grid items-start w-full md:grid-cols-3 md:gap-x-6 md:gap-y-8 gap-y-5">
        {list.map(
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
            />
          ),
        )}
      </div>
    </>
  );
};

export default VCardList;

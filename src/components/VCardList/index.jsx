import VCard from '~/components/VCard';

const VCardList = ({ title, list }) => {
  return (
    <>
      <h4
        class="aos-init aos-animate border-b-2 pb-6 h4 mb-8 mt-16 border-gray-700"
        data-aos="fade-up"
      >
        {title}
      </h4>
      <div className="grid items-start w-full md:grid-cols-3 md:gap-x-6 md:gap-y-8 gap-y-5">
        {list.map(
          (
            { title, description, imgSrc, tags, author, authorImgSrc, date },
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
            />
          ),
        )}
      </div>
    </>
  );
};

export default VCardList;

import PropTypes from 'prop-types';
import TagList from '~/components/TagList';

const VCard = ({
  title,
  description,
  imgSrc,
  href,
  tags = [],
  author,
  authorImgSrc,
  date,
}) => {
  // TODO style
  const tagClassList = [
    'bg-purple-600 hover:bg-purple-700',
    'bg-blue-500 hover:bg-blue-600',
  ];

  return (
    <section
      className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 max-w-sm"
      data-aos="fade-up"
    >
      <div className="mx-auto h-full flex flex-col">
        <a className="relative block group mb-6" href={href}>
          <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform transition duration-700 ease-out">
            <img
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
              src={imgSrc}
              width="540"
              height="303"
              alt="Blog post"
            />
          </figure>
        </a>
        <div>
          <header>
            <div className="mb-3">
              <TagList list={tags} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold leading-tight mb-2">
              <a
                className="hover:text-gray-100 transition duration-150 ease-in-out"
                href="#0"
              >
                {title}
              </a>
            </h3>
          </header>
          <p className="text-lg text-gray-400 flex-grow">{description}</p>
          <footer className="flex items-center mt-4">
            <a href="#0">
              <img
                className="rounded-full flex-shrink-0 mr-4"
                src={authorImgSrc}
                width="40"
                height="40"
                alt="Author 04"
              />
            </a>
            <div>
              <a
                className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                href="#0"
              >
                {author}
              </a>
              <span className="text-gray-700"> - </span>
              <span className="text-gray-500">{date}</span>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default VCard;

VCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

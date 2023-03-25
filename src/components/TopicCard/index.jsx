import PropTypes from 'prop-types';

const TopicCard = ({
  imgSrc,
  slogan,
  title,
  description,
  list,
  index,
  href,
}) => {
  const dataAos = index % 2 === 0 ? 'fade-left' : 'fade-right';
  const direction = index % 2 === 0 ? 'rtl' : 'md:order-1';
  const contentClass =
    index % 2 === 0 ? 'md:pl-4 lg:pl-12 xl:pl-16' : 'md:pr-4 lg:pr-12 xl:pr-16';
  return (
    <div className="items-center md:grid md:grid-cols-12 md:gap-6">
      {/* Image */}
      <div
        className={
          'max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 ' +
          direction
        }
        data-aos="fade-up"
      >
        <img
          className="h-auto max-w-full mx-auto md:max-w-none"
          src={imgSrc}
          width="540"
          height="405"
          alt="Features 01"
        />
      </div>
      {/* Content */}
      <div
        className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6"
        data-aos={dataAos}
      >
        <div className={contentClass}>
          <div className="mb-2 text-xl text-purple-600 font-architects-daughter">
            {slogan}
          </div>
          <a className="h3" href={href}>
            {title}
          </a>
          <p className="mt-3 mb-4 text-xl text-gray-400">{description}</p>
          <ul className="-mb-2 text-lg text-gray-400">
            {list.map(({ text }) => (
              <li className="flex items-center mb-2" key={text}>
                <svg
                  className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;

TopicCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  ),
  href: PropTypes.string,
};

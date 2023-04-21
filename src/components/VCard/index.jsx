import PropTypes from 'prop-types';
import TagList from '~/components/TagList';
import Tag from '../Tag';
import './index.scss';

const VCard = ({
  title = '',
  description = '',
  imgSrc = '',
  href = '',
  tags = [],
  author = '',
  authorImgSrc = '',
  date = '',
  action = null,
  withButton = false,
}) => {
  return (
    <div className="vcard">
      <section
        className="flex flex-col justify-center max-w-sm antialiased text-gray-200 bg-gray-900"
        data-aos="fade-up"
      >
        <div className="relative flex flex-col w-full h-full mx-auto">
          <a className="relative block mb-6 group" href={href}>
            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform transition duration-700 ease-out">
              <img
                className="absolute inset-0 object-cover w-full h-64 transition duration-700 ease-out transform hover:scale-105"
                src={imgSrc}
                alt="-"
              />
            </figure>
          </a>
          <div>
            <header>
              <div className="mb-3">
                <TagList list={tags} />
                {action && <>{action}</>}
              </div>
              <h3 className="mb-2 overflow-hidden text-xl font-bold leading-tight lg:text-2xl text-ellipsis whitespace-nowrap">
                <a
                  className="transition duration-150 ease-in-out hover:text-gray-100 "
                  href={href}
                >
                  {title}
                </a>
              </h3>
            </header>
            <p className="flex-grow h-48 overflow-auto text-lg text-gray-400">
              {description}
            </p>
            <footer className="flex items-center mt-4">
              {withButton ? (
                <button className="text-lg btn">
                  <a href={href}>
                    <span>查 看</span>
                  </a>
                </button>
              ) : (
                <>
                  <a href="#0">
                      <img
                        className="flex-shrink-0 mr-4 rounded-full"
                        src={authorImgSrc}
                        width="40"
                        height="40"
                        alt="Author 04"
                      />
                    </a>
                  <a
                    className="font-medium text-gray-200 transition duration-150 ease-in-out hover:text-gray-100"
                    href="#0"
                  >
                    {author}
                  </a>
                  <span className="ml-1 mr-1 text-gray-700"> - </span>
                </>
              )}
              <span className="text-gray-500">{date}</span>
            </footer>
          </div>
        </div>
      </section>
    </div>
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

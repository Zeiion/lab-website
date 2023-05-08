import PropTypes from 'prop-types';
import TagList from '~/components/TagList';
import './index.scss';
import { FaQuoteRight, FaDownload } from 'react-icons/fa';

const HCard = ({
  title = '',
  description = '',
  imgSrc = '',
  href = '#0',
  tags = [],
  author = '',
  authorImgSrc = '',
  date = '',
  withButton = false,
  onlineHref = '',
  quoteCount = Math.ceil(Math.random() * 10),
  downloadCount = Math.ceil(Math.random() * 300 + 100),
}) => {
  return (
    <div className="h-card">
      <section
        className="flex flex-col justify-center antialiased text-gray-200 bg-gray-900"
        data-aos="fade-up"
      >
        <div className="h-full max-w-7xl sm:px-0">
          <article className="grid items-center max-w-sm gap-6 md:max-w-none md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16">
            <a className="relative block group" href={href}>
              <div
                className="absolute inset-0 hidden transition duration-700 ease-out transform bg-gray-800 pointer-events-none md:block md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0"
                aria-hidden="true"
              ></div>
              <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <img
                  className="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105"
                  src={imgSrc}
                  width="540"
                  height="303"
                  alt="-"
                />
              </figure>
            </a>
            <div>
              <header>
                <div className="mb-3">
                  <TagList list={tags} />
                </div>
                <h3 className="mb-2 text-2xl font-bold leading-tight lg:text-3xl">
                  <a
                    className="transition duration-150 ease-in-out hover:text-gray-100"
                    href={href}
                  >
                    {title}
                  </a>
                </h3>
              </header>
              <p className="flex-grow text-lg text-justify text-gray-400">
                {description}
              </p>
              <footer className="flex items-center mt-4">
                {withButton ? (
                  <>
                    <button className="btn">
                      <a href={onlineHref} target="_blank">
                        <span>查 看</span>
                      </a>
                    </button>
                    <span className="ml-1 mr-1 text-gray-100">
                      <FaQuoteRight></FaQuoteRight>
                    </span>
                    <span className="mr-4 text-lg text-gray-200">
                      {quoteCount}
                    </span>
                    <span className="ml-1 mr-1 text-gray-100">
                      <FaDownload />
                    </span>
                    <span className="mr-4 text-lg text-gray-200">
                      {downloadCount}
                    </span>
                  </>
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
                    <div>
                      <a
                        className="font-medium text-gray-200 transition duration-150 ease-in-out hover:text-gray-100"
                        href="#0"
                      >
                        {author}
                      </a>
                    </div>
                    <span className="mx-1 text-gray-700"> - </span>
                  </>
                )}
                <span className="text-gray-500">{date}</span>
              </footer>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HCard;

HCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

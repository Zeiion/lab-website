import PropTypes from 'prop-types';

const HCard = ({
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
    <section class="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
      <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
        <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          <a class="relative block group" href="#0">
            <div
              class="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
              aria-hidden="true"
            ></div>
            <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
              <img
                class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                src={imgSrc}
                width="540"
                height="303"
                alt="Blog post"
              />
            </figure>
          </a>
          <div>
            <header>
              <div class="mb-3">
                <ul class="flex flex-wrap text-xs font-medium -m-1">
                  {tags.map((text, index) => (
                    <li class="m-1">
                      <a
                        class={
                          'inline-flex text-center text-gray-100 py-1 px-3 rounded-full transition duration-150 ease-in-out ' +
                          tagClassList[Math.floor(index % tagClassList.length)]
                        }
                        href="#0"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                <a
                  class="hover:text-gray-100 transition duration-150 ease-in-out"
                  href="#0"
                >
                  {title}
                </a>
              </h3>
            </header>
            <p class="text-lg text-gray-400 flex-grow">{description}</p>
            <footer class="flex items-center mt-4">
              <a href="#0">
                <img
                  class="rounded-full flex-shrink-0 mr-4"
                  src={authorImgSrc}
                  width="40"
                  height="40"
                  alt="Author 04"
                />
              </a>
              <div>
                <a
                  class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                  href="#0"
                >
                  {author}
                </a>
                <span class="text-gray-700"> - </span>
                <span class="text-gray-500">{date}</span>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HCard;

HCard.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

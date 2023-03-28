import PropsType from 'prop-types';

const IconCard = ({ title, description, author = '', source = '', imgSrc }) => {
  return (
    <div
      className="flex flex-col w-[32em] h-full p-6 bg-gray-800"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div>
        <div className="relative inline-flex items-center gap-3 mb-4">
          <img className="rounded-full" src={imgSrc} width="48" height="48" />
          <h4 className="h4">{title}</h4>
        </div>
      </div>
      <blockquote className="text-lg text-gray-400 grow">
        {description}
      </blockquote>
      <div className="pt-5 mt-6 font-medium text-gray-700 border-t border-gray-700">
        <cite className="not-italic text-gray-200">{author}</cite> -{' '}
        <a
          className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
          href="#0"
        >
          {source}
        </a>
      </div>
    </div>
  );
};

export default IconCard;

IconCard.PropsType = {
  description: PropsType.string.isRequired,
  cite: PropsType.string.isRequired,
  source: PropsType.string.isRequired,
  imgSrc: PropsType.string.isRequired,
};

{
  /* <div
className="flex flex-col w-64 h-full p-6 bg-gray-800"
data-aos="fade-up"
data-aos-delay="400"
>
<div>
  <div className="relative inline-flex flex-col mb-4">
    <img
      className="rounded-full"
      src={imgSrc}
      width="48"
      height="48"
      alt="Testimonial 03"
    />
    <svg
      className="absolute top-0 right-0 w-6 h-5 -mr-3 text-purple-600 fill-current"
      viewBox="0 0 24 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
    </svg>
  </div>
</div>
<blockquote className="text-lg text-gray-400 grow">
  {description}
</blockquote>
<div className="pt-5 mt-6 font-medium text-gray-700 border-t border-gray-700">
  <cite className="not-italic text-gray-200">{cite}</cite> -{' '}
  <a
    className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
    href="#0"
  >
    {source}
  </a>
</div>
</div> */
}

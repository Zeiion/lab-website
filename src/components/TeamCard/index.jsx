import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({
  id,
  title,
  icon = (
    <svg
      className="w-16 h-16 mb-4"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="text-purple-600 fill-current"
        width="64"
        height="64"
        rx="32"
      />
      <path
        className="text-purple-100 stroke-current"
        d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
        strokeLinecap="square"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
      <path
        className="text-purple-300 stroke-current"
        d="M43 42h-9M43 37h-9"
        strokeLinecap="square"
        strokeWidth="2"
      />
    </svg>
  ),
  description,
}) => {
  return (
    <div
      className="relative flex flex-col items-center"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-blocks]"
    >
      {icon}
      <Link className="mb-2 h4" to={'/team/' + id}>
        {title}
      </Link>
      <p className="text-lg text-center text-gray-400">{description}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  description: PropTypes.string.isRequired,
};

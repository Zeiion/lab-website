import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderLink = ({ title, href }) => {
  return (
    <Link
      to={href}
      className="flex items-center px-4 py-3 tracking-wider text-gray-200 duration-150 ease-in-out 0 font-mediumtransition hover:text-purple-600"
    >
      {title}
    </Link>
  );
};

export default HeaderLink;

HeaderLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

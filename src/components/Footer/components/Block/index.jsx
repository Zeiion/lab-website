import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Block = ({ list, title }) => {
  return (
    <div className="text-sm">
      <h6 className="mb-1 font-medium text-gray-200">{title}</h6>
      <ul>
        {list.map(({ title, href }) => (
          <li className="mb-1" key={href}>
            <Link
              to={href}
              target="_blank"
              className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Block;

Block.propTypes = {
  list: PropsTypes.arrayOf(
    PropsTypes.shape({
      title: PropsTypes.string,
      href: PropsTypes.string,
    }),
  ),
  title: PropsTypes.string,
};

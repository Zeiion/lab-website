import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TeamCard = ({ id, title, icon, description }) => {
  return (
    <div
      className="relative flex flex-col items-center"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-blocks]"
    >
      <div className="w-16 h-16 mb-4" viewBox="0 0 64 64">
        <img
          src={icon}
          style={{ borderRadius: '32px', width: '64px', height: '64px' }}
        ></img>
      </div>
      <Link className="mb-2 h4" to={'/teams'}>
        {title}
      </Link>
      <p className="text-xl text-justify text-gray-400">{description}</p>
    </div>
  );
};

export default TeamCard;

TeamCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  description: PropTypes.string.isRequired,
};

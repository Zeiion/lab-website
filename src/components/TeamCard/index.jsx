import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TeamCard = ({ id, title, icon, description, showDetail }) => {
  return (
    <div className="relative flex flex-col items-center animate-scale">
      <div className="w-24 h-24 mb-4" viewBox="0 0 64 64">
        <img src={icon} className="w-full h-full rounded-full"></img>
      </div>
      <Link className="mb-4 h4" to={'/teams'}>
        {title}
      </Link>
      { showDetail && <p className="text-xl text-justify text-gray-400 para">{description}</p>}
    </div>
  );
};

export default TeamCard;

TeamCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

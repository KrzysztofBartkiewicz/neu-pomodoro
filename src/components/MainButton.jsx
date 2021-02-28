import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const MainButton = ({ icon, onClick }) => {
  let displayIcon;
  if (icon === 'run') {
    displayIcon = faPlay;
  } else if (icon === 'pause') {
    displayIcon = faPause;
  } else {
    throw new Error('You must declare icon in MainButton component');
  }
  return (
    <button className="main-button" onClick={onClick}>
      <FontAwesomeIcon className="main-button__icon" icon={displayIcon} />
    </button>
  );
};

export default MainButton;

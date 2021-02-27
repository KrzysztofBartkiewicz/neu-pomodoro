import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVolumeUp,
  faVolumeMute,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

const MenuButton = ({ icon }) => {
  let displayIcon;
  if (icon === 'volumeUp') {
    displayIcon = faVolumeUp;
  } else if (icon === 'volumeMute') {
    displayIcon = faVolumeMute;
  } else if (icon === 'settings') {
    displayIcon = faCog;
  } else {
    throw new Error('You must declare icon in MenuButton component');
  }
  return (
    <button className="menu-button">
      <FontAwesomeIcon className="menu-button__icon" icon={displayIcon} />
    </button>
  );
};

export default MenuButton;

import MenuButton from './MenuButton';

const Header = ({ onSettingsClick, isSettingsClicked }) => {
  return (
    <header className="header">
      <MenuButton icon={'volumeUp'} />
      <h1 className="header__heading">Pomodoro</h1>
      <MenuButton
        icon={isSettingsClicked ? 'app' : 'settings'}
        onClick={onSettingsClick}
      />
    </header>
  );
};

export default Header;

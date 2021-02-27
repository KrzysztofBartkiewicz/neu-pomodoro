import MenuButton from './MenuButton';

const Header = () => {
  return (
    <header className="header">
      <MenuButton icon={'volumeUp'} />
      <h1 className="header__heading">Pomodoro</h1>
      <MenuButton icon={'settings'} />
    </header>
  );
}

export default Header;
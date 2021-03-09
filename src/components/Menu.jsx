const Menu = ({ children, handleReset }) => {
  return (
    <div className="menu">
      <h2 className="menu__heading">Menu</h2>
      {children}
      <button onClick={handleReset} className="menu__reset">
        Reset defaults
      </button>
    </div>
  );
};

export default Menu;

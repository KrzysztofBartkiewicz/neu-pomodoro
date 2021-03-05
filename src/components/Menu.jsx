import MenuItemRange from './MenuItemRange';

const Menu = ({
  focusValue,
  setFocusValue,
  shortBrakeValue,
  setShortBrakeValue,
  longBrakeValue,
  setLongBrakeValue,
  handleReset
}) => {  
  return (
    <div className="menu">
      <h2 className="menu__heading">Menu</h2>
      <MenuItemRange
        values={focusValue}
        setValues={setFocusValue}
        label={'Focus'}
        trackColor={'#3e98c7'}
        
      />
      <MenuItemRange
        values={shortBrakeValue}
        setValues={setShortBrakeValue}
        label={'Short brake'}
        trackColor={'#FFAA5C'}
      />
      <MenuItemRange
        values={longBrakeValue}
        setValues={setLongBrakeValue}
        label={'Long brake'}
        trackColor={'#61b15a'}
      />
      <button onClick={handleReset} className="menu__reset">Reset defaults</button>
    </div>
  );
};

export default Menu;

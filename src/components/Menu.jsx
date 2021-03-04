import MenuItemRange from './MenuItemRange';

const Menu = ({
  focusValue,
  setFocusValue,
  shortBrakeValue,
  setShortBrakeValue,
  longBrakeValue,
  setLongBrakeValue,
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
    </div>
  );
};

export default Menu;

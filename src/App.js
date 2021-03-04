import { useState, useEffect } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Menu from './components/Menu';

function App() {
  const [focusValue, setFocusValue] = useState([1]);
  const [shortBrakeValue, setShortBrakeValue] = useState([1]);
  const [longBrakeValue, setLongBrakeValue] = useState([1]);
  const [isSettingsClicked, setIsSettingsClicked] = useState(false);

  const handleSettingsClick = () => {
    if (isSettingsClicked) {
      setIsSettingsClicked(false);
    } else {
      setIsSettingsClicked(true);
    }
  };

  return (
    <div className="app">
      <Header
        onSettingsClick={handleSettingsClick}
        isSettingsClicked={isSettingsClicked}
      />
      {isSettingsClicked ? (
        <Menu
          focusValue={focusValue}
          setFocusValue={setFocusValue}
          shortBrakeValue={shortBrakeValue}
          setShortBrakeValue={setShortBrakeValue}
          longBrakeValue={longBrakeValue}
          setLongBrakeValue={setLongBrakeValue}
        />
      ) : (
        <Timer />
      )}
    </div>
  );
}

export default App;

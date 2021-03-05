import { useState } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Menu from './components/Menu';

function App() {
  const [focusValue, setFocusValue] = useState([25]);
  const [shortBrakeValue, setShortBrakeValue] = useState([5]);
  const [longBrakeValue, setLongBrakeValue] = useState([15]);
  const [isSettingsClicked, setSettingsClick] = useState(false);

  const handleSettingsClick = () => {
    if (isSettingsClicked) {
      setSettingsClick(false);
    } else {
      setSettingsClick(true);
    }
  };

  const handleReset = () => {
    setFocusValue([25]);
    setShortBrakeValue([5]);
    setLongBrakeValue([15]);
  }

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
          handleReset={handleReset}
        />
      ) : (
        <Timer
          focusTime={focusValue[0] * 60000}
          shortBrakeTime={shortBrakeValue[0] * 60000}
          longBrakeTime={longBrakeValue[0] * 60000}
        />
      )}
    </div>
  );
}

export default App;

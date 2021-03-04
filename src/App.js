import { useState, useEffect } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Menu from './components/Menu';

function App() {
  const [focusValue, setFocusValue] = useState([1]);
  const [shortBrakeValue, setShortBrakeValue] = useState([1]);
  const [longBrakeValue, setLongBrakeValue] = useState([1]);

  return (
    <div className="app">
      <Header />
      
      <Menu
        focusValue={focusValue}
        setFocusValue={setFocusValue}
        shortBrakeValue={shortBrakeValue}
        setShortBrakeValue={setShortBrakeValue}
        longBrakeValue={longBrakeValue}
        setLongBrakeValue={setLongBrakeValue}
      />
    </div>
  );
}

export default App;

import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import CustomCircularProgressbar from './components/CustomCircularProgressbar';
import MainButton from './components/MainButton';

const focusTime = 10000;
const shortBrakeTime = 5000;
const longBrakeTime = 8000;

function capitalize(word) {
  return word.charAt(0).toUpperCase().concat(word.slice(1, word.length));
}

function App() {
  const timerRef = useRef();
  const [time, setTime] = useState({
    total: focusTime,
    remaining: focusTime,
  });
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState('focus');
  const [isPaused, setIsPaused] = useState(true);
  const [barColor, setBarColor] = useState('#612ff5');

  const preserveRemainingTime = () => {
    const timerApi = timerRef.current;
    setTime({ ...time, remaining: timerApi.state.timeDelta.total });
  };

  const handleClick = () => {
    if (isPaused) {
      preserveRemainingTime();
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  };

  const handleCountdownCopmlete = () => {
    setTimeout(() => {
      setStep(step + 1);
    }, 1000);
  };

  useEffect(() => {
    const timerApi = timerRef.current;
    if (isPaused) {
      timerApi.pause();
    } else {
      timerApi.start();
    }
  }, [isPaused, step]);

  useEffect(() => {
    if (step % 2 === 0) {
      if (step % 8 === 0) {
        setMode('long brake');
      } else {
        setMode('short brake');
      }
    } else {
      setMode('focus');
    }
  }, [step]);

  useEffect(() => {
    if (mode === 'focus') {
      setTime({ total: focusTime, remaining: focusTime });
    } else if (mode === 'short brake') {
      setTime({ total: shortBrakeTime, remaining: shortBrakeTime });
    } else if (mode === 'long brake') {
      setTime({ total: longBrakeTime, remaining: longBrakeTime });
    }
    
    if (mode === 'focus') {
      setBarColor('#612ff5');
    } else {
      setBarColor('#ffaa5c');
    }
  }, [mode]);
  
  return (
    <div className="app">
      <Header />
      <CustomCircularProgressbar
        pathColor={barColor}
        remainingTime={time.remaining}
        totalTime={time.total}
        onComplete={handleCountdownCopmlete}
        coundownRef={timerRef}
      />
      <span className="app__info">{capitalize(mode)}</span>
      <MainButton onClick={handleClick} icon={isPaused ? 'run' : 'pause'} />
    </div>
  );
}

export default App;

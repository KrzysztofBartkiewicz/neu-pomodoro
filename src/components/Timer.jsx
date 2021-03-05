import React, { useRef, useState, useEffect } from 'react';
import CustomCircularProgressbar from './CustomCircularProgressbar';
import MainButton from './MainButton';

function capitalize(word) {
  return word.charAt(0).toUpperCase().concat(word.slice(1, word.length));
}

function Timer({ focusTime, shortBrakeTime, longBrakeTime }) {
  const timerRef = useRef();
  const [time, setTime] = useState({
    total: focusTime,
    remaining: focusTime,
  });
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState('focus');
  const [isPaused, setPause] = useState(true);
  const [barColor, setBarColor] = useState('#612ff5');

  const preserveRemainingTime = () => {
    const timerApi = timerRef.current;
    setTime({ ...time, remaining: timerApi.state.timeDelta.total });
  };

  const handleClick = () => {
    if (isPaused) {
      preserveRemainingTime();
      setPause(false);
    } else {
      setPause(true);
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
      setBarColor('#612ff5');
    } else if (mode === 'short brake') {
      setTime({ total: shortBrakeTime, remaining: shortBrakeTime });
      setBarColor('#ffaa5c');
    } else if (mode === 'long brake') {
      setTime({ total: longBrakeTime, remaining: longBrakeTime });
      setBarColor('#61b15a');
    }
  }, [mode, focusTime, shortBrakeTime, longBrakeTime]);
  
  return (
    <div className="timer">
      <CustomCircularProgressbar
        pathColor={barColor}
        remainingTime={time.remaining}
        totalTime={time.total}
        onComplete={handleCountdownCopmlete}
        coundownRef={timerRef}
      />
      <span className="timer__info">{capitalize(mode)}</span>
      <MainButton onClick={handleClick} icon={isPaused ? 'run' : 'pause'} />
    </div>
  );
}

export default Timer;
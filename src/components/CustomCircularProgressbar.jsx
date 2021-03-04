import { useEffect } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Countdown from 'react-countdown';

const CustomCircularProgressbar = ({
  remainingTime,
  totalTime,
  onComplete,
  pathColor,
  coundownRef,
}) => {
  const renderer = ({ hours, minutes, seconds, milliseconds }) => (
    <div className="custom-circular-progressbar">
      <div className="custom-circular-progressbar__wrapper">
        <CircularProgressbarWithChildren
          value={
            milliseconds + seconds * 1000 + minutes * 60000 + hours * 3600000
          }
          maxValue={totalTime}
          styles={{
            path: {
              stroke: pathColor,
            },
          }}
        >
          <span className="custom-circular-progressbar__time">
            {`${hours * 60 + minutes}:${seconds}`}
          </span>
          <span className="custom-circular-progressbar__info">
            {minutes < 1 ? 'seconds' : 'minutes'}
          </span>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );

  useEffect(() => {
    console.log(remainingTime) 
  })

  return (
    <Countdown
      date={Date.now() + remainingTime}
      autoStart={false}
      intervalDelay={100}
      precision={3}
      onComplete={onComplete}
      renderer={renderer}
      ref={coundownRef}
    />
  );
};

export default CustomCircularProgressbar;

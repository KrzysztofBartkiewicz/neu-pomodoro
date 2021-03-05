import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Countdown from 'react-countdown';

const CustomCircularProgressbar = ({
  remainingTime,
  totalTime,
  onComplete,
  pathColor,
  coundownRef,
}) => {
  const renderer = ({ hours, minutes, seconds }) => (
    <div className="custom-circular-progressbar">
      <div className="custom-circular-progressbar__wrapper">
        <CircularProgressbarWithChildren
          value={minutes * 60 + seconds}
          maxValue={totalTime / 1000}
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

  return (
    <Countdown
      date={Date.now() + remainingTime}
      autoStart={false}
      intervalDelay={1000}
      onComplete={onComplete}
      renderer={renderer}
      ref={coundownRef}
    />
  );
};

export default CustomCircularProgressbar;

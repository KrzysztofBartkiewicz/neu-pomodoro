import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Countdown, { zeroPad } from 'react-countdown';

const CustomCircularProgressbar = ({
  remainingTime,
  totalTime,
  onComplete,
  pathColor,
  coundownRef,
}) => {
  const renderer = ({ hours, minutes, seconds, api }) => (
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
            {`${hours * 60 + minutes}:${zeroPad(seconds)}`}
          </span>
          <span className="custom-circular-progressbar__info">
            {api.isPaused() ? 'Pasued' : ''}
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

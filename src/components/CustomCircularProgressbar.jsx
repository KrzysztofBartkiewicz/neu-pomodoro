import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Countdown from 'react-countdown';

const CustomCircularProgressbar = ({
  remainingTime,
  totalTime,
  onComplete,
  coundownRef,
}) => {
  const renderer = ({ minutes, seconds, milliseconds }) => (
    <div className="custom-circular-progressbar">
      <div className="custom-circular-progressbar__wrapper">
        <CircularProgressbarWithChildren
          value={milliseconds + seconds * 1000 + minutes * 60000}
          maxValue={totalTime}
        >
          <span className="custom-circular-progressbar__time">
            {minutes < 1 ? seconds : minutes}
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
      intervalDelay={100}
      precision={3}
      onComplete={onComplete}
      renderer={renderer}
      ref={coundownRef}
    />
  );
};

export default CustomCircularProgressbar;

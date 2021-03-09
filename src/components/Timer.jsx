import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { zeroPad } from 'react-countdown';

const Timer = ({ hours, minutes, seconds, api, props }) => {
  return (
    <div className="timer">
      <div className="timer__inner">
        <CircularProgressbarWithChildren
          value={minutes * 60 + seconds}
          maxValue={props.totalTimeSec}
          styles={{
            path: {
              stroke: props.pathColor,
            },
          }}
        >
          <span className="timer__time">
            {`${hours * 60 + minutes}:${zeroPad(seconds)}`}
          </span>
          <span className="timer__info">
            {api.isPaused() ? 'Pasued' : ''}
          </span>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}

export default Timer;

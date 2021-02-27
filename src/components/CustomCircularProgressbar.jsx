import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

const CustomCircularProgressbar = () => {
  const value = 0.66;
  return (
    <div className="custom-circular-progressbar">
      <div className="custom-circular-progressbar__wrapper">
        <CircularProgressbarWithChildren
          value={value}
          maxValue={1}
        >
          <span className="custom-circular-progressbar__time">20</span>
          <span className="custom-circular-progressbar__info">minutes</span>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default CustomCircularProgressbar;

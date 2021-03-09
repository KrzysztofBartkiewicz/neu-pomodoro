import { Range, getTrackBackground } from 'react-range';

const MIN = 1;
const MAX = 90;
const STEP = 1;

const MenuItemRange = ({ label, trackColor, value, setValue }) => {  
  return (
    <div className="menu-item-range">
      <h3 className="menu-item-range__label">{label}</h3>
      <span className="menu-item-range__value">{`${value[0]} : 00`}</span>
      <Range
        min={MIN}
        max={MAX}
        step={STEP}
        values={value}
        onChange={(value) => setValue(value)}
        renderTrack={({ props, children }) => (
          <div
            className="menu-item-range__track-outer"
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
          >
            <div
              className="menu-item-range__track"
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values: value,
                  min: MIN,
                  max: MAX,
                  colors: [trackColor, '#323754'],
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className="menu-item-range__thumb" />
        )}
      />
    </div>
  );
};

export default MenuItemRange;

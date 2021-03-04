import { useState, useEffect, useRef } from 'react';
import { Range, getTrackBackground } from 'react-range';

const MIN = 1;
const MAX = 90;
const STEP = 1;

const MenuItemRange = ({ label, trackColor, values, setValues }) => {
  return (
    <div className="menu-item-range">
      <h3 className="menu-item-range__label">{label}</h3>
      <span className="menu-item-range__value">{`${values[0]} : 00`}</span>
      <Range
        min={MIN}
        max={MAX}
        step={STEP}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="menu-item-range__track"
            style={{
              background: getTrackBackground({
                values,
                min: MIN,
                max: MAX,
                colors: [trackColor, '#323754'],
              }),
            }}
          >
            {children}
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

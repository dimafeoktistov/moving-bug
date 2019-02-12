import React from 'react';
import PropTypes from 'prop-types';

import './speed-control.css';

const SpeedControl = ({
  speed, handleSpeedIncrease, handleSpeedDecrease, ...props
}) => (
  <div className="speed-control" {...props}>
      Уровень скорости
    <div className="button-group">
      <button type="button" disabled={speed === 10} onClick={handleSpeedIncrease} className="btn">
          +
      </button>
      {speed}
      <button type="button" disabled={speed === 1} onClick={handleSpeedDecrease} className="btn">
          -
      </button>
    </div>
  </div>
);

SpeedControl.propTypes = {
  speed: PropTypes.number.isRequired,
  handleSpeedDecrease: PropTypes.func.isRequired,
  handleSpeedIncrease: PropTypes.func.isRequired,
};

export default SpeedControl;

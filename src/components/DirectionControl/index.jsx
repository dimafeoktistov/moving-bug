/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './direction-control.css';

const DirectionControl = ({ direction, handleDirectionChange, ...props }) => (
  <div className="direction-control" {...props}>
    {direction ? 'Жук догоняет' : 'Жук убегает'}
    <input type="checkbox" value={direction} id="direction" onClick={handleDirectionChange} />
    <label htmlFor="direction" className="checkbox">
        Направление
    </label>
  </div>
);

DirectionControl.propTypes = {
  direction: PropTypes.bool.isRequired,
  handleDirectionChange: PropTypes.func.isRequired,
};

export default DirectionControl;

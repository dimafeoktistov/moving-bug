/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import './curves-control.css';

const CurvesControl = ({
  d3easing,
  handleD3easingChange,
  easeFunction,
  duration,
  handleEaseFunctionChange,
  handleDurationChange,
  ...props
}) => {
  const options = [
    { label: 'circleIn', value: 'circleIn' },
    { label: 'expIn', value: 'expIn' },
    { label: 'expOut', value: 'expOut' },
    { label: 'bounceIn', value: 'bounceIn' },
    { label: 'bounceOut', value: 'bounceOut' },
    { label: 'elasticOut', value: 'elasticOut' },
  ];

  return (
    <fieldset className="curve-controls" {...props}>
      <legend>Управлять жуком кривыми Безье</legend>

      <div className="function-control">
        Включить кривые Безье
        <input type="checkbox" id="d3easing" value={!d3easing} onChange={handleD3easingChange} />
        <label htmlFor="d3easing" className="checkbox" />
      </div>

      <div className="function-control">
        <label htmlFor="ease-function">Выберите функцию</label>
        <Select
          options={options}
          isDisabled={!d3easing}
          onChange={handleEaseFunctionChange}
          isClearable={false}
          className="select"
          placeholder={easeFunction}
        />
      </div>

      <div className="time-control">
        <label htmlFor="duration">Длительность анимации</label>
        <input
          type="range"
          id="duration"
          min="500"
          max="3500"
          value={duration}
          onChange={handleDurationChange}
          disabled={!d3easing}
        />
        {duration}
      </div>
    </fieldset>
  );
};

CurvesControl.propTypes = {
  d3easing: PropTypes.bool.isRequired,
  handleD3easingChange: PropTypes.func.isRequired,
  easeFunction: PropTypes.string.isRequired,
  handleEaseFunctionChange: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  handleDurationChange: PropTypes.func.isRequired,
};

export default CurvesControl;

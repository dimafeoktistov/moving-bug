import React from 'react';
import PropTypes from 'prop-types';

import './bug-num-control.css';

const BugNumControl = ({
  bugsNum, handleBugsNumDecrease, handleBugsNumIncrease, ...props
}) => (
  <div className="bugs-num" {...props}>
      Число жуков
    <div className="button-group">
      <button
        type="button"
        onClick={handleBugsNumIncrease}
        disabled={bugsNum === 5}
        className="btn"
      >
          +
      </button>
      {bugsNum}
      <button
        type="button"
        disabled={bugsNum === 1}
        onClick={handleBugsNumDecrease}
        className="btn"
      >
          -
      </button>
    </div>
  </div>
);

BugNumControl.propTypes = {
  bugsNum: PropTypes.number.isRequired,
  handleBugsNumDecrease: PropTypes.func.isRequired,
  handleBugsNumIncrease: PropTypes.func.isRequired,
};

export default BugNumControl;

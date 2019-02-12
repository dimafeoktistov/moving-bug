/* eslint-disable react/no-array-index-key */
import React, { useRef } from 'react';
import { useTrail, animated } from 'react-spring';
import PropTypes from 'prop-types';

import * as utils from '../../utils';
import './bug.css';

const Bug = ({
  speed, direction, d3easing, easeFunction, duration, bugsNum,
}) => {
  const bug = useRef(null);
  const field = useRef(null);

  const [trail, setTrail] = useTrail(bugsNum, () => ({
    xy: [0, 0, 90],
    config: {
      tention: speed * 50,
      friction: 100 / speed,
      easing: t => t ** 2,
      duration: undefined,
    },
  }));

  const handleMouseMove = (e) => {
    const mousePosition = {
      x: e.clientX - utils.getElemPosition(field).x - 25,
      y: e.clientY - utils.getElemPosition(field).y - 25,
    };
    const bugPosition = utils.getElemPosition(bug);
    setTrail({
      xy: [
        mousePosition.x,
        mousePosition.y,
        utils.getRotationDegrees(bugPosition, {
          x: e.clientX - 25,
          y: e.clientY - 25,
        }),
      ],
      config: {
        tention: speed * 50,
        friction: 100 / speed,
        easing: t => utils.getEasingFunc(easeFunction, t),
        duration: d3easing ? duration : undefined,
      },
    });
  };

  const handleMouseEnter = () => {
    setTrail({
      xy: [
        utils.generateRandomValue(50, 700),
        utils.generateRandomValue(50, 700),
        utils.generateRandomValue(0, 360),
      ],
      config: {
        tention: speed * 50,
        friction: 100 / speed,
        easing: t => utils.getEasingFunc(easeFunction, t),
        duration: d3easing ? duration : undefined,
      },
    });
  };

  return (
    <div ref={field} className="field" onMouseMove={direction ? handleMouseMove : null}>
      {trail.map((props, index) => (
        <animated.div
          onMouseEnter={direction ? null : handleMouseEnter}
          ref={bug}
          key={index}
          style={{ transform: props.xy.interpolate(utils.translate) }}
        />
      ))}
    </div>
  );
};

Bug.propTypes = {
  speed: PropTypes.number.isRequired,
  direction: PropTypes.bool.isRequired,
  d3easing: PropTypes.bool.isRequired,
  easeFunction: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  bugsNum: PropTypes.number.isRequired,
  xy: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Bug;

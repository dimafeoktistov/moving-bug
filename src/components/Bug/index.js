import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

import * as utils from "../../utils";

const Bug = ({ speed, direction, d3easing, easeFunction, duration }) => {
  const bug = useRef(null);
  const field = useRef(null);

  const handleMouseMove = e => {
    const mousePosition = {
      x: e.clientX - utils.getElemPosition(field).x - 25,
      y: e.clientY - utils.getElemPosition(field).y - 25
    };
    const blockPosition = utils.getElemPosition(bug);
    set({
      xy: [
        mousePosition.x,
        mousePosition.y,
        utils.getRotationDegrees(blockPosition, {
          x: e.clientX - 25,
          y: e.clientY - 25
        })
      ],
      config: {
        tention: speed * 50,
        friction: 100 / speed,
        easing: t => utils.getEasingFunc(easeFunction, t),
        duration: d3easing ? duration : undefined
      }
    });
  };

  const handleMouseEnter = () => {
    set({
      xy: [
        utils.generateRandomValue(50, 450),
        utils.generateRandomValue(50, 450),
        utils.generateRandomValue(0, 360)
      ],
      config: {
        tention: speed * 50,
        friction: 100 / speed,
        easing: t => utils.getEasingFunc(easeFunction, t),
        duration: d3easing ? duration : undefined
      }
    });
  };

  const [coords, set] = useSpring(() => ({
    xy: [0, 0, 90],
    config: {
      tention: speed * 50,
      friction: 100 / speed,
      easing: t => t ** 2,
      duration: undefined
    }
  }));

  return (
    <div
      ref={field}
      className="field"
      onMouseMove={direction ? handleMouseMove : null}
    >
      <animated.div
        ref={bug}
        style={{ transform: coords.xy.interpolate(utils.translate) }}
        onMouseEnter={direction ? null : handleMouseEnter}
      />
    </div>
  );
};

Bug.propTypes = {
  speed: PropTypes.number.isRequired,
  direction: PropTypes.bool.isRequired,
  d3easing: PropTypes.bool.isRequired,
  easeFunction: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired
};

export default Bug;

// const getPointerPosition = el => {
//   const pointer = el.current.getBoundingClientRect();
//   const centerPoint = window.getComputedStyle(el.current).transformOrigin;
//   const centers = centerPoint.split(" ");
//   const centerY = pointer.top + parseInt(centers[1]) - window.pageYOffset;
//   const centerX = pointer.left + parseInt(centers[0]) - window.pageXOffset;

//   return {
//     x: centerX,
//     y: centerY
//   };
// };
// rotate(${angle}deg)

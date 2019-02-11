import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import * as d3 from "d3-ease";

import * as utils from "../../utils";

const Bug = ({ speed, direction }) => {
  const bug = useRef(null);
  const field = useRef(null);

  const handleMouseMove = e => {
    console.log(e.clientX);
    console.log(
      utils.generateRandomValue(
        utils.getElemPosition(field).y,
        utils.getElemPosition(field).y + 100
      )
    );
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
        easing: t => t ** 2,
        duration: undefined
      }
    });
  };

  const handleMouseEnter = () => {
    set({
      xy: [
        utils.generateRandomValue(
          utils.getElemPosition(field).x,
          utils.getElemPosition(field).x + 200
        ),
        utils.generateRandomValue(
          utils.getElemPosition(field).y,
          utils.getElemPosition(field).y + 200
        ),
        90
      ],
      config: {
        tention: speed * 50,
        friction: 100 / speed,
        easing: t => t ** 2,
        duration: undefined
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
  direction: PropTypes.bool.isRequired
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

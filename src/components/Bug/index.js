import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import * as d3 from "d3-ease";

const translate = (x, y, angle) => `translate(${x}px, ${y}px)`;

const Bug = ({ speed, direction }) => {
  const bug = useRef(null);
  const field = useRef(null);

  console.log(speed);
  const getElemPosition = el => {
    const { top, left } = el.current.getBoundingClientRect();

    return {
      x: left,
      y: top
    };
  };

  const handleMouseMove = e => {
    const mousePosition = {
      x: e.clientX - getElemPosition(field).x - 25,
      y: e.clientY - getElemPosition(field).y - 25
    };
    const blockPosition = getElemPosition(bug);
    set({
      xy: [
        mousePosition.x,
        mousePosition.y,
        rotationDegrees(blockPosition, { x: e.clientX - 25, y: e.clientY - 25 })
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
      xy: [Math.random(), Math.random(), 90],
      config: {
        tention: speed * 50,
        friction: 100 / speed,
        easing: t => t ** 2,
        duration: undefined
      }
    });
  };

  const rotationDegrees = (anchor, point) =>
    (Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180) / Math.PI + 180;

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
        style={{ transform: coords.xy.interpolate(translate) }}
        onMouseEnter={direction ? null : handleMouseEnter}
      />
    </div>
  );
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

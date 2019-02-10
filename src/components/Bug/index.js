import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";

const translate = (x, y, angle) =>
  `translate(${x}px, ${y}px) rotate(${angle}deg)`;
// const rotate = angle => `translate(${x}px, ${y}px)`;

const Bug = React.forwardRef(({ x, y }, ref) => {
  const bug = useRef(null);

  const getBugPosition = el => {
    const { top, left } = el.current.getBoundingClientRect();

    return {
      x: left,
      y: top
    };
  };

  const handleMouseMove = e => {
      const mousePosition = {
          x: e.clientX - x - 25,
          y: e.clientY - y - 25
      };
      const blockPosition = getBugPosition(bug);
      set({
          xy: [
              mousePosition.x,
              mousePosition.y,
              rotationDegrees(blockPosition, mousePosition)
          ]
      });
  }

  const rotationDegrees = (anchor, point) =>
    (Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180) / Math.PI + 180;

  const [coords, set] = useSpring(() => ({
    xy: [0, 0, 90],
    config: { tention: 200, friction: 50 }
  }));

  return (
    <div
      ref={ref}
      className="hooks-main"
      onMouseMove={handleMouseMove}
    >
      <animated.div
        ref={bug}
        style={{ transform: coords.xy.interpolate(translate) }}
      />
    </div>
  );
});

export default Bug;

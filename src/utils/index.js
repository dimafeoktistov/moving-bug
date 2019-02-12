import * as d3 from "d3-ease";

export const getEasingFunc = (name, t) => {
  switch (name) {
    case "circleIn":
      return d3.easeCircleIn(t);

    case "expIn":
      return d3.easeExpIn(t);

    case "expOut":
      return d3.easeExpOut(t);

    case "bounceIn":
      return d3.easeBounceIn(t);

    case "bounceOut":
      return d3.easeBounceOut(t);

    case "elasticOut":
      return d3.easeElasticOut(t);

    default:
      break;
  }
};

export const getElemPosition = el => {
  const { top, left } = el.current.getBoundingClientRect();

  return {
    x: left,
    y: top
  };
};

export const generateRandomValue = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export const getRotationDegrees = (anchor, point) =>
  (Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180) / Math.PI + 270;

export const translate = (x, y, angle) =>
  `translate(${x}px, ${y}px) rotate(${angle}deg)`;

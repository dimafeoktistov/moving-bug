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
  (Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180) / Math.PI + 180;

export const translate = (x, y, angle) => `translate(${x}px, ${y}px)`;

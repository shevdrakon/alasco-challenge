const parsePoints = (...args) => {
  if (args.length !== 2)
    throw new Error(`Invalid arguments. Please make sure two rectangles specified and separated by space: [x1, y1, x2, y2] ...`);

  return args.map(x => {
    const points = parseRectanglePoints(x);
    if (!points)
      throw new Error(`Points arg has been specified in wrong format: ${x}, expected: [number, number, number, number].`);

    return points;
  });
};

const parseRectanglePoints = (point) => {
  const matches = point.match(/\[(\s*-?\d+),(\s*-?\d+),(\s*-?\d+),(\s*-?\d+)]/);
  if (!matches || matches.length !== 5) return undefined;

  const numbers = matches.slice(1).map(x => parseInt(x));
  if (numbers.some(isNaN)) return undefined;

  return numbers;
};

module.exports = parsePoints;

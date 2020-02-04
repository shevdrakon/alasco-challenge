const isOverlapping = (rect1, rect2) => {
  const isOverlapValid = ([start, end]) => start <= end;

  const normalizeCoordinates = (rect) =>
    rect[0] <= rect[2] ? [...rect] : [rect[2], rect[3], rect[0], rect[1]];

  const nRect1 = normalizeCoordinates(rect1);
  const nRect2 = normalizeCoordinates(rect2);

  const xOverlap = [Math.max(nRect1[0], nRect2[0]), Math.min(nRect1[2], nRect2[2])];
  const yOverlap = [Math.max(nRect1[1], nRect2[1]), Math.min(nRect1[3], nRect2[3])];

  return isOverlapValid(xOverlap) && isOverlapValid(yOverlap);
};

module.exports = isOverlapping;

const isOverlapping = require('../../utils/isOverlapping');

describe('isOverlapping function tests', () => {
  test('should return true for [-1,-1,2,2] and [1,1,3,3]', () => {
    const actual = isOverlapping([-1,-1,2,2], [1,1,3,3]);
    expect(actual).toBeTruthy();
  });

  test('should return true for [-1,-1,2,2] and [3,3,1,1]', () => {
    const actual = isOverlapping([-1,-1,2,2], [3,3,1,1]);
    expect(actual).toBeTruthy();
  });

  test('should return false for [-1,-1,2,2] and [5,5,3,3]', () => {
    const actual = isOverlapping([-1,-1,2,2], [5,5,3,3]);
    expect(actual).toBeFalsy();
  });
});

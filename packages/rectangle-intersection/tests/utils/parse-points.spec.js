const parsePoints = require('../../utils/parse-points');

describe('parsePoints function tests', () => {
  test('should throw an error if input is empty', () => {
    expect(() => parsePoints()).toThrow('Invalid arguments. Please make sure two rectangles specified and separated by space: [x1, y1, x2, y2] ...');
  });

  test('should throw an error if args not a valid count', () => {
    expect(() => parsePoints('x', 'y', 'z')).toThrow('Invalid arguments. Please make sure two rectangles specified and separated by space: [x1, y1, x2, y2] ...');
  });

  test('should throw an error if arg not a valid point format', () => {
    expect(() => parsePoints('[1,1,2,2]', '1,2,3')).toThrow('Points arg has been specified in wrong format: 1,2,3, expected: [number, number, number, number].');
  });

  test('should parse points in proper format', () => {
    const actual = parsePoints('[1,1,2,2]', '[1,2,3,4]');
    expect(actual).toStrictEqual([[1, 1, 2, 2], [1, 2, 3, 4]]);
  });

  test('should parse points in proper format with spaces', () => {
    const actual = parsePoints('[1,    1,   2,2]', '[1,   2,3,   4]');
    expect(actual).toStrictEqual([[1, 1, 2, 2], [1, 2, 3, 4]]);
  });

  test('should parse points with negative values', () => {
    const actual = parsePoints('[1,    -1,   2,2]', '[1,   2,-3,   4]');
    expect(actual).toStrictEqual([[1, -1, 2, 2], [1, 2, -3, 4]]);
  });

  test('should throw an error point has spaces in negative numbers', () => {
    expect(() => parsePoints('[1, - 1,2,2]', '1,2,3')).toThrow('Points arg has been specified in wrong format: [1, - 1,2,2], expected: [number, number, number, number].');
  });
});

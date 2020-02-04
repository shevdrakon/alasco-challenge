const parsePoints = require('./utils/parse-points');
const isOverlapping = require('./utils/isOverlapping');

const args = process.argv.splice(2);
const points = parsePoints(...args);

const rect1 = [...points[0]];
const rect2 = [...points[1]];

if (isOverlapping(rect1, rect2)) {
  console.log(`Two rectangles [${rect1}] | [${rect2}] overlapping.`);
} else {
  console.log(`Two rectangles [${rect1}] | [${rect2}] NOT overlapping.`);
}

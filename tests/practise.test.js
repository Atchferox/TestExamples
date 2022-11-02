// Deze test moet de sum van de array teruggeven
// npm run test

const sumArray = require('../examples/practise');

const testArray = [3, 89, 22, 11]

test('given array returns sum of array', () => {
  // schrijf hier je test

  expect(sumArray(testArray)).toBe(125);
  throw new Error('not implemented yet');
})
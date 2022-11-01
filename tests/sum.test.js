const sum = require('../examples/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);

  // This test will fail
  // expect(sum(1, 2)).toBe(4);
});



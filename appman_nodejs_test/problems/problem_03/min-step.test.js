const { expect } = require('chai');
const { minStep } = require('./index');

describe('Problem 03 - min-step', () => {
  const testcases = [
    {
      input: 3,
      expected: 2
      // 3 > 2 > 1
    },
    {
      input: 15,
      expected: 5
      // 15 > 16 > 8 > 4 > 2 > 1
    },
    {
      input: 31,
      expected: 6
      // 31 > 32 > 16 > 8 > 4 > 2 > 1
    },
    {
      input: 35,
      expected: 7
      // 35 > 34 > 17 > 16 > 8 > 4 > 2 > 1
    },
    {
      input: 47,
      expected: 7
      // 47 > 48 > 24 > 12 > 6 > 3 > 2 > 1
    }
  ];
  testcases.forEach(tc => {
    it(`${tc.input} => ${tc.expected}`, () => {
      const result = minStep(tc.input);
      expect(result).to.be.eq(tc.expected);
    });
  });
});

const { expect } = require('chai');
const { maxFloor } = require('./index');

describe('Problem 02 - max-floor', () => {
  const testcases = [
    {
      input: 5,
      expected: 2
    },
    {
      input: 4000,
      expected: 88
    }
  ];
  testcases.forEach(tc => {
    // it(`${tc.input} => ${tc.expected}`, () => {
    //   const result = maxFloor(tc.input);
    //   expect(result).to.be.eq(tc.expected);
    // });
  });
});

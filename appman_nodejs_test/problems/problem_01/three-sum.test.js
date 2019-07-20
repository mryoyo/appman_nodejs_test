const { expect } = require('chai');
const { threeSum } = require('./index');

describe('Problem 01 - three-sum', () => {
  const testcases = [
    {
      nums: [0, -1, 2, -3, 4, -5, 6],
      target: 3,
      resolution: [[0, 1, 4], [0, 3, 6], [2, 3, 4], [2, 5, 6]]
    },
    {
      nums: [0, 1, 1, 1],
      target: 2,
      resolution: [[0, 1, 2], [0, 1, 3], [0, 2, 3]]
    }
  ];
  testcases.forEach(tc => {
    it(`${JSON.stringify(tc.nums)}`, () => {
      const result = threeSum(tc.nums, tc.target);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(tc.resolution.length);
      tc.resolution.forEach(res => {
        expect(result.map(a => a.sort())).to.deep.include(res.sort());
      });
    });
  });
});

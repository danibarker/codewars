const chai = require("chai");
const assert = chai.assert;
const monkeyCount = require('../exercises/exercise1')
chai.config.truncateThreshold=0;

describe("Exercise 1", () => {
  it("should work for fixed tests", () => {
    assert.deepEqual((monkeyCount(5)), [1, 2, 3, 4, 5]);
    assert.deepEqual((monkeyCount(3)), [1, 2, 3]);
    assert.deepEqual((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});
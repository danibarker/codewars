const chai = require("chai");
const assert = chai.assert;
const countBy = require("../exercises/exercise2");
describe("Exercise 2", function () {
  it("Testing for fixed tests", () => {
    assert.deepEqual(
      countBy(1, 10),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "Array does not match"
    );
    assert.deepEqual(countBy(2, 5), [2, 4, 6, 8, 10], "Array does not match");
    assert.deepEqual(
      countBy(9, 5),
      [9, 18, 27, 36, 45],
      "Array does not match"
    );
    assert.deepEqual(countBy(100, 3), [100, 200, 300], "Array does not match");
    assert.deepEqual(
      countBy(5, 37),
      [
        5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
        95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160,
        165, 170, 175, 180, 185,
      ],
      "Array does not match"
    );
  });
});

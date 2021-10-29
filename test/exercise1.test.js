const chai = require("chai");
const assert = chai.assert;
const countBy = require('../exercises/exercise1')
describe("Basic Tests",function(){
  it("Testing for fixed tests", () => {
    assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
    assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")
    assert.deepEqual(countBy(9,5), [9,18,27,36,45], "Array does not match")
    assert.deepEqual(countBy(100,3), [100,200,300], "Array does not match")
  });
});
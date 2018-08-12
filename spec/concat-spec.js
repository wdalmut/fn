const concat = require('../src/concat');

describe("Concat", () => {
  it("should concat a list of arrays", () => {
    expect(concat([1,2,3])([4,5,6])).toEqual([1,2,3,4,5,6]);
  });
});

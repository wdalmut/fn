const reverse = require('../src/reverse');

describe("Reverse", () => {
  it("should return the array reverse", () => {
    expect(reverse([1,2,3])).toEqual([3,2,1]);
  });
});

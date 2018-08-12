const slice = require('../src/slice');

describe("Slice", () => {
  it("should return an array slice", () => {
    expect(slice(1)(-1)([1,2,3,4])).toEqual([2,3]);
  });
});



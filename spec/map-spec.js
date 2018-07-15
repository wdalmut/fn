const map = require('../src/map');

describe("Map", () => {
  it("should apply a fn to a value", () => {
    expect(map((i) => i*2)([1,2,3])).toEqual([2,4,6]);
  });
});

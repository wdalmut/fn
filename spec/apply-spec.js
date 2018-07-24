const map = require('../src/map');
const apply = require('../src/apply');

describe("Apply", () => {
  it("should apply to a function", () => {
    const and = (a,b) => a && b;

    expect(map(apply(and))([
      [0,0],
      [0,1],
      [1,0],
      [1,1],
    ])).toEqual([
      0,
      0,
      0,
      1,
    ]);
  });
});

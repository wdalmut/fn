const over = require('../src/over');
const lensPath = require('../src/lens-path');

describe("Lens Path", () => {
  it("should create a path lens", () => {
    const xLens = lensPath(['x', 0, 'y']);

    expect(over(xLens)((i) => i+1)({x: [{y: 3}, {y: 4}], z:2})).toEqual({x: [{y: 4}, {y: 4}], z:2});
  });
});


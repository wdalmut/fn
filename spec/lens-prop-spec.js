const over = require('../src/over');
const lensProp = require('../src/lens-prop');

describe("Lens Prop", () => {
  it("should create a property lens", () => {
    const xLens = lensProp('x');

    expect(over(xLens)((i) => i+1)({x:1, y:2})).toEqual({x:2, y:2});
  });
});

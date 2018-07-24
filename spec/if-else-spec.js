const T = require('../src/t');
const F = require('../src/f');
const gt = require('../src/gt');
const ifElse = require('../src/if-else');

describe("IfElse", () => {
  it("should call the first function", () => {
    expect(ifElse(gt(5))(T)(F)(1)).toBe(true);
  });

  it("should call the second function", () => {
    expect(ifElse(gt(5))(T)(F)(10)).toBe(false);
  });
});

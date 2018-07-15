const curry2 = require('../src/curry2');

describe("Curry 2", () => {
  it("should apply curring a function", () => {
    pow = curry2(Math.pow);

    expect(pow(2)(2)).toBe(4);
  });
});

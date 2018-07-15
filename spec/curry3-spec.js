const curry3 = require('../src/curry3');

describe("Curry 3", () => {
  it("should apply curring a function", () => {
    multiply = curry3((a,b,c) => a*b*c);

    expect(multiply(2)(2)(2)).toBe(8);
  });
});


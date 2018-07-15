const curry4 = require('../src/curry4');

describe("Curry 4", () => {
  it("should apply curring a function", () => {
    multiply = curry4((a,b,c,d) => a*b*c*d);

    expect(multiply(2)(2)(2)(2)).toBe(16);
  });
});



const curry5 = require('../src/curry5');

describe("Curry 4", () => {
  it("should apply curring a function", () => {
    multiply = curry5((a,b,c,d,e) => a*b*c*d*e);

    expect(multiply(2)(2)(2)(2)(2)).toBe(32);
  });
});




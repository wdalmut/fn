const uncurry2 = require('../src/uncurry2');

describe("Uncurry 2", () => {
  it("should uncurry a function", () => {
    const diff = (a) => (b) => a-b;
    const uncurried_diff = uncurry2(diff);

    expect(uncurried_diff(2,1)).toEqual(1);
  });
});




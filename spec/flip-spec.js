const flip = require('../src/flip');

describe("Flip", () => {
  it("should flip a simple function", () => {
    const modulo = (a,b) => a % b;

    expect(flip(modulo)(3, 6)).toBe(0);
  });
});

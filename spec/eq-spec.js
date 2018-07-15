const eq = require('../src/eq');

describe("Eq", () => {
  it("should say equals", () => {
    expect(eq(5)(5)).toBe(true);
  });

  it("should say not equals", () => {
    expect(eq(5)(6)).toBe(false);
  });
});

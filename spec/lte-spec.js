const lte = require('../src/lte');

describe("Less then equal", () => {
  it("should say false", () => {
    expect(lte(2)(1)).toBe(false);
  });

  it("should say true on equals", () => {
    expect(lte(1)(1)).toBe(true);
  });

  it("should say true on less", () => {
    expect(lte(0)(1)).toBe(true);
  });
});

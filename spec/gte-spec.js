const gte = require('../src/gte');

describe("Greater than or equal", () => {
  it("should say false", () => {
    expect(gte(2)(1)).toBe(true);
  });

  it("should say true on equals", () => {
    expect(gte(1)(1)).toBe(true);
  });

  it("should say true on less", () => {
    expect(gte(0)(1)).toBe(false);
  });
});


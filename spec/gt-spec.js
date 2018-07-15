const gt = require('../src/gt');

describe("Greater than or equal", () => {
  it("should say false", () => {
    expect(gt(2)(1)).toBe(true);
  });

  it("should say true on equals", () => {
    expect(gt(1)(1)).toBe(false);
  });

  it("should say true on less", () => {
    expect(gt(0)(1)).toBe(false);
  });
});



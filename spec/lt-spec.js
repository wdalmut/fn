const lt = require('../src/lt');

describe("Less then equal", () => {
  it("should say false", () => {
    expect(lt(2)(1)).toBe(false);
  });

  it("should say true on equals", () => {
    expect(lt(1)(1)).toBe(false);
  });

  it("should say true on less", () => {
    expect(lt(0)(1)).toBe(true);
  });
});


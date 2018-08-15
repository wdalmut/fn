const isNil = require('../src/is-nil');

describe("Is Nil", () => {
  it("should reply with true", () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });

  it("should reply with false", () => {
    expect(isNil(0)).toBe(false);
    expect(isNil([])).toBe(false);
  });
});

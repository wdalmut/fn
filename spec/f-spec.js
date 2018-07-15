const F = require('../src/f');

describe("False F", () => {
  it("should reply with true", () => {
    expect(F()).toBe(false);
  });

  it("should reply with true also for params", () => {
    expect(F(true)).toBe(false);
  });
});


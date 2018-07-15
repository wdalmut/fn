const T = require('../src/t');

describe("True T", () => {
  it("should reply with true", () => {
    expect(T()).toBe(true);
  });

  it("should reply with true also for params", () => {
    expect(T(false)).toBe(true);
  });
});

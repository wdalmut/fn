const compose = require('../src/compose');

describe("Compose", () => {
  it("should compose multiple functions [simple]", () => {
    const double = i => i*2;
    expect(compose([double, double])(2)).toBe(8);
  });

  it("should compose multiple functions [check order 1]", () => {
    const minus_two = i => i-2;
    const double = i => i*2;
    expect(compose([minus_two, double])(2)).toBe(2);
  });

  it("should compose multiple functions [check order 2]", () => {
    const minus_two = i => i-2;
    const double = i => i*2;
    expect(compose([double, minus_two])(2)).toBe(0);
  });
});


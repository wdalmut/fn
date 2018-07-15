const pipe = require('../src/pipe');

describe("Pipe", () => {
  it("should pipe multiple functions [simple]", () => {
    const double = i => i*2;
    expect(pipe([double, double])(2)).toBe(8);
  });

  it("should pipe multiple functions [check order 1]", () => {
    const minus_two = i => i-2;
    const double = i => i*2;
    expect(pipe([double, minus_two])(2)).toBe(2);
  });

  it("should pipe multiple functions [check order 2]", () => {
    const minus_two = i => i-2;
    const double = i => i*2;
    expect(pipe([minus_two, double])(2)).toBe(0);
  });
});

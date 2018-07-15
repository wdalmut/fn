const at = require('../src/at');

describe("At", () => {
  it("should get an element at", () => {
    expect(at(1)([1,2,3])).toBe(2);
  });

  it("should get the last element", () => {
    expect(at(-1)([1,2,3])).toBe(3);
  });

  it("should get the prev last element", () => {
    expect(at(-2)([1,1,2,3])).toBe(2);
  });
});

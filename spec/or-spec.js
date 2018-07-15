const or = require('../src/or');

describe("Or", () => {
  it("should return the final value", () => {
    expect(or("default")("ciao")).toBe("ciao");
  });

  it("should return the default value", () => {
    expect(or("default")(false)).toBe("default");
  });

  it("should return the OR value", () => {
    expect(or(false)(false)).toBe(false);
    expect(or(false)(true)).toBe(true);
    expect(or(true)(false)).toBe(true);
    expect(or(true)(true)).toBe(true);
  });
});

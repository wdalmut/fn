const pathEq = require('../src/path-eq');

describe("Path Eq", () => {
  it("should say truthly for a path", () => {
    expect(pathEq(['a', 'b'])(5)({a: {b: 5}})).toBe(true);
  });

  it("should say falsy for a path", () => {
    expect(pathEq(['a', 'b'])(5)({a: {c: 5}})).toBe(false);
  });
});

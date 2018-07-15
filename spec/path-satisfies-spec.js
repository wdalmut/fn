const pathSatisfies = require('../src/path-satisfies');

describe("Path Satisfies", () => {
  it("should satisfies for a given path", () => {
    let eq = i => v => i == v
    expect(pathSatisfies(eq)(['a', 'b'])('ok')({a: {b: 'ok'}})).toBe(true);
  });

  it("should not satisfies for a given path", () => {
    let eq = i => v => i == v
    expect(pathSatisfies(eq)(['a', 'b'])('ok')({a: {b: 'ok!'}})).toBe(false);
  });

  it("should not satisfies for a not given path", () => {
    let eq = i => v => i == v
    expect(pathSatisfies(eq)(['a', 'b'])('ok')({a: {c: 'ok'}})).toBe(false);
  });
});


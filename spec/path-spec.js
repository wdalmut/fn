const path = require('../src/path');

describe("Path", () => {
  it("should get a value at a path", () => {
    expect(path(['a', 'b'])({a: {b: 'ok'}})).toEqual("ok");
  });

  it("should get a not existing path", () => {
    expect(path(['a', 'b'])({})).toEqual(undefined);
  });

  it("should get a not existing path as intermediate", () => {
    expect(path(['a', 'b'])({a: {c: true}})).toEqual(undefined);
  });
});

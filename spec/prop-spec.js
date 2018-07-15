const prop = require('../src/prop');

describe("Prop", () => {
  it("should get an object property", () => {
    let data = {a: "hello", b: "test"};

    expect(prop('a')(data)).toBe('hello');
  });

  it("should return null on missing property", () => {
    let data = {};

    expect(prop('a')(data)).toBe(null);
  });
});

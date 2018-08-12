const append = require('../src/append');

describe("Append", () => {
  it("should append", () => {
    expect(append(3)([])).toEqual([3]);
  });

  it("should append to existing values", () => {
    expect(append("tests")(["write", "more"])).toEqual(["write", "more", "tests"]);
  });
});



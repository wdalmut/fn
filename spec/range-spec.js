const range = require('../src/range');

describe("Range", () => {
  it("should produce a list of values", () => {
    expect(range(1)(5)).toEqual([1,2,3,4]);
  });

  it("should produce a list of values (2)", () => {
    expect(range(50)(53)).toEqual([50,51,52]);
  });
});

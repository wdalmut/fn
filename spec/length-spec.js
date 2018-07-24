const length = require('../src/length');

describe("Length", () => {
  it("should get a length of an element", () => {
    expect(length([2,2])).toBe(2);
  });
});


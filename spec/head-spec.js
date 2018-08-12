const head = require('../src/head');

describe("Head", () => {
  it("should return the first element", () => {
    expect(head([1,2,3])).toBe(1);
  });
});


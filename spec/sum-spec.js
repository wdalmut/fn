const sum = require('../src/sum');

describe("sum", () => {
  it("should sum a couple of numbers", () => {
    expect(sum([1,1])).toBe(2);
  });
});


const last = require('../src/last');

describe("Last", () => {
  it("should return the latest element", () => {
    expect(last([1,2,3])).toBe(3);
  });
});

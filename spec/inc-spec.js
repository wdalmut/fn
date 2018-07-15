const inc = require('../src/inc');

describe("Inc", () => {
  it("should inc by one", () => {
    expect(inc(1)).toBe(2);
  });
});

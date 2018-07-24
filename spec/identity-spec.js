const identity = require('../src/identity');

describe("Identity", () => {
  it("should reply with itself", () => {
    expect(identity(1)).toBe(1);
  });
});

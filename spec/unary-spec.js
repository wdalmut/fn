const unary = require('../src/unary');

describe("Unary", () => {
  it("should convert as unary", () => {
    expect(["1","2","3"].map(unary(parseInt))).toEqual([1,2,3]);
  });
});

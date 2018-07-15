const subtract = require('../src/subtract');

describe("Subtract", () => {
  it("should subtract a couple of numbers", () => {
    expect(subtract(1,1)).toBe(0);
  });
});

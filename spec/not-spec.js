const not = require('../src/not');

describe("Not", () => {
  it("should say is not 5", () => {
    const equal_to_5 = (v) => v == 5;
    expect(not(equal_to_5)(5)).toBe(false);
  });

  it("should say is 5", () => {
    const not_equal_to_5 = (v) => v != 5;

    expect(not(not_equal_to_5)(5)).toBe(true);
  });
});

const modulo = require('../src/modulo');

describe("Modulo", () => {
  it("should say 2", () => {
    expect(modulo(1, 3)).toEqual(1);
  });

  it("should say 0", () => {
    expect(modulo(3,3)).toEqual(0);
  });
});


const converge = require('../src/converge');

describe("Converge", () => {
  it("should converge for path", () => {
    expect(converge((a,b) => a/b)([i => i, i => i])(2)).toEqual(1);
  });
});


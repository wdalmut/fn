const tap = require('../src/tap');

describe("Tap", () => {
  it("should execute a fn", () => {
    let x = 0;
    const inc = () => x += 1;

    expect(tap(inc)(5)).toEqual(5);
    expect(x).toEqual(1);
  });
});

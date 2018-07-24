const always = require('../src/always');

describe("Always", () => {
  it("should always return the wrapped value", () => {
    expect(always("ciao")()).toEqual('ciao');
  })
});


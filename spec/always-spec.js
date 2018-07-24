const always = require('../src/always');

describe("Always", () => {
  it("should always return the value", () => {
    expect(always("ciao")()).toEqual('ciao');
  })
});


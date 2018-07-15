const toLower = require('../src/to-lower');

describe("To Lower", () => {
  it("should return a to lower string", () => {
    expect(toLower("CIAO")).toEqual("ciao");
  });
});

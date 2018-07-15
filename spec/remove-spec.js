const remove = require('../src/remove');

describe("Remove", () => {
  it("should remove a sublist", () => {
    expect(remove(2)(3)([1,2,3,4,5,6,7,8])).toEqual([1,2,6,7,8]);
  });
});

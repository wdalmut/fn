const sort = require('../src/sort');

describe("Sort", () => {
  it("should sort by asc", () => {
    expect(sort((a,b) => a-b)([1,5,2])).toEqual([1,2,5]);
  });

  it("should sort by desc", () => {
    expect(sort((a,b) => b-a)([1,5,2])).toEqual([5,2,1]);
  });
});

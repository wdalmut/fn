const tail = require('../src/tail');

describe("Tail", () => {
  it("should return the array tail", () => {
    expect(tail([1,2,3])).toEqual([2,3]);
  });
});


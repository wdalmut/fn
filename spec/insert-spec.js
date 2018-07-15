const insert = require('../src/insert');

describe("Insert", () => {
  it("should insert a value", () => {
    expect(insert(2)('x')([1,2,3,4])).toEqual([1,2,'x',3,4]);
  });
});

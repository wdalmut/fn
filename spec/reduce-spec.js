const reduce = require('../src/reduce');

describe("Reduce", () => {
  it("should reduce a set", () => {
    let subtract = (a,b)=> a-b;

    expect(reduce(subtract)(0)([1,2,3,4])).toEqual(-10);
  });
});

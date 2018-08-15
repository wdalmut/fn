const ascend = require('../src/ascend');

describe("Ascend", () => {
  it("should sort ascending", () => {
    let elems = [{age: 12}, {age: 9}, {age: 21}];

    expect(elems.sort(ascend((i) => i.age))).toEqual([
      {age: 9},
      {age: 12},
      {age: 21},
    ]);
  });
});

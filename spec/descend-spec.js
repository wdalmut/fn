const descend = require('../src/descend');

describe("descend", () => {
  it("should sort descending", () => {
    let elems = [{age: 12}, {age: 9}, {age: 21}];

    expect(elems.sort(descend((i) => i.age))).toEqual([
      {age: 21},
      {age: 12},
      {age: 9},
    ]);
  });
});


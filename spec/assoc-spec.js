const assoc = require('../src/assoc');

describe("Assoc", () => {
  it("should assoc a new value", () => {
    expect(assoc('c')(3)({})).toEqual({c: 3});
  });

  it("should assoc a new value in a full object", () => {
    expect(assoc('c')(3)({a: true})).toEqual({a: true, c: 3});
  });

  it("should assoc an existing value in a full object", () => {
    expect(assoc('c')(3)({a: true, c: 1})).toEqual({a: true, c: 3});
  });

  it("should confirm that all is immutable", () => {
    let a = {a: true, c: 1};
    let b = assoc('c')(3)(a);
    expect(b).not.toBe(a);
  });
});

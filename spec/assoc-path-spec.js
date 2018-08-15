const assocPath = require('../src/assoc-path');

describe("Assoc Path", () => {
  it("should assoc at path", () => {
    expect(assocPath(['a', 'b', 'c'])(42)({a: {b: {c: 0}}}))
      .toEqual({a: {b: {c: 42}}});
  });

  it("should assoc at path without override existing objects", () => {
    expect(assocPath(['a', 'b', 'c'])(42)({a: {b: {d: 0}}}))
      .toEqual({a: {b: {c: 42, d: 0}}});
  });

  it("should assoc at path overriding a not object property", () => {
    expect(assocPath(['a', 'b', 'c'])(42)({a: {b: 3}}))
      .toEqual({a: {b: {c: 42}}});
  });

  it("should assoc at path when we have multiple undefined", () => {
    expect(assocPath(['a', 'b', 'c'])(42)({}))
      .toEqual({a: {b: {c: 42}}});
  });

  it("should assoc at path without as immutable thing", () => {
    const obj = {a: {b: 3}};
    expect(assocPath(['a', 'b', 'c'])(42)(obj))
      .toEqual({a: {b: {c: 42}}});

    // immutable
    expect(obj).toEqual({a: {b: 3}});
  });
});

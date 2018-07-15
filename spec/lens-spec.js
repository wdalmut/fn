const prop = require('../src/prop');
const lens  = require('../src/lens');
const assoc = require('../src/assoc');

describe("Lens", () => {
  it("should create a lens", () => {
    xLens = lens(prop('x'))(assoc('x'));

    expect(xLens.get({x: 1})).toEqual(1);
    expect(xLens.set(2)({x: 1})).toEqual({x: 2});
  });
});

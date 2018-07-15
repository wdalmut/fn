const prop = require('../src/prop');
const lens  = require('../src/lens');
const assoc = require('../src/assoc');
const set = require('../src/set');

describe("Lens", () => {
  it("should set a lens", () => {
    xLens = lens(prop('x'))(assoc('x'));

    expect(set(xLens)(2)({x: 1, y: 2})).toEqual({x: 2, y:2});
  });
});



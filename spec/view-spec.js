const prop = require('../src/prop');
const lens  = require('../src/lens');
const assoc = require('../src/assoc');
const view = require('../src/view');

describe("Lens", () => {
  it("should view a lens", () => {
    xLens = lens(prop('x'))(assoc('x'));

    expect(view(xLens)({x: 1, y: 2})).toEqual(1);
  });
});


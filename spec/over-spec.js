const inc = require('../src/inc');
const over = require('../src/over');
const prop = require('../src/prop');
const lens  = require('../src/lens');
const assoc = require('../src/assoc');

describe("Lens", () => {
  it("should go over a prop", () => {
    xLens = lens(prop('x'))(assoc('x'));

    expect(over(xLens)(inc)({x: 1, y: 2})).toEqual({x: 2, y:2});
  });
});




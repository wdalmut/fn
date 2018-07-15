const set = require('../src/set');
const view = require('../src/view');
const over = require('../src/over');
const lensIndex = require('../src/lens-index');

describe("Lens Index", () => {
  it("should prepare the lens index for view", () => {
    const headLens = lensIndex(0);

    expect(view(headLens)(['a','b','c'])).toEqual('a');
  });

  it("should prepare the lens index for set", () => {
    const headLens = lensIndex(0);

    expect(set(headLens)('A')(['a','b','c'])).toEqual(['A','b','c']);
  });

  it("should prepare the lens index for over", () => {
    const headLens = lensIndex(0);

    expect(over(headLens)(i => i.toUpperCase())(['a','b','c'])).toEqual(['A','b','c']);
  });
});

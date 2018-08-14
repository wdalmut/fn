const aperture = require('../src/aperture');

describe("aperture", () => {
  it("should create an aperture", () => {
    expect(aperture(2, [1,2,3])).toEqual([[1,2],[2,3]]);
  });

  it("should create a three way aperture", () => {
    expect(aperture(3, [1,2,3])).toEqual([[1,2,3]]);
  });

  it("should create a bigger aperture", () => {
    expect(aperture(3, [1,2,3,4])).toEqual([[1,2,3], [2,3,4]]);
  });

  it("should create a complex aperture", () => {
    expect(aperture(2, [1,1,1,2,2,3,3,2,2,4,4,5,5])).toEqual([[1,1],[1,1],[1,2],[2,2],[2,3],[3,3],[3,2],[2,2],[2,4],[4,4],[4,5],[5,5]]);
  });
});

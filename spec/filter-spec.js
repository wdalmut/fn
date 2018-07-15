const filter = require('../src/filter');

describe("Filter", () => {
  it("should filter nothing", () => {
    let data = [1,2,3];

    const filter_1_equals_1 = filter(() => true);

    expect(filter_1_equals_1(data)).toEqual([1,2,3]);
  });

  it("should filter everything", () => {
    let data = [1,2,3];

    const filter_1_not_equals_1 = filter(() => false);

    expect(filter_1_not_equals_1(data)).toEqual([]);
  });

  it("should filter with equals", () => {
    let data = [1,2,3];

    const eq = (value) => (data) => data == 3;

    const filter_equals_3 = filter(eq(3));

    expect(filter_equals_3(data)).toEqual([3]);
  });
});
